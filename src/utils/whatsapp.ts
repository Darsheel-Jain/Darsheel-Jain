/**
 * Generates an international WhatsApp URL with pre-filled message
 * @param phoneNumber International format with no +, no spaces, no dashes (e.g. 15550192834)
 * @param message Pre-filled URL encoded message
 */
export function getWhatsAppUrl(phoneNumber: string, message: string): string {
  // Clean phone number: remove any non-digits
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello ScaleX! I'm interested in your services and would like to discuss how you can help grow my business.";
