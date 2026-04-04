import zh from './zh.json';
import en from './en.json';

const translations = { zh, en } as const;

export type Locale = keyof typeof translations;

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['zh', 'en'];

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}
