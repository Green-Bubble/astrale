import * as Localization from 'expo-localization';

/**
 * Locales permitted
 */
const LANGS = ['es', 'en'];

/**
 * Gets current locale, and if it is not one of the accepted it falls backs to english
 */
function getLocale(): string {
  const locale = Localization.locale.substr(0, 2);
  const customLocale = locale === 'ca' ? 'es' : locale;
  return LANGS.includes(customLocale) ? customLocale : 'en';
}

const Language = {
  filteredLocale: (): string => getLocale(),
};

export default Language;
