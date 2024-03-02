import { Currency } from "../model/Currency";
import {
  AE,
  AF,
  AL,
  AM,
  AR,
  AU,
  AW,
  AZ,
  BB,
  BD,
  CA,
  CH,
  CN,
  DZ,
  EU,
  KH,
  RU,
  US,
} from "country-flag-icons/react/3x2";

// flag's list : https://catamphetamine.github.io/country-flag-icons/3x2/

export const AED = {
  symbol: "AED",
  name: "Dirham des émirats arabes unis",
  country: "Emirats arabes unis : Abouda bi, Dubai, ...",
  flag: AE,
} as Currency;

export const AFN = {
  symbol: "AFN",
  name: "Afghani",
  country: "Afghanistan",
  flag: AF,
} as Currency;

export const ARS = {
  symbol: "ARS",
  name: "Peso argentin",
  country: "Argentine",
  flag: AR,
} as Currency;

export const AUD = {
  symbol: "AUD",
  name: "Dollar australien",
  country: "Australie",
  flag: AU,
} as Currency;

export const ALL = {
  symbol: "ALL",
  name: "Lek albanien",
  country: "Albanie",
  flag: AL,
} as Currency;

export const AMD = {
  symbol: "AMD",
  name: "Dram arménien",
  country: "Arménie",
  flag: AM,
} as Currency;

export const AOA = {
  symbol: "AOA",
  name: "Kwanza",
  country: "Angola",
  flag: AM,
} as Currency;

export const AWG = {
  symbol: "AWG",
  name: "Flroin arubais",
  country: "Aruba",
  flag: AW,
} as Currency;

export const AZN = {
  symbol: "AZN",
  name: "Manat azerbaïdjanais",
  country: "Azerbaïdjan",
  flag: AZ,
} as Currency;

export const BBD = {
  symbol: "BBD",
  name: "Dollar barbadien",
  country: "Barbade",
  flag: BB,
} as Currency;

export const BDT = {
  symbol: "BDT",
  name: "Taka",
  country: "Bangladesh",
  flag: BD,
} as Currency;

export const CAD = {
  symbol: "CAD",
  name: "Dollar canadien",
  country: "Canada",
  flag: CA,
} as Currency;

export const CHF = {
  symbol: "CHF",
  name: "Franc suisse",
  country: "Suisse",
  flag: CH,
} as Currency;

export const CNY = {
  symbol: "CNY",
  name: "Yuan",
  country: "Chine",
  flag: CN,
} as Currency;

export const DZD = {
  symbol: "DZD",
  name: "Dinar algérien",
  country: "Algérie",
  flag: DZ,
} as Currency;

export const EUR = {
  symbol: "EUR",
  name: "Euro",
  country: "Union européenne : France, Espagne, Italie, Allemagne, ...",
  flag: EU,
} as Currency;

export const INR = {
  symbol: "INR",
  name: "Roupie indienne",
  country: "Inde",
  flag: EU,
} as Currency;

export const KHR = {
  symbol: "KHR",
  name: "Riel cambogien",
  country: "Cambodge",
  flag: KH,
} as Currency;

export const RUB = {
  symbol: "RUB",
  name: "Rouble russe",
  country: "Russie",
  flag: RU,
} as Currency;

export const USD = {
  symbol: "USD",
  name: "Dollar",
  country: "Etats unis",
  flag: US,
} as Currency;

const Currencies = [
  AED,
  AFN,
  ARS,
  AUD,
  ALL,
  AMD,
  AOA,
  AWG,
  AZN,
  BBD,
  BDT,
  CAD,
  CHF,
  CNY,
  DZD,
  EUR,
  INR,
  KHR,
  RUB,
  USD,
];

export default Currencies;

