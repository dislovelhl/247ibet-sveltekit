export function getClientAddressOrFallback(request: Request, getClientAddress: () => string): string | null {
  try {
    return getClientAddress();
  } catch {
    const hostname = new URL(request.url).hostname;

    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]') {
      return '127.0.0.1';
    }

    return null;
  }
}
