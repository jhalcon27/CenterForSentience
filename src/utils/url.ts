export function getLocalizedPath(path: string, locale: string | undefined): string {
  const normalizedLocale = locale ?? 'en';
  const prefix = normalizedLocale === 'en' ? '' : `/${normalizedLocale}`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath === '/' ? '' : cleanPath}`;
}
