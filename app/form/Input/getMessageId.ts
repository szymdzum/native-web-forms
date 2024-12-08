/**
 * Configuration for generating message IDs for form fields
 * @typedef {Object} MessageType
 * @property {string | null} error - Error message if present
 * @property {string} [helper] - Optional helper text
 * @property {string} id - Base ID of the form field
 */
type MessageType = {
  error: string | null;
  helper?: string;
  id: string;
};

/**
 * Generates an accessibility ID for error or helper messages
 * @param {MessageType} params - Configuration object
 * @param {string | null} params.error - Error message if present
 * @param {string} [params.helper] - Optional helper text
 * @param {string} params.id - Base ID of the form field
 * @returns {string | undefined} The generated message ID or undefined if no message exists
 * @example
 * const messageId = getMessageId({ id: 'email', error: null, helper: 'Enter your email' });
 * // Returns: 'email-helper'
 */
export const getMessageId = ({
  error,
  helper,
  id,
}: MessageType): string | undefined => {
  if (error) return `${id}-error`;
  if (helper) return `${id}-helper`;
  return undefined;
};
