const exchangeRates: {[key: string]: number} = {
  AUD: 9.3949e-5,
  BGN: 0.0001107216,
  BRL: 0.000344832,
  CAD: 8.50945e-5,
  CHF: 5.42023e-5,
  CNY: 0.0004453572,
  CZK: 0.0014408935,
  DKK: 0.0004238651,
  EUR: 5.68173e-5,
  GBP: 4.78676e-5,
  HKD: 0.0004800152,
  HRK: 0.0004052222,
  HUF: 0.0224403346,
  IDR: 1,
  ILS: 0.0002299046,
  INR: 0.0051419756,
  ISK: 0.0084874831,
  JPY: 0.0093784884,
  KRW: 0.0848676485,
  MXN: 0.0011531332,
  MYR: 0.0002839146,
  NOK: 0.0006726627,
  NZD: 0.0001041159,
  PHP: 0.0035987989,
  PLN: 0.0002436247,
  RON: 0.0002826249,
  RUB: 0.0052682495,
  SEK: 0.0006612897,
  SGD: 8.24426e-5,
  THB: 0.0022038007,
  TRY: 0.002033603,
  USD: 6.14427e-5,
  ZAR: 0.0011250919,
};

export const currencies = [
  { symbol: 'A$', code: 'AUD', name: 'Australian Dollar' },
  { symbol: 'лв', code: 'BGN', name: 'Bulgarian Lev' },
  { symbol: 'R$', code: 'BRL', name: 'Brazilian Real' },
  { symbol: 'C$', code: 'CAD', name: 'Canadian Dollar' },
  { symbol: 'CHF', code: 'CHF', name: 'Swiss Franc' },
  { symbol: '¥', code: 'CNY', name: 'Chinese Yuan' },
  { symbol: 'Kč', code: 'CZK', name: 'Czech Koruna' },
  { symbol: 'kr', code: 'DKK', name: 'Danish Krone' },
  { symbol: '€', code: 'EUR', name: 'Euro' },
  { symbol: '£', code: 'GBP', name: 'British Pound' },
  { symbol: 'HK$', code: 'HKD', name: 'Hong Kong Dollar' },
  { symbol: 'kn', code: 'HRK', name: 'Croatian Kuna' },
  { symbol: 'Ft', code: 'HUF', name: 'Hungarian Forint' },
  { symbol: 'Rp', code: 'IDR', name: 'Indonesian Rupiah' },
  { symbol: '₹', code: 'INR', name: 'Indian Rupee' },
  { symbol: 'kr', code: 'ISK', name: 'Icelandic Króna' },
  { symbol: '¥', code: 'JPY', name: 'Japanese Yen' },
  { symbol: '₩', code: 'KRW', name: 'South Korean Won' },
  { symbol: 'MX$', code: 'MXN', name: 'Mexican Peso' },
  { symbol: 'RM', code: 'MYR', name: 'Malaysian Ringgit' },
  { symbol: 'kr', code: 'NOK', name: 'Norwegian Krone' },
  { symbol: 'NZ$', code: 'NZD', name: 'New Zealand Dollar' },
  { symbol: '₱', code: 'PHP', name: 'Philippine Peso' },
  { symbol: 'zł', code: 'PLN', name: 'Polish Zloty' },
  { symbol: 'lei', code: 'RON', name: 'Romanian Leu' },
  { symbol: '₽', code: 'RUB', name: 'Russian Ruble' },
  { symbol: 'kr', code: 'SEK', name: 'Swedish Krona' },
  { symbol: 'S$', code: 'SGD', name: 'Singapore Dollar' },
  { symbol: '฿', code: 'THB', name: 'Thai Baht' },
  { symbol: '₺', code: 'TRY', name: 'Turkish Lira' },
  { symbol: '$', code: 'USD', name: 'US Dollar' },
  { symbol: 'R', code: 'ZAR', name: 'South African Rand' },
];

export function convertPrice(price: number, currency:string): number {
  if (currency === "IDR") return price;
  const rate = exchangeRates[currency];
  return Math.round(price * rate * 100) /100;
}

// export function isValidCurrency(currency: string | null) {
//   return typeof currency === 'string' && currency in Object.keys(exchangeRates);
// }


export function isValidCurrency(currency: string | null): boolean {
  return typeof currency === 'string' && currency in exchangeRates
}
