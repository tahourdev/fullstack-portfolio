export function getFilenameFromUrl(url: string): string {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  const filename = pathname.split('/').pop();
  return filename ?? '';
}
