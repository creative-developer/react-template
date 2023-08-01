export class ClipboardHelper {
  static copyToClipboard = (string: string): Promise<void> => {
    return navigator.clipboard.writeText(string);
  };
}