/*
Liste des devise restant à charger

BGN	Bulgarian Lev
BHD	Bahraini Dinar
BIF	Burundian Franc
BMD	Bermudan Dollar
BND	Brunei Dollar
BOB	Bolivian Boliviano
BRL	Brazilian Real
BSD	Bahamian Dollar
BTN	Bhutanese Ngultrum
BWP	Botswanan Pula
BYN	Belarusian Ruble
BYR	Belarusian Ruble (pre-2016)
BZD	Belize Dollar

CDF	Congolese Franc

CLF	Chilean Unit of Account (UF)
CLP	Chilean Peso
CNH	Chinese Yuan (Offshore)

COP	Colombian Peso
CRC	Costa Rican Colón
CUC	Cuban Convertible Peso
CUP	Cuban Peso
CVE	Cape Verdean Escudo
CZK	Czech Republic Koruna
DJF	Djiboutian Franc
DKK	Danish Krone
DOP	Dominican Peso

EEK	Estonian Kroon
EGP	Egyptian Pound
ERN	Eritrean Nakfa
ETB	Ethiopian Birr
FJD	Fijian Dollar
FKP	Falkland Islands Pound
GBP	British Pound Sterling
GEL	Georgian Lari
GGP	Guernsey Pound
GHS	Ghanaian Cedi
GIP	Gibraltar Pound
GMD	Gambian Dalasi
GNF	Guinean Franc
GTQ	Guatemalan Quetzal
GYD	Guyanaese Dollar
HKD	Hong Kong Dollar
HNL	Honduran Lempira
HRK	Croatian Kuna
HTG	Haitian Gourde
HUF	Hungarian Forint
IDR	Indonesian Rupiah
ILS	Israeli New Sheqel
IMP	Manx pound

IQD	Iraqi Dinar
IRR	Iranian Rial
ISK	Icelandic Króna
JEP	Jersey Pound
JMD	Jamaican Dollar
JOD	Jordanian Dinar
JPY	Japanese Yen
KES	Kenyan Shilling
KGS	Kyrgystani Som

KMF	Comorian Franc
KPW	North Korean Won
KRW	South Korean Won
KWD	Kuwaiti Dinar
KYD	Cayman Islands Dollar
KZT	Kazakhstani Tenge
LAK	Laotian Kip
LBP	Lebanese Pound
LKR	Sri Lankan Rupee
LRD	Liberian Dollar
LSL	Lesotho Loti
LYD	Libyan Dinar
MAD	Moroccan Dirham
MDL	Moldovan Leu
MGA	Malagasy Ariary
MKD	Macedonian Denar
MMK	Myanma Kyat
MNT	Mongolian Tugrik
MOP	Macanese Pataca
MRO	Mauritanian Ouguiya (pre-2018)
MRU	Mauritanian Ouguiya
MTL	Maltese Lira
MUR	Mauritian Rupee
MVR	Maldivian Rufiyaa
MWK	Malawian Kwacha
MXN	Mexican Peso
MYR	Malaysian Ringgit
MZN	Mozambican Metical
NAD	Namibian Dollar
NGN	Nigerian Naira
NIO	Nicaraguan Córdoba
NOK	Norwegian Krone
NPR	Nepalese Rupee
NZD	New Zealand Dollar
OMR	Omani Rial
PAB	Panamanian Balboa
PEN	Peruvian Nuevo Sol
PGK	Papua New Guinean Kina
PHP	Philippine Peso
PKR	Pakistani Rupee
PLN	Polish Zloty
PYG	Paraguayan Guarani
QAR	Qatari Rial
RON	Romanian Leu
RSD	Serbian Dinar

RWF	Rwandan Franc
SAR	Saudi Riyal
SBD	Solomon Islands Dollar
SCR	Seychellois Rupee
SDG	Sudanese Pound
SEK	Swedish Krona
SGD	Singapore Dollar
SHP	Saint Helena Pound
SLL	Sierra Leonean Leone
SOS	Somali Shilling
SRD	Surinamese Dollar
SSP	South Sudanese Pound
STD	São Tomé and Príncipe Dobra (pre-2018)
STN	São Tomé and Príncipe Dobra
SVC	Salvadoran Colón
SYP	Syrian Pound
SZL	Swazi Lilangeni
THB	Thai Baht
TJS	Tajikistani Somoni
TMT	Turkmenistani Manat
TND	Tunisian Dinar
TOP	Tongan Paʻanga
TRY	Turkish Lira
TTD	Trinidad and Tobago Dollar
TWD	New Taiwan Dollar
TZS	Tanzanian Shilling
UAH	Ukrainian Hryvnia
UGX	Ugandan Shilling
UYU	Uruguayan Peso
UZS	Uzbekistan Som
VES	Venezuelan Bolívar Soberano
VND	Vietnamese Dong
VUV	Vanuatu Vatu
WST	Samoan Tala
XAF	CFA Franc BEAC
XAG	Silver (troy ounce)
XAU	Gold (troy ounce)
XCD	East Caribbean Dollar
XDR	Special Drawing Rights
XOF	CFA Franc BCEAO
XPD	Palladium Ounce
XPF	CFP Franc
XPT	Platinum Ounce
YER	Yemeni Rial
ZAR	South African Rand
ZMK	Zambian Kwacha (pre-2013)
ZMW	Zambian Kwacha


*/
