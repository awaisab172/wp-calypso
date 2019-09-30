const languages = [
	{
		value: 2,
		langSlug: 'af',
		name: 'Afrikaans',
		wpLocale: 'af',
		territories: [ '002' ],
	},
	{
		value: 418,
		langSlug: 'als',
		name: 'Alemannisch',
		wpLocale: '',
		territories: [ '155' ],
	},
	{ value: 481, langSlug: 'am', name: 'አማርኛ', wpLocale: 'am', territories: [ '002' ] },
	{
		value: 3,
		langSlug: 'ar',
		name: 'العربية',
		wpLocale: 'ar',
		rtl: true,
		popular: 16,
		territories: [ '145', '002' ],
	},
	{
		value: 419,
		langSlug: 'arc',
		name: 'ܕܥܒܪܸܝܛ',
		wpLocale: '',
		territories: [ '145' ],
	},
	{ value: 4, langSlug: 'as', name: 'অসমীয়া', wpLocale: 'as', territories: [ '034' ] },
	{
		value: 420,
		langSlug: 'ast',
		name: 'Asturianu',
		wpLocale: 'ast',
		territories: [ '039' ],
	},
	{
		value: 421,
		langSlug: 'av',
		name: 'авар мацӀ',
		wpLocale: '',
		territories: [ '151' ],
	},
	{
		value: 422,
		langSlug: 'ay',
		name: 'aymar aru',
		wpLocale: '',
		territories: [ '019' ],
	},
	{
		value: 79,
		langSlug: 'az',
		name: 'Azərbaycan dili',
		wpLocale: 'az',
		territories: [ '145' ],
	},
	{
		value: 423,
		langSlug: 'ba',
		name: 'башҡорт теле',
		wpLocale: 'ba',
		territories: [ '151' ],
	},
	{
		value: 5,
		langSlug: 'bel',
		name: 'Беларуская мова',
		wpLocale: 'bel',
		territories: [ '151' ],
	},
	{
		value: 6,
		langSlug: 'bg',
		name: 'Български',
		wpLocale: 'bg_BG',
		territories: [ '151' ],
	},
	{
		value: 7,
		langSlug: 'bm',
		name: 'Bamanankan',
		wpLocale: '',
		territories: [ '002' ],
	},
	{
		value: 8,
		langSlug: 'bn',
		name: 'বাংলা',
		wpLocale: 'bn_BD',
		territories: [ '034' ],
	},
	{ value: 9, langSlug: 'bo', name: 'བོད་སྐད', wpLocale: 'bo', territories: [ '030' ] },
	{
		value: 424,
		langSlug: 'br',
		name: 'Brezhoneg',
		wpLocale: 'bre',
		territories: [ '155' ],
	},
	{
		value: 454,
		langSlug: 'bs',
		name: 'Bosanski',
		wpLocale: 'bs_BA',
		territories: [ '039' ],
	},
	{ value: 10, langSlug: 'ca', name: 'Català', wpLocale: 'ca', territories: [ '039' ] },
	{
		value: 425,
		langSlug: 'ce',
		name: 'Нохчийн мотт',
		wpLocale: '',
		territories: [ '151' ],
	},
	{
		value: 11,
		langSlug: 'cs',
		name: 'Čeština',
		wpLocale: 'cs_CZ',
		territories: [ '151' ],
	},
	{
		value: 12,
		langSlug: 'csb',
		name: 'Kaszëbsczi',
		wpLocale: '',
		territories: [ '151' ],
	},
	{
		value: 426,
		langSlug: 'cv',
		name: 'чӑваш чӗлхи',
		wpLocale: '',
		territories: [ '151' ],
	},
	{
		value: 13,
		langSlug: 'cy',
		name: 'Cymraeg',
		wpLocale: 'cy',
		territories: [ '154' ],
	},
	{
		value: 14,
		langSlug: 'da',
		name: 'Dansk',
		wpLocale: 'da_DK',
		territories: [ '154' ],
	},
	{
		value: 15,
		langSlug: 'de',
		name: 'Deutsch',
		wpLocale: 'de_DE',
		popular: 4,
		territories: [ '155' ],
	},
	{
		value: 900,
		langSlug: 'de_formal',
		name: 'Deutsch (Sie)',
		wpLocale: 'de_DE_formal',
		parentLangSlug: 'de',
		territories: [ '155' ],
	},
	{
		value: 427,
		langSlug: 'dv',
		name: 'ދިވެހި',
		wpLocale: 'dv',
		rtl: true,
		territories: [ '034' ],
	},
	{ value: 16, langSlug: 'dz', name: 'ཇོང་ཁ', wpLocale: '', territories: [ '034' ] },
	{
		value: 17,
		langSlug: 'el',
		name: 'Ελληνικά',
		wpLocale: 'el',
		territories: [ '039' ],
	},
	{
		value: 468,
		langSlug: 'el-po',
		name: 'Greek (Polytonic)',
		wpLocale: '',
		territories: [ '039' ],
	},
	{
		value: 1,
		langSlug: 'en',
		name: 'English',
		wpLocale: 'en_US',
		popular: 1,
		territories: [ '019' ],
	},
	{
		value: 482,
		langSlug: 'en-gb',
		name: 'English (UK)',
		wpLocale: 'en_GB',
		territories: [ '154' ],
	},
	{ value: 18, langSlug: 'eo', name: 'Esperanto', wpLocale: 'eo', territories: [] },
	{
		value: 19,
		langSlug: 'es',
		name: 'Español',
		wpLocale: 'es_ES',
		popular: 2,
		territories: [ '019', '039' ],
	},
	{
		value: 484,
		langSlug: 'es-cl',
		name: 'Español de Chile',
		wpLocale: 'es_CL',
		territories: [ '019' ],
	},
	{
		value: 902,
		langSlug: 'es-mx',
		name: 'Español de México',
		wpLocale: 'es_MX',
		parentLangSlug: 'es',
		territories: [ '019' ],
	},
	{ value: 20, langSlug: 'et', name: 'Eesti', wpLocale: 'et', territories: [ '154' ] },
	{
		value: 429,
		langSlug: 'eu',
		name: 'Euskara',
		wpLocale: 'eu',
		territories: [ '039' ],
	},
	{
		value: 21,
		langSlug: 'fa',
		name: 'فارسی',
		wpLocale: 'fa_IR',
		rtl: true,
		territories: [ '034' ],
	},
	{ value: 22, langSlug: 'fi', name: 'Suomi', wpLocale: 'fi', territories: [ '154' ] },
	{
		value: 23,
		langSlug: 'fo',
		name: 'Føroyskt',
		wpLocale: 'fo',
		territories: [ '154' ],
	},
	{
		value: 24,
		langSlug: 'fr',
		name: 'Français',
		wpLocale: 'fr_FR',
		popular: 5,
		territories: [ '155' ],
	},
	{
		value: 478,
		langSlug: 'fr-be',
		name: 'Français de Belgique',
		wpLocale: 'fr_BE',
		territories: [ '155' ],
	},
	{
		value: 475,
		langSlug: 'fr-ca',
		name: 'Français du Canada',
		wpLocale: 'fr_CA',
		territories: [ '019' ],
	},
	{
		value: 474,
		langSlug: 'fr-ch',
		name: 'Français de Suisse',
		wpLocale: '',
		territories: [ '155' ],
	},
	{
		value: 25,
		langSlug: 'fur',
		name: 'Friulian',
		wpLocale: 'fur',
		territories: [ '039' ],
	},
	{ value: 26, langSlug: 'fy', name: 'Frysk', wpLocale: 'fy', territories: [ '155' ] },
	{
		value: 27,
		langSlug: 'ga',
		name: 'Gaeilge',
		wpLocale: 'ga',
		territories: [ '154' ],
	},
	{
		value: 476,
		langSlug: 'gd',
		name: 'Gàidhlig',
		wpLocale: 'gd',
		territories: [ '154' ],
	},
	{
		value: 457,
		langSlug: 'gl',
		name: 'Galego',
		wpLocale: 'gl_ES',
		territories: [ '039' ],
	},
	{
		value: 430,
		langSlug: 'gn',
		name: "Avañe'ẽ",
		wpLocale: 'gn',
		territories: [ '019' ],
	},
	{
		value: 28,
		langSlug: 'gu',
		name: 'ગુજરાતી',
		wpLocale: 'gu',
		territories: [ '034' ],
	},
	{
		value: 29,
		langSlug: 'he',
		name: 'עִבְרִית',
		wpLocale: 'he_IL',
		rtl: true,
		popular: 6,
		territories: [ '145' ],
	},
	{
		value: 30,
		langSlug: 'hi',
		name: 'हिन्दी',
		wpLocale: 'hi_IN',
		territories: [ '034' ],
	},
	{
		value: 431,
		langSlug: 'hr',
		name: 'Hrvatski',
		wpLocale: 'hr',
		territories: [ '039' ],
	},
	{
		value: 31,
		langSlug: 'hu',
		name: 'Magyar',
		wpLocale: 'hu_HU',
		territories: [ '151' ],
	},
	{
		value: 467,
		langSlug: 'hy',
		name: 'Հայերեն',
		wpLocale: 'hy',
		territories: [ '145' ],
	},
	{ value: 32, langSlug: 'ia', name: 'Interlingua', wpLocale: '', territories: [] },
	{
		value: 33,
		langSlug: 'id',
		name: 'Bahasa Indonesia',
		wpLocale: 'id_ID',
		popular: 12,
		territories: [ '035' ],
	},
	{ value: 432, langSlug: 'ii', name: 'ꆇꉙ', wpLocale: '', territories: [ '030' ] },
	{
		value: 469,
		langSlug: 'ilo',
		name: 'Pagsasao nga Iloko',
		wpLocale: '',
		territories: [ '035' ],
	},
	{
		value: 34,
		langSlug: 'is',
		name: 'Íslenska',
		wpLocale: 'is_IS',
		territories: [ '154' ],
	},
	{
		value: 35,
		langSlug: 'it',
		name: 'Italiano',
		wpLocale: 'it_IT',
		popular: 8,
		territories: [ '039' ],
	},
	{
		value: 36,
		langSlug: 'ja',
		name: '日本語',
		wpLocale: 'ja',
		popular: 7,
		territories: [ '030' ],
	},
	{
		value: 37,
		langSlug: 'ka',
		name: 'ქართული',
		wpLocale: 'ka_GE',
		territories: [ '145' ],
	},
	{
		value: 462,
		langSlug: 'kk',
		name: 'Қазақ тілі',
		wpLocale: 'kk',
		territories: [ '143' ],
	},
	{
		value: 38,
		langSlug: 'km',
		name: 'ភាសាខ្មែរ',
		wpLocale: 'km',
		territories: [ '035' ],
	},
	{ value: 39, langSlug: 'kn', name: 'ಕನ್ನಡ', wpLocale: 'kn', territories: [ '034' ] },
	{
		value: 40,
		langSlug: 'ko',
		name: '한국어',
		wpLocale: 'ko_KR',
		popular: 15,
		territories: [ '030' ],
	},
	{ value: 433, langSlug: 'ks', name: 'कश्मीरी', wpLocale: '', territories: [ '034' ] },
	{
		value: 41,
		langSlug: 'ckb',
		name: 'كوردی',
		wpLocale: 'ckb',
		rtl: true,
		territories: [ '145', '034' ],
	},
	{ value: 434, langSlug: 'kv', name: 'Коми', wpLocale: '', territories: [ '151' ] },
	{
		value: 479,
		langSlug: 'kir',
		name: 'Кыргызча',
		wpLocale: 'kir',
		territories: [ '143' ],
	},
	{ value: 42, langSlug: 'la', name: 'Latine', wpLocale: '', territories: [ '039' ] },
	{
		value: 43,
		langSlug: 'li',
		name: 'Limburgs',
		wpLocale: 'li',
		territories: [ '155' ],
	},
	{
		value: 44,
		langSlug: 'lo',
		name: 'ພາສາລາວ',
		wpLocale: 'lo',
		territories: [ '035' ],
	},
	{
		value: 45,
		langSlug: 'lt',
		name: 'Lietuvių kalba',
		wpLocale: 'lt_LT',
		territories: [ '154' ],
	},
	{
		value: 453,
		langSlug: 'lv',
		name: 'Latviešu valoda',
		wpLocale: 'lv',
		territories: [ '154' ],
	},
	{
		value: 435,
		langSlug: 'mk',
		name: 'Македонски јазик',
		wpLocale: 'mk_MK',
		territories: [ '039' ],
	},
	{
		value: 46,
		langSlug: 'ml',
		name: 'മലയാളം',
		wpLocale: 'ml_IN',
		territories: [ '034' ],
	},
	{
		value: 472,
		langSlug: 'mn',
		name: 'Монгол',
		wpLocale: 'mn',
		territories: [ '030' ],
	},
	{ value: 461, langSlug: 'mr', name: 'मराठी', wpLocale: 'mr', territories: [ '034' ] },
	{
		value: 47,
		langSlug: 'ms',
		name: 'Bahasa Melayu',
		wpLocale: 'ms_MY',
		territories: [ '035' ],
	},
	{ value: 465, langSlug: 'mt', name: 'Malti', wpLocale: '', territories: [ '039' ] },
	{
		value: 464,
		langSlug: 'mwl',
		name: 'Mirandés',
		wpLocale: '',
		territories: [ '039' ],
	},
	{
		value: 436,
		langSlug: 'nah',
		name: 'Nahuatl',
		wpLocale: '',
		territories: [ '019' ],
	},
	{
		value: 437,
		langSlug: 'nap',
		name: 'Nnapulitano',
		wpLocale: '',
		territories: [ '039' ],
	},
	{
		value: 48,
		langSlug: 'nds',
		name: 'Plattdüütsch',
		wpLocale: '',
		territories: [ '155' ],
	},
	{
		value: 456,
		langSlug: 'ne',
		name: 'नेपाली',
		wpLocale: 'ne_NP',
		territories: [ '034' ],
	},
	{
		value: 49,
		langSlug: 'nl',
		name: 'Nederlands',
		wpLocale: 'nl_NL',
		popular: 9,
		territories: [ '155' ],
	},
	{
		value: 50,
		langSlug: 'nn',
		name: 'Norsk nynorsk',
		wpLocale: 'nn_NO',
		territories: [ '154' ],
	},
	{ value: 51, langSlug: 'no', name: 'Norsk', wpLocale: '', territories: [ '154' ] },
	{ value: 52, langSlug: 'non', name: 'Norrǿna', wpLocale: '', territories: [ '154' ] },
	{
		value: 53,
		langSlug: 'nv',
		name: 'Diné bizaad',
		wpLocale: '',
		territories: [ '019' ],
	},
	{
		value: 54,
		langSlug: 'oci',
		name: 'Occitan',
		wpLocale: 'oci',
		territories: [ '155' ],
	},
	{ value: 55, langSlug: 'or', name: 'ଓଡ଼ିଆ', wpLocale: '', territories: [ '034' ] },
	{ value: 56, langSlug: 'os', name: 'Ирон', wpLocale: 'os', territories: [ '145' ] },
	{
		value: 57,
		langSlug: 'pa',
		name: 'ਪੰਜਾਬੀ',
		wpLocale: 'pa_IN',
		territories: [ '034' ],
	},
	{
		value: 58,
		langSlug: 'pl',
		name: 'Polski',
		wpLocale: 'pl_PL',
		territories: [ '151' ],
	},
	{
		value: 59,
		langSlug: 'ps',
		name: 'پښتو',
		wpLocale: 'ps',
		rtl: true,
		territories: [ '034' ],
	},
	{
		value: 60,
		langSlug: 'pt',
		name: 'Português',
		wpLocale: 'pt_PT',
		territories: [ '039' ],
	},
	{
		value: 438,
		langSlug: 'pt-br',
		name: 'Português do Brasil',
		wpLocale: 'pt_BR',
		popular: 3,
		territories: [ '019' ],
	},
	{
		value: 439,
		langSlug: 'qu',
		name: 'Runa Simi',
		wpLocale: '',
		territories: [ '019' ],
	},
	{
		value: 61,
		langSlug: 'ro',
		name: 'Română',
		wpLocale: 'ro_RO',
		territories: [ '151' ],
	},
	{
		value: 62,
		langSlug: 'ru',
		name: 'Русский',
		wpLocale: 'ru_RU',
		popular: 10,
		territories: [ '151' ],
	},
	{
		value: 483,
		langSlug: 'rup',
		name: 'Armãneashce',
		wpLocale: 'rup_MK',
		territories: [ '151' ],
	},
	{ value: 63, langSlug: 'sc', name: 'Sardu', wpLocale: '', territories: [ '039' ] },
	{
		value: 471,
		langSlug: 'si',
		name: 'සිංහල',
		wpLocale: 'si_LK',
		territories: [ '034' ],
	},
	{
		value: 64,
		langSlug: 'sk',
		name: 'Slovenčina',
		wpLocale: 'sk_SK',
		territories: [ '151' ],
	},
	{
		value: 65,
		langSlug: 'sl',
		name: 'Slovenščina',
		wpLocale: 'sl_SI',
		territories: [ '039' ],
	},
	{
		value: 440,
		langSlug: 'snd',
		name: 'سنڌي',
		wpLocale: 'snd',
		rtl: true,
		territories: [ '034' ],
	},
	{
		value: 459,
		langSlug: 'so',
		name: 'Afsoomaali',
		wpLocale: 'so_SO',
		territories: [ '002' ],
	},
	{ value: 66, langSlug: 'sq', name: 'Shqip', wpLocale: 'sq', territories: [ '039' ] },
	{
		value: 67,
		langSlug: 'sr',
		name: 'Српски језик',
		wpLocale: 'sr_RS',
		territories: [ '039' ],
	},
	{
		value: 901,
		langSlug: 'sr_latin',
		name: 'Srpski (latinica)',
		wpLocale: 'sr_RS',
		parentLangSlug: 'sr',
		territories: [ '039' ],
	},
	{
		value: 441,
		langSlug: 'su',
		name: 'Basa Sunda',
		wpLocale: 'su_ID',
		territories: [ '035' ],
	},
	{
		value: 68,
		langSlug: 'sv',
		name: 'Svenska',
		wpLocale: 'sv_SE',
		popular: 17,
		territories: [ '154' ],
	},
	{
		value: 69,
		langSlug: 'ta',
		name: 'தமிழ்',
		wpLocale: 'ta_IN',
		territories: [ '034', '035' ],
	},
	{ value: 70, langSlug: 'te', name: 'తెలుగు', wpLocale: 'te', territories: [ '034' ] },
	{ value: 71, langSlug: 'th', name: 'ไทย', wpLocale: 'th', territories: [ '035' ] },
	{
		value: 480,
		langSlug: 'tir',
		name: 'ትግርኛ',
		wpLocale: 'tir',
		territories: [ '002' ],
	},
	{
		value: 455,
		langSlug: 'tl',
		name: 'Tagalog',
		wpLocale: 'tl',
		territories: [ '035' ],
	},
	{
		value: 78,
		langSlug: 'tr',
		name: 'Türkçe',
		wpLocale: 'tr_TR',
		popular: 11,
		territories: [ '145' ],
	},
	{
		value: 72,
		langSlug: 'tt',
		name: 'Татар теле',
		wpLocale: 'tt_RU',
		territories: [ '151' ],
	},
	{
		value: 442,
		langSlug: 'ty',
		name: 'Reo Mā`ohi',
		wpLocale: '',
		territories: [ '009' ],
	},
	{
		value: 443,
		langSlug: 'udm',
		name: 'Удмурт кыл',
		wpLocale: '',
		territories: [ '151' ],
	},
	{
		value: 444,
		langSlug: 'ug',
		name: 'Uyƣurqə',
		wpLocale: 'ug_CN',
		rtl: true,
		territories: [ '030' ],
	},
	{
		value: 73,
		langSlug: 'uk',
		name: 'Українська',
		wpLocale: 'uk',
		territories: [ '151' ],
	},
	{
		value: 74,
		langSlug: 'ur',
		name: 'اردو',
		wpLocale: 'ur',
		rtl: true,
		territories: [ '034' ],
	},
	{
		value: 458,
		langSlug: 'uz',
		name: 'O‘zbekcha',
		wpLocale: 'uz_UZ',
		territories: [ '143' ],
	},
	{ value: 445, langSlug: 'vec', name: 'Vèneta', wpLocale: '', territories: [ '039' ] },
	{
		value: 446,
		langSlug: 'vi',
		name: 'Tiếng Việt',
		wpLocale: 'vi',
		territories: [ '035' ],
	},
	{ value: 75, langSlug: 'wa', name: 'Walon', wpLocale: 'wa', territories: [ '155' ] },
	{ value: 447, langSlug: 'xal', name: 'Хальмг', wpLocale: '', territories: [ '143' ] },
	{
		value: 76,
		langSlug: 'yi',
		name: 'ייִדיש',
		wpLocale: '',
		rtl: true,
		territories: [],
	},
	{
		value: 477,
		langSlug: 'yo',
		name: 'èdè Yorùbá',
		wpLocale: '',
		territories: [ '002' ],
	},
	{
		value: 448,
		langSlug: 'za',
		name: '(Cuengh)',
		wpLocale: '',
		territories: [ '030' ],
	},
	{
		value: 449,
		langSlug: 'zh-cn',
		name: '简体中文',
		wpLocale: 'zh_CN',
		popular: 13,
		territories: [ '030' ],
	},
	{
		value: 452,
		langSlug: 'zh-tw',
		name: '繁體中文',
		wpLocale: 'zh_TW',
		popular: 14,
		territories: [ '030' ],
	},
];

export default languages;
