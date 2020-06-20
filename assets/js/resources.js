let single_tiers_yearly = (one_use_tier_yearly = [
  {
    rangeStart: 26,
    rangeEnd: 50,
    unitPrice: 1.3,
  },
  {
    rangeStart: 51,
    rangeEnd: 100,
    unitPrice: 1.1,
  },
  {
    rangeStart: 101,
    rangeEnd: 250,
    unitPrice: 0.9,
  },
  {
    rangeStart: 251,
    rangeEnd: 500,
    unitPrice: 0.7,
  },
  {
    rangeStart: 501,
    rangeEnd: 1000,
    unitPrice: 0.6,
  },
  {
    rangeStart: 1001,
    rangeEnd: 2000,
    unitPrice: 0.65,
  },
  {
    rangeStart: 2001,
    rangeEnd: 5000,
    unitPrice: 0.5,
  },
  {
    rangeStart: 5001,
    rangeEnd: 10000,
    unitPrice: 0.35,
  },
  {
    rangeStart: 10001,
    rangeEnd: "+",
    unitPrice: 0.3,
  },
]); // Yearlt Single Client plan
let single_tiers_monthly = (one_use_tier_monthly = [
  {
    rangeStart: 26,
    rangeEnd: 50,
    unitPrice: 1.3,
  },
  {
    rangeStart: 51,
    rangeEnd: 100,
    unitPrice: 1.1,
  },
  {
    rangeStart: 101,
    rangeEnd: 250,
    unitPrice: 0.9,
  },
  {
    rangeStart: 251,
    rangeEnd: 500,
    unitPrice: 0.7,
  },
  {
    rangeStart: 501,
    rangeEnd: 1000,
    unitPrice: 0.6,
  },
  {
    rangeStart: 1001,
    rangeEnd: 2000,
    unitPrice: 0.65,
  },
  {
    rangeStart: 2001,
    rangeEnd: 5000,
    unitPrice: 0.5,
  },
  {
    rangeStart: 5001,
    rangeEnd: 10000,
    unitPrice: 0.35,
  },
  {
    rangeStart: 10001,
    rangeEnd: "+",
    unitPrice: 0.3,
  },
]); // Monthly Single Client plan
let multi_tiers_yearly = [
  {
    rangeStart: 6001,
    rangeEnd: 15000,
    unitPrice: 0.03,
  },
  {
    rangeStart: 15001,
    rangeEnd: 45000,
    unitPrice: 0.02,
  },
  {
    rangeStart: 45001,
    rangeEnd: "+",
    unitPrice: 0.01,
  },
]; // Yearly Multi Client plan
let multi_tiers_monthly = [
  {
    rangeStart: 6001,
    rangeEnd: 15000,
    unitPrice: 0.03,
  },
  {
    rangeStart: 15001,
    rangeEnd: 45000,
    unitPrice: 0.02,
  },
  {
    rangeStart: 45001,
    rangeEnd: "+",
    unitPrice: 0.01,
  },
]; // Monthly Multi Client plan

let symbols = {
  AUD: ["A$", 1],
  BGN: ["leva", 0],
  BRL: ["R$", 1],
  CAD: ["CA$", 1],
  CHF: ["CHF", 0],
  CNY: ["¥", 1],
  CZK: ["Kč", 0],
  DKK: ["kr", 0],
  EUR: ["€", 1],
  GBP: ["£", 1],
  HKD: ["HK$", 1],
  HRK: ["kn", 0],
  HUF: ["Ft", 0],
  IDR: ["Rp", 0],
  ILS: ["₪", 1],
  INR: ["₹", 1],
  ISK: ["kr", 0],
  JPY: ["¥", 1],
  KRW: ["₩", 1],
  MXN: ["MX$", 1],
  MYR: ["RM", 0],
  NOK: ["kr", 0],
  NZD: ["NZ$", 1],
  PHP: ["₱", 1],
  PLN: ["zł", 0],
  RON: ["lei", 0],
  RUB: ["₽", 0],
  SEK: ["kr", 0],
  SGD: ["S$", 1],
  THB: ["฿", 1],
  TRY: ["₺", 1],
  USD: ["$", 1],
  ZAR: ["R", 0],
}; // Array of foreign monitary symbols and placement rules (0 => after numbers, 1 => before numbers)
