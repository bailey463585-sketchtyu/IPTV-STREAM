import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, MessageSquare, CreditCard, Lock, Copy, Check, ChevronRight } from 'lucide-react';
import { PricingPlan } from '../../types';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getPricingWhatsAppLink } from '../../utils/whatsapp';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccessOrder?: (orderData: any) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  isOpen,
  onClose,
  onSuccessOrder,
}) => {
  const [step, setStep] = useState<'info' | 'payment' | 'confirmation'>('info');
  const [connections, setConnections] = useState(plan?.connections || 1);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'card' | 'crypto'>('whatsapp');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen || !plan) return null;

  // Additional connection pricing calculation
  const connectionMultiplier = connections > 1 ? 1 + (connections - 1) * 0.45 : 1;
  const basePrice = plan.price * connectionMultiplier;
  const finalPrice = Math.max(0, basePrice - promoDiscount).toFixed(2);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'STREAM10' || promoCode.trim().toUpperCase() === 'VIP') {
      setPromoDiscount(5);
    } else {
      setPromoDiscount(0);
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `STR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('confirmation');

    if (onSuccessOrder) {
      onSuccessOrder({
        orderId: generatedId,
        planName: plan.name,
        price: finalPrice,
        customerName,
        customerEmail,
        connections,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121215] border border-[#FAF92A]/30 rounded-2xl shadow-2xl p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close Checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Steps Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold mb-6 text-neutral-400">
          <span className={step === 'info' ? 'text-[#FAF92A]' : 'text-neutral-400'}>1. Order Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className={step === 'payment' ? 'text-[#FAF92A]' : 'text-neutral-400'}>2. Payment Method</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className={step === 'confirmation' ? 'text-[#FAF92A]' : 'text-neutral-400'}>3. Activation</span>
        </div>

        {step === 'info' && (
          <form onSubmit={() => setStep('payment')} className="space-y-5">
            <div>
              <h3 className="text-xl font-extrabold text-white">Subscribe to {plan.name}</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Configure your devices and customer info for instant activation.
              </p>
            </div>

            {/* Selected Plan Summary Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FAF92A]">
                  Selected Package
                </span>
                <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                <p className="text-xs text-neutral-400 mt-0.5">{plan.recommendedFor}</p>
              </div>
              <div className="sm:text-right">
                <span className="text-2xl font-extrabold text-[#FAF92A]">${finalPrice}</span>
                <span className="text-xs text-neutral-400 block font-normal">
                  for {plan.durationMonths} month{plan.durationMonths > 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* Number of Concurrent Devices */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                Concurrent Device Connections
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    type="button"
                    key={count}
                    onClick={() => setConnections(count)}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      connections === count
                        ? 'bg-[#FAF92A] text-black border-[#FAF92A]'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    {count} Device{count > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1.5">
                Watch simultaneously in living room, bedroom, phone, and tablet without interruptions.
              </p>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +1 555-0199 or your number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Email Address (For backup invoice & credentials)
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {/* WhatsApp instant checkout option */}
              <a
                href={getPricingWhatsAppLink(plan.name, Number(finalPrice), connections)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Instant Order via WhatsApp</span>
              </a>

              <button
                type="submit"
                className="flex-1 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors border border-white/15"
              >
                <span>Continue to Online Payment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={handleCompleteOrder} className="space-y-5">
            <div>
              <h3 className="text-xl font-extrabold text-white">Select Payment Method</h3>
              <p className="text-xs text-neutral-400 mt-1">
                All transactions are encrypted and authenticated.
              </p>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('whatsapp')}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === 'whatsapp'
                    ? 'bg-[#FAF92A]/15 border-[#FAF92A] text-white'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                }`}
              >
                <MessageSquare className="w-5 h-5 text-[#FAF92A] mb-2" />
                <span className="text-xs font-bold block">WhatsApp Instant</span>
                <span className="text-[10px] text-neutral-400">EasyPaisa / Bank / Cash</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-[#FAF92A]/15 border-[#FAF92A] text-white'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                }`}
              >
                <CreditCard className="w-5 h-5 text-[#FAF92A] mb-2" />
                <span className="text-xs font-bold block">Credit / Debit Card</span>
                <span className="text-[10px] text-neutral-400">Visa / Mastercard / Stripe</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('crypto')}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === 'crypto'
                    ? 'bg-[#FAF92A]/15 border-[#FAF92A] text-white'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                }`}
              >
                <Lock className="w-5 h-5 text-[#FAF92A] mb-2" />
                <span className="text-xs font-bold block">Crypto / USDT</span>
                <span className="text-[10px] text-neutral-400">Binance / TRC20 / BTC</span>
              </button>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (try: STREAM10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none uppercase"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-lg border border-white/10 cursor-pointer"
              >
                Apply
              </button>
            </div>
            {promoDiscount > 0 && (
              <p className="text-xs text-[#FAF92A] font-semibold">
                ✓ Coupon Applied: -$5.00 discount granted!
              </p>
            )}

            {/* Total breakdown */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 text-neutral-300">
              <div className="flex justify-between">
                <span>Base Plan ({plan.name}):</span>
                <span>${plan.price.toFixed(2)}</span>
              </div>
              {connections > 1 && (
                <div className="flex justify-between">
                  <span>Additional Connections ({connections - 1}):</span>
                  <span>+${(basePrice - plan.price).toFixed(2)}</span>
                </div>
              )}
              {promoDiscount > 0 && (
                <div className="flex justify-between text-[#FAF92A]">
                  <span>Promo Discount:</span>
                  <span>-${promoDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white text-sm">
                <span>Total Due:</span>
                <span className="text-[#FAF92A]">${finalPrice}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setStep('info')}
                className="px-4 py-2.5 text-xs text-neutral-300 hover:text-white bg-white/5 rounded-xl border border-white/10 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-gradient-to-r from-[#FAF92A] to-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#FAF92A]/20 transition-all"
              >
                <ShieldCheck className="w-4 h-4 fill-black" />
                Complete Purchase & Activate Line
              </button>
            </div>
          </form>
        )}

        {step === 'confirmation' && (
          <div className="text-center py-2 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#FAF92A]/20 text-[#FAF92A] flex items-center justify-center mx-auto mb-4 border border-[#FAF92A]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">Order Confirmed!</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md mx-auto">
              Your Streamora IPTV account has been generated. Confirmation details were sent to{' '}
              <span className="text-white font-medium">{customerEmail || 'your email'}</span>.
            </p>

            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-left font-mono text-xs space-y-2.5">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400 font-sans">Order ID:</span>
                <span className="text-[#FAF92A] font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400 font-sans">Plan:</span>
                <span className="text-white">{plan.name} ({connections} Connection{connections > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400 font-sans">Amount Paid:</span>
                <span className="text-white font-bold">${finalPrice}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-neutral-400 font-sans">Xtream Username:</span>
                <span className="text-white font-semibold">{customerEmail ? customerEmail.split('@')[0] + '_vip' : 'streamora_user'}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={getPricingWhatsAppLink(`${plan.name} (Order: ${orderId})`, Number(finalPrice), connections)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Connect on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
