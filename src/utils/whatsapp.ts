export const WHATSAPP_PHONE_RAW = '03188590856';
export const WHATSAPP_PHONE_INTL = '923188590856';
export const WHATSAPP_DISPLAY = '0318 8590856';

/**
 * Builds direct WhatsApp URL with prefilled URL-encoded message
 */
export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encoded}`;
}

/**
 * WhatsApp link for specific pricing plan
 */
export function getPricingWhatsAppLink(planName: string, price: number, connections: number = 1): string {
  const text = `Hello Streamora! 👋
I would like to order the *${planName}* ($${price} with ${connections} connection${connections > 1 ? 's' : ''}).

Please provide the instant setup guide and payment/activation details.`;
  return getWhatsAppLink(text);
}

/**
 * WhatsApp link for 24-Hour Free Trial
 */
export function getFreeTrialWhatsAppLink(deviceType: string = 'Smart TV / Firestick'): string {
  const text = `Hello Streamora! 👋
I want to claim my *24-Hour Free Trial* for my device: ${deviceType}.

Please send the free test M3U / Xtream codes credentials. Thank you!`;
  return getWhatsAppLink(text);
}

/**
 * WhatsApp link for quick device setup help
 */
export function getDeviceSetupWhatsAppLink(deviceName: string): string {
  const text = `Hello Streamora Support! 🛠️
I need help setting up Streamora IPTV on my *${deviceName}*.

Please send the installation instructions and app recommendations.`;
  return getWhatsAppLink(text);
}
