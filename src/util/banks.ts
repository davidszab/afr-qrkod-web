export function getMetadata(){
    return {...meta};
}

export function getBankByBranchOfficeCode(code: string){
    return {...banks[code]};
}

const meta = {
    date: "2024-07-01T05:57:36.124Z",
    fileDate: "2024-06-01T00:00:00.000Z"
}

const banks : {[index: string]: {name: string, bic: string}} = {
    10002003: {
      name: "Magyar Államkincstár. értékp.-pénztár",
      bic: "HUSTHUHB"
    },
    10003004: {
      name: "Magyar Államkincstár Központ",
      bic: "HUSTHUHB"
    },
    10023002: {
      name: "Magyar Államkincstár. Budapest",
      bic: "HUSTHUHB"
    },
    10024003: {
      name: "Magyar Államkincstár. Pécs",
      bic: "HUSTHUHB"
    },
    10025004: {
      name: "Magyar Államkincstár. Kecskemét",
      bic: "HUSTHUHB"
    },
    10026005: {
      name: "Magyar Államkincstár. Békéscsaba",
      bic: "HUSTHUHB"
    },
    10027006: {
      name: "Magyar Államkincstár. Miskolc",
      bic: "HUSTHUHB"
    },
    10028007: {
      name: "Magyar Államkincstár Szeged",
      bic: "HUSTHUHB"
    },
    10029008: {
      name: "Magyar Államkincstár Székesfehérvár",
      bic: "HUSTHUHB"
    },
    10032000: {
      name: "Magyar Államkincstár Budapest",
      bic: "HUSTHUHB"
    },
    10033001: {
      name: "Magyar Államkincstár. Győr",
      bic: "HUSTHUHB"
    },
    10034002: {
      name: "Magyar Államkincstár. Debrecen",
      bic: "HUSTHUHB"
    },
    10035003: {
      name: "Magyar Államkincstár Eger",
      bic: "HUSTHUHB"
    },
    10036004: {
      name: "Magyar Államkincstár. Tatabánya",
      bic: "HUSTHUHB"
    },
    10037005: {
      name: "Magyar Államkincstár. Salgótarján",
      bic: "HUSTHUHB"
    },
    10039007: {
      name: "Magyar Államkincstár Kaposvár",
      bic: "HUSTHUHB"
    },
    10044001: {
      name: "Magyar Államkincstár. Nyíregyháza",
      bic: "HUSTHUHB"
    },
    10045002: {
      name: "Magyar Államkincstár. Szolnok",
      bic: "HUSTHUHB"
    },
    10046003: {
      name: "Magyar Államkincstár. Szekszárd",
      bic: "HUSTHUHB"
    },
    10047004: {
      name: "Magyar Államkincstár. Szombathely",
      bic: "HUSTHUHB"
    },
    10048005: {
      name: "Magyar Államkincstár. Veszprém",
      bic: "HUSTHUHB"
    },
    10049006: {
      name: "Magyar Államkincstár. Zalaegerszeg",
      bic: "HUSTHUHB"
    },
    10100015: {
      name: "MBH 103 Szent István tér",
      bic: "MKKBHUHB"
    },
    10100022: {
      name: "MBH 103 Duna Pláza",
      bic: "MKKBHUHB"
    },
    10100039: {
      name: "MBH 103 MBH Székház",
      bic: "MKKBHUHB"
    },
    10100046: {
      name: "MBH 103 Duna Ház",
      bic: "MKKBHUHB"
    },
    10100053: {
      name: "MBH 103 Mammut",
      bic: "MKKBHUHB"
    },
    10100060: {
      name: "MBH 103 Thököly út",
      bic: "MKKBHUHB"
    },
    10100077: {
      name: "MBH 103 Fehérvári út",
      bic: "MKKBHUHB"
    },
    10100084: {
      name: "MBH 103 MOM Park",
      bic: "MKKBHUHB"
    },
    10100091: {
      name: "MBH 103 Árkád",
      bic: "MKKBHUHB"
    },
    10100101: {
      name: "MBH 103 Eurocenter",
      bic: "MKKBHUHB"
    },
    10100118: {
      name: "MBH 103 Rákoskeresztúr",
      bic: "MKKBHUHB"
    },
    10100125: {
      name: "MBH 103 Nyugati tér",
      bic: "MKKBHUHB"
    },
    10100132: {
      name: "MBH 103 Csepel Pláza",
      bic: "MKKBHUHB"
    },
    10100149: {
      name: "MBH 103 Paks",
      bic: "MKKBHUHB"
    },
    10100156: {
      name: "MBH 103 Siófok",
      bic: "MKKBHUHB"
    },
    10100163: {
      name: "MBH 103 Gödöllő",
      bic: "MKKBHUHB"
    },
    10100170: {
      name: "MBH 103 Cegléd",
      bic: "MKKBHUHB"
    },
    10100187: {
      name: "MBH 103 Dunaújváros",
      bic: "MKKBHUHB"
    },
    10100194: {
      name: "MBH 103 Érd",
      bic: "MKKBHUHB"
    },
    10100204: {
      name: "MBH 103 Dunakeszi",
      bic: "MKKBHUHB"
    },
    10100211: {
      name: "MBH 103 Győr",
      bic: "MKKBHUHB"
    },
    10100228: {
      name: "MBH 103 Szolnok",
      bic: "MKKBHUHB"
    },
    10100235: {
      name: "MBH 103 Szeged",
      bic: "MKKBHUHB"
    },
    10100242: {
      name: "MBH 103 Sopron",
      bic: "MKKBHUHB"
    },
    10100259: {
      name: "MBH 103 Debrecen Vár u.",
      bic: "MKKBHUHB"
    },
    10100266: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    10100273: {
      name: "MBH 103 Veszprém",
      bic: "MKKBHUHB"
    },
    10100280: {
      name: "MBH 103 Nagykanizsa",
      bic: "MKKBHUHB"
    },
    10100297: {
      name: "MBH 103 Székesfehérvár",
      bic: "MKKBHUHB"
    },
    10100307: {
      name: "MBH 103 Miskolc Pláza",
      bic: "MKKBHUHB"
    },
    10100314: {
      name: "MBH 103 Kecskemét",
      bic: "MKKBHUHB"
    },
    10100321: {
      name: "MBH 103 Nyíregyháza",
      bic: "MKKBHUHB"
    },
    10100338: {
      name: "MBH 103 Szombathely",
      bic: "MKKBHUHB"
    },
    10100345: {
      name: "MBH 103 Tatabánya",
      bic: "MKKBHUHB"
    },
    10100352: {
      name: "MBH 103 Kaposvár",
      bic: "MKKBHUHB"
    },
    10100369: {
      name: "MBH 103 Eger",
      bic: "MKKBHUHB"
    },
    10100376: {
      name: "MBH 103 Gyöngyös",
      bic: "MKKBHUHB"
    },
    10100383: {
      name: "MBH 103 Hódmezővásárhely",
      bic: "MKKBHUHB"
    },
    10100390: {
      name: "MBH 103 Jászberény",
      bic: "MKKBHUHB"
    },
    10100400: {
      name: "MBH 103 Kiskunhalas",
      bic: "MKKBHUHB"
    },
    10100417: {
      name: "MBH 103 Kisvárda",
      bic: "MKKBHUHB"
    },
    10100424: {
      name: "MBH 103 Mosonmagyaróvár",
      bic: "MKKBHUHB"
    },
    10100431: {
      name: "MBH 103 Salgótarján",
      bic: "MKKBHUHB"
    },
    10100448: {
      name: "MBH 103 Szekszárd",
      bic: "MKKBHUHB"
    },
    10100455: {
      name: "MBH 103 Zalaegerszeg",
      bic: "MKKBHUHB"
    },
    10100462: {
      name: "MBH 103 Szentendre",
      bic: "MKKBHUHB"
    },
    10100479: {
      name: "MBH 103 Budaörs",
      bic: "MKKBHUHB"
    },
    10100486: {
      name: "MBH 103 Baja",
      bic: "MKKBHUHB"
    },
    10100493: {
      name: "MBH 103 Békéscsaba",
      bic: "MKKBHUHB"
    },
    10100503: {
      name: "MBH 103 Győr Árkád",
      bic: "MKKBHUHB"
    },
    10100510: {
      name: "MBH 103 Pécs Árkád",
      bic: "MKKBHUHB"
    },
    10100716: {
      name: "MBH 101 EMKE",
      bic: "MKKBHUHB"
    },
    10100730: {
      name: "MBH 101 Közp.Lak.Hitel",
      bic: "MKKBHUHB"
    },
    10100747: {
      name: "MBH 101 Különleges Műveletek",
      bic: "MKKBHUHB"
    },
    10100778: {
      name: "MBH 101 Mosonmagyaróvár",
      bic: "MKKBHUHB"
    },
    10100792: {
      name: "MBH 101 Királyhágó",
      bic: "MKKBHUHB"
    },
    10100819: {
      name: "MBH 101 Közp.Számlakezelő",
      bic: "MKKBHUHB"
    },
    10100826: {
      name: "MBH 101 Csepel",
      bic: "MKKBHUHB"
    },
    10100833: {
      name: "MBH 101 Gazdagrét",
      bic: "MKKBHUHB"
    },
    10100840: {
      name: "MBH 101 Bosnyák tér",
      bic: "MKKBHUHB"
    },
    10100864: {
      name: "MBH 101 Közp. Adatfeld.Szerv",
      bic: "MKKBHUHB"
    },
    10100871: {
      name: "MBH 101 Közp.Hiteladminisztráció",
      bic: "MKKBHUHB"
    },
    10100888: {
      name: "MBH 101 Központi Értékpapír",
      bic: "MKKBHUHB"
    },
    10100895: {
      name: "MBH 101 Központi Bankkártya",
      bic: "MKKBHUHB"
    },
    10100912: {
      name: "MBH 101 Közp. Adatforgalmazó",
      bic: "MKKBHUHB"
    },
    10100936: {
      name: "MBH 101 Központi KMF",
      bic: "MKKBHUHB"
    },
    10100950: {
      name: "MBH 101 Közp. Lak. Jelz. OP.",
      bic: "MKKBHUHB"
    },
    10101009: {
      name: "MBH 101 Csepeli 2",
      bic: "MKKBHUHB"
    },
    10101016: {
      name: "MBH 101 Fogarasi út",
      bic: "MKKBHUHB"
    },
    10101023: {
      name: "MBH 101 Kőbánya",
      bic: "MKKBHUHB"
    },
    10101030: {
      name: "MBH 101 Keszthely",
      bic: "MKKBHUHB"
    },
    10101047: {
      name: "MBH 101 Kiskunhalas",
      bic: "MKKBHUHB"
    },
    10101054: {
      name: "MBH 101 Pápa",
      bic: "MKKBHUHB"
    },
    10101061: {
      name: "MBH 101 Hajdúböszörmény",
      bic: "MKKBHUHB"
    },
    10101078: {
      name: "MBH 101 Hódmezővásárhely",
      bic: "MKKBHUHB"
    },
    10101085: {
      name: "MBH 101 Hatvan",
      bic: "MKKBHUHB"
    },
    10101092: {
      name: "MBH 101 Baja",
      bic: "MKKBHUHB"
    },
    10101102: {
      name: "MBH 101 Orosház",
      bic: "MKKBHUHB"
    },
    10101119: {
      name: "MBH 101 Érd",
      bic: "MKKBHUHB"
    },
    10101126: {
      name: "MBH 101 Budaörs",
      bic: "MKKBHUHB"
    },
    10101133: {
      name: "MBH 101 Ajka",
      bic: "MKKBHUHB"
    },
    10101140: {
      name: "MBH 101 Paks",
      bic: "MKKBHUHB"
    },
    10101157: {
      name: "MBH 101 Money plus központ",
      bic: "MKKBHUHB"
    },
    10101164: {
      name: "MBH 101 Kalocsa",
      bic: "MKKBHUHB"
    },
    10101171: {
      name: "MBH 101 Karcag",
      bic: "MKKBHUHB"
    },
    10101188: {
      name: "MBH 101 Kisvárda",
      bic: "MKKBHUHB"
    },
    10101195: {
      name: "MBH 101 Komárom",
      bic: "MKKBHUHB"
    },
    10101205: {
      name: "MBH 101 Újpest",
      bic: "MKKBHUHB"
    },
    10101212: {
      name: "MBH 101 Ózd",
      bic: "MKKBHUHB"
    },
    10101229: {
      name: "MBH 101 Mohács",
      bic: "MKKBHUHB"
    },
    10101236: {
      name: "MBH 101 Nyíregyháza2",
      bic: "MKKBHUHB"
    },
    10101243: {
      name: "MBH 101 Berettyóújfalu",
      bic: "MKKBHUHB"
    },
    10101250: {
      name: "MBH 101 Mezőkövesd",
      bic: "MKKBHUHB"
    },
    10101267: {
      name: "MBH 101 Nagykáta",
      bic: "MKKBHUHB"
    },
    10101274: {
      name: "MBH 101 Kazincbarcika",
      bic: "MKKBHUHB"
    },
    10101281: {
      name: "MBH 101 Békéscsabai2",
      bic: "MKKBHUHB"
    },
    10101298: {
      name: "MBH 101 Veszprém",
      bic: "MKKBHUHB"
    },
    10101308: {
      name: "MBH 101 Budagyöngye 2",
      bic: "MKKBHUHB"
    },
    10101315: {
      name: "MBH 101 Siófok",
      bic: "MKKBHUHB"
    },
    10101322: {
      name: "MBH 101 Érd2",
      bic: "MKKBHUHB"
    },
    10101339: {
      name: "MBH 101 Pestszentimre",
      bic: "MKKBHUHB"
    },
    10101346: {
      name: "MBH 101 Dunakeszi",
      bic: "MKKBHUHB"
    },
    10101353: {
      name: "MBH 101 Belváros",
      bic: "MKKBHUHB"
    },
    10101360: {
      name: "MBH 101 Campona",
      bic: "MKKBHUHB"
    },
    10101377: {
      name: "MBH 101 József krt.",
      bic: "MKKBHUHB"
    },
    10101384: {
      name: "MBH 101 Debrecen2",
      bic: "MKKBHUHB"
    },
    10101391: {
      name: "MBH 101 Nyugati téri 2",
      bic: "MKKBHUHB"
    },
    10101401: {
      name: "MBH 101 Dombóvár",
      bic: "MKKBHUHB"
    },
    10101418: {
      name: "MBH 101 Pécs 2",
      bic: "MKKBHUHB"
    },
    10101425: {
      name: "MBH 101 Békásmegyer",
      bic: "MKKBHUHB"
    },
    10101432: {
      name: "MBH 101 Miskolc2",
      bic: "MKKBHUHB"
    },
    10101449: {
      name: "MBH 101 Emke2",
      bic: "MKKBHUHB"
    },
    10101456: {
      name: "MBH 101 Pécs",
      bic: "MKKBHUHB"
    },
    10101463: {
      name: "MBH 101 Kispest",
      bic: "MKKBHUHB"
    },
    10101470: {
      name: "MBH 101 Nyírpalota",
      bic: "MKKBHUHB"
    },
    10101487: {
      name: "MBH 101 Északpesti 2",
      bic: "MKKBHUHB"
    },
    10101494: {
      name: "MBH 101 Árkád",
      bic: "MKKBHUHB"
    },
    10101511: {
      name: "MBH 101 Devizakönyvelés",
      bic: "MKKBHUHB"
    },
    10101528: {
      name: "MBH 101 Győri lakossági",
      bic: "MKKBHUHB"
    },
    10101535: {
      name: "MBH 101 Bartók Béla út",
      bic: "MKKBHUHB"
    },
    10101542: {
      name: "MBH 101 MOM",
      bic: "MKKBHUHB"
    },
    10101559: {
      name: "MBH 101 Mamut",
      bic: "MKKBHUHB"
    },
    10101566: {
      name: "MBH 101 Váci Greens",
      bic: "MKKBHUHB"
    },
    10101580: {
      name: "MBH 101 Budai Privátbanki Központ",
      bic: "MKKBHUHB"
    },
    10101597: {
      name: "MBH 101 Integrált Szolg. Kp.",
      bic: "MKKBHUHB"
    },
    10102086: {
      name: "MBH 101 Belváros",
      bic: "MKKBHUHB"
    },
    10102093: {
      name: "MBH 101 Délbuda",
      bic: "MKKBHUHB"
    },
    10102103: {
      name: "MBH 101 Óbuda",
      bic: "MKKBHUHB"
    },
    10102237: {
      name: "MBH 101 Rákosszentmihály",
      bic: "MKKBHUHB"
    },
    10102244: {
      name: "MBH 101 Északpest",
      bic: "MKKBHUHB"
    },
    10102440: {
      name: "MBH 101 Pécs",
      bic: "MKKBHUHB"
    },
    10102529: {
      name: "MBH 101 Kecskemét",
      bic: "MKKBHUHB"
    },
    10102543: {
      name: "MBH 101 Kiskörős",
      bic: "MKKBHUHB"
    },
    10102615: {
      name: "MBH 101 Békéscsaba",
      bic: "MKKBHUHB"
    },
    10102718: {
      name: "MBH 101 Miskolc",
      bic: "MKKBHUHB"
    },
    10102770: {
      name: "MBH 101 Tiszaújváros",
      bic: "MKKBHUHB"
    },
    10102842: {
      name: "MBH 101 Szeged",
      bic: "MKKBHUHB"
    },
    10102914: {
      name: "MBH 101 Bicske",
      bic: "MKKBHUHB"
    },
    10102952: {
      name: "MBH 101 Székesfehérvár",
      bic: "MKKBHUHB"
    },
    10102969: {
      name: "MBH 101 Dunaújváros",
      bic: "MKKBHUHB"
    },
    10103056: {
      name: "MBH 101 Rákoskeresztúr",
      bic: "MKKBHUHB"
    },
    10103104: {
      name: "MBH 101 Nyugati tér",
      bic: "MKKBHUHB"
    },
    10103173: {
      name: "MBH 101 Lipótváros",
      bic: "MKKBHUHB"
    },
    10103214: {
      name: "MBH 101 Kaposvár",
      bic: "MKKBHUHB"
    },
    10103379: {
      name: "MBH 101 Győr",
      bic: "MKKBHUHB"
    },
    10103386: {
      name: "MBH 101 Sopron",
      bic: "MKKBHUHB"
    },
    10103434: {
      name: "MBH 101 Debrecen",
      bic: "MKKBHUHB"
    },
    10103513: {
      name: "MBH 101 Eger",
      bic: "MKKBHUHB"
    },
    10103551: {
      name: "MBH 101 Gyöngyös",
      bic: "MKKBHUHB"
    },
    10103623: {
      name: "MBH 101 Tatabánya",
      bic: "MKKBHUHB"
    },
    10103661: {
      name: "MBH 101 Esztergom",
      bic: "MKKBHUHB"
    },
    10103719: {
      name: "MBH 101 Balassagyarmat",
      bic: "MKKBHUHB"
    },
    10103726: {
      name: "MBH 101 Salgótarján",
      bic: "MKKBHUHB"
    },
    10103788: {
      name: "MBH 101 Balatonboglár",
      bic: "MKKBHUHB"
    },
    10103805: {
      name: "MBH 101 Dél-Budai Igazgatóság",
      bic: "MKKBHUHB"
    },
    10103812: {
      name: "MBH 101 Cegléd",
      bic: "MKKBHUHB"
    },
    10103829: {
      name: "MBH 101 Dabas",
      bic: "MKKBHUHB"
    },
    10103836: {
      name: "MBH 101 Gödöllő",
      bic: "MKKBHUHB"
    },
    10103843: {
      name: "MBH 101 Monor",
      bic: "MKKBHUHB"
    },
    10103850: {
      name: "MBH 101 Szigetszentmiklós",
      bic: "MKKBHUHB"
    },
    10103867: {
      name: "MBH 101 Ráckeve",
      bic: "MKKBHUHB"
    },
    10103874: {
      name: "MBH 101 Szentendre",
      bic: "MKKBHUHB"
    },
    10103881: {
      name: "MBH 101 Pestszentlőrinc",
      bic: "MKKBHUHB"
    },
    10103898: {
      name: "MBH 101 Vác",
      bic: "MKKBHUHB"
    },
    10104105: {
      name: "MBH 101 Budagyöngye",
      bic: "MKKBHUHB"
    },
    10104167: {
      name: "MBH 101 Pestszenterzsébet",
      bic: "MKKBHUHB"
    },
    10104260: {
      name: "MBH 101 Jászberény",
      bic: "MKKBHUHB"
    },
    10104459: {
      name: "MBH 101 Nyíregyháza",
      bic: "MKKBHUHB"
    },
    10104552: {
      name: "MBH 101 Debreceni3",
      bic: "MKKBHUHB"
    },
    10104569: {
      name: "MBH 101 Szolnok",
      bic: "MKKBHUHB"
    },
    10104617: {
      name: "MBH 101 Szekszárd",
      bic: "MKKBHUHB"
    },
    10104789: {
      name: "MBH 101 Szombathely",
      bic: "MKKBHUHB"
    },
    10104820: {
      name: "MBH 101 Veszprém",
      bic: "MKKBHUHB"
    },
    10104961: {
      name: "MBH 101 Zalaegerszeg",
      bic: "MKKBHUHB"
    },
    10104985: {
      name: "MBH 101 Nagykanizsa",
      bic: "MKKBHUHB"
    },
    10104992: {
      name: "MBH 101 Autóhitel",
      bic: "MKKBHUHB"
    },
    10105058: {
      name: "MBH 504 Káloz Bajcsy",
      bic: "MKKBHUHB"
    },
    10105065: {
      name: "MBH 504 Gönc Kossuth",
      bic: "MKKBHUHB"
    },
    10105072: {
      name: "MBH 504 Ajka Szabadság11",
      bic: "MKKBHUHB"
    },
    10105089: {
      name: "MBH 504 Aszód Kossuth",
      bic: "MKKBHUHB"
    },
    10105096: {
      name: "MBH 504 Tura Bartók",
      bic: "MKKBHUHB"
    },
    10105106: {
      name: "MBH 504 Bácsalmás GrófTeleki",
      bic: "MKKBHUHB"
    },
    10105113: {
      name: "MBH 504 Bácsbokod GrófSzéchenyi",
      bic: "MKKBHUHB"
    },
    10105120: {
      name: "MBH 504 Baja Szentháromság",
      bic: "MKKBHUHB"
    },
    10105137: {
      name: "MBH 504 Hercegszántó Albert",
      bic: "MKKBHUHB"
    },
    10105144: {
      name: "MBH 504 Vaskút Alkotmány",
      bic: "MKKBHUHB"
    },
    10105151: {
      name: "MBH 504 Baktalórántháza Köztársaság",
      bic: "MKKBHUHB"
    },
    10105168: {
      name: "MBH 504 Levelek Rákóczi",
      bic: "MKKBHUHB"
    },
    10105175: {
      name: "MBH 504 Balassagyarmat Thököly",
      bic: "MKKBHUHB"
    },
    10105182: {
      name: "MBH 504 Érsekvadkert Rákóczi",
      bic: "MKKBHUHB"
    },
    10105199: {
      name: "MBH 504 Balatonalmádi Baross",
      bic: "MKKBHUHB"
    },
    10105209: {
      name: "MBH 504 Balatonföldvár Balatonszentgy",
      bic: "MKKBHUHB"
    },
    10105216: {
      name: "MBH 504 Balatonfüred Kossuth",
      bic: "MKKBHUHB"
    },
    10105223: {
      name: "MBH 504 Balmazújvárosi Veres",
      bic: "MKKBHUHB"
    },
    10105230: {
      name: "MBH 504 Barcs Bajcsy",
      bic: "MKKBHUHB"
    },
    10105247: {
      name: "MBH 504 Bátonyterenye Ózdi",
      bic: "MKKBHUHB"
    },
    10105254: {
      name: "MBH 504 Békéscsaba Andrássy",
      bic: "MKKBHUHB"
    },
    10105261: {
      name: "MBH 504 Újkígyós Gyulai",
      bic: "MKKBHUHB"
    },
    10105278: {
      name: "MBH 504 Békéscsaba Hunyadi",
      bic: "MKKBHUHB"
    },
    10105285: {
      name: "MBH 504 Békéscsaba Mednyánszki",
      bic: "MKKBHUHB"
    },
    10105292: {
      name: "MBH 504 Békés Szarvasi",
      bic: "MKKBHUHB"
    },
    10105302: {
      name: "MBH 504 Mezőberény Békési",
      bic: "MKKBHUHB"
    },
    10105319: {
      name: "MBH 504 Bélapátfalva Május1",
      bic: "MKKBHUHB"
    },
    10105326: {
      name: "MBH 504 Berettyóújfalu Dózsa",
      bic: "MKKBHUHB"
    },
    10105333: {
      name: "MBH 504 Biharkeresztes Hősök",
      bic: "MKKBHUHB"
    },
    10105340: {
      name: "MBH 504 Alcsútdoboz Béke",
      bic: "MKKBHUHB"
    },
    10105357: {
      name: "MBH 504 Bicske Csabdi",
      bic: "MKKBHUHB"
    },
    10105364: {
      name: "MBH 504 Cigánd Fő",
      bic: "MKKBHUHB"
    },
    10105371: {
      name: "MBH 504 Bonyhád Szabadság9",
      bic: "MKKBHUHB"
    },
    10105388: {
      name: "MBH 504 Tevel Fő",
      bic: "MKKBHUHB"
    },
    10105395: {
      name: "MBH 504 Budakeszi Fő",
      bic: "MKKBHUHB"
    },
    10105405: {
      name: "MBH 504 Herceghalom Zsámbéki",
      bic: "MKKBHUHB"
    },
    10105412: {
      name: "MBH 504 Törökbálint Munkácsy",
      bic: "MKKBHUHB"
    },
    10105429: {
      name: "MBH 504 Budapest Árpád45",
      bic: "MKKBHUHB"
    },
    10105436: {
      name: "MBH 504 Budapest Báthory",
      bic: "MKKBHUHB"
    },
    10105443: {
      name: "MBH 504 Budapest Czuczor",
      bic: "MKKBHUHB"
    },
    10105450: {
      name: "MBH 504 Budapest Flórián",
      bic: "MKKBHUHB"
    },
    10105467: {
      name: "MBH 504 Pálháza Dózsa",
      bic: "MKKBHUHB"
    },
    10105474: {
      name: "MBH 504 Budapest Infopark",
      bic: "MKKBHUHB"
    },
    10105481: {
      name: "MBH 504 Budapest Károly",
      bic: "MKKBHUHB"
    },
    10105498: {
      name: "MBH 504 Budapest Kolozsvár",
      bic: "MKKBHUHB"
    },
    10105508: {
      name: "MBH 504 Budapest Kossuth",
      bic: "MKKBHUHB"
    },
    10105515: {
      name: "MBH 504 Budapest KossuthLajos47",
      bic: "MKKBHUHB"
    },
    10105522: {
      name: "MBH 504 Abaújszántó Béke",
      bic: "MKKBHUHB"
    },
    10105539: {
      name: "MBH 504 Balatonkenese Fő Fiók",
      bic: "MKKBHUHB"
    },
    10105546: {
      name: "MBH 504 Budapest Üllői399",
      bic: "MKKBHUHB"
    },
    10105553: {
      name: "MBH 504 Budapest Üllői48",
      bic: "MKKBHUHB"
    },
    10105560: {
      name: "MBH 504 Budapest Váci20",
      bic: "MKKBHUHB"
    },
    10105577: {
      name: "MBH 504 Budapest Váci6",
      bic: "MKKBHUHB"
    },
    10105584: {
      name: "MBH 504 Budapest Villányi",
      bic: "MKKBHUHB"
    },
    10105591: {
      name: "MBH 504 Budapest Zalán",
      bic: "MKKBHUHB"
    },
    10105601: {
      name: "MBH 504 Abony Kossuth",
      bic: "MKKBHUHB"
    },
    10105618: {
      name: "MBH 504 Albertirsa Pesti",
      bic: "MKKBHUHB"
    },
    10105625: {
      name: "MBH 504 Pilis Rákóczi",
      bic: "MKKBHUHB"
    },
    10105632: {
      name: "MBH 504 Cegléd Eötvös",
      bic: "MKKBHUHB"
    },
    10105649: {
      name: "MBH 504 Nagykőrösi Rákóczi",
      bic: "MKKBHUHB"
    },
    10105656: {
      name: "MBH 504 Celldömölk Kossuth",
      bic: "MKKBHUHB"
    },
    10105663: {
      name: "MBH 504 Csenger Ady",
      bic: "MKKBHUHB"
    },
    10105670: {
      name: "MBH 504 Csepreg Széchenyi",
      bic: "MKKBHUHB"
    },
    10105687: {
      name: "MBH 504 Csongrád Fő",
      bic: "MKKBHUHB"
    },
    10105694: {
      name: "MBH 504 Csorna SzentIstván",
      bic: "MKKBHUHB"
    },
    10105704: {
      name: "MBH 504 Csurgó Csokonai",
      bic: "MKKBHUHB"
    },
    10105711: {
      name: "MBH 504 Dabas SzentIstván",
      bic: "MKKBHUHB"
    },
    10105728: {
      name: "MBH 504 Inárcs Széchenyi",
      bic: "MKKBHUHB"
    },
    10105735: {
      name: "MBH 504 Kakucs Sas",
      bic: "MKKBHUHB"
    },
    10105742: {
      name: "MBH 504 Örkény Kossuth",
      bic: "MKKBHUHB"
    },
    10105759: {
      name: "MBH 504 Debrecen Bethlen",
      bic: "MKKBHUHB"
    },
    10105766: {
      name: "MBH 504 Debrecen Mátyás",
      bic: "MKKBHUHB"
    },
    10105773: {
      name: "MBH 504 Debrecen Szentgyörgyfalvi",
      bic: "MKKBHUHB"
    },
    10105780: {
      name: "MBH 504 Derecske Rákóczi",
      bic: "MKKBHUHB"
    },
    10105797: {
      name: "MBH 504 Hosszúpályi Basi",
      bic: "MKKBHUHB"
    },
    10105807: {
      name: "MBH 504 Létavértes Baross",
      bic: "MKKBHUHB"
    },
    10105814: {
      name: "MBH 504 Dombóvár Hunyadi",
      bic: "MKKBHUHB"
    },
    10105821: {
      name: "MBH 504 Dorog Bécsi",
      bic: "MKKBHUHB"
    },
    10105838: {
      name: "MBH 504 Dunakeszi Fő",
      bic: "MKKBHUHB"
    },
    10105845: {
      name: "MBH 504 Fót Dózsa",
      bic: "MKKBHUHB"
    },
    10105852: {
      name: "MBH 504 Göd Pesti",
      bic: "MKKBHUHB"
    },
    10105869: {
      name: "MBH 504 Dunaújváros Vasmű",
      bic: "MKKBHUHB"
    },
    10105876: {
      name: "MBH 504 Edelény Tóth",
      bic: "MKKBHUHB"
    },
    10105883: {
      name: "MBH 504 Szendrő Hősök",
      bic: "MKKBHUHB"
    },
    10105890: {
      name: "MBH 504 Eger DrSándor",
      bic: "MKKBHUHB"
    },
    10105900: {
      name: "MBH 504 Eger Katona",
      bic: "MKKBHUHB"
    },
    10105917: {
      name: "MBH 504 Verpelét Szabadság",
      bic: "MKKBHUHB"
    },
    10105924: {
      name: "MBH 504 Encs Petőfi",
      bic: "MKKBHUHB"
    },
    10105931: {
      name: "MBH 504 Dunakiliti Kossuth",
      bic: "MKKBHUHB"
    },
    10105948: {
      name: "MBH 504 Enying Deák",
      bic: "MKKBHUHB"
    },
    10105955: {
      name: "MBH 504 Ercsi SzentIstván",
      bic: "MKKBHUHB"
    },
    10105962: {
      name: "MBH 504 Martonvásár Brunszvik",
      bic: "MKKBHUHB"
    },
    10105979: {
      name: "MBH 504 Lábatlan Rákóczi",
      bic: "MKKBHUHB"
    },
    10105986: {
      name: "MBH 504 Fehérgyarmat Móricz",
      bic: "MKKBHUHB"
    },
    10105993: {
      name: "MBH 504 Jánkmajtis Kossuth",
      bic: "MKKBHUHB"
    },
    10106035: {
      name: "MBH 504 Füzesabony Rákóczi",
      bic: "MKKBHUHB"
    },
    10106042: {
      name: "MBH 504 Gárdony-Agárd Balatoni",
      bic: "MKKBHUHB"
    },
    10106059: {
      name: "MBH 504 Kápolnásnyék Fő",
      bic: "MKKBHUHB"
    },
    10106066: {
      name: "MBH 504 Gödöllő Petőfi",
      bic: "MKKBHUHB"
    },
    10106073: {
      name: "MBH 504 Isaszeg Kossuth",
      bic: "MKKBHUHB"
    },
    10106080: {
      name: "MBH 504 Pécel Ráday",
      bic: "MKKBHUHB"
    },
    10106097: {
      name: "MBH 504 Kistarcsa Széchenyi",
      bic: "MKKBHUHB"
    },
    10106114: {
      name: "MBH 504 Gyál Kőrösi",
      bic: "MKKBHUHB"
    },
    10106121: {
      name: "MBH 504 Gyöngyös Magyar",
      bic: "MKKBHUHB"
    },
    10106138: {
      name: "MBH 504 Gyöngyöspata Dózsa",
      bic: "MKKBHUHB"
    },
    10106145: {
      name: "MBH 504 Gönyű Bajcsy",
      bic: "MKKBHUHB"
    },
    10106152: {
      name: "MBH 504 Győr Árpád",
      bic: "MKKBHUHB"
    },
    10106169: {
      name: "MBH 504 Győr Árpád23",
      bic: "MKKBHUHB"
    },
    10106176: {
      name: "MBH 504 Győr Lehel",
      bic: "MKKBHUHB"
    },
    10106183: {
      name: "MBH 504 Győr Riesz",
      bic: "MKKBHUHB"
    },
    10106190: {
      name: "MBH 504 Gyula Városház",
      bic: "MKKBHUHB"
    },
    10106217: {
      name: "MBH 504 Hajdúdorog Tokaji",
      bic: "MKKBHUHB"
    },
    10106224: {
      name: "MBH 504 Hajdúhadház Bocskai",
      bic: "MKKBHUHB"
    },
    10106231: {
      name: "MBH 504 Hajdúsámson Rákóczi",
      bic: "MKKBHUHB"
    },
    10106248: {
      name: "MBH 504 Nyíradony Árpád",
      bic: "MKKBHUHB"
    },
    10106255: {
      name: "MBH 504 Vámospércs Nagy",
      bic: "MKKBHUHB"
    },
    10106262: {
      name: "MBH 504 Hajdúszoboszló Hősök",
      bic: "MKKBHUHB"
    },
    10106279: {
      name: "MBH 504 Hatvan Kossuth",
      bic: "MKKBHUHB"
    },
    10106286: {
      name: "MBH 504 Petőfibánya Mária",
      bic: "MKKBHUHB"
    },
    10106293: {
      name: "MBH 504 Heves Hunyadi",
      bic: "MKKBHUHB"
    },
    10106303: {
      name: "MBH 504 Hévíz Széchenyi",
      bic: "MKKBHUHB"
    },
    10106310: {
      name: "MBH 504 Hódmezővásárhely Andrássy",
      bic: "MKKBHUHB"
    },
    10106327: {
      name: "MBH 504 Mindszenti Csokonai",
      bic: "MKKBHUHB"
    },
    10106334: {
      name: "MBH 504 Gávavencsellő Petőfi",
      bic: "MKKBHUHB"
    },
    10106341: {
      name: "MBH 504 Ibrány Lehel",
      bic: "MKKBHUHB"
    },
    10106358: {
      name: "MBH 504 Jánoshalma Dózsa",
      bic: "MKKBHUHB"
    },
    10106365: {
      name: "MBH 504 Mélykút Petőfi",
      bic: "MKKBHUHB"
    },
    10106372: {
      name: "MBH 504 Jászapáti István",
      bic: "MKKBHUHB"
    },
    10106389: {
      name: "MBH 504 Jászárokszállás Árpád",
      bic: "MKKBHUHB"
    },
    10106396: {
      name: "MBH 504 Jászberény Szabadság",
      bic: "MKKBHUHB"
    },
    10106406: {
      name: "MBH 504 Harta Kossuth",
      bic: "MKKBHUHB"
    },
    10106413: {
      name: "MBH 504 Kalocsa Hunyadi",
      bic: "MKKBHUHB"
    },
    10106420: {
      name: "MBH 504 Solt Posta",
      bic: "MKKBHUHB"
    },
    10106437: {
      name: "MBH 504 Biatorbágy Szabadság Fiók",
      bic: "MKKBHUHB"
    },
    10106444: {
      name: "MBH 504 Kaposvár Fő",
      bic: "MKKBHUHB"
    },
    10106451: {
      name: "MBH 504 Beled Rákóczi",
      bic: "MKKBHUHB"
    },
    10106468: {
      name: "MBH 504 Kapuvár Gesztenye",
      bic: "MKKBHUHB"
    },
    10106475: {
      name: "MBH 504 Karcag Kálvin",
      bic: "MKKBHUHB"
    },
    10106482: {
      name: "MBH 504 Kisújszállás Szabadságutca8",
      bic: "MKKBHUHB"
    },
    10106499: {
      name: "MBH 504 Kazincbarcika Egressy",
      bic: "MKKBHUHB"
    },
    10106509: {
      name: "MBH 504 Sajószentpéter Kossuth",
      bic: "MKKBHUHB"
    },
    10106516: {
      name: "MBH 504 Dunavarsány Kossuth Fiók",
      bic: "MKKBHUHB"
    },
    10106523: {
      name: "MBH 504 Kecskemét Dobó",
      bic: "MKKBHUHB"
    },
    10106530: {
      name: "MBH 504 Hajdúnánás Kossuth Fiók",
      bic: "MKKBHUHB"
    },
    10106547: {
      name: "MBH 504 Kecskemét Szabadság",
      bic: "MKKBHUHB"
    },
    10106554: {
      name: "MBH 504 Kecskemét Széchenyi",
      bic: "MKKBHUHB"
    },
    10106561: {
      name: "MBH 504 Kerekegyháza Fő",
      bic: "MKKBHUHB"
    },
    10106578: {
      name: "MBH 504 Lajosmizse Szabadság",
      bic: "MKKBHUHB"
    },
    10106585: {
      name: "MBH 504 Lakitelek Liget",
      bic: "MKKBHUHB"
    },
    10106592: {
      name: "MBH 504 Tiszakécske SzentImre",
      bic: "MKKBHUHB"
    },
    10106602: {
      name: "MBH 504 Keszthely Bem",
      bic: "MKKBHUHB"
    },
    10106619: {
      name: "MBH 504 Kisbér Kossuth",
      bic: "MKKBHUHB"
    },
    10106626: {
      name: "MBH 504 Akasztó Fő",
      bic: "MKKBHUHB"
    },
    10106633: {
      name: "MBH 504 Bócsa Kecskeméti",
      bic: "MKKBHUHB"
    },
    10106640: {
      name: "MBH 504 Csengőd Dózsa",
      bic: "MKKBHUHB"
    },
    10106657: {
      name: "MBH 504 Izsák Szabadság",
      bic: "MKKBHUHB"
    },
    10106671: {
      name: "MBH 504 Kiskőrös Petőfi",
      bic: "MKKBHUHB"
    },
    10106688: {
      name: "MBH 504 Kiskunfélegyháza Fekete Pál",
      bic: "MKKBHUHB"
    },
    10106695: {
      name: "MBH 504 Kiskunhalas Kossuth",
      bic: "MKKBHUHB"
    },
    10106705: {
      name: "MBH 504 Kiskunmajsa Fő",
      bic: "MKKBHUHB"
    },
    10106712: {
      name: "MBH 504 Kistelek SzentLászló",
      bic: "MKKBHUHB"
    },
    10106729: {
      name: "MBH 504 Kisvárda SzentLászló",
      bic: "MKKBHUHB"
    },
    10106736: {
      name: "MBH 504 Bábolna Béke",
      bic: "MKKBHUHB"
    },
    10106743: {
      name: "MBH 504 Komárom Igmándi",
      bic: "MKKBHUHB"
    },
    10106750: {
      name: "MBH 504 Nagyigmánd Kossuth",
      bic: "MKKBHUHB"
    },
    10106767: {
      name: "MBH 504 Komló Városház",
      bic: "MKKBHUHB"
    },
    10106774: {
      name: "MBH 504 Körmend Thököly",
      bic: "MKKBHUHB"
    },
    10106781: {
      name: "MBH 504 Kőszeg Rákóczi",
      bic: "MKKBHUHB"
    },
    10106798: {
      name: "MBH 504 Kunszentmárton Mátyás",
      bic: "MKKBHUHB"
    },
    10106808: {
      name: "MBH 504 Tiszaföldvár Kossuth",
      bic: "MKKBHUHB"
    },
    10106815: {
      name: "MBH 504 Kunszentmiklós Kálvin",
      bic: "MKKBHUHB"
    },
    10106822: {
      name: "MBH 504 Szabadszállás Kálvin",
      bic: "MKKBHUHB"
    },
    10106839: {
      name: "MBH 504 Lenti Kossuth",
      bic: "MKKBHUHB"
    },
    10106846: {
      name: "MBH 504 Letenye Kossuth",
      bic: "MKKBHUHB"
    },
    10106853: {
      name: "MBH 504 Makó Úri",
      bic: "MKKBHUHB"
    },
    10106860: {
      name: "MBH 504 Hodász Széchenyi",
      bic: "MKKBHUHB"
    },
    10106877: {
      name: "MBH 504 Mátészalka Szalkay",
      bic: "MKKBHUHB"
    },
    10106884: {
      name: "MBH 504 Nagyecsed Rákóczi",
      bic: "MKKBHUHB"
    },
    10106891: {
      name: "MBH 504 Vaja Damjanich",
      bic: "MKKBHUHB"
    },
    10106901: {
      name: "MBH 504 Mezőcsát Kossuth",
      bic: "MKKBHUHB"
    },
    10106918: {
      name: "MBH 504 Kevermes Templom",
      bic: "MKKBHUHB"
    },
    10106925: {
      name: "MBH 504 Mezőkovácsháza Árpád",
      bic: "MKKBHUHB"
    },
    10106932: {
      name: "MBH 504 Bükkábrány Mátyás",
      bic: "MKKBHUHB"
    },
    10106949: {
      name: "MBH 504 Mezőkeresztes Dózsa",
      bic: "MKKBHUHB"
    },
    10106956: {
      name: "MBH 504 Mezőkövesd Mátyás",
      bic: "MKKBHUHB"
    },
    10106963: {
      name: "MBH 504 Mezőtúr Dózsa",
      bic: "MKKBHUHB"
    },
    10106970: {
      name: "MBH 504 Túrkeve Petőfi",
      bic: "MKKBHUHB"
    },
    10106987: {
      name: "MBH 504 Felsőzsolca Kassai",
      bic: "MKKBHUHB"
    },
    10106994: {
      name: "MBH 504 Miskolc Ady",
      bic: "MKKBHUHB"
    },
    10107005: {
      name: "MBH 504 Miskolc Gutenberg",
      bic: "MKKBHUHB"
    },
    10107012: {
      name: "MBH 504 Miskolc Vasgyár",
      bic: "MKKBHUHB"
    },
    10107029: {
      name: "MBH 504 Bóly Hősök",
      bic: "MKKBHUHB"
    },
    10107036: {
      name: "MBH 504 Dunaszekcső Kossuth",
      bic: "MKKBHUHB"
    },
    10107043: {
      name: "MBH 504 Himesháza Kossuth",
      bic: "MKKBHUHB"
    },
    10107050: {
      name: "MBH 504 Mohács Dózsa",
      bic: "MKKBHUHB"
    },
    10107067: {
      name: "MBH 504 Szederkény Pécsi",
      bic: "MKKBHUHB"
    },
    10107074: {
      name: "MBH 504 Gyömrő Táncsics",
      bic: "MKKBHUHB"
    },
    10107081: {
      name: "MBH 504 Monor Kossuth",
      bic: "MKKBHUHB"
    },
    10107098: {
      name: "MBH 504 Üllő Pesti",
      bic: "MKKBHUHB"
    },
    10107108: {
      name: "MBH 504 Vecsés Telepi",
      bic: "MKKBHUHB"
    },
    10107115: {
      name: "MBH 504 Mórahalom Millenniumi",
      bic: "MKKBHUHB"
    },
    10107122: {
      name: "MBH 504 Üllés Fogarasi",
      bic: "MKKBHUHB"
    },
    10107139: {
      name: "MBH 504 Mór Deák",
      bic: "MKKBHUHB"
    },
    10107146: {
      name: "MBH 504 Hegyeshalom Fő",
      bic: "MKKBHUHB"
    },
    10107153: {
      name: "MBH 504 Lébény Fő",
      bic: "MKKBHUHB"
    },
    10107160: {
      name: "MBH 504 Mosonmagyaróvár Kökény",
      bic: "MKKBHUHB"
    },
    10107177: {
      name: "MBH 504 Mosonmagyaróvár Palánk",
      bic: "MKKBHUHB"
    },
    10107184: {
      name: "MBH 504 Nagycenk Iskola",
      bic: "MKKBHUHB"
    },
    10107191: {
      name: "MBH 504 Nagyatád Kossuth",
      bic: "MKKBHUHB"
    },
    10107201: {
      name: "MBH 504 BalkányiFő",
      bic: "MKKBHUHB"
    },
    10107218: {
      name: "MBH 504 Bökönyi Dózsa",
      bic: "MKKBHUHB"
    },
    10107225: {
      name: "MBH 504 Nagykálló Zrínyi",
      bic: "MKKBHUHB"
    },
    10107232: {
      name: "MBH 504 Újfehértó Béke",
      bic: "MKKBHUHB"
    },
    10107256: {
      name: "MBH 504 Nagykáta Dózsa",
      bic: "MKKBHUHB"
    },
    10107263: {
      name: "MBH 504 Sülysáp Malom",
      bic: "MKKBHUHB"
    },
    10107270: {
      name: "MBH 504 Tápiószentmárton Kossuth",
      bic: "MKKBHUHB"
    },
    10107287: {
      name: "MBH 504 Nyírbátor Szabadság",
      bic: "MKKBHUHB"
    },
    10107294: {
      name: "MBH 504 Nyíregyháza Dózsa",
      bic: "MKKBHUHB"
    },
    10107304: {
      name: "MBH 504 Nyíregyháza Kossuth",
      bic: "MKKBHUHB"
    },
    10107311: {
      name: "MBH 504 Nyírtelek Arany",
      bic: "MKKBHUHB"
    },
    10107328: {
      name: "MBH 504 Csorvás Rákóczi",
      bic: "MKKBHUHB"
    },
    10107335: {
      name: "MBH 504 Orosháza Thököly",
      bic: "MKKBHUHB"
    },
    10107342: {
      name: "MBH 504 Bokod Fő",
      bic: "MKKBHUHB"
    },
    10107359: {
      name: "MBH 504 Oroszlány Rákóczi",
      bic: "MKKBHUHB"
    },
    10107366: {
      name: "MBH 504 Ózd Brassói",
      bic: "MKKBHUHB"
    },
    10107373: {
      name: "MBH 504 Putnok Mohos",
      bic: "MKKBHUHB"
    },
    10107380: {
      name: "MBH 504 Őriszentpéter Városszer",
      bic: "MKKBHUHB"
    },
    10107397: {
      name: "MBH 504 Dunaföldvár Fehérvári",
      bic: "MKKBHUHB"
    },
    10107407: {
      name: "MBH 504 Nagydorog Kossuth",
      bic: "MKKBHUHB"
    },
    10107414: {
      name: "MBH 504 Németkér Széchenyi",
      bic: "MKKBHUHB"
    },
    10107421: {
      name: "MBH 504 Paks Táncsics",
      bic: "MKKBHUHB"
    },
    10107438: {
      name: "MBH 504 Pannonhalma Petőfi",
      bic: "MKKBHUHB"
    },
    10107445: {
      name: "MBH 504 Pápa Zimmermann",
      bic: "MKKBHUHB"
    },
    10107452: {
      name: "MBH 504 Pásztó Fő",
      bic: "MKKBHUHB"
    },
    10107469: {
      name: "MBH 504 Kozármisleny Orna",
      bic: "MKKBHUHB"
    },
    10107476: {
      name: "MBH 504 Pécs Bajcsy",
      bic: "MKKBHUHB"
    },
    10107483: {
      name: "MBH 504 Pécs Páfrány",
      bic: "MKKBHUHB"
    },
    10107490: {
      name: "MBH 504 Mecseknádasd Rákóczi",
      bic: "MKKBHUHB"
    },
    10107500: {
      name: "MBH 504 Pécsvárad Kossuth30",
      bic: "MKKBHUHB"
    },
    10107517: {
      name: "MBH 504 Pétervására Szabadság",
      bic: "MKKBHUHB"
    },
    10107524: {
      name: "MBH 504 Nagykovácsi Kossuth",
      bic: "MKKBHUHB"
    },
    10107531: {
      name: "MBH 504 Piliscsaba Bajcsy",
      bic: "MKKBHUHB"
    },
    10107548: {
      name: "MBH 504 Pilisvörösvár Fő",
      bic: "MKKBHUHB"
    },
    10107555: {
      name: "MBH 504 Solymár Mátyás",
      bic: "MKKBHUHB"
    },
    10107562: {
      name: "MBH 504 Üröm Fő",
      bic: "MKKBHUHB"
    },
    10107579: {
      name: "MBH 504 Kaba Rákóczi",
      bic: "MKKBHUHB"
    },
    10107586: {
      name: "MBH 504 Püspökladány Gagarin",
      bic: "MKKBHUHB"
    },
    10107593: {
      name: "MBH 504 Dunaharaszti Baktay",
      bic: "MKKBHUHB"
    },
    10107603: {
      name: "MBH 504 Ráckeve Kossuth",
      bic: "MKKBHUHB"
    },
    10107610: {
      name: "MBH 504 Tököl József",
      bic: "MKKBHUHB"
    },
    10107627: {
      name: "MBH 504 Rétság Korányi",
      bic: "MKKBHUHB"
    },
    10107634: {
      name: "MBH 504 Salgótarján Erzsébet",
      bic: "MKKBHUHB"
    },
    10107641: {
      name: "MBH 504 Salgótarján Klapka",
      bic: "MKKBHUHB"
    },
    10107658: {
      name: "MBH 504 Sárbogárd Ady",
      bic: "MKKBHUHB"
    },
    10107665: {
      name: "MBH 504 Sarkad Kossuth",
      bic: "MKKBHUHB"
    },
    10107672: {
      name: "MBH 504 Sárospatak Eötvös",
      bic: "MKKBHUHB"
    },
    10107689: {
      name: "MBH 504 Répcelak Petőfi",
      bic: "MKKBHUHB"
    },
    10107696: {
      name: "MBH 504 Sárvár Batthyány",
      bic: "MKKBHUHB"
    },
    10107706: {
      name: "MBH 504 Mács Szabadság",
      bic: "MKKBHUHB"
    },
    10107713: {
      name: "MBH 504 Sásd Rákóczi",
      bic: "MKKBHUHB"
    },
    10107720: {
      name: "MBH 504 Sátoraljaújhely Széchenyi",
      bic: "MKKBHUHB"
    },
    10107737: {
      name: "MBH 504 Sellye Mátyás",
      bic: "MKKBHUHB"
    },
    10107744: {
      name: "MBH 504 Harkány Kossuth",
      bic: "MKKBHUHB"
    },
    10107751: {
      name: "MBH 504 Újpetre Kossuth",
      bic: "MKKBHUHB"
    },
    10107768: {
      name: "MBH 504 Siófok Széchenyi",
      bic: "MKKBHUHB"
    },
    10107775: {
      name: "MBH 504 Fertőd Fő",
      bic: "MKKBHUHB"
    },
    10107782: {
      name: "MBH 504 Tótkomlós. Kossuth",
      bic: "MKKBHUHB"
    },
    10107799: {
      name: "MBH 504 Sopron Várkerület",
      bic: "MKKBHUHB"
    },
    10107809: {
      name: "MBH 504 Maglód Fő Fiók",
      bic: "MKKBHUHB"
    },
    10107816: {
      name: "MBH 504 Sümeg Kossuth",
      bic: "MKKBHUHB"
    },
    10107823: {
      name: "MBH 504 Szentgál Fő Fiók",
      bic: "MKKBHUHB"
    },
    10107830: {
      name: "MBH 504 Gyomaendrőd Kossuth",
      bic: "MKKBHUHB"
    },
    10107847: {
      name: "MBH 504 Kondoros Csabai",
      bic: "MKKBHUHB"
    },
    10107854: {
      name: "MBH 504 Szarvas Szabadság",
      bic: "MKKBHUHB"
    },
    10107861: {
      name: "MBH 504 Szécsény Rákóczi",
      bic: "MKKBHUHB"
    },
    10107878: {
      name: "MBH 504 Domaszék Köztársaság",
      bic: "MKKBHUHB"
    },
    10107885: {
      name: "MBH 504 Sándorfalva Alkotmány",
      bic: "MKKBHUHB"
    },
    10107892: {
      name: "MBH 504 Szigethalom Mű Fiók",
      bic: "MKKBHUHB"
    },
    10107902: {
      name: "MBH 504 Szeged Honvéd",
      bic: "MKKBHUHB"
    },
    10107919: {
      name: "MBH 504 Szeged Hősök",
      bic: "MKKBHUHB"
    },
    10107926: {
      name: "MBH 504 Szeged Széchenyi",
      bic: "MKKBHUHB"
    },
    10107933: {
      name: "MBH 504 Szeged Szőregi",
      bic: "MKKBHUHB"
    },
    10107940: {
      name: "MBH 504 Bátaszék Budai",
      bic: "MKKBHUHB"
    },
    10107957: {
      name: "MBH 504 Szombathely Szűrcsapó Fiók",
      bic: "MKKBHUHB"
    },
    10107964: {
      name: "MBH 504 Szekszárd Széchenyi62",
      bic: "MKKBHUHB"
    },
    10107971: {
      name: "MBH 504 Tolna Deák",
      bic: "MKKBHUHB"
    },
    10107988: {
      name: "MBH 504 Zomba Fő",
      bic: "MKKBHUHB"
    },
    10107995: {
      name: "MBH 504 Budakalász Petőfi",
      bic: "MKKBHUHB"
    },
    10108006: {
      name: "MBH 504 Dunabogdány Hajó",
      bic: "MKKBHUHB"
    },
    10108257: {
      name: "MBH 504 Tatabánya Fő",
      bic: "MKKBHUHB"
    },
    10108264: {
      name: "MBH 504 Tata Ady",
      bic: "MKKBHUHB"
    },
    10108271: {
      name: "MBH 504 Tét Fő",
      bic: "MKKBHUHB"
    },
    10108288: {
      name: "MBH 504 Abádszalók István",
      bic: "MKKBHUHB"
    },
    10108295: {
      name: "MBH 504 Kunhegyes Szabadság",
      bic: "MKKBHUHB"
    },
    10108305: {
      name: "MBH 504 Tiszafüred Kossuth",
      bic: "MKKBHUHB"
    },
    10108312: {
      name: "MBH 504 Tiszaújváros SzentIstván",
      bic: "MKKBHUHB"
    },
    10108329: {
      name: "MBH 504 Rakamaz SzentIstván",
      bic: "MKKBHUHB"
    },
    10108336: {
      name: "MBH 504 Tiszaeszlár Rákóczi",
      bic: "MKKBHUHB"
    },
    10108343: {
      name: "MBH 504 Tiszalök Kossuth",
      bic: "MKKBHUHB"
    },
    10108350: {
      name: "MBH 504 Tiszavasvári Kossuth",
      bic: "MKKBHUHB"
    },
    10108367: {
      name: "MBH 504 Tokaj Bajcsy",
      bic: "MKKBHUHB"
    },
    10108374: {
      name: "MBH 504 Törökszentmiklós Kossuth",
      bic: "MKKBHUHB"
    },
    10108381: {
      name: "MBH 504 Vác Káptalan",
      bic: "MKKBHUHB"
    },
    10108398: {
      name: "MBH 504 Berhida Szabadság",
      bic: "MKKBHUHB"
    },
    10108408: {
      name: "MBH 504 Várpalota Posta",
      bic: "MKKBHUHB"
    },
    10108415: {
      name: "MBH 504 Vásárosnamény Rákóczi",
      bic: "MKKBHUHB"
    },
    10108422: {
      name: "MBH 504 Vasvár Főszolgabíró",
      bic: "MKKBHUHB"
    },
    10108439: {
      name: "MBH 504 Veresegyház Fő",
      bic: "MKKBHUHB"
    },
    10108446: {
      name: "MBH 504 Nagyvázsony Kinizsi",
      bic: "MKKBHUHB"
    },
    10108453: {
      name: "MBH 504 Veszprém Budapest",
      bic: "MKKBHUHB"
    },
    10108460: {
      name: "MBH 504 Veszprém Cserhát",
      bic: "MKKBHUHB"
    },
    10108477: {
      name: "MBH 504 Bak Széchenyi",
      bic: "MKKBHUHB"
    },
    10108484: {
      name: "MBH 504 Zalaegerszeg Dísz",
      bic: "MKKBHUHB"
    },
    10108491: {
      name: "MBH 504 Zalaegerszeg Eötvös",
      bic: "MKKBHUHB"
    },
    10108501: {
      name: "MBH 504 Zalaszentgrót Nefelejcs",
      bic: "MKKBHUHB"
    },
    10108518: {
      name: "MBH 504 Zalaszentlászló Kossuth",
      bic: "MKKBHUHB"
    },
    10108525: {
      name: "MBH 504 Zirc József",
      bic: "MKKBHUHB"
    },
    10108532: {
      name: "MBH 504 Devecser Kossuth",
      bic: "MKKBHUHB"
    },
    10108549: {
      name: "MBH 504 Diósd SzentIstván",
      bic: "MKKBHUHB"
    },
    10108556: {
      name: "MBH 504 Érd Budai",
      bic: "MKKBHUHB"
    },
    10108563: {
      name: "MBH 504 Érd Hegesztő",
      bic: "MKKBHUHB"
    },
    10108570: {
      name: "MBH 504 Százhalombatta Damjanich",
      bic: "MKKBHUHB"
    },
    10108587: {
      name: "MBH 504 Tárnok Rákóczi",
      bic: "MKKBHUHB"
    },
    10108594: {
      name: "MBH 504 Balatonmáriafürdő GrófSzéchenyi",
      bic: "MKKBHUHB"
    },
    10108611: {
      name: "MBH 504 Pacsa József",
      bic: "MKKBHUHB"
    },
    10108628: {
      name: "MBH 504 Dévaványa Árpád",
      bic: "MKKBHUHB"
    },
    10108635: {
      name: "MBH 504 Füzesgyarmat Mátyás",
      bic: "MKKBHUHB"
    },
    10108642: {
      name: "MBH 504 Szeghalom Tildy",
      bic: "MKKBHUHB"
    },
    10108659: {
      name: "MBH 504 Vésztő Kossuth",
      bic: "MKKBHUHB"
    },
    10108666: {
      name: "MBH 504 Székesfehérvár Budai",
      bic: "MKKBHUHB"
    },
    10108673: {
      name: "MBH 504 Székesfehérvár Koronázó",
      bic: "MKKBHUHB"
    },
    10108680: {
      name: "MBH 504 Záhony Alkotmány",
      bic: "MKKBHUHB"
    },
    10108697: {
      name: "MBH 504 Galambok Ady",
      bic: "MKKBHUHB"
    },
    10108714: {
      name: "MBH 504 Tiszabecs Rákóczi",
      bic: "MKKBHUHB"
    },
    10108721: {
      name: "MBH 504 Balatonboglár Sétáló",
      bic: "MKKBHUHB"
    },
    10108738: {
      name: "MBH 504 Besenyőtelek Fő",
      bic: "MKKBHUHB"
    },
    10108745: {
      name: "MBH 504 Alsónémedi Fő",
      bic: "MKKBHUHB"
    },
    10108752: {
      name: "MBH 504 Hajdúböszörmény Kossuth",
      bic: "MKKBHUHB"
    },
    10108769: {
      name: "MBH 504 Kecel Fő",
      bic: "MKKBHUHB"
    },
    10108776: {
      name: "MBH 504 Nagykanizsa Erzsébet",
      bic: "MKKBHUHB"
    },
    10108783: {
      name: "MBH 504 Leányfalu Móricz",
      bic: "MKKBHUHB"
    },
    10108790: {
      name: "MBH 504 Pomáz Kossuth",
      bic: "MKKBHUHB"
    },
    10108817: {
      name: "MBH 504 Szentendre Kossuth",
      bic: "MKKBHUHB"
    },
    10108824: {
      name: "MBH 504 Tahitótfalu Petőfi",
      bic: "MKKBHUHB"
    },
    10108831: {
      name: "MBH 504 Zsadány Béke",
      bic: "MKKBHUHB"
    },
    10108848: {
      name: "MBH 504 Szentes Szabadság",
      bic: "MKKBHUHB"
    },
    10108855: {
      name: "MBH 504 Szentgotthárd Hunyadi",
      bic: "MKKBHUHB"
    },
    10108862: {
      name: "MBH 504 Szentlőrinc Munkácsy",
      bic: "MKKBHUHB"
    },
    10108879: {
      name: "MBH 504 Szerencs Rákóczi",
      bic: "MKKBHUHB"
    },
    10108893: {
      name: "MBH 504 Halmaj Fő",
      bic: "MKKBHUHB"
    },
    10108941: {
      name: "MBH 504 Szombathelyi Petőfi16",
      bic: "MKKBHUHB"
    },
    10108958: {
      name: "MBH 504 Tab Kossuth",
      bic: "MKKBHUHB"
    },
    10108965: {
      name: "MBH 504 Hőgyész Fő",
      bic: "MKKBHUHB"
    },
    10108972: {
      name: "MBH 504 Simontornya Mátyás",
      bic: "MKKBHUHB"
    },
    10108989: {
      name: "MBH 504 Tamási Szabadság",
      bic: "MKKBHUHB"
    },
    10108996: {
      name: "MBH 504 Badacsonytomaj Kert",
      bic: "MKKBHUHB"
    },
    10109007: {
      name: "MBH 504 Tapolca Fő",
      bic: "MKKBHUHB"
    },
    10109014: {
      name: "MBH 504 Tarján Rákóczi",
      bic: "MKKBHUHB"
    },
    10109021: {
      name: "MBH 504 Tatabánya Dózsa",
      bic: "MKKBHUHB"
    },
    10109038: {
      name: "MBH 504 Marcali Rákóczi",
      bic: "MKKBHUHB"
    },
    10109045: {
      name: "MBH 504 Zalakaros Petőfi",
      bic: "MKKBHUHB"
    },
    10109052: {
      name: "MBH 504 Szikszó Bolt",
      bic: "MKKBHUHB"
    },
    10109069: {
      name: "MBH 504 Tápiószele Rákóczi",
      bic: "MKKBHUHB"
    },
    10109076: {
      name: "MBH 504 Újhartyán Újsor",
      bic: "MKKBHUHB"
    },
    10109083: {
      name: "MBH 504 Szolnok Nagy",
      bic: "MKKBHUHB"
    },
    10109090: {
      name: "MBH 504 Szolnoki Kossuth",
      bic: "MKKBHUHB"
    },
    10109100: {
      name: "MBH 504 Újszász Erkel",
      bic: "MKKBHUHB"
    },
    10109117: {
      name: "MBH 504 Szigetvár József",
      bic: "MKKBHUHB"
    },
    10109124: {
      name: "MBH 504 Tarcal Fő",
      bic: "MKKBHUHB"
    },
    10109131: {
      name: "MBH 504 Vajszló Kodolányi",
      bic: "MKKBHUHB"
    },
    10200012: {
      name: "K&H Bank Zrt. 242 Pécs",
      bic: "OKHBHUHB"
    },
    10200050: {
      name: "K&H Bank Zrt. 460 Szekszárd",
      bic: "OKHBHUHB"
    },
    10200074: {
      name: "K&H Bank Zrt. 063 Kiskunfélegyháza",
      bic: "OKHBHUHB"
    },
    10200081: {
      name: "K&H Bank Zrt. 251 Baja",
      bic: "OKHBHUHB"
    },
    10200098: {
      name: "K&H Bank Zrt. 250 Kecskemét",
      bic: "OKHBHUHB"
    },
    10200108: {
      name: "K&H Bank Zrt. 062 Kiskőrös",
      bic: "OKHBHUHB"
    },
    10200115: {
      name: "K&H Bank Zrt. 813 Szarvas",
      bic: "OKHBHUHB"
    },
    10200122: {
      name: "K&H Bank Zrt. 260 Békéscsaba",
      bic: "OKHBHUHB"
    },
    10200139: {
      name: "K&H Bank Zrt. 276 Miskolc",
      bic: "OKHBHUHB"
    },
    10200146: {
      name: "K&H Bank Zrt. 502 Kazincbarcika",
      bic: "OKHBHUHB"
    },
    10200153: {
      name: "K&H Bank Zrt. 031 Sárospatak",
      bic: "OKHBHUHB"
    },
    10200160: {
      name: "K&H Bank Zrt. 032 Szerencs",
      bic: "OKHBHUHB"
    },
    10200177: {
      name: "K&H Bank Zrt. 035 Ózd",
      bic: "OKHBHUHB"
    },
    10200184: {
      name: "K&H Bank Zrt. 055 Hódmezővásárhely",
      bic: "OKHBHUHB"
    },
    10200201: {
      name: "K&H Bank Zrt. 126 Szeged",
      bic: "OKHBHUHB"
    },
    10200218: {
      name: "K&H Bank Zrt. 046 Dunaújváros",
      bic: "OKHBHUHB"
    },
    10200225: {
      name: "K&H Bank Zrt. 022 Dunaföldvár",
      bic: "OKHBHUHB"
    },
    10200232: {
      name: "K&H Bank Zrt. 290 Székesfehérvár",
      bic: "OKHBHUHB"
    },
    10200249: {
      name: "K&H Bank Zrt. 040 Győr",
      bic: "OKHBHUHB"
    },
    10200263: {
      name: "K&H Bank Zrt. 498 Kapuvár",
      bic: "OKHBHUHB"
    },
    10200270: {
      name: "K&H Bank Zrt. 331 Csorna",
      bic: "OKHBHUHB"
    },
    10200287: {
      name: "K&H Bank Zrt. 333 Mosonmagyaróvár",
      bic: "OKHBHUHB"
    },
    10200294: {
      name: "K&H Bank Zrt. 497 Sopron",
      bic: "OKHBHUHB"
    },
    10200304: {
      name: "K&H Bank Zrt. 342 Debrecen",
      bic: "OKHBHUHB"
    },
    10200335: {
      name: "K&H Bank Zrt. 025 Hajdúszoboszló",
      bic: "OKHBHUHB"
    },
    10200342: {
      name: "K&H Bank Zrt. 034 Hajdúböszörmény",
      bic: "OKHBHUHB"
    },
    10200380: {
      name: "K&H Bank Zrt. 038 Berettyóújfalu",
      bic: "OKHBHUHB"
    },
    10200421: {
      name: "K&H Bank Zrt. 052 Gyöngyös",
      bic: "OKHBHUHB"
    },
    10200445: {
      name: "K&H Bank Zrt. 350 Eger",
      bic: "OKHBHUHB"
    },
    10200452: {
      name: "K&H Bank Zrt. 091 Tatabánya",
      bic: "OKHBHUHB"
    },
    10200483: {
      name: "K&H Bank Zrt. 364 Esztergom",
      bic: "OKHBHUHB"
    },
    10200490: {
      name: "K&H Bank Zrt. 078 Salgótarján",
      bic: "OKHBHUHB"
    },
    10200500: {
      name: "K&H Bank Zrt. 133 Pásztó",
      bic: "OKHBHUHB"
    },
    10200531: {
      name: "K&H Bank Zrt. 392 Siófok",
      bic: "OKHBHUHB"
    },
    10200548: {
      name: "K&H Bank Zrt. 391 Tab",
      bic: "OKHBHUHB"
    },
    10200555: {
      name: "K&H Bank Zrt. 440 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10200562: {
      name: "K&H Bank Zrt. 067 Mátészalka",
      bic: "OKHBHUHB"
    },
    10200586: {
      name: "K&H Bank Zrt. 056 Jászberény",
      bic: "OKHBHUHB"
    },
    10200603: {
      name: "K&H Bank Zrt. 060 Törökszentmiklós",
      bic: "OKHBHUHB"
    },
    10200610: {
      name: "K&H Bank Zrt. 499 Szolnok",
      bic: "OKHBHUHB"
    },
    10200627: {
      name: "K&H Bank Zrt. 108 Dombóvár",
      bic: "OKHBHUHB"
    },
    10200634: {
      name: "K&H Bank Zrt. 081 Ajka",
      bic: "OKHBHUHB"
    },
    10200641: {
      name: "K&H Bank Zrt. 474 Szombathely",
      bic: "OKHBHUHB"
    },
    10200665: {
      name: "K&H Bank Zrt. 066 Kőszeg",
      bic: "OKHBHUHB"
    },
    10200689: {
      name: "K&H Bank Zrt. 473 Sárvár",
      bic: "OKHBHUHB"
    },
    10200696: {
      name: "K&H Bank Zrt. 471 Celldömölk",
      bic: "OKHBHUHB"
    },
    10200706: {
      name: "K&H Bank Zrt. 472 Körmend",
      bic: "OKHBHUHB"
    },
    10200713: {
      name: "K&H Bank Zrt. 404 Veszprém",
      bic: "OKHBHUHB"
    },
    10200720: {
      name: "K&H Bank Zrt. 072 Tapolca",
      bic: "OKHBHUHB"
    },
    10200737: {
      name: "K&H Bank Zrt. 484 Pápa",
      bic: "OKHBHUHB"
    },
    10200751: {
      name: "K&H Bank Zrt. 404 Veszprém",
      bic: "OKHBHUHB"
    },
    10200768: {
      name: "K&H Bank Zrt. 071 Nagykanizsa",
      bic: "OKHBHUHB"
    },
    10200782: {
      name: "K&H Bank Zrt. 490 Zalaegerszeg",
      bic: "OKHBHUHB"
    },
    10200799: {
      name: "K&H Bank Zrt. 390 Kaposvár",
      bic: "OKHBHUHB"
    },
    10200809: {
      name: "K&H Bank Zrt. 080 Letenye",
      bic: "OKHBHUHB"
    },
    10200823: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10200830: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10200847: {
      name: "K&H Bank Zrt. 111 Budapest",
      bic: "OKHBHUHB"
    },
    10200854: {
      name: "K&H Bank Zrt. 095 Budapest",
      bic: "OKHBHUHB"
    },
    10200878: {
      name: "K&H Bank Zrt. 087 Budapest",
      bic: "OKHBHUHB"
    },
    10200885: {
      name: "K&H Bank Zrt. 095 Budapest",
      bic: "OKHBHUHB"
    },
    10200892: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10200902: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10200919: {
      name: "K&H Bank Zrt. 099 Vác",
      bic: "OKHBHUHB"
    },
    10200926: {
      name: "K&H Bank Zrt. 313 Érd",
      bic: "OKHBHUHB"
    },
    10200933: {
      name: "K&H Bank Zrt. Számvitel",
      bic: "OKHBHUHB"
    },
    10200940: {
      name: "K&H Bank Zrt. 216 Budapest",
      bic: "OKHBHUHB"
    },
    10200964: {
      name: "K&H Bank Zrt. 096 Budapest",
      bic: "OKHBHUHB"
    },
    10200971: {
      name: "K&H Bank Zrt. 100 Budapest",
      bic: "OKHBHUHB"
    },
    10201006: {
      name: "K&H Bank Zrt. Vállalat",
      bic: "OKHBHUHB"
    },
    10201013: {
      name: "K&H Bank Zrt. 101 Mór",
      bic: "OKHBHUHB"
    },
    10201075: {
      name: "K&H Bank Zrt. Lakossági bankkártyafiók",
      bic: "OKHBHUHB"
    },
    10201099: {
      name: "K&H Bank Zrt. 109 Budapest",
      bic: "OKHBHUHB"
    },
    10201109: {
      name: "K&H Bank Zrt. 109 Budapest",
      bic: "OKHBHUHB"
    },
    10205000: {
      name: "K&H Bank Zrt. Lakosság",
      bic: "OKHBHUHB"
    },
    10300002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    10400023: {
      name: "K&H Bank Zrt. 002 Budapest",
      bic: "OKHBHUHB"
    },
    10400054: {
      name: "K&H Bank Zrt. 105 Budapest",
      bic: "OKHBHUHB"
    },
    10400061: {
      name: "K&H Bank Zrt. 006 Békéscsaba",
      bic: "OKHBHUHB"
    },
    10400085: {
      name: "K&H Bank Zrt. 008 Budapest",
      bic: "OKHBHUHB"
    },
    10400126: {
      name: "K&H Bank Zrt. 012 Budapest",
      bic: "OKHBHUHB"
    },
    10400140: {
      name: "K&H Bank Zrt. 014 Budapest",
      bic: "OKHBHUHB"
    },
    10400157: {
      name: "K&H Bank Zrt. 015 Budapest",
      bic: "OKHBHUHB"
    },
    10400164: {
      name: "K&H Bank Zrt.016 Budapest",
      bic: "OKHBHUHB"
    },
    10400171: {
      name: "K&H Bank Zrt. 017 Budapest",
      bic: "OKHBHUHB"
    },
    10400188: {
      name: "K&H Bank Zrt. 018 Budapest",
      bic: "OKHBHUHB"
    },
    10400195: {
      name: "K&H Bank Zrt. 019 Budapest",
      bic: "OKHBHUHB"
    },
    10400205: {
      name: "K&H Bank Zrt. 020 Budapest",
      bic: "OKHBHUHB"
    },
    10400212: {
      name: "K&H Bank Zrt. 021 Budapest",
      bic: "OKHBHUHB"
    },
    10400229: {
      name: "K&H Bank Zrt. 022 Dunaföldvár",
      bic: "OKHBHUHB"
    },
    10400243: {
      name: "K&H Bank Zrt. 228 Budapest",
      bic: "OKHBHUHB"
    },
    10400250: {
      name: "K&H Bank Zrt. 025 Hajdúszoboszló",
      bic: "OKHBHUHB"
    },
    10400267: {
      name: "K&H Bank Zrt. 128 Budapest",
      bic: "OKHBHUHB"
    },
    10400315: {
      name: "K&H Bank Zrt. 031 Sárospatak",
      bic: "OKHBHUHB"
    },
    10400322: {
      name: "K&H Bank Zrt. 032 Szerencs",
      bic: "OKHBHUHB"
    },
    10400339: {
      name: "K&H Bank Zrt. 033 Debrecen",
      bic: "OKHBHUHB"
    },
    10400346: {
      name: "K&H Bank Zrt. 034 Hajdúböszörmény",
      bic: "OKHBHUHB"
    },
    10400353: {
      name: "K&H Bank Zrt. 035 Ózd",
      bic: "OKHBHUHB"
    },
    10400384: {
      name: "K&H Bank Zrt. 038 Berettyóújfalu",
      bic: "OKHBHUHB"
    },
    10400401: {
      name: "K&H Bank Zrt. 040 Győr",
      bic: "OKHBHUHB"
    },
    10400418: {
      name: "K&H Bank Zrt. 251 Baja",
      bic: "OKHBHUHB"
    },
    10400425: {
      name: "K&H Bank Zrt. 042 Balatonfüred",
      bic: "OKHBHUHB"
    },
    10400463: {
      name: "K&H Bank Zrt. 046 Dunaújváros",
      bic: "OKHBHUHB"
    },
    10400494: {
      name: "K&H Bank Zrt. 049 Gödöllő",
      bic: "OKHBHUHB"
    },
    10400504: {
      name: "K&H Bank Zrt. 052 Gyöngyös",
      bic: "OKHBHUHB"
    },
    10400511: {
      name: "K&H Bank Zrt. 051 Győr",
      bic: "OKHBHUHB"
    },
    10400528: {
      name: "K&H Bank Zrt. 052 Gyöngyös",
      bic: "OKHBHUHB"
    },
    10400535: {
      name: "K&H Bank Zrt. 243 Siklós",
      bic: "OKHBHUHB"
    },
    10400559: {
      name: "K&H Bank Zrt. 055 Hódmezővásárhely",
      bic: "OKHBHUHB"
    },
    10400566: {
      name: "K&H Bank Zrt. 056 Jászberény",
      bic: "OKHBHUHB"
    },
    10400580: {
      name: "K&H Bank Zrt. 390 Kaposvár",
      bic: "OKHBHUHB"
    },
    10400607: {
      name: "K&H Bank Zrt. 060 Törökszentmiklós",
      bic: "OKHBHUHB"
    },
    10400621: {
      name: "K&H Bank Zrt. 062 Kiskőrös",
      bic: "OKHBHUHB"
    },
    10400638: {
      name: "K&H Bank Zrt. 063 Kiskunfélegyháza",
      bic: "OKHBHUHB"
    },
    10400652: {
      name: "K&H Bank Zrt. 440 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10400669: {
      name: "K&H Bank Zrt. 066 Kőszeg",
      bic: "OKHBHUHB"
    },
    10400676: {
      name: "K&H Bank Zrt. 067 Mátészalka",
      bic: "OKHBHUHB"
    },
    10400690: {
      name: "K&H Bank Zrt. 069 Miskolc",
      bic: "OKHBHUHB"
    },
    10400717: {
      name: "K&H Bank Zrt. 071 Nagykanizsa",
      bic: "OKHBHUHB"
    },
    10400724: {
      name: "K&H Bank Zrt. 072 Tapolca",
      bic: "OKHBHUHB"
    },
    10400762: {
      name: "K&H Bank Zrt. 071 Nagykanizsa",
      bic: "OKHBHUHB"
    },
    10400779: {
      name: "K&H Bank Zrt. 077 Pécs",
      bic: "OKHBHUHB"
    },
    10400786: {
      name: "K&H Bank Zrt. 078 Salgótarján",
      bic: "OKHBHUHB"
    },
    10400803: {
      name: "K&H Bank Zrt. 080 Letenye",
      bic: "OKHBHUHB"
    },
    10400810: {
      name: "K&H Bank Zrt. 081 Ajka",
      bic: "OKHBHUHB"
    },
    10400834: {
      name: "K&H Bank Zrt. 813 Szarvas",
      bic: "OKHBHUHB"
    },
    10400865: {
      name: "K&H Bank Zrt. 318 Budapest",
      bic: "OKHBHUHB"
    },
    10400872: {
      name: "K&H Bank Zrt. 087 Budapest",
      bic: "OKHBHUHB"
    },
    10400889: {
      name: "K&H Bank Zrt. 088 Székesfehérvár",
      bic: "OKHBHUHB"
    },
    10400906: {
      name: "K&H Bank Zrt. 033 Debrecen",
      bic: "OKHBHUHB"
    },
    10400913: {
      name: "K&H Bank Zrt. 091 Tatabánya",
      bic: "OKHBHUHB"
    },
    10400944: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10400951: {
      name: "K&H Bank Zrt. 095 Budapest",
      bic: "OKHBHUHB"
    },
    10400968: {
      name: "K&H Bank Zrt. 096 Budapest",
      bic: "OKHBHUHB"
    },
    10400975: {
      name: "K&H Bank Zrt. 097 Hévíz",
      bic: "OKHBHUHB"
    },
    10400982: {
      name: "K&H Bank Zrt. 019 Budapest",
      bic: "OKHBHUHB"
    },
    10400999: {
      name: "K&H Bank Zrt. 110 Budapest",
      bic: "OKHBHUHB"
    },
    10401000: {
      name: "K&H Bank Zrt. 100 Budapest",
      bic: "OKHBHUHB"
    },
    10401017: {
      name: "K&H Bank Zrt. 101 Mór",
      bic: "OKHBHUHB"
    },
    10401024: {
      name: "K&H Bank Zrt. 102 Budapest Lőrinc Cente",
      bic: "OKHBHUHB"
    },
    10401031: {
      name: "K&H Bank Zrt. 276 Miskolc",
      bic: "OKHBHUHB"
    },
    10401048: {
      name: "K&H Bank Zrt. 104 Budapest",
      bic: "OKHBHUHB"
    },
    10401055: {
      name: "K&H Bank Zrt. 105 Budapest",
      bic: "OKHBHUHB"
    },
    10401062: {
      name: "K&H Bank Zrt. 077 Pécs",
      bic: "OKHBHUHB"
    },
    10401086: {
      name: "K&H Bank Zrt. 108 Dombóvár",
      bic: "OKHBHUHB"
    },
    10401093: {
      name: "K&H Bank Zrt. 109 Budapest",
      bic: "OKHBHUHB"
    },
    10401103: {
      name: "K&H Bank Zrt. 110 Budapest",
      bic: "OKHBHUHB"
    },
    10401110: {
      name: "K&H Bank Zrt. 111 Budapest",
      bic: "OKHBHUHB"
    },
    10401141: {
      name: "K&H Bank Zrt. 114 Eger",
      bic: "OKHBHUHB"
    },
    10401158: {
      name: "K&H Bank Zrt. 440 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10401165: {
      name: "K&H Bank Zrt. 116 Kecskemét",
      bic: "OKHBHUHB"
    },
    10401172: {
      name: "K&H Bank Zrt. 390 Kaposvár",
      bic: "OKHBHUHB"
    },
    10401189: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10401196: {
      name: "K&H Bank Zrt. 119 Budapest",
      bic: "OKHBHUHB"
    },
    10401213: {
      name: "K&H Bank Zrt. 121 Budapest",
      bic: "OKHBHUHB"
    },
    10401220: {
      name: "K&H Bank Zrt. 122 Veszprém",
      bic: "OKHBHUHB"
    },
    10401251: {
      name: "K&H Bank Zrt. 280 Szeged",
      bic: "OKHBHUHB"
    },
    10401268: {
      name: "K&H Bank Zrt. 126 Szeged",
      bic: "OKHBHUHB"
    },
    10401275: {
      name: "K&H Bank Zrt. 506 Székesfehérvár",
      bic: "OKHBHUHB"
    },
    10401282: {
      name: "K&H Bank Zrt. 128 Budapest",
      bic: "OKHBHUHB"
    },
    10401309: {
      name: "K&H Bank Zrt. 033 Debrecen",
      bic: "OKHBHUHB"
    },
    10401323: {
      name: "K&H Bank Zrt. 020 Budapest",
      bic: "OKHBHUHB"
    },
    10401330: {
      name: "K&H Bank Zrt. 133 Pásztó",
      bic: "OKHBHUHB"
    },
    10401361: {
      name: "K&H Bank Zrt. 474 Szombathely",
      bic: "OKHBHUHB"
    },
    10401804: {
      name: "K&H Bank Zrt. 180 Budapest",
      bic: "OKHBHUHB"
    },
    10401914: {
      name: "K&H Bank Zrt. 191 Budapest",
      bic: "OKHBHUHB"
    },
    10401921: {
      name: "K&H Bank Zrt. 192 Budapest",
      bic: "OKHBHUHB"
    },
    10401938: {
      name: "K&H Bank Zrt. 193 Budapest Promontor",
      bic: "OKHBHUHB"
    },
    10401945: {
      name: "K&H Bank Zrt. 194 Budapest",
      bic: "OKHBHUHB"
    },
    10401952: {
      name: "K&H Bank Zrt. 018 Budapest",
      bic: "OKHBHUHB"
    },
    10401969: {
      name: "K&H Bank Zrt. 196 Tiszaújváros",
      bic: "OKHBHUHB"
    },
    10401976: {
      name: "K&H Bank Zrt. 197 Tata",
      bic: "OKHBHUHB"
    },
    10401983: {
      name: "K&H Bank Zrt. 198 Szigetszentmiklós",
      bic: "OKHBHUHB"
    },
    10401990: {
      name: "K&H Bank Zrt. 199 Nagykőrös",
      bic: "OKHBHUHB"
    },
    10402001: {
      name: "K&H Bank Zrt. 200 Bicske",
      bic: "OKHBHUHB"
    },
    10402018: {
      name: "K&H Bank Zrt. 201 Dunakeszi",
      bic: "OKHBHUHB"
    },
    10402025: {
      name: "K&H Bank Zrt. 202 Békés",
      bic: "OKHBHUHB"
    },
    10402032: {
      name: "K&H Bank Zrt. 203 Kisbér",
      bic: "OKHBHUHB"
    },
    10402049: {
      name: "K&H Bank Zrt. 204 Mezőtúr",
      bic: "OKHBHUHB"
    },
    10402056: {
      name: "K&H Bank Zrt. 205 Szécsény",
      bic: "OKHBHUHB"
    },
    10402063: {
      name: "K&H Bank Zrt. 206 Lenti",
      bic: "OKHBHUHB"
    },
    10402070: {
      name: "K&H Bank Zrt. 207 Hajdúnánás",
      bic: "OKHBHUHB"
    },
    10402087: {
      name: "K&H Bank Zrt. 208 Kiskunmajsa",
      bic: "OKHBHUHB"
    },
    10402094: {
      name: "K&H Bank Zrt. 209 Vecsés",
      bic: "OKHBHUHB"
    },
    10402104: {
      name: "K&H Bank Zrt. 210 Pilisvörösvár",
      bic: "OKHBHUHB"
    },
    10402111: {
      name: "K&H Bank Zrt. 211 Heves",
      bic: "OKHBHUHB"
    },
    10402128: {
      name: "K&H Bank Zrt. 212 Dabas",
      bic: "OKHBHUHB"
    },
    10402135: {
      name: "K&H Bank Zrt. 210 Pilisvörösvár",
      bic: "OKHBHUHB"
    },
    10402142: {
      name: "K and H Zrt. 214 Budapest",
      bic: "OKHBHUHB"
    },
    10402159: {
      name: "K&H Bank Zrt. 215 Gárdony",
      bic: "OKHBHUHB"
    },
    10402166: {
      name: "K&H Bank Zrt. 216 Budapest",
      bic: "OKHBHUHB"
    },
    10402173: {
      name: "K&H Bank Zrt. 217 Kistelek",
      bic: "OKHBHUHB"
    },
    10402180: {
      name: "K&H Bank Zrt. 071 Nagykanizsa",
      bic: "OKHBHUHB"
    },
    10402197: {
      name: "K&H Bank Zrt. 219 Fót",
      bic: "OKHBHUHB"
    },
    10402207: {
      name: "K&H Bank Zrt. 220 Tiszafüred",
      bic: "OKHBHUHB"
    },
    10402214: {
      name: "K&H Bank Zrt. Eger",
      bic: "OKHBHUHB"
    },
    10402221: {
      name: "K&H Bank Zrt. 222 Enying",
      bic: "OKHBHUHB"
    },
    10402238: {
      name: "K&H Bank Zrt. 223 Tolna",
      bic: "OKHBHUHB"
    },
    10402245: {
      name: "K&H Bank Nyrt. 224 Gyomaendrőd",
      bic: "OKHBHUHB"
    },
    10402252: {
      name: "K&H Bank Zrt. 081 Ajka",
      bic: "OKHBHUHB"
    },
    10402269: {
      name: "K&H Bank Zrt. 490 Zalaegerszeg",
      bic: "OKHBHUHB"
    },
    10402283: {
      name: "K&H Bank Zrt. 228 Budapest",
      bic: "OKHBHUHB"
    },
    10402290: {
      name: "K&H Bank Zrt. 229 Balatonalmádi",
      bic: "OKHBHUHB"
    },
    10402300: {
      name: "K&H Bank Zrt. 230 Ráckeve",
      bic: "OKHBHUHB"
    },
    10402317: {
      name: "K&H Bank Zrt. 062 Kiskőrös",
      bic: "OKHBHUHB"
    },
    10402324: {
      name: "K&H Bank Zrt. 232 Zirc",
      bic: "OKHBHUHB"
    },
    10402331: {
      name: "K&H Bank Zrt. 233 Tiszakécske",
      bic: "OKHBHUHB"
    },
    10402348: {
      name: "K&H Bank Zrt. 234 Jánoshalma",
      bic: "OKHBHUHB"
    },
    10402355: {
      name: "K&H Bank Zrt. 490 Zalaegerszeg",
      bic: "OKHBHUHB"
    },
    10402379: {
      name: "K&H Bank Zrt. 237 Soltvadkert",
      bic: "OKHBHUHB"
    },
    10402386: {
      name: "K&H Bank Zrt. 051 Győr",
      bic: "OKHBHUHB"
    },
    10402393: {
      name: "K&H Bank Zrt. 333 Mosonmagyaróvár",
      bic: "OKHBHUHB"
    },
    10402410: {
      name: "K&H Bank Zrt. 241 Mohács",
      bic: "OKHBHUHB"
    },
    10402427: {
      name: "K&H Bank Zrt. 242 Pécs",
      bic: "OKHBHUHB"
    },
    10402434: {
      name: "K&H Bank Zrt. 243 Siklós",
      bic: "OKHBHUHB"
    },
    10402441: {
      name: "K&H Bank Zrt. 440 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10402458: {
      name: "K&H Bank Zrt. 245 Szigetvár",
      bic: "OKHBHUHB"
    },
    10402465: {
      name: "K&H Bank Zrt. 246 Balmazújváros",
      bic: "OKHBHUHB"
    },
    10402472: {
      name: "K&H Bank Zrt. 035 Ózd",
      bic: "OKHBHUHB"
    },
    10402489: {
      name: "K&H Bank Zrt. 202 Békés",
      bic: "OKHBHUHB"
    },
    10402496: {
      name: "K&H Bank Zrt. 249 Dorog",
      bic: "OKHBHUHB"
    },
    10402506: {
      name: "K&H Bank Zrt. 250 Kecskemét",
      bic: "OKHBHUHB"
    },
    10402513: {
      name: "K&H Bank Zrt. 251 Baja",
      bic: "OKHBHUHB"
    },
    10402537: {
      name: "K&H Bank Zrt. 253 Kalocsa",
      bic: "OKHBHUHB"
    },
    10402544: {
      name: "K&H Bank Zrt. Orosháza",
      bic: "OKHBHUHB"
    },
    10402551: {
      name: "K&H Bank Zrt. 257 Tiszaföldvár",
      bic: "OKHBHUHB"
    },
    10402568: {
      name: "K&H Bank Zrt. 256 Kiskunhalas",
      bic: "OKHBHUHB"
    },
    10402575: {
      name: "K&H Bank Zrt. 257 Tiszaföldvár",
      bic: "OKHBHUHB"
    },
    10402582: {
      name: "K&H Bank Zrt. 262 Gyula",
      bic: "OKHBHUHB"
    },
    10402599: {
      name: "K&H Bank Zrt. 259 Lajosmizse",
      bic: "OKHBHUHB"
    },
    10402609: {
      name: "K&H Bank Zrt. 260 Békéscsaba",
      bic: "OKHBHUHB"
    },
    10402616: {
      name: "K&H Bank Zrt. 055 Hódmezővásárhely",
      bic: "OKHBHUHB"
    },
    10402623: {
      name: "K&H Bank Zrt. 262 Gyula",
      bic: "OKHBHUHB"
    },
    10402630: {
      name: "K&H Bank Zrt. 263 Mezőkovácsháza",
      bic: "OKHBHUHB"
    },
    10402647: {
      name: "K&H Bank Zrt. 264 Orosháza",
      bic: "OKHBHUHB"
    },
    10402654: {
      name: "K&H Bank Zrt. 265 Polgárdi",
      bic: "OKHBHUHB"
    },
    10402661: {
      name: "K&H Bank Zrt. 266 Szeghalom",
      bic: "OKHBHUHB"
    },
    10402678: {
      name: "K&H Bank Zrt. Ráckeve",
      bic: "OKHBHUHB"
    },
    10402685: {
      name: "K&H Bank Zrt. 268 Tiszavasvári",
      bic: "OKHBHUHB"
    },
    10402692: {
      name: "K&H Bank Zrt. Miskolc",
      bic: "OKHBHUHB"
    },
    10402702: {
      name: "K&H Bank Zrt. 270 Szentgotthárd",
      bic: "OKHBHUHB"
    },
    10402719: {
      name: "K&H Bank Zrt. 271 Ács",
      bic: "OKHBHUHB"
    },
    10402726: {
      name: "K&H Bank Zrt. 272 Encs",
      bic: "OKHBHUHB"
    },
    10402733: {
      name: "K&H Bank Zrt. 273 Mezőkövesd",
      bic: "OKHBHUHB"
    },
    10402740: {
      name: "K&H Bank Zrt. 274 Sümeg",
      bic: "OKHBHUHB"
    },
    10402757: {
      name: "K&H Bank Zrt. 275 Sátoraljaújhely",
      bic: "OKHBHUHB"
    },
    10402764: {
      name: "K&H Bank Zrt. 276 Miskolc",
      bic: "OKHBHUHB"
    },
    10402771: {
      name: "K&H Bank Zrt. 277 Balassagyarmat",
      bic: "OKHBHUHB"
    },
    10402788: {
      name: "K&H Bank Zrt. 473 Sárvár",
      bic: "OKHBHUHB"
    },
    10402795: {
      name: "K&H Bank Zrt. 279 Monor",
      bic: "OKHBHUHB"
    },
    10402805: {
      name: "K&H Bank Zrt. 280 Szeged",
      bic: "OKHBHUHB"
    },
    10402812: {
      name: "K&H Bank Zrt. 126 Szeged",
      bic: "OKHBHUHB"
    },
    10402829: {
      name: "K&H Bank Zrt. 282 Makó",
      bic: "OKHBHUHB"
    },
    10402836: {
      name: "K&H Bank Zrt. 283 Szentes",
      bic: "OKHBHUHB"
    },
    10402843: {
      name: "K&H Bank Zrt. 284 Bácsalmás",
      bic: "OKHBHUHB"
    },
    10402850: {
      name: "K&H Bank Zrt. 353 Hatvan",
      bic: "OKHBHUHB"
    },
    10402867: {
      name: "K&H Bank Zrt. 286 Kisújszállás",
      bic: "OKHBHUHB"
    },
    10402874: {
      name: "K&H Bank Zrt. 502 Kazincbarcika",
      bic: "OKHBHUHB"
    },
    10402881: {
      name: "K&H Bank Zrt. Dabas",
      bic: "OKHBHUHB"
    },
    10402898: {
      name: "K&H Bank Zrt. 021 Budapest",
      bic: "OKHBHUHB"
    },
    10402908: {
      name: "K&H Bank Zrt. 290 Székesfehérvár",
      bic: "OKHBHUHB"
    },
    10402915: {
      name: "K&H Bank Zrt. 291 Aszód",
      bic: "OKHBHUHB"
    },
    10402922: {
      name: "K&H Bank Zrt. 292 Gyömrő",
      bic: "OKHBHUHB"
    },
    10402939: {
      name: "K&H Bank Zrt. 293 Bük",
      bic: "OKHBHUHB"
    },
    10402946: {
      name: "K&H Bank Zrt. 294 Sárbogárd",
      bic: "OKHBHUHB"
    },
    10402953: {
      name: "K&H Bank Zrt. 488 Várpalota",
      bic: "OKHBHUHB"
    },
    10402960: {
      name: "K&H Bank Zrt. 296 Jászárokszállás",
      bic: "OKHBHUHB"
    },
    10402977: {
      name: "K&H Bank Zrt. Cegléd",
      bic: "OKHBHUHB"
    },
    10402984: {
      name: "K&H Bank Zrt. 022 Dunaföldvár",
      bic: "OKHBHUHB"
    },
    10402991: {
      name: "K&H Bank Zrt. 299 Veresegyháza",
      bic: "OKHBHUHB"
    },
    10403002: {
      name: "K&H Bank Zrt. 272. Encs",
      bic: "OKHBHUHB"
    },
    10403033: {
      name: "K&H Bank Zrt. 443 Kisvárda",
      bic: "OKHBHUHB"
    },
    10403040: {
      name: "K&H Bank Zrt. 304 Balatonboglár",
      bic: "OKHBHUHB"
    },
    10403057: {
      name: "K&H Bank Zrt. 305 Pomáz",
      bic: "OKHBHUHB"
    },
    10403064: {
      name: "K&H Bank Zrt. 375 Budaörs",
      bic: "OKHBHUHB"
    },
    10403071: {
      name: "K&H Bank Zrt. 292 Gyömrő",
      bic: "OKHBHUHB"
    },
    10403088: {
      name: "K&H Bank Zrt. 499 Szolnok",
      bic: "OKHBHUHB"
    },
    10403095: {
      name: "K&H Bank Zrt. 309 Budakeszi",
      bic: "OKHBHUHB"
    },
    10403105: {
      name: "K&H Bank Zrt.310 Dunaharaszti",
      bic: "OKHBHUHB"
    },
    10403112: {
      name: "K&H Bank Zrt. 311 Szentendre",
      bic: "OKHBHUHB"
    },
    10403129: {
      name: "K&H Bank Zrt. 312 Cegléd",
      bic: "OKHBHUHB"
    },
    10403136: {
      name: "K&H Bank Zrt. 313 Érd",
      bic: "OKHBHUHB"
    },
    10403143: {
      name: "K&H Bank Zrt. Jászberény",
      bic: "OKHBHUHB"
    },
    10403167: {
      name: "K&H Bank Zrt. 096 Budapest",
      bic: "OKHBHUHB"
    },
    10403174: {
      name: "K&H Bank Zrt. 317 Martonvásár",
      bic: "OKHBHUHB"
    },
    10403181: {
      name: "K&H Bank Zrt. 318 Budapest",
      bic: "OKHBHUHB"
    },
    10403198: {
      name: "K&H Bank Zrt. 405 Sopron",
      bic: "OKHBHUHB"
    },
    10403208: {
      name: "K&H Bank Zrt. 320 Biatorbágy",
      bic: "OKHBHUHB"
    },
    10403215: {
      name: "K&H Bank Zrt. Esztergom",
      bic: "OKHBHUHB"
    },
    10403222: {
      name: "K&H Bank Zrt. 322 Barcs",
      bic: "OKHBHUHB"
    },
    10403239: {
      name: "K&H Bank Zrt. 323 Budapest",
      bic: "OKHBHUHB"
    },
    10403246: {
      name: "K&H Bank Zrt. 110 Vác",
      bic: "OKHBHUHB"
    },
    10403253: {
      name: "K&H Bank Zrt. 325 Göd",
      bic: "OKHBHUHB"
    },
    10403277: {
      name: "K&H Bank Zrt. 440 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10403291: {
      name: "K&H Bank Zrt. Budapest",
      bic: "OKHBHUHB"
    },
    10403301: {
      name: "K&H Bank Zrt. 330 Budapest",
      bic: "OKHBHUHB"
    },
    10403318: {
      name: "K&H Bank Zrt. 331 Csorna",
      bic: "OKHBHUHB"
    },
    10403332: {
      name: "K&H Bank Zrt. 333 Mosonmagyaróvár",
      bic: "OKHBHUHB"
    },
    10403356: {
      name: "K&H Bank Zrt. 335 Győr",
      bic: "OKHBHUHB"
    },
    10403363: {
      name: "K&H Bank Zrt. 336 Budapest",
      bic: "OKHBHUHB"
    },
    10403370: {
      name: "K&H Bank Zrt. 337 Csillaghegy",
      bic: "OKHBHUHB"
    },
    10403387: {
      name: "K&H Bank Zrt. 338 Corvin Negyed",
      bic: "OKHBHUHB"
    },
    10403394: {
      name: "K&H Bank Zrt. 339 Gazdagrét",
      bic: "OKHBHUHB"
    },
    10403404: {
      name: "K&H Bank Zrt.340 Budapest Soroksár",
      bic: "OKHBHUHB"
    },
    10403411: {
      name: "K&H Bank Zrt. 341 Budagyöngye",
      bic: "OKHBHUHB"
    },
    10403428: {
      name: "K&H Bank Zrt. 342 Debrecen",
      bic: "OKHBHUHB"
    },
    10403435: {
      name: "K&H Bank Zrt. 343 Duna Plaza",
      bic: "OKHBHUHB"
    },
    10403459: {
      name: "K&H Bank Zrt. 345 Püspökladány",
      bic: "OKHBHUHB"
    },
    10403466: {
      name: "K&H Bank Zrt. 346 Westend",
      bic: "OKHBHUHB"
    },
    10403473: {
      name: "K&H Bank Zrt. 347 Sopron",
      bic: "OKHBHUHB"
    },
    10403480: {
      name: "K&H Bank Zrt. 348 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10403497: {
      name: "K&H Bank Zrt. Budapest, Árkád",
      bic: "OKHBHUHB"
    },
    10403507: {
      name: "K&H Bank Zrt. 350 Eger",
      bic: "OKHBHUHB"
    },
    10403538: {
      name: "K&H Bank Zrt. 353 Hatvan",
      bic: "OKHBHUHB"
    },
    10403631: {
      name: "K&H Bank Zrt. 363 Komárom",
      bic: "OKHBHUHB"
    },
    10403648: {
      name: "K&H Bank Zrt. 364 Esztergom",
      bic: "OKHBHUHB"
    },
    10403758: {
      name: "K&H Bank Zrt. 375 Budaörs",
      bic: "OKHBHUHB"
    },
    10403909: {
      name: "K&H Bank Zrt. 390 Kaposvár",
      bic: "OKHBHUHB"
    },
    10403916: {
      name: "K&H Bank Zrt. 391 Tab",
      bic: "OKHBHUHB"
    },
    10403923: {
      name: "K&H Bank Zrt 392 Siófok",
      bic: "OKHBHUHB"
    },
    10403930: {
      name: "K&H Bank Zrt. 304 Balatonboglár",
      bic: "OKHBHUHB"
    },
    10403947: {
      name: "K&H Bank Zrt. 394 Marcali",
      bic: "OKHBHUHB"
    },
    10403954: {
      name: "K&H Bank Zrt. 395 Nagyatád",
      bic: "OKHBHUHB"
    },
    10404003: {
      name: "K&H Bank Zrt. Számvitel",
      bic: "OKHBHUHB"
    },
    10404010: {
      name: "K&H Bank Zrt. Devizakönyvelés",
      bic: "OKHBHUHB"
    },
    10404027: {
      name: "K&H Bank Zrt. 402 Budapest",
      bic: "OKHBHUHB"
    },
    10404034: {
      name: "K&H Bank Zrt. Központi Értéktár",
      bic: "OKHBHUHB"
    },
    10404041: {
      name: "K&H Bank Zrt. 404 Veszprém",
      bic: "OKHBHUHB"
    },
    10404058: {
      name: "K&H Bank Zrt. 405 Sopron",
      bic: "OKHBHUHB"
    },
    10404065: {
      name: "K&H Bank Zrt. 406 Budapest",
      bic: "OKHBHUHB"
    },
    10404072: {
      name: "K&H Bank Zrt. 407 Budapest",
      bic: "OKHBHUHB"
    },
    10404089: {
      name: "K&H Bank Zrt. 408 Budapest",
      bic: "OKHBHUHB"
    },
    10404216: {
      name: "K&H Bank Zrt. Private Banking",
      bic: "OKHBHUHB"
    },
    10404223: {
      name: "K&H Bank Zrt. ATM befizetés",
      bic: "OKHBHUHB"
    },
    10404247: {
      name: "K&H Bank Zrt. Lakosság",
      bic: "OKHBHUHB"
    },
    10404302: {
      name: "K&H Bank Zrt. 430 Komló",
      bic: "OKHBHUHB"
    },
    10404326: {
      name: "K&H Bank Zrt. 432 Paks",
      bic: "OKHBHUHB"
    },
    10404405: {
      name: "K&H Bank Zrt. 440 Nyíregyháza",
      bic: "OKHBHUHB"
    },
    10404429: {
      name: "K&H Bank Zrt. 442 Fehérgyarmat",
      bic: "OKHBHUHB"
    },
    10404436: {
      name: "K&H Bank Zrt. 443 Kisvárda",
      bic: "OKHBHUHB"
    },
    10404467: {
      name: "K&H Bank Zrt. 446 Nyírbátor",
      bic: "OKHBHUHB"
    },
    10404481: {
      name: "K&H Bank Zrt. 448 Vásárosnamény",
      bic: "OKHBHUHB"
    },
    10404508: {
      name: "K&H Bank Zrt. 499 Szolnok",
      bic: "OKHBHUHB"
    },
    10404522: {
      name: "K&H Bank Zrt. 452 Karcag",
      bic: "OKHBHUHB"
    },
    10404601: {
      name: "K&H Bank Zrt. 460 Szekszárd",
      bic: "OKHBHUHB"
    },
    10404687: {
      name: "K&H Bank Zrt. 468 Bonyhád",
      bic: "OKHBHUHB"
    },
    10404711: {
      name: "K&H Bank Zrt. 471 Celldömölk",
      bic: "OKHBHUHB"
    },
    10404728: {
      name: "K&H Bank Zrt. 472 Körmend",
      bic: "OKHBHUHB"
    },
    10404735: {
      name: "K&H Bank Zrt. 473 Sárvár",
      bic: "OKHBHUHB"
    },
    10404742: {
      name: "K&H Bank Zrt. 474 Szombathely",
      bic: "OKHBHUHB"
    },
    10404845: {
      name: "K&H Bank Zrt. 484 Pápa",
      bic: "OKHBHUHB"
    },
    10404883: {
      name: "K&H Bank Zrt. 488 Várpalota",
      bic: "OKHBHUHB"
    },
    10404900: {
      name: "K&H Bank Zrt. 490 Zalaegerszeg",
      bic: "OKHBHUHB"
    },
    10404948: {
      name: "K&H Bank Zrt. 494 Zalaszentgrót",
      bic: "OKHBHUHB"
    },
    10404955: {
      name: "K&H Bank Zrt. 495 Keszthely",
      bic: "OKHBHUHB"
    },
    10404962: {
      name: "K&H Bank Zrt. 460 Szekszárd",
      bic: "OKHBHUHB"
    },
    10404979: {
      name: "K&H Bank Zrt. 405 Sopron",
      bic: "OKHBHUHB"
    },
    10404986: {
      name: "K&H Bank Zrt. 498 Kapuvár",
      bic: "OKHBHUHB"
    },
    10404993: {
      name: "K&H Bank Zrt. 499 Szolnok",
      bic: "OKHBHUHB"
    },
    10405004: {
      name: "K&H Bank Zrt. 500 Budapest",
      bic: "OKHBHUHB"
    },
    10405011: {
      name: "K&H Bank Zrt. 242 Pécs",
      bic: "OKHBHUHB"
    },
    10405028: {
      name: "K&H Bank Zrt. 502 Kazincbarcika",
      bic: "OKHBHUHB"
    },
    10405042: {
      name: "K&H Bank Zrt. 012 Budapest",
      bic: "OKHBHUHB"
    },
    10405066: {
      name: "K&H Bank Zrt. 506 Székesfehérvár",
      bic: "OKHBHUHB"
    },
    10405073: {
      name: "K&H Bank Zrt. 507 Csongrád",
      bic: "OKHBHUHB"
    },
    10405509: {
      name: "K&H Bank Zrt. PEK fiók",
      bic: "OKHBHUHB"
    },
    10406500: {
      name: "K&H Bank Zrt. Értékpapír rendszer",
      bic: "OKHBHUHB"
    },
    10406593: {
      name: "K&H Bank Zrt. Értékpapír Call Center",
      bic: "OKHBHUHB"
    },
    10407501: {
      name: "K&H Bank Zrt. Hitelkártya",
      bic: "OKHBHUHB"
    },
    10408007: {
      name: "K&H Bank Zrt. BPNyugat",
      bic: "OKHBHUHB"
    },
    10408014: {
      name: "K&H Bank Zrt. BPKelet",
      bic: "OKHBHUHB"
    },
    10408117: {
      name: "K&H Bank Zrt. 811 Oroszlány",
      bic: "OKHBHUHB"
    },
    10408131: {
      name: "K&H Bank Zrt. 813 Szarvas",
      bic: "OKHBHUHB"
    },
    10408155: {
      name: "K&H Bank Zrt. 815 Tamási",
      bic: "OKHBHUHB"
    },
    10408502: {
      name: "K&H Bank Zrt. Call Center",
      bic: "OKHBHUHB"
    },
    10409015: {
      name: "K&H Bank Zrt. 901 Budapest",
      bic: "OKHBHUHB"
    },
    10409170: {
      name: "K&H Bank Zrt. Hitelkártya rendszer",
      bic: "OKHBHUHB"
    },
    10409345: {
      name: "K&H Bank Zrt. Lakossági hitel",
      bic: "OKHBHUHB"
    },
    10409716: {
      name: "K&H Bank Zrt. Központi BO 0971",
      bic: "OKHBHUHB"
    },
    10409723: {
      name: "K&H Bank Zrt. Lízing",
      bic: "OKHBHUHB"
    },
    10409747: {
      name: "K&H Bank Zrt Főkönyvi Adminisztrációs",
      bic: "OKHBHUHB"
    },
    10409754: {
      name: "K&H SZÉP Kártya központ",
      bic: "OKHBHUHB"
    },
    10409761: {
      name: "K&H Bank Zrt. 976 Okmányos",
      bic: "OKHBHUHB"
    },
    10409778: {
      name: "K&H Bank Zrt. Bankkártya",
      bic: "OKHBHUHB"
    },
    10409785: {
      name: "K&H Bank Zrt. Finforce",
      bic: "OKHBHUHB"
    },
    10409792: {
      name: "K&H Bank Zrt. Humánköltség",
      bic: "OKHBHUHB"
    },
    10409802: {
      name: "K&H Bank Zrt. Back Office",
      bic: "OKHBHUHB"
    },
    10409819: {
      name: "K&H Bank Zrt. Hitel Back Office",
      bic: "OKHBHUHB"
    },
    10409826: {
      name: "K&H Bank Zrt. Pénzügy",
      bic: "OKHBHUHB"
    },
    10409864: {
      name: "K&H Bank Zrt. Okmányos",
      bic: "OKHBHUHB"
    },
    10409895: {
      name: "K&H Bank Zrt. Nostro/Vostro department",
      bic: "OKHBHUHB"
    },
    10409998: {
      name: "K&H Bank Zrt. Központ",
      bic: "OKHBHUHB"
    },
    10410008: {
      name: "K&H Bank Zrt. Távszámla - Funda",
      bic: "OKHBHUHB"
    },
    10410015: {
      name: "K&H Bank Zrt. Távszámla- K&H Biztosító",
      bic: "OKHBHUHB"
    },
    10410022: {
      name: "K&H Bank Zrt.",
      bic: "OKHBHUHB"
    },
    10410039: {
      name: "K&H Bank Zrt.",
      bic: "OKHBHUHB"
    },
    10410046: {
      name: "K&H Bank Zrt.",
      bic: "OKHBHUHB"
    },
    10410053: {
      name: "K&H Bank Zrt.",
      bic: "OKHBHUHB"
    },
    10410060: {
      name: "K&H Bank Zrt.",
      bic: "OKHBHUHB"
    },
    10410077: {
      name: "K&H Bank Zrt. T24 központi számlanyitás",
      bic: "OKHBHUHB"
    },
    10410400: {
      name: "K&H Bank Zrt. T24",
      bic: "OKHBHUHB"
    },
    10700017: {
      name: "CIB Bank Zrt. Központ",
      bic: "CIBHHUHB"
    },
    10700024: {
      name: "CIB Bank Zrt Medve u. fiók",
      bic: "CIBHHUHB"
    },
    10700031: {
      name: "CIB Bank Zrt.  Győri  Központi fiók",
      bic: "CIBHHUHB"
    },
    10700048: {
      name: "CIB Bank Zrt. Nyíregyházi fiók",
      bic: "CIBHHUHB"
    },
    10700055: {
      name: "CIB Bank Zrt. Pécs I. Fiók",
      bic: "CIBHHUHB"
    },
    10700062: {
      name: "CIB Bank Zrt. Szegedi Központi fiók",
      bic: "CIBHHUHB"
    },
    10700079: {
      name: "CIB Bank Zrt. Andrássy úti fiók",
      bic: "CIBHHUHB"
    },
    10700086: {
      name: "CIB Bank Zrt. Miskolci Központi fiók",
      bic: "CIBHHUHB"
    },
    10700093: {
      name: "CIB Bank Zrt. Szfehérvári központi fiók",
      bic: "CIBHHUHB"
    },
    10700103: {
      name: "CIB Bank Zrt. Kecskeméti fiók",
      bic: "CIBHHUHB"
    },
    10700110: {
      name: "CIB Bank Zrt. Zalaegerszegi fiók",
      bic: "CIBHHUHB"
    },
    10700127: {
      name: "CIB Bank Zrt. Szombathelyi fiók",
      bic: "CIBHHUHB"
    },
    10700134: {
      name: "CIB Bank Zrt. Dunaújvárosi fiók",
      bic: "CIBHHUHB"
    },
    10700141: {
      name: "CIB Bank Zrt.Debrecen I.Fiók",
      bic: "CIBHHUHB"
    },
    10700158: {
      name: "CIB Bank Zrt. Hódmezővásárhelyi fiók",
      bic: "CIBHHUHB"
    },
    10700165: {
      name: "CIB Bank Zrt. Békéscsabai fiók",
      bic: "CIBHHUHB"
    },
    10700172: {
      name: "CIB Bank Zrt. Kaposvári fiók",
      bic: "CIBHHUHB"
    },
    10700189: {
      name: "CIB Bank Zrt. Veszprémi fiók",
      bic: "CIBHHUHB"
    },
    10700196: {
      name: "CIB Bank Zrt. Gödöllői fiók",
      bic: "CIBHHUHB"
    },
    10700206: {
      name: "CIB Bank Zrt. Belvárosi - Pilvax Fiók",
      bic: "CIBHHUHB"
    },
    10700220: {
      name: "CIB Bank Zrt. Salgótarjáni fiók",
      bic: "CIBHHUHB"
    },
    10700237: {
      name: "CIB Bank Zrt. Szekszárdi fiók",
      bic: "CIBHHUHB"
    },
    10700244: {
      name: "CIB Bank Zrt. Rózsakerti fiók",
      bic: "CIBHHUHB"
    },
    10700251: {
      name: "CIB Bank Zrt. Barcsi fiók",
      bic: "CIBHHUHB"
    },
    10700268: {
      name: "CIB Bank Zrt. Törökbálinti fiók",
      bic: "CIBHHUHB"
    },
    10700275: {
      name: "CIB Bank Zrt. Nagykanizsai fiók",
      bic: "CIBHHUHB"
    },
    10700282: {
      name: "CIB Bank Zrt. Egri fiók",
      bic: "CIBHHUHB"
    },
    10700299: {
      name: "CIB Bank Zrt. Gyöngyösi fiók",
      bic: "CIBHHUHB"
    },
    10700309: {
      name: "CIB Bank Zrt. Szolnoki fiók",
      bic: "CIBHHUHB"
    },
    10700316: {
      name: "CIB Bank Zrt. Orosházi fiók",
      bic: "CIBHHUHB"
    },
    10700323: {
      name: "CIB Bank Zrt. Váci fiók",
      bic: "CIBHHUHB"
    },
    10700330: {
      name: "CIB Bank Zrt. Kerepesi úti fiók",
      bic: "CIBHHUHB"
    },
    10700347: {
      name: "CIB Bank Zrt. Károly körúti fiók",
      bic: "CIBHHUHB"
    },
    10700354: {
      name: "CIB Bank Zrt. Bajai fiók",
      bic: "CIBHHUHB"
    },
    10700361: {
      name: "CIB Bank Zrt. Esztergomi fiók",
      bic: "CIBHHUHB"
    },
    10700378: {
      name: "CIB Bank Zrt. Sz. István krt-i fiók",
      bic: "CIBHHUHB"
    },
    10700385: {
      name: "CIB Bank Zrt. József krt-i fiók",
      bic: "CIBHHUHB"
    },
    10700392: {
      name: "CIB Bank Zrt. Flórián téri fiók",
      bic: "CIBHHUHB"
    },
    10700402: {
      name: "CIB Bank Zrt. Mátészalkai fiók",
      bic: "CIBHHUHB"
    },
    10700419: {
      name: "CIB Bank Zrt. Zöldfa Fiók",
      bic: "CIBHHUHB"
    },
    10700426: {
      name: "CIB Bank Zrt. Soproni fiók",
      bic: "CIBHHUHB"
    },
    10700433: {
      name: "CIB Bank Zrt. Szeged II. Fiók",
      bic: "CIBHHUHB"
    },
    10700440: {
      name: "CIB Bank Zrt. Kékgolyó utcai fiók",
      bic: "CIBHHUHB"
    },
    10700457: {
      name: "CIB Bank Zrt. Újpesti fiók",
      bic: "CIBHHUHB"
    },
    10700464: {
      name: "CIB Bank Zrt. Hilton fiók",
      bic: "CIBHHUHB"
    },
    10700471: {
      name: "CIB Bank Zrt. Győr II. Fiók",
      bic: "CIBHHUHB"
    },
    10700488: {
      name: "CIB Bank Zrt. Nyugati téri fiók",
      bic: "CIBHHUHB"
    },
    10700495: {
      name: "CIB Bank Zrt.Csillaghegyi fiók",
      bic: "CIBHHUHB"
    },
    10700505: {
      name: "CIB Bank Zrt. Váci úti fiók",
      bic: "CIBHHUHB"
    },
    10700512: {
      name: "CIB Bank Zrt.Szigetszentmiklósi fiók",
      bic: "CIBHHUHB"
    },
    10700529: {
      name: "CIB Bank Zrt. Pesterzsébeti fiók",
      bic: "CIBHHUHB"
    },
    10700536: {
      name: "CIB Bank Zrt. Tétényi úti fiók",
      bic: "CIBHHUHB"
    },
    10700543: {
      name: "CIB Bank Zrt. Kőbányai Fiók",
      bic: "CIBHHUHB"
    },
    10700550: {
      name: "CIB Bank Zrt. Szentendrei fiók",
      bic: "CIBHHUHB"
    },
    10700567: {
      name: "CIB Bank Zrt. Blaha Lujza téri fiók",
      bic: "CIBHHUHB"
    },
    10700574: {
      name: "CIB Bank Zrt. Érdi fiók",
      bic: "CIBHHUHB"
    },
    10700581: {
      name: "CIB Bank Zrt Örs vezér téri fiók",
      bic: "CIBHHUHB"
    },
    10700598: {
      name: "CIB Bank Zrt.Lövőház u.-I fiók",
      bic: "CIBHHUHB"
    },
    10700608: {
      name: "CIB Bank Zrt. Csepeli fiók",
      bic: "CIBHHUHB"
    },
    10700615: {
      name: "CIB Bank Zrt. Rákoskeresztúri fiók",
      bic: "CIBHHUHB"
    },
    10700622: {
      name: "CIB Bank Zrt. Pestszentlőrinc I. Fiók",
      bic: "CIBHHUHB"
    },
    10700646: {
      name: "CIB Bank Zrt. Dagály utcai fiók",
      bic: "CIBHHUHB"
    },
    10700653: {
      name: "CIB Bank Zrt. Dunakeszi fiók",
      bic: "CIBHHUHB"
    },
    10700660: {
      name: "CIB Bank Zrt. Újpalotai fiók",
      bic: "CIBHHUHB"
    },
    10700677: {
      name: "CIB Bank Zrt. Boráros téri fiók",
      bic: "CIBHHUHB"
    },
    10700684: {
      name: "CIB Bank Zrt. Baross téri Fiók",
      bic: "CIBHHUHB"
    },
    10700691: {
      name: "CIB Bank Zrt. Kálvin téri Fiók",
      bic: "CIBHHUHB"
    },
    10700701: {
      name: "CIB Bank Zrt. Fehérvári úti fiók",
      bic: "CIBHHUHB"
    },
    10700718: {
      name: "CIB Bank Zrt. Hűvösvölgyi Fiók",
      bic: "CIBHHUHB"
    },
    10700725: {
      name: "CIB Bank Zrt. Budafoki Fiók",
      bic: "CIBHHUHB"
    },
    10700732: {
      name: "CIB BANK ZRT. OKTOGON FIÓK",
      bic: "CIBHHUHB"
    },
    10700749: {
      name: "CIB Bank Zrt. Siófoki fiók",
      bic: "CIBHHUHB"
    },
    10700756: {
      name: "CIB Bank Zrt. Kiskunfélegyházi Fiók",
      bic: "CIBHHUHB"
    },
    10700763: {
      name: "CIB BANK ZRT. BÉCSI ÚTI FIÓK",
      bic: "CIBHHUHB"
    },
    10700770: {
      name: "CIB Bank Zrt. Campona Üzletközpont fiók",
      bic: "CIBHHUHB"
    },
    10700787: {
      name: "CIB Bank Zrt. Székesfehérvár II. Fiók",
      bic: "CIBHHUHB"
    },
    10700794: {
      name: "CIB Bank Zrt. Mátyásföldi fiók",
      bic: "CIBHHUHB"
    },
    10700914: {
      name: "CIB Bank Zrt. Technikai fiók III",
      bic: "CIBHHUHB"
    },
    10700983: {
      name: "CIB Bank Zrt. Technikai fiók II.",
      bic: "CIBHHUHB"
    },
    10700990: {
      name: "CIB Technikai fiók",
      bic: "CIBHHUHB"
    },
    10701018: {
      name: "CIB Bank Zrt. Ceglédi fiók",
      bic: "CIBHHUHB"
    },
    10701025: {
      name: "CIB Bank Zrt. Soroksár",
      bic: "CIBHHUHB"
    },
    10701032: {
      name: "CIB Bank Zrt. Tatabánya I. fiók",
      bic: "CIBHHUHB"
    },
    10701049: {
      name: "CIB Bank Zrt. Récsei Center fiók",
      bic: "CIBHHUHB"
    },
    10701056: {
      name: "CIB Bank Zrt. Lurdy ház fiók",
      bic: "CIBHHUHB"
    },
    10701063: {
      name: "CIB Bank Zrt. Campus fiók",
      bic: "CIBHHUHB"
    },
    10701070: {
      name: "CIB Bank Zrt. Tatai Fiók",
      bic: "CIBHHUHB"
    },
    10701087: {
      name: "CIB BANK ZRT. GAZDAGRÉTI FIÓK",
      bic: "CIBHHUHB"
    },
    10701094: {
      name: "CIB Bank Zrt. Fényes Elek u-i fiók",
      bic: "CIBHHUHB"
    },
    10701104: {
      name: "CIB Bank Zrt. Paksi fiók",
      bic: "CIBHHUHB"
    },
    10701111: {
      name: "CIB Bank Zrt. Keszthelyi Fiók",
      bic: "CIBHHUHB"
    },
    10701128: {
      name: "CIB Bank Zrt. MOM park fiók",
      bic: "CIBHHUHB"
    },
    10701135: {
      name: "CIB Bank Zrt. Monori Fiók",
      bic: "CIBHHUHB"
    },
    10701142: {
      name: "CIB Bank Zrt. Ajkai Fiók",
      bic: "CIBHHUHB"
    },
    10701159: {
      name: "CIB Bank Zrt. Pápai Fiók",
      bic: "CIBHHUHB"
    },
    10701166: {
      name: "CIB Bank Zrt. Mosonmagyaróvári Fiók",
      bic: "CIBHHUHB"
    },
    10701173: {
      name: "CIB Bank Zrt. Miskolc II. Fiók",
      bic: "CIBHHUHB"
    },
    10701180: {
      name: "CIB Bank Zrt. Budakeszi Fiók",
      bic: "CIBHHUHB"
    },
    10701197: {
      name: "CIB Bank Zrt. Hajdúböszörményi Fiók",
      bic: "CIBHHUHB"
    },
    10701207: {
      name: "CIB Bank Zrt. Békásmegyeri Fiók",
      bic: "CIBHHUHB"
    },
    10701214: {
      name: "CIB Bank Zrt. Pécsi fiók",
      bic: "CIBHHUHB"
    },
    10701221: {
      name: "CIB Bank Zrt. Árpád Üzletház fiók",
      bic: "CIBHHUHB"
    },
    10701238: {
      name: "CIB Bank Zrt. Kazincbarcikai fiók",
      bic: "CIBHHUHB"
    },
    10701245: {
      name: "CIB Bank Zrt. Gyulai Fiók",
      bic: "CIBHHUHB"
    },
    10701252: {
      name: "CIB Bank Zrt. Béke téri Fiók",
      bic: "CIBHHUHB"
    },
    10701269: {
      name: "CIB Bank Zrt. Új Buda Center fiók",
      bic: "CIBHHUHB"
    },
    10701276: {
      name: "CIB Bank Zrt. Vecsési fiók",
      bic: "CIBHHUHB"
    },
    10701283: {
      name: "CIB Bank Zrt. Debreceni fiók",
      bic: "CIBHHUHB"
    },
    10701290: {
      name: "CIB Bank Zrt. Ózdi fiók",
      bic: "CIBHHUHB"
    },
    10701300: {
      name: "CIB Bank Zrt. Kiskunhalasi Fiók",
      bic: "CIBHHUHB"
    },
    10701317: {
      name: "CIB Bank Zrt. Aréna Corner fiók",
      bic: "CIBHHUHB"
    },
    10701324: {
      name: "CIB BANK ZRT. OKTOGON FIÓK",
      bic: "CIBHHUHB"
    },
    10701331: {
      name: "CIB Bank Zrt. Pólus fiók",
      bic: "CIBHHUHB"
    },
    10701348: {
      name: "CIB Bank Zrt. Bosnyák téri fiók",
      bic: "CIBHHUHB"
    },
    10701355: {
      name: "CIB Bank Zrt. Balatonfüredi fiók",
      bic: "CIBHHUHB"
    },
    10701362: {
      name: "CIB Bank Zrt. Hatvani fiók",
      bic: "CIBHHUHB"
    },
    10701379: {
      name: "CIB Bank Zrt. Rákóczi téri Fiók",
      bic: "CIBHHUHB"
    },
    10701386: {
      name: "CIB Bank Zrt. Kalocsai fiók",
      bic: "CIBHHUHB"
    },
    10701393: {
      name: "CIB Bank Zrt. Komáromi fiók",
      bic: "CIBHHUHB"
    },
    10701403: {
      name: "CIB Bank Zrt. Sátoraljaújhelyi fiók",
      bic: "CIBHHUHB"
    },
    10701410: {
      name: "CIB Bank Zrt. Százhalombattai fiók",
      bic: "CIBHHUHB"
    },
    10701427: {
      name: "CIB Bank Zrt. Pilisvörösvári fiók",
      bic: "CIBHHUHB"
    },
    10701434: {
      name: "CIB Bank Zrt. Bokor utcai fiók",
      bic: "CIBHHUHB"
    },
    10701441: {
      name: "CIB Bank Zrt. Budaörsi Tesco fiók",
      bic: "CIBHHUHB"
    },
    10701458: {
      name: "CIB Bank Zrt. Szentesi fiók",
      bic: "CIBHHUHB"
    },
    10701465: {
      name: "CIB Bank Zrt. Békéscsaba III.fiók",
      bic: "CIBHHUHB"
    },
    10701472: {
      name: "CIB Bank Zrt. Karcagi fiók",
      bic: "CIBHHUHB"
    },
    10701489: {
      name: "CIB Bank Zrt. Dombóvári fiók",
      bic: "CIBHHUHB"
    },
    10701496: {
      name: "CIB Bank Zrt. Balassagyarmati fiók",
      bic: "CIBHHUHB"
    },
    10701506: {
      name: "CIB Bank Zrt. Ferenciek tere Fiók",
      bic: "CIBHHUHB"
    },
    10701513: {
      name: "CIB Bank Zrt. Móricz Zs. körtéri fiók",
      bic: "CIBHHUHB"
    },
    10701520: {
      name: "CIB Bank Zrt. Allee-Skála fiók",
      bic: "CIBHHUHB"
    },
    10701537: {
      name: "CIB Bank Zrt. Győr Árkád Fiók",
      bic: "CIBHHUHB"
    },
    10701544: {
      name: "CIB Bank Zrt. Arany János utcai fiók",
      bic: "CIBHHUHB"
    },
    10701551: {
      name: "CIB Bank Zrt. Aréna Pláza Fiók",
      bic: "CIBHHUHB"
    },
    10701568: {
      name: "CIB Bank Zrt. Boráros téri fiók",
      bic: "CIBHHUHB"
    },
    10701575: {
      name: "CIB Bank Zrt. Szeged IV. fiók",
      bic: "CIBHHUHB"
    },
    10701582: {
      name: "CIB Bank Zrt. Szolnok II",
      bic: "CIBHHUHB"
    },
    10701599: {
      name: "CIB Bank Zrt.KÖKI fiók",
      bic: "CIBHHUHB"
    },
    10702002: {
      name: "CIB Bank Zrt. Központ",
      bic: "CIBHHUHB"
    },
    10702019: {
      name: "CIB Bank Zrt. Szabadság téri Fiók",
      bic: "CIBHHUHB"
    },
    10702026: {
      name: "CIB Bank Zrt. Pécs III. fiók",
      bic: "CIBHHUHB"
    },
    10702033: {
      name: "CIB Bank Zrt. Veszprém II. fiók",
      bic: "CIBHHUHB"
    },
    10702040: {
      name: "CIB Bank Zrt. Szeged III. Fiók",
      bic: "CIBHHUHB"
    },
    10702057: {
      name: "CIB Bank Zrt. Békéscsaba II. fiók",
      bic: "CIBHHUHB"
    },
    10702064: {
      name: "CIB Bank Zrt. Debrecen Unió fiók",
      bic: "CIBHHUHB"
    },
    10702071: {
      name: "CIB Bank Zrt. Nyíregyháza II. Fiók",
      bic: "CIBHHUHB"
    },
    10702088: {
      name: "CIB Bank Zrt. Szombathely II. fiók",
      bic: "CIBHHUHB"
    },
    10702095: {
      name: "CIB Bank Zrt. Pasaréti fiók",
      bic: "CIBHHUHB"
    },
    10702105: {
      name: "CIB Bank Zrt. Székesfehérvár III.fiók",
      bic: "CIBHHUHB"
    },
    10702112: {
      name: "CIB Bank Zrt. Kecskemét II. Fiók",
      bic: "CIBHHUHB"
    },
    10702129: {
      name: "CIB Bank Zrt. Győr III. fiók",
      bic: "CIBHHUHB"
    },
    10702136: {
      name: "CIB Bank Zrt. Zuglói Fiók",
      bic: "CIBHHUHB"
    },
    10702143: {
      name: "CIB Bank Zrt. Piliscsabai Fiók",
      bic: "CIBHHUHB"
    },
    10702167: {
      name: "CIB Bank Zrt. Kaposvár II. fiók",
      bic: "CIBHHUHB"
    },
    10702198: {
      name: "CIB Bank Zrt. Bajcsy fiók",
      bic: "CIBHHUHB"
    },
    10702208: {
      name: "CIB Bank Zrt. Eger II. Fiók",
      bic: "CIBHHUHB"
    },
    10702215: {
      name: "CIB Bank Zrt. Allee Bevásárlóközpont",
      bic: "CIBHHUHB"
    },
    10702222: {
      name: "CIB Bank Zrt. Pók utcai fiók",
      bic: "CIBHHUHB"
    },
    10702239: {
      name: "CIB Bank Zrt. Szeged IV. fiók",
      bic: "CIBHHUHB"
    },
    10702246: {
      name: "CIB Bank Zrt. FLP fiók",
      bic: "CIBHHUHB"
    },
    10702260: {
      name: "CIB Bank Zrt. Vörösvári úti fiók",
      bic: "CIBHHUHB"
    },
    10702277: {
      name: "CIB Bank Zrt. Pestszentlőrinc II.",
      bic: "CIBHHUHB"
    },
    10702284: {
      name: "CIB Bank Zrt. Zalaegerszeg II.",
      bic: "CIBHHUHB"
    },
    10702291: {
      name: "CIB Bank Zrt. Tatabánya II. fiók",
      bic: "CIBHHUHB"
    },
    10702301: {
      name: "CIB Bank Zrt. Mátyásföld II. fiók",
      bic: "CIBHHUHB"
    },
    10702318: {
      name: "CIB Bank Zrt. Népfürdő utcai fiók",
      bic: "CIBHHUHB"
    },
    10702325: {
      name: "CIB Bank Zrt. Szekszárd II. fiók",
      bic: "CIBHHUHB"
    },
    10702332: {
      name: "CIB Bank Zrt. Budaörsi fiók",
      bic: "CIBHHUHB"
    },
    10702349: {
      name: "CIB Bank Zrt. Böszörményi úti fiók",
      bic: "CIBHHUHB"
    },
    10702356: {
      name: "CIB Bank Zrt. Gödöllő II. fiók",
      bic: "CIBHHUHB"
    },
    10702363: {
      name: "CIB Bank Zrt. Debrecen IV. fiók",
      bic: "CIBHHUHB"
    },
    10702370: {
      name: "CIB Bank Zrt. Belvárosi fiók",
      bic: "CIBHHUHB"
    },
    10702387: {
      name: "CIB Bank Zrt. Érd II. fiók",
      bic: "CIBHHUHB"
    },
    10702394: {
      name: "CIB Bank Zrt. Miskolc III. fiók",
      bic: "CIBHHUHB"
    },
    10702404: {
      name: "CIB Bank Zrt. Ferenc körúti fiók",
      bic: "CIBHHUHB"
    },
    10702411: {
      name: "CIB Bank Zrt. FLP Debreceni fiók",
      bic: "CIBHHUHB"
    },
    10702428: {
      name: "CIB Bank Zrt. FLP Székesfehérvári fiók",
      bic: "CIBHHUHB"
    },
    10702435: {
      name: "CIB Bank Zrt. FLP Szegedi fiók",
      bic: "CIBHHUHB"
    },
    10800007: {
      name: "Citibank Europe Plc. Mo-i Fióktelepe",
      bic: "CITIHUHX"
    },
    10800021: {
      name: "Citibank Europe Plc. Mo-i Fióktelepe",
      bic: "CITIHUHX"
    },
    10900004: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900011: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900028: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900035: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900042: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900059: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900066: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900080: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10900097: {
      name: "UniCredit Bank Hungary Zrt. Custody",
      bic: "BACXHUHB"
    },
    10910003: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10911004: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10912005: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10913006: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10914007: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10915008: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10916009: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10917000: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10918001: {
      name: "UniCredit Bank Hungary Zrt. Head Office",
      bic: "BACXHUHB"
    },
    10919002: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10920002: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10923005: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10924006: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10925007: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10940000: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10950009: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10960008: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10970007: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10980006: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    10990005: {
      name: "UniCredit Bank Hungary Zrt.",
      bic: "BACXHUHB"
    },
    11100104: {
      name: "CIB Bank Zrt. Szabadság téri Fiók",
      bic: "CIBHHUHB"
    },
    11100111: {
      name: "CIB Bank Zrt. Szabadság tér I.",
      bic: "CIBHHUHB"
    },
    11100207: {
      name: "CIB Bank Zrt. Pécs III. fiók",
      bic: "CIBHHUHB"
    },
    11100300: {
      name: "CIB Bank Zrt. Veszprém II. fiók",
      bic: "CIBHHUHB"
    },
    11100403: {
      name: "CIB Bank Zrt. Szeged III. fiók",
      bic: "CIBHHUHB"
    },
    11100506: {
      name: "CIB Bank Zrt. Békéscsaba II. fiók",
      bic: "CIBHHUHB"
    },
    11100609: {
      name: "CIB Bank Zrt. Debrecen Unió fiók",
      bic: "CIBHHUHB"
    },
    11100702: {
      name: "CIB Bank Zrt. Nyíregyháza II. fiók",
      bic: "CIBHHUHB"
    },
    11100805: {
      name: "CIB Bank Zrt. Szombathely II. fiók",
      bic: "CIBHHUHB"
    },
    11100908: {
      name: "CIB Bank Zrt. Pasaréti fiók",
      bic: "CIBHHUHB"
    },
    11101002: {
      name: "CIB Bank Zrt. Székesfehérvár III.",
      bic: "CIBHHUHB"
    },
    11101105: {
      name: "CIB Bank Zrt. Kecskemét II. Fiók",
      bic: "CIBHHUHB"
    },
    11101208: {
      name: "CIB Bank Zrt. Győr III. fiók",
      bic: "CIBHHUHB"
    },
    11101301: {
      name: "CIB Bank Zrt. Zugló",
      bic: "CIBHHUHB"
    },
    11101404: {
      name: "CIB Bank Zrt. Piliscsabai fiók",
      bic: "CIBHHUHB"
    },
    11101600: {
      name: "CIB Bank Zrt. Kaposvár II. fiók",
      bic: "CIBHHUHB"
    },
    11101806: {
      name: "CIB Bank Zrt. Astoria",
      bic: "CIBHHUHB"
    },
    11101909: {
      name: "CIB Bank Zrt. Bajcsy fiók",
      bic: "CIBHHUHB"
    },
    11102003: {
      name: "CIB Bank Zrt. Eger II. fiók",
      bic: "CIBHHUHB"
    },
    11102106: {
      name: "CIB Bank Zrt. Bartók Béla úti fiók",
      bic: "CIBHHUHB"
    },
    11102209: {
      name: "CIB Bank Zrt. Pók utcai fiók",
      bic: "CIBHHUHB"
    },
    11102302: {
      name: "CIB Bank Zrt. Szeged IV. fiók",
      bic: "CIBHHUHB"
    },
    11102405: {
      name: "CIB Bank Zrt. FLP fiók",
      bic: "CIBHHUHB"
    },
    11102601: {
      name: "CIB Bank Zrt. Vörösvári úti fiók",
      bic: "CIBHHUHB"
    },
    11102704: {
      name: "CIB Bank Zrt. Pestszentlőrinc II.",
      bic: "CIBHHUHB"
    },
    11102807: {
      name: "CIB Bank Zrt. Zalaegerszeg II.",
      bic: "CIBHHUHB"
    },
    11102900: {
      name: "CIB Bank Zrt. Tatabánya II. fiók",
      bic: "CIBHHUHB"
    },
    11103004: {
      name: "CIB Bank Zrt. Mátyásföld II. fiók",
      bic: "CIBHHUHB"
    },
    11103107: {
      name: "CIB Bank Zrt. Népfürdő utcai fiók",
      bic: "CIBHHUHB"
    },
    11103200: {
      name: "CIB Bank Zrt. Szekszárd II. fiók",
      bic: "CIBHHUHB"
    },
    11103303: {
      name: "CIB Bank Budaörsi fiók",
      bic: "CIBHHUHB"
    },
    11103406: {
      name: "CIB Bank Zrt. Böszörményi úti fiók",
      bic: "CIBHHUHB"
    },
    11103509: {
      name: "CIB Bank Zrt. Gödöllő II. fiók",
      bic: "CIBHHUHB"
    },
    11103602: {
      name: "CIB Bank Zrt. Debrecen IV. fiók",
      bic: "CIBHHUHB"
    },
    11103705: {
      name: "CIB Bank Zrt. Belvárosi fiók",
      bic: "CIBHHUHB"
    },
    11103808: {
      name: "CIB Bank Zrt. Érd II. fiók",
      bic: "CIBHHUHB"
    },
    11103901: {
      name: "CIB Bank Zrt. Miskolc III. fiók",
      bic: "CIBHHUHB"
    },
    11104005: {
      name: "CIB Bank Zrt. Ferenc körúti fiók",
      bic: "CIBHHUHB"
    },
    11109804: {
      name: "CIB Szabadság tér II.",
      bic: "CIBHHUHB"
    },
    11109907: {
      name: "CIB Szabadság tér III.",
      bic: "CIBHHUHB"
    },
    11500016: {
      name: "MBH Befektetési Bank Zrt.  Központ",
      bic: "TAKBHUHB"
    },
    11500092: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500102: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500119: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500126: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500140: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500164: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500308: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500401: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500504: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500607: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500700: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500803: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11500906: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11501000: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11501402: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11501505: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11501701: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11501907: {
      name: "MBH Befektetési Bank Zrt.",
      bic: "TAKBHUHB"
    },
    11600006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11601007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11602008: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11603009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11604000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11605001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11606002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11607003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11608004: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11609005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11610005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11611006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11612007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11613008: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11614009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11615000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11616001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11617002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11618003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11619004: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11620004: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11621005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11623007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11625009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11626000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11629003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11630003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11632005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11633006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11634007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11636009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11637000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11638001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11639002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11640002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11641003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11644006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11645007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11648000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11649001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11650001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11651002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11652003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11654005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11655006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11656007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11657008: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11659000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11660000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11661001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11665005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11667007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11668008: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11669009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11670009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11671000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11673002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11674003: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11675004: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11676005: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11684002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11699006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11701004: {
      name: "OTP Budapesti r., I. Iskola u.",
      bic: "OTPVHUHB"
    },
    11701011: {
      name: "OTP Budapesti r., I. Iskola u.",
      bic: "OTPVHUHB"
    },
    11702005: {
      name: "OTP Budapesti r., II. Széna tér",
      bic: "OTPVHUHB"
    },
    11702012: {
      name: "OTP Budapesti r., II. Széna tér",
      bic: "OTPVHUHB"
    },
    11702036: {
      name: "OTP Budapesti r., II. Margit körút",
      bic: "OTPVHUHB"
    },
    11702043: {
      name: "OTP Budapesti r., II. Fény u",
      bic: "OTPVHUHB"
    },
    11702067: {
      name: "OTP Budapesti r., II. Törökvész u.",
      bic: "OTPVHUHB"
    },
    11702074: {
      name: "OTP Budapesti r., II. Budagyöngye bevk.",
      bic: "OTPVHUHB"
    },
    11702081: {
      name: "OTP Budapesti r., II. STOP-SHOP bevk",
      bic: "OTPVHUHB"
    },
    11703006: {
      name: "OTP Budapesti r., III. Flórián tér",
      bic: "OTPVHUHB"
    },
    11703013: {
      name: "OTP Budapesti r., III. Flórián tér",
      bic: "OTPVHUHB"
    },
    11703020: {
      name: "OTP Budapesti r., III. Szépvölgyi út",
      bic: "OTPVHUHB"
    },
    11703037: {
      name: "OTP Budapesti r., III. Heltai J. tér",
      bic: "OTPVHUHB"
    },
    11703044: {
      name: "OTP Budapesti r., III. GOBUDA bev.közp.",
      bic: "OTPVHUHB"
    },
    11703051: {
      name: "OTP Budapesti r., III. Auchan bevk.",
      bic: "OTPVHUHB"
    },
    11703068: {
      name: "OTP Budapesti r., III. Bécsi út",
      bic: "OTPVHUHB"
    },
    11704007: {
      name: "OTP Budapesti r., IV. Erzsébet u.",
      bic: "OTPVHUHB"
    },
    11704014: {
      name: "OTP Budapesti r., IV. Kordován tér",
      bic: "OTPVHUHB"
    },
    11704021: {
      name: "OTP Budapesti r., IV. Árpád út",
      bic: "OTPVHUHB"
    },
    11705008: {
      name: "OTP Budapesti r., V. Deák F. u.",
      bic: "OTPVHUHB"
    },
    11705015: {
      name: "OTP Budapesti r., V. Deák F. u.",
      bic: "OTPVHUHB"
    },
    11705022: {
      name: "OTP Budapesti r., V. Szent István krt.",
      bic: "OTPVHUHB"
    },
    11705039: {
      name: "OTP Budapesti r., V. Ferenciek tere",
      bic: "OTPVHUHB"
    },
    11705060: {
      name: "OTP Budapesti r., V. Deák F. u.",
      bic: "OTPVHUHB"
    },
    11705084: {
      name: "OTP Budapesti r., V. Nádor u.",
      bic: "OTPVHUHB"
    },
    11705118: {
      name: "OTP Budapesti r., V. Nádor u.",
      bic: "OTPVHUHB"
    },
    11705998: {
      name: "OTP Bank Nyrt.",
      bic: "OTPVHUHB"
    },
    11706009: {
      name: "OTP Budapesti r., VII. Andrássy út",
      bic: "OTPVHUHB"
    },
    11706016: {
      name: "OTP Budapesti r., VI. Andrássy út",
      bic: "OTPVHUHB"
    },
    11706023: {
      name: "OTP Budapesti r., VII. Károly krt.",
      bic: "OTPVHUHB"
    },
    11706030: {
      name: "OTP Partner Centrum 2.",
      bic: "OTPVHUHB"
    },
    11706047: {
      name: "OTP Budapesti r., VI. Teréz körút",
      bic: "OTPVHUHB"
    },
    11706061: {
      name: "OTP Budapesti r., VI. Képviselőház",
      bic: "OTPVHUHB"
    },
    11706078: {
      name: "OTP Budapesti r., VII. Károly krt.",
      bic: "OTPVHUHB"
    },
    11707000: {
      name: "OTP Budapesti r., VI. Oktogon tér",
      bic: "OTPVHUHB"
    },
    11707024: {
      name: "OTP Budapesti r., VII. Király u.",
      bic: "OTPVHUHB"
    },
    11707031: {
      name: "OTP Budapesti r., VI. Oktogon tér",
      bic: "OTPVHUHB"
    },
    11707055: {
      name: "OTP Budapesti r., VII. Károly krt.",
      bic: "OTPVHUHB"
    },
    11707062: {
      name: "OTP Budapesti r., VII. Károly krt.",
      bic: "OTPVHUHB"
    },
    11707079: {
      name: "OTP Budapesti r., VII. Thököly út",
      bic: "OTPVHUHB"
    },
    11707093: {
      name: "OTP Budapesti r., VII. Erzsébet körút",
      bic: "OTPVHUHB"
    },
    11707103: {
      name: "OTP Bank Budapesti r., VII. Thököly út",
      bic: "OTPVHUHB"
    },
    11707110: {
      name: "OTP Budapesti r., VII. Károly krt.",
      bic: "OTPVHUHB"
    },
    11708001: {
      name: "OTP Budapesti r., VIII. József krt.",
      bic: "OTPVHUHB"
    },
    11708025: {
      name: "OTP Budapesti r., VIII. József krt.",
      bic: "OTPVHUHB"
    },
    11708049: {
      name: "OTP Budapesti r., VIII. József krt.",
      bic: "OTPVHUHB"
    },
    11708070: {
      name: "OTP Budapesti r., VIII. József krt.",
      bic: "OTPVHUHB"
    },
    11708087: {
      name: "OTP Budapesti r., Aréna Plaza",
      bic: "OTPVHUHB"
    },
    11708094: {
      name: "OTP Kínai Kísérleti Képviseleti Iroda",
      bic: "OTPVHUHB"
    },
    11708104: {
      name: "OTP Budapesti r., VIII. Népszínház u.",
      bic: "OTPVHUHB"
    },
    11708111: {
      name: "OTP Partner Centrum 3.",
      bic: "OTPVHUHB"
    },
    11709002: {
      name: "OTP Budapesti r., VIII.Futó u.-Corvin P.",
      bic: "OTPVHUHB"
    },
    11709019: {
      name: "OTP Budapesti r., XIX. Shopmark bevk.",
      bic: "OTPVHUHB"
    },
    11709026: {
      name: "OTP Budapesti r., IX. Ferenc krt.",
      bic: "OTPVHUHB"
    },
    11709040: {
      name: "OTP Budapesti r., VIII. József krt.",
      bic: "OTPVHUHB"
    },
    11709057: {
      name: "OTP Budapest régió, VIII. Kálvin tér",
      bic: "OTPVHUHB"
    },
    11709088: {
      name: "OTP Budapesti r., IX. Lurdy üzletház",
      bic: "OTPVHUHB"
    },
    11709095: {
      name: "OTP Budapesti r., IX. Haller-kert",
      bic: "OTPVHUHB"
    },
    11710002: {
      name: "OTP Budapesti r., X. Kőrösi Csoma sétány",
      bic: "OTPVHUHB"
    },
    11710019: {
      name: "OTP Budapesti r., X. Kőrösi Csoma sétány",
      bic: "OTPVHUHB"
    },
    11710026: {
      name: "OTP Budapesti r., Family Center ük.",
      bic: "OTPVHUHB"
    },
    11710088: {
      name: "OTP Budapesti r., X. Árkád üzletk.",
      bic: "OTPVHUHB"
    },
    11710095: {
      name: "OTP Budapesti r., Árkád - Innovációs f.",
      bic: "OTPVHUHB"
    },
    11710851: {
      name: "OTP Budapesti r., X. Kőrösi Csoma sétány",
      bic: "OTPVHUHB"
    },
    11711003: {
      name: "OTP Budapesti r., XI. Bartók B. út",
      bic: "OTPVHUHB"
    },
    11711010: {
      name: "OTP Budapesti r., XI. Móricz Zs. körtér",
      bic: "OTPVHUHB"
    },
    11711027: {
      name: "OTP Budapesti r., XI. Bartók B. út",
      bic: "OTPVHUHB"
    },
    11711034: {
      name: "OTP Budapesti r., XI. Karinthy F. u.",
      bic: "OTPVHUHB"
    },
    11711041: {
      name: "OTP Budapesti r., XI. Karinthy F. út",
      bic: "OTPVHUHB"
    },
    11711058: {
      name: "OTP Budapesti r., XI. Bartók B. út",
      bic: "OTPVHUHB"
    },
    11711065: {
      name: "OTP Budapesti r., Rétköz u.",
      bic: "OTPVHUHB"
    },
    11711089: {
      name: "OTP Budapesti r., XI. Karinthy F út",
      bic: "OTPVHUHB"
    },
    11711096: {
      name: "OTP Budai Régió Savoya-Auchan fiók",
      bic: "OTPVHUHB"
    },
    11711106: {
      name: "OTP Budapesti r. Allee Bevásárlóközpont",
      bic: "OTPVHUHB"
    },
    11711113: {
      name: "OTP Budapesti r. Etele Pláza",
      bic: "OTPVHUHB"
    },
    11711711: {
      name: "OTP Budapesti r., XI. Speciális Fiók",
      bic: "OTPVHUHB"
    },
    11712004: {
      name: "OTP Budapesti r., XII. Böszörményi út",
      bic: "OTPVHUHB"
    },
    11712059: {
      name: "OTP Budapesti r., Alkotás utca",
      bic: "OTPVHUHB"
    },
    11712066: {
      name: "OTP Budapesti r., XII. Hertelendi u.",
      bic: "OTPVHUHB"
    },
    11712073: {
      name: "OTP Budapesti r., XII. Jagelló út",
      bic: "OTPVHUHB"
    },
    11713005: {
      name: "OTP Budapesti r., XIII. Nyugati tér",
      bic: "OTPVHUHB"
    },
    11713012: {
      name: "OTP Budapesti r., XIII. Nyugati tér",
      bic: "OTPVHUHB"
    },
    11713029: {
      name: "OTP Budapesti r., XIII. Tátra u.",
      bic: "OTPVHUHB"
    },
    11713036: {
      name: "OTP Budapesti r., XIII. Pozsonyi út",
      bic: "OTPVHUHB"
    },
    11713081: {
      name: "OTP Budapesti r., XIII. West End",
      bic: "OTPVHUHB"
    },
    11713177: {
      name: "OTP Budapesti r., XIII. Váci út",
      bic: "OTPVHUHB"
    },
    11713184: {
      name: "OTP Budapesti r., XIII. Váci út",
      bic: "OTPVHUHB"
    },
    11713191: {
      name: "OTP Budapesti r., XIII. Váci út",
      bic: "OTPVHUHB"
    },
    11713201: {
      name: "OTP Budapesti r., XIII. Lehel Csarnok",
      bic: "OTPVHUHB"
    },
    11713218: {
      name: "OTP Budapesti r., Central Park",
      bic: "OTPVHUHB"
    },
    11713225: {
      name: "OTP Partner Centrum",
      bic: "OTPVHUHB"
    },
    11713232: {
      name: "OTP BPR Privát Banki Főosztály",
      bic: "OTPVHUHB"
    },
    11713500: {
      name: "OTP BPR Ingatlanhit.feld. és döntésh.K. ",
      bic: "OTPVHUHB"
    },
    11713603: {
      name: "OTP Budapesti r.,BPR MFB Feld.Közp.",
      bic: "OTPVHUHB"
    },
    11714006: {
      name: "OTP Budapesti r., XIV. Nagy L. kir.",
      bic: "OTPVHUHB"
    },
    11714013: {
      name: "OTP Budapesti r., XIV. Fogarasi út",
      bic: "OTPVHUHB"
    },
    11714020: {
      name: "OTP Budapesti r., XIV. Nagy L. kir.",
      bic: "OTPVHUHB"
    },
    11714044: {
      name: "OTP Budapesti r. XIV. Bosnyák tér",
      bic: "OTPVHUHB"
    },
    11714051: {
      name: "OTP Budapesti r., XIV. Thököly út",
      bic: "OTPVHUHB"
    },
    11714068: {
      name: "OTP Budapesti r., XIV. BNV",
      bic: "OTPVHUHB"
    },
    11714082: {
      name: "OTP Budapesti r., Hungária krt.",
      bic: "OTPVHUHB"
    },
    11715007: {
      name: "OTP Budapesti r., XV. Pólus Center",
      bic: "OTPVHUHB"
    },
    11715014: {
      name: "OTP Budapesti r. XV. Pólus Center",
      bic: "OTPVHUHB"
    },
    11715021: {
      name: "OTP Budapesti r., XV. Zsókavár u.",
      bic: "OTPVHUHB"
    },
    11715038: {
      name: "OTP Budapesti r., XV. Pólus Center",
      bic: "OTPVHUHB"
    },
    11716008: {
      name: "OTP Budapesti r., XVI. Jókai u.",
      bic: "OTPVHUHB"
    },
    11716015: {
      name: "OTP Budapesti r., XVI. Rákosi út",
      bic: "OTPVHUHB"
    },
    11717009: {
      name: "OTP Budapesti r., XVII. Ferihegyi út",
      bic: "OTPVHUHB"
    },
    11717016: {
      name: "OTP Budapesti r., XVII. Tesco hiperm.",
      bic: "OTPVHUHB"
    },
    11718000: {
      name: "OTP Budapesti r., XVIII. Üllői út",
      bic: "OTPVHUHB"
    },
    11718017: {
      name: "OTP Budapesti r., XIX. Csokonai u.",
      bic: "OTPVHUHB"
    },
    11718024: {
      name: "OTP Budapesti r., XVIII. Vasút u.",
      bic: "OTPVHUHB"
    },
    11718031: {
      name: "OTP Budapesti r., Market C. Ferihegy",
      bic: "OTPVHUHB"
    },
    11718048: {
      name: "OTP Budapesti r. XVIII. Üllői út",
      bic: "OTPVHUHB"
    },
    11719001: {
      name: "OTP Budapesti r., XIX. Üllői út",
      bic: "OTPVHUHB"
    },
    11719018: {
      name: "OTP Budapesti r., XIX. Csokonai u.",
      bic: "OTPVHUHB"
    },
    11719025: {
      name: "OTP Budapesti r.,KÖKI bev.közp.",
      bic: "OTPVHUHB"
    },
    11719032: {
      name: "OTP Budapesti r., XIX. Europark Bev.K.",
      bic: "OTPVHUHB"
    },
    11720001: {
      name: "OTP Budapesti r., XX. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11720018: {
      name: "OTP Budapesti r., XX. Grassalkovich u.",
      bic: "OTPVHUHB"
    },
    11720025: {
      name: "OTP Budapesti r., XX. Bíró Mihály u.",
      bic: "OTPVHUHB"
    },
    11720032: {
      name: "OTP 10. sz vámhivatal XX. ker.",
      bic: "OTPVHUHB"
    },
    11720049: {
      name: "OTP Budapesti r., XX. Auchan bevk.",
      bic: "OTPVHUHB"
    },
    11720056: {
      name: "OTP Budapesti r., XX. Közp. Áruhitelezés",
      bic: "OTPVHUHB"
    },
    11720850: {
      name: "OTP Budapesti r., XX. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11721002: {
      name: "OTP Budapesti r., XXI. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11721019: {
      name: "OTP Budapesti r., XXI. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11721026: {
      name: "OTP Budapesti r., XXI. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11721033: {
      name: "OTP Budapesti r., XXI. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11722003: {
      name: "OTP Budapesti r., XXII. Kossuth L. u.",
      bic: "OTPVHUHB"
    },
    11722010: {
      name: "OTP Budapesti r., XXII. Campona bevk.",
      bic: "OTPVHUHB"
    },
    11731001: {
      name: "OTP Dél-dunántúli r., Pécs",
      bic: "OTPVHUHB"
    },
    11731018: {
      name: "OTP Dél-dunántúli r., Pécs",
      bic: "OTPVHUHB"
    },
    11731025: {
      name: "OTP Dél-dunántúli r., Pécs-Kertváros",
      bic: "OTPVHUHB"
    },
    11731032: {
      name: "OTP Dél-dunántúli r., Pécs-Meszes",
      bic: "OTPVHUHB"
    },
    11731049: {
      name: "OTP Dél-dunántúli r., Pécs",
      bic: "OTPVHUHB"
    },
    11731056: {
      name: "OTP Dél-dunántúli r., Pécs-Újmecsekalja",
      bic: "OTPVHUHB"
    },
    11731063: {
      name: "OTP Dél-dunántúli r., Komló",
      bic: "OTPVHUHB"
    },
    11731070: {
      name: "OTP Dél-dunántúli r., Mohács",
      bic: "OTPVHUHB"
    },
    11731087: {
      name: "OTP Dél-dunántúli r., Siklós",
      bic: "OTPVHUHB"
    },
    11731094: {
      name: "OTP Dél-dunántúli r., Szigetvár",
      bic: "OTPVHUHB"
    },
    11731104: {
      name: "OTP Dél-dunántúli r., Pécsvárad",
      bic: "OTPVHUHB"
    },
    11731111: {
      name: "OTP Dél-dunántúli r., Sásd",
      bic: "OTPVHUHB"
    },
    11731128: {
      name: "OTP Dél-dunántúli r., Sellye",
      bic: "OTPVHUHB"
    },
    11731135: {
      name: "OTP Dél-dunántúli r., Szentlőrinc",
      bic: "OTPVHUHB"
    },
    11731142: {
      name: "OTP Dél-dunántúli r., Villány",
      bic: "OTPVHUHB"
    },
    11731159: {
      name: "OTP Dél-dunántúli r., Pécs-Király",
      bic: "OTPVHUHB"
    },
    11731180: {
      name: "OTP Dél-dunántúli r., Bóly",
      bic: "OTPVHUHB"
    },
    11731207: {
      name: "OTP Dél-dunántúli r. Pécsi P.C.",
      bic: "OTPVHUHB"
    },
    11731214: {
      name: "OTP DDR Vállalati Számlavezetési Központ",
      bic: "OTPVHUHB"
    },
    11731221: {
      name: "OTP DDR Pécs Cashless Fiók",
      bic: "OTPVHUHB"
    },
    11731609: {
      name: "OTP Dél-dunántúli r., DDR MFB Feld.Közp.",
      bic: "OTPVHUHB"
    },
    11732002: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732019: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732026: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732033: {
      name: "OTP Dél-alföldi r., Baja",
      bic: "OTPVHUHB"
    },
    11732040: {
      name: "OTP Dél-alföldi r., Kalocsa",
      bic: "OTPVHUHB"
    },
    11732057: {
      name: "OTP Dél-alföldi r., Kiskőrös",
      bic: "OTPVHUHB"
    },
    11732064: {
      name: "OTP Dél-alföldi r., Kiskunhalas",
      bic: "OTPVHUHB"
    },
    11732071: {
      name: "OTP Dél-alföldi r., Kiskunfélegyháza",
      bic: "OTPVHUHB"
    },
    11732088: {
      name: "OTP Dél-alföldi r., Bácsalmás",
      bic: "OTPVHUHB"
    },
    11732095: {
      name: "OTP Dél-alföldi r., Kecel",
      bic: "OTPVHUHB"
    },
    11732105: {
      name: "OTP Dél-alföldi r., Dunavecse",
      bic: "OTPVHUHB"
    },
    11732112: {
      name: "OTP Dél-alföldi r., Izsák",
      bic: "OTPVHUHB"
    },
    11732129: {
      name: "OTP Dél-alföldi r., Jánoshalma",
      bic: "OTPVHUHB"
    },
    11732136: {
      name: "OTP Dél-alföldi r., Kecel",
      bic: "OTPVHUHB"
    },
    11732143: {
      name: "OTP Dél-alföldi r., Kiskunmajsa",
      bic: "OTPVHUHB"
    },
    11732150: {
      name: "OTP Dél-alföldi r., Kunszentmiklós",
      bic: "OTPVHUHB"
    },
    11732167: {
      name: "OTP Dél-alföldi r., Lajosmizse",
      bic: "OTPVHUHB"
    },
    11732174: {
      name: "OTP Dél-alföldi r., Mélykút",
      bic: "OTPVHUHB"
    },
    11732181: {
      name: "OTP Dél-alföldi r., Soltvadkert",
      bic: "OTPVHUHB"
    },
    11732198: {
      name: "OTP Dél-alföldi r., Kunszentmiklós",
      bic: "OTPVHUHB"
    },
    11732208: {
      name: "OTP Dél-alföldi r., Tiszakécske",
      bic: "OTPVHUHB"
    },
    11732215: {
      name: "OTP Dél-alföldi r., Kiskunfélegyháza",
      bic: "OTPVHUHB"
    },
    11732222: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732239: {
      name: "OTP Dél-alföldi r., Kecskemét Pólus Róna",
      bic: "OTPVHUHB"
    },
    11732246: {
      name: "OTP Dél-alföldi r. Kecskeméti P.C.",
      bic: "OTPVHUHB"
    },
    11732301: {
      name: "OTP Dél-alföldi r., Solt",
      bic: "OTPVHUHB"
    },
    11732318: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732325: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732332: {
      name: "OTP Dél-alföldi r., Kecskemét",
      bic: "OTPVHUHB"
    },
    11732349: {
      name: "OTP Dél-alföldi r., Baja",
      bic: "OTPVHUHB"
    },
    11732356: {
      name: "OTP Dél-alföldi r., Szabadszállás",
      bic: "OTPVHUHB"
    },
    11732363: {
      name: "OTP Dél-alföldi r., Kalocsa",
      bic: "OTPVHUHB"
    },
    11732600: {
      name: "OTP Dél-alföldi r., DAR MFB Feld.Közp.",
      bic: "OTPVHUHB"
    },
    11732703: {
      name: "OTP DAR Vállalati számlavezetési Közp.",
      bic: "OTPVHUHB"
    },
    11733003: {
      name: "OTP Dél-alföldi r., Békéscsaba",
      bic: "OTPVHUHB"
    },
    11733010: {
      name: "OTP Dél-alföldi r., Békéscsaba",
      bic: "OTPVHUHB"
    },
    11733027: {
      name: "OTP Dél-alföldi r., Gyula",
      bic: "OTPVHUHB"
    },
    11733034: {
      name: "OTP Dél-alföldi r., Mezőkovácsháza",
      bic: "OTPVHUHB"
    },
    11733041: {
      name: "OTP Dél-alföldi r., Orosháza",
      bic: "OTPVHUHB"
    },
    11733058: {
      name: "OTP Dél-alföldi r., Szarvas",
      bic: "OTPVHUHB"
    },
    11733065: {
      name: "OTP Dél-alföldi r., Szeghalom",
      bic: "OTPVHUHB"
    },
    11733072: {
      name: "OTP Dél-alföldi r., Békés",
      bic: "OTPVHUHB"
    },
    11733089: {
      name: "OTP Dél-alföldi r., Battonya",
      bic: "OTPVHUHB"
    },
    11733096: {
      name: "OTP Dél-alföldi r., Orosháza",
      bic: "OTPVHUHB"
    },
    11733106: {
      name: "OTP Dél-alföldi r., Dévaványa",
      bic: "OTPVHUHB"
    },
    11733113: {
      name: "OTP Dél-alföldi r., Elek",
      bic: "OTPVHUHB"
    },
    11733120: {
      name: "OTP Dél-alföldi r., Gyomaendrőd",
      bic: "OTPVHUHB"
    },
    11733137: {
      name: "OTP Dél-alföldi r., Békéscsaba",
      bic: "OTPVHUHB"
    },
    11733144: {
      name: "OTP Dél-alföldi r., Mezőberény",
      bic: "OTPVHUHB"
    },
    11733151: {
      name: "OTP Dél-alföldi r., Mezőhegyes",
      bic: "OTPVHUHB"
    },
    11733168: {
      name: "OTP Dél-alföldi r., Orosháza",
      bic: "OTPVHUHB"
    },
    11733175: {
      name: "OTP Dél-alföldi r., Sarkad",
      bic: "OTPVHUHB"
    },
    11733182: {
      name: "OTP Dél-alföldi r., Orosháza",
      bic: "OTPVHUHB"
    },
    11733199: {
      name: "OTP Dél-alföldi r., Újkígyós",
      bic: "OTPVHUHB"
    },
    11733209: {
      name: "OTP Dél-alföldi r., Vésztő",
      bic: "OTPVHUHB"
    },
    11733216: {
      name: "OTP Dél-alföldi r., Békéscsaba",
      bic: "OTPVHUHB"
    },
    11733223: {
      name: "OTP Dél-alföldi r., Füzesgyarmat",
      bic: "OTPVHUHB"
    },
    11733230: {
      name: "OTP Dél-alföldi r., Békéscsaba",
      bic: "OTPVHUHB"
    },
    11733254: {
      name: "OTP Dél-alföldi r., Békéscsaba Csaba C.",
      bic: "OTPVHUHB"
    },
    11734004: {
      name: "OTP Észak-keleti r., Miskolc",
      bic: "OTPVHUHB"
    },
    11734011: {
      name: "OTP Észak-keleti r., Miskolc",
      bic: "OTPVHUHB"
    },
    11734028: {
      name: "OTP Észak-keleti r., Diósgyőr",
      bic: "OTPVHUHB"
    },
    11734035: {
      name: "OTP Észak-keleti r., Miskolc",
      bic: "OTPVHUHB"
    },
    11734042: {
      name: "OTP Észak-keleti r., Miskolc-Kilián",
      bic: "OTPVHUHB"
    },
    11734059: {
      name: "OTP Észak-keleti r., Ózd",
      bic: "OTPVHUHB"
    },
    11734066: {
      name: "OTP Észak-keleti r., Miskolc",
      bic: "OTPVHUHB"
    },
    11734073: {
      name: "OTP Észak-keleti r., Miskolc",
      bic: "OTPVHUHB"
    },
    11734080: {
      name: "OTP Észak-keleti r., Edelény",
      bic: "OTPVHUHB"
    },
    11734097: {
      name: "OTP Észak-keleti r., Encs",
      bic: "OTPVHUHB"
    },
    11734107: {
      name: "OTP Észak-keleti r., Mezőkövesd",
      bic: "OTPVHUHB"
    },
    11734114: {
      name: "OTP Észak-keleti r., Tiszaújváros",
      bic: "OTPVHUHB"
    },
    11734121: {
      name: "OTP Észak-keleti r., Ózd",
      bic: "OTPVHUHB"
    },
    11734138: {
      name: "OTP Észak-keleti r., Sátoraljaújhely",
      bic: "OTPVHUHB"
    },
    11734145: {
      name: "OTP Észak-keleti r., Szerencs",
      bic: "OTPVHUHB"
    },
    11734152: {
      name: "OTP Észak-keleti r., Kazincbarcika",
      bic: "OTPVHUHB"
    },
    11734169: {
      name: "OTP Észak-keleti r., Sárospatak",
      bic: "OTPVHUHB"
    },
    11734176: {
      name: "OTP Észak-keleti r., Encs",
      bic: "OTPVHUHB"
    },
    11734183: {
      name: "OTP Észak-keleti r., Putnok",
      bic: "OTPVHUHB"
    },
    11734190: {
      name: "OTP Észak-keleti r., Szikszó",
      bic: "OTPVHUHB"
    },
    11734200: {
      name: "OTP Észak-keleti r., Sajószentpéter",
      bic: "OTPVHUHB"
    },
    11734217: {
      name: "OTP Észak-keleti r., Mezőcsát",
      bic: "OTPVHUHB"
    },
    11734224: {
      name: "OTP Észak-keleti r., Tokaj",
      bic: "OTPVHUHB"
    },
    11734231: {
      name: "OTP Észak-keleti r., Miskolc Partner C.",
      bic: "OTPVHUHB"
    },
    11734262: {
      name: "OTP Észak-keleti r., Miskolc",
      bic: "OTPVHUHB"
    },
    11734286: {
      name: "OTP Észak-keleti r., Miskolc - Auchan",
      bic: "OTPVHUHB"
    },
    11735005: {
      name: "OTP Dél-alföldi r., Szeged",
      bic: "OTPVHUHB"
    },
    11735012: {
      name: "OTP Dél-alföldi r., Szeged",
      bic: "OTPVHUHB"
    },
    11735029: {
      name: "OTP Dél-alföldi r., Szeged",
      bic: "OTPVHUHB"
    },
    11735036: {
      name: "OTP Dél-alföldi r., Szeged",
      bic: "OTPVHUHB"
    },
    11735043: {
      name: "OTP Dél-alföldi r., Szentes",
      bic: "OTPVHUHB"
    },
    11735050: {
      name: "OTP Dél-alföldi r., Csongrád",
      bic: "OTPVHUHB"
    },
    11735067: {
      name: "OTP Dél-alföldi r., Hódmezővásárhely",
      bic: "OTPVHUHB"
    },
    11735074: {
      name: "OTP Dél-alföldi r., Makó",
      bic: "OTPVHUHB"
    },
    11735081: {
      name: "OTP Dél-alföldi r., Makó",
      bic: "OTPVHUHB"
    },
    11735098: {
      name: "OTP Dél-alföldi r., Kistelek",
      bic: "OTPVHUHB"
    },
    11735108: {
      name: "OTP Dél-alföldi r., Hódmezővásárhely",
      bic: "OTPVHUHB"
    },
    11735115: {
      name: "OTP Dél-alföldi r., Mórahalom",
      bic: "OTPVHUHB"
    },
    11735139: {
      name: "OTP Dél-alföldi r., Mórahalom",
      bic: "OTPVHUHB"
    },
    11735146: {
      name: "OTP Dél-alföldi r., Szeged-Rókus",
      bic: "OTPVHUHB"
    },
    11735153: {
      name: "OTP Dél-alföldi r., Szeged",
      bic: "OTPVHUHB"
    },
    11735160: {
      name: "OTP Dél-alföldi r., Szeged",
      bic: "OTPVHUHB"
    },
    11735177: {
      name: "OTP Dél-alföldi r., Szeged Tesco",
      bic: "OTPVHUHB"
    },
    11735184: {
      name: "OTP Dél-alföldi r., Szeged Árkád",
      bic: "OTPVHUHB"
    },
    11735201: {
      name: "OTP Dél-alföldi r., Szeged Partner C.",
      bic: "OTPVHUHB"
    },
    11736006: {
      name: "OTP Észak-dunántúli r., Székesfehérvár",
      bic: "OTPVHUHB"
    },
    11736020: {
      name: "OTP Észak-dunántúli r. Bicske",
      bic: "OTPVHUHB"
    },
    11736037: {
      name: "OTP Észak-dunántúli r., Dunaújváros",
      bic: "OTPVHUHB"
    },
    11736044: {
      name: "OTP Észak-dunántúli r., Mór",
      bic: "OTPVHUHB"
    },
    11736051: {
      name: "OTP Észak-dunántúli r., Sárbogárd",
      bic: "OTPVHUHB"
    },
    11736068: {
      name: "OTP Észak-dunántúli r., Dunaújváros",
      bic: "OTPVHUHB"
    },
    11736075: {
      name: "OTP Észak-dunántúli r., Enying",
      bic: "OTPVHUHB"
    },
    11736082: {
      name: "OTP Észak-dunántúli r., Gárdony",
      bic: "OTPVHUHB"
    },
    11736099: {
      name: "OTP Észak-dunántúli r., Polgárdi",
      bic: "OTPVHUHB"
    },
    11736116: {
      name: "OTP Észak-dunántúli r., Székesfehérvár",
      bic: "OTPVHUHB"
    },
    11736147: {
      name: "OTP Észak-dunántúli r., Szfvár Auchan",
      bic: "OTPVHUHB"
    },
    11736154: {
      name: "OTP ÉDR Székesfehérvár Partner Centrum",
      bic: "OTPVHUHB"
    },
    11737007: {
      name: "OTP Észak-dunántúli r., Győr",
      bic: "OTPVHUHB"
    },
    11737014: {
      name: "OTP Észak-dunántúli r., Győr",
      bic: "OTPVHUHB"
    },
    11737021: {
      name: "OTP Észak-dunántúli r. Győr Partner C.",
      bic: "OTPVHUHB"
    },
    11737038: {
      name: "OTP Észak-dunántúli r., Győr",
      bic: "OTPVHUHB"
    },
    11737045: {
      name: "OTP Észak-dunántúli r., Sopron",
      bic: "OTPVHUHB"
    },
    11737052: {
      name: "OTP Észak-dunántúli r., Mosonmóvár",
      bic: "OTPVHUHB"
    },
    11737069: {
      name: "OTP Észak-dunántúli r., Csorna",
      bic: "OTPVHUHB"
    },
    11737076: {
      name: "OTP Észak-dunántúli r., Mosonmóvár",
      bic: "OTPVHUHB"
    },
    11737083: {
      name: "OTP Észak-dunántúli r., Sopron",
      bic: "OTPVHUHB"
    },
    11737090: {
      name: "OTP Észak-dunántúli r., Kapuvár",
      bic: "OTPVHUHB"
    },
    11737100: {
      name: "OTP Észak-dunántúli r., Fertőd",
      bic: "OTPVHUHB"
    },
    11737117: {
      name: "OTP Észak-dunántúli r., Fertősztmiklós",
      bic: "OTPVHUHB"
    },
    11737124: {
      name: "OTP Észak-dunántúli r., Szany",
      bic: "OTPVHUHB"
    },
    11737131: {
      name: "OTP Észak-dunántúli r., Győr",
      bic: "OTPVHUHB"
    },
    11737155: {
      name: "OTP Észak-dunántúli r., Győr",
      bic: "OTPVHUHB"
    },
    11737179: {
      name: "OTP Észak-dunántúli r., Sopron Plaza",
      bic: "OTPVHUHB"
    },
    11737186: {
      name: "OTP Észak-dunántúli r., Győr Egyetem",
      bic: "OTPVHUHB"
    },
    11737193: {
      name: "OTP Észak-dunántúli r., Győr Árkád",
      bic: "OTPVHUHB"
    },
    11737605: {
      name: "OTP Észak-dunántúli r., ÉDR MFB Feld.K.",
      bic: "OTPVHUHB"
    },
    11737708: {
      name: "OTP ÉDR Vállalati Számlavezetési Közp.",
      bic: "OTPVHUHB"
    },
    11738008: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738015: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738022: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738039: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738046: {
      name: "OTP Észak-keleti r., Berettyóújfalu",
      bic: "OTPVHUHB"
    },
    11738053: {
      name: "OTP Észak-keleti r., Püspökladány",
      bic: "OTPVHUHB"
    },
    11738060: {
      name: "OTP Észak-keleti r., Hajdúböszörmény",
      bic: "OTPVHUHB"
    },
    11738077: {
      name: "OTP Észak-keleti r., Hajdúnánás",
      bic: "OTPVHUHB"
    },
    11738084: {
      name: "OTP Észak-keleti r., Hajdúszoboszló",
      bic: "OTPVHUHB"
    },
    11738091: {
      name: "OTP Észak-keleti r., Balmazújváros",
      bic: "OTPVHUHB"
    },
    11738101: {
      name: "OTP Észak-keleti r., Biharkeresztes",
      bic: "OTPVHUHB"
    },
    11738118: {
      name: "OTP Észak-keleti r., Derecske",
      bic: "OTPVHUHB"
    },
    11738125: {
      name: "OTP Észak-keleti r., Hajdúdorog",
      bic: "OTPVHUHB"
    },
    11738132: {
      name: "OTP Észak-keleti r., Komádi",
      bic: "OTPVHUHB"
    },
    11738149: {
      name: "OTP Észak-keleti r., Nádudvar",
      bic: "OTPVHUHB"
    },
    11738156: {
      name: "OTP Észak-keleti r., Polgár",
      bic: "OTPVHUHB"
    },
    11738163: {
      name: "OTP Észak-keleti r., Hajdúhadház",
      bic: "OTPVHUHB"
    },
    11738170: {
      name: "OTP Észak-keleti r., Balmazújváros",
      bic: "OTPVHUHB"
    },
    11738211: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738228: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738235: {
      name: "OTP Észak-keleti r., Debrecen",
      bic: "OTPVHUHB"
    },
    11738242: {
      name: "OTP Észak-keleti r., Nyíradony",
      bic: "OTPVHUHB"
    },
    11738266: {
      name: "OTP Észak-keleti r. Debreceni P.C.",
      bic: "OTPVHUHB"
    },
    11738273: {
      name: "OTP ÉKMR Debrecen Auchan",
      bic: "OTPVHUHB"
    },
    11738280: {
      name: "OTP ÉKMR Debrecen Privátbank",
      bic: "OTPVHUHB"
    },
    11738297: {
      name: "OTP Észak-keleti r. Debrecen",
      bic: "OTPVHUHB"
    },
    11738503: {
      name: "OTP Észak-keleti r., ÉKMR INHA Közp.",
      bic: "OTPVHUHB"
    },
    11738606: {
      name: "OTP Észak-keleti r. ÉKMR MFB Feld.Közp.",
      bic: "OTPVHUHB"
    },
    11738709: {
      name: "OTP ÉKMR Vállalati Számlavezetési Közp.",
      bic: "OTPVHUHB"
    },
    11739009: {
      name: "OTP Észak-keleti r., Eger",
      bic: "OTPVHUHB"
    },
    11739016: {
      name: "OTP Észak-keleti r., Eger",
      bic: "OTPVHUHB"
    },
    11739023: {
      name: "OTP Észak-keleti r., Füzesabony",
      bic: "OTPVHUHB"
    },
    11739030: {
      name: "OTP Észak-keleti r., Gyöngyös",
      bic: "OTPVHUHB"
    },
    11739047: {
      name: "OTP Észak-keleti r., Heves",
      bic: "OTPVHUHB"
    },
    11739054: {
      name: "OTP Észak-keleti r., Hatvan",
      bic: "OTPVHUHB"
    },
    11739061: {
      name: "OTP Észak-keleti r., Füzesabony",
      bic: "OTPVHUHB"
    },
    11739078: {
      name: "OTP Észak-keleti r., Lőrinci",
      bic: "OTPVHUHB"
    },
    11739085: {
      name: "OTP Észak-keleti r., Bátonyterenye",
      bic: "OTPVHUHB"
    },
    11739092: {
      name: "OTP Észak-keleti r., Recsk",
      bic: "OTPVHUHB"
    },
    11739102: {
      name: "OTP Észak-keleti r., Eger",
      bic: "OTPVHUHB"
    },
    11739119: {
      name: "OTP Észak-keleti r., Eger",
      bic: "OTPVHUHB"
    },
    11740009: {
      name: "OTP Észak-dunántúli r., Tatabánya",
      bic: "OTPVHUHB"
    },
    11740016: {
      name: "OTP Észak-dunántúli r., Bábolna",
      bic: "OTPVHUHB"
    },
    11740023: {
      name: "OTP Észak-dunántúli r., Dorog",
      bic: "OTPVHUHB"
    },
    11740030: {
      name: "OTP Észak-dunántúli r., Komárom",
      bic: "OTPVHUHB"
    },
    11740047: {
      name: "OTP Észak-dunántúli r., Tata",
      bic: "OTPVHUHB"
    },
    11740054: {
      name: "OTP Észak-dunántúli r., Esztergom",
      bic: "OTPVHUHB"
    },
    11740061: {
      name: "OTP Észak-dunántúli r., Oroszlány",
      bic: "OTPVHUHB"
    },
    11740078: {
      name: "OTP Észak-dunántúli r., Ács",
      bic: "OTPVHUHB"
    },
    11740085: {
      name: "OTP Észak-dunántúli r., Kisbér",
      bic: "OTPVHUHB"
    },
    11740092: {
      name: "OTP Észak-dunántúli r., Nyergesújfalu",
      bic: "OTPVHUHB"
    },
    11740102: {
      name: "OTP Észak-dunántúli r., Tatabánya",
      bic: "OTPVHUHB"
    },
    11740119: {
      name: "OTP Észak-dunántúli r., Tatabánya",
      bic: "OTPVHUHB"
    },
    11740126: {
      name: "OTP Észak-dunántúli r., Tatabánya Omega",
      bic: "OTPVHUHB"
    },
    11740133: {
      name: "OTP ÉDR Tatabánya Partner Centrum",
      bic: "OTPVHUHB"
    },
    11741000: {
      name: "OTP Észak-keleti r., Salgótarján",
      bic: "OTPVHUHB"
    },
    11741017: {
      name: "OTP Észak-keleti r., Balassagyarmat",
      bic: "OTPVHUHB"
    },
    11741024: {
      name: "OTP Észak-keleti r., Pásztó",
      bic: "OTPVHUHB"
    },
    11741031: {
      name: "OTP Észak-keleti r., Rétság",
      bic: "OTPVHUHB"
    },
    11741048: {
      name: "OTP Észak-keleti r., Bátonyterenye",
      bic: "OTPVHUHB"
    },
    11741055: {
      name: "OTP Észak-keleti r., Bátonyterenye",
      bic: "OTPVHUHB"
    },
    11741062: {
      name: "OTP Észak-keleti r., Szécsény",
      bic: "OTPVHUHB"
    },
    11741079: {
      name: "OTP Észak-keleti r., Salgótarján",
      bic: "OTPVHUHB"
    },
    11742001: {
      name: "OTP Budapesti r., Budapest",
      bic: "OTPVHUHB"
    },
    11742025: {
      name: "OTP Budapesti r., Cegléd",
      bic: "OTPVHUHB"
    },
    11742032: {
      name: "OTP Budapesti r., Dabas",
      bic: "OTPVHUHB"
    },
    11742049: {
      name: "OTP Budapesti r., Gödöllő",
      bic: "OTPVHUHB"
    },
    11742056: {
      name: "OTP Budapesti r., Monor",
      bic: "OTPVHUHB"
    },
    11742063: {
      name: "OTP Budapesti r., Nagykáta",
      bic: "OTPVHUHB"
    },
    11742070: {
      name: "OTP Budapesti r., Ráckeve",
      bic: "OTPVHUHB"
    },
    11742087: {
      name: "OTP Budapesti r., Szentendre",
      bic: "OTPVHUHB"
    },
    11742094: {
      name: "OTP Budapesti r., Vác",
      bic: "OTPVHUHB"
    },
    11742104: {
      name: "OTP Budapesti r., Dunakeszi",
      bic: "OTPVHUHB"
    },
    11742111: {
      name: "OTP Budapesti r., Érd",
      bic: "OTPVHUHB"
    },
    11742128: {
      name: "OTP Budapesti r., Nagykőrös",
      bic: "OTPVHUHB"
    },
    11742135: {
      name: "OTP Budapesti r., Százhalombatta",
      bic: "OTPVHUHB"
    },
    11742142: {
      name: "OTP Budapesti r. Cegléd",
      bic: "OTPVHUHB"
    },
    11742159: {
      name: "OTP Budapesti r., Albertirsa",
      bic: "OTPVHUHB"
    },
    11742166: {
      name: "OTP Budapesti r., Aszód",
      bic: "OTPVHUHB"
    },
    11742173: {
      name: "OTP Budapesti r., Budaörs",
      bic: "OTPVHUHB"
    },
    11742180: {
      name: "OTP Budapesti r., Dunaharaszti",
      bic: "OTPVHUHB"
    },
    11742197: {
      name: "OTP Budapesti r., Gyömrő",
      bic: "OTPVHUHB"
    },
    11742207: {
      name: "OTP Budapesti r., Abony",
      bic: "OTPVHUHB"
    },
    11742214: {
      name: "OTP Budapesti r., Kiskunlacháza",
      bic: "OTPVHUHB"
    },
    11742221: {
      name: "OTP Budapesti r., Ócsa",
      bic: "OTPVHUHB"
    },
    11742238: {
      name: "OTP Budapesti r., Pilis",
      bic: "OTPVHUHB"
    },
    11742245: {
      name: "OTP  Budapesti r., Pilisvörösvár",
      bic: "OTPVHUHB"
    },
    11742252: {
      name: "OTP Budapesti r., Szigetszentmiklós",
      bic: "OTPVHUHB"
    },
    11742269: {
      name: "OTP Budapesti r., Vác",
      bic: "OTPVHUHB"
    },
    11742276: {
      name: "OTP Budapesti r., Vámosmikola",
      bic: "OTPVHUHB"
    },
    11742283: {
      name: "OTP Budapesti r., Vecsés",
      bic: "OTPVHUHB"
    },
    11742300: {
      name: "OTP Budapesti r., Gyál",
      bic: "OTPVHUHB"
    },
    11742317: {
      name: "OTP Budapesti r., Abony",
      bic: "OTPVHUHB"
    },
    11742324: {
      name: "OTP Budapesti r., Kistarcsa",
      bic: "OTPVHUHB"
    },
    11742331: {
      name: "OTP Budapesti r., Pécel",
      bic: "OTPVHUHB"
    },
    11742348: {
      name: "OTP Budapesti r., Budakeszi",
      bic: "OTPVHUHB"
    },
    11742355: {
      name: "OTP Budapesti r., Budaörs Auchan",
      bic: "OTPVHUHB"
    },
    11742379: {
      name: "OTP Budapesti r. Fót",
      bic: "OTPVHUHB"
    },
    11742386: {
      name: "OTP Budapesti r., XV. Pólus Center",
      bic: "OTPVHUHB"
    },
    11742441: {
      name: "OTP Budapesti r., Dunakeszi Auchan",
      bic: "OTPVHUHB"
    },
    11742506: {
      name: "OTP Budapesti r., Sz.szentmiklós Auchan",
      bic: "OTPVHUHB"
    },
    11742513: {
      name: "OTP Budapesti r., Csömör Auchan",
      bic: "OTPVHUHB"
    },
    11742520: {
      name: "OTP Budapesti r., Budakalász Cora",
      bic: "OTPVHUHB"
    },
    11742537: {
      name: "OTP Budapesti r., Solymár Auchan",
      bic: "OTPVHUHB"
    },
    11742544: {
      name: "OTP Budapesti r., Budaörs",
      bic: "OTPVHUHB"
    },
    11742551: {
      name: "OTP Budapesti r., Vecsés",
      bic: "OTPVHUHB"
    },
    11742568: {
      name: "OTP Budapesti r., Veresegyház",
      bic: "OTPVHUHB"
    },
    11742575: {
      name: "OTP Budapesti r., Maglód-Auchan",
      bic: "OTPVHUHB"
    },
    11742582: {
      name: "OTP Budapesti r., Érd",
      bic: "OTPVHUHB"
    },
    11742874: {
      name: "OTP Budapesti r., Üllő",
      bic: "OTPVHUHB"
    },
    11743002: {
      name: "OTP Dél-dunántúli r., Kaposvár",
      bic: "OTPVHUHB"
    },
    11743019: {
      name: "OTP Dél-dunántúli r., Kaposvár Szolg.ház",
      bic: "OTPVHUHB"
    },
    11743026: {
      name: "OTP Dél-dunántúli r., Marcali",
      bic: "OTPVHUHB"
    },
    11743033: {
      name: "OTP Dél-dunántúli r., Nagyatád",
      bic: "OTPVHUHB"
    },
    11743040: {
      name: "OTP Dél-dunántúli r., Siófok",
      bic: "OTPVHUHB"
    },
    11743057: {
      name: "OTP Dél-dunántúli r., Barcs",
      bic: "OTPVHUHB"
    },
    11743064: {
      name: "OTP Dél-dunántúli r., Balatonboglár",
      bic: "OTPVHUHB"
    },
    11743088: {
      name: "OTP Dél-dunántúli r., Csurgó",
      bic: "OTPVHUHB"
    },
    11743095: {
      name: "OTP Dél-dunántúli r., Fonyód",
      bic: "OTPVHUHB"
    },
    11743105: {
      name: "OTP Dél-dunántúli r., Lengyeltóti",
      bic: "OTPVHUHB"
    },
    11743112: {
      name: "OTP Dél-dunántúli r., Tab",
      bic: "OTPVHUHB"
    },
    11743136: {
      name: "OTP Dél-dunántúli r., Kaposvár",
      bic: "OTPVHUHB"
    },
    11743143: {
      name: "OTP Dél-dunántúli r., Nagybajom",
      bic: "OTPVHUHB"
    },
    11743150: {
      name: "OTP Dél-dunántúli r., Balatonlelle",
      bic: "OTPVHUHB"
    },
    11743167: {
      name: "OTP DDR Kaposvár Partner Centrum",
      bic: "OTPVHUHB"
    },
    11744003: {
      name: "OTP Észak-keleti r., Nyíregyháza",
      bic: "OTPVHUHB"
    },
    11744010: {
      name: "OTP Észak-keleti r., Nyíregyháza",
      bic: "OTPVHUHB"
    },
    11744027: {
      name: "OTP Észak-keleti r., Fehérgyarmat",
      bic: "OTPVHUHB"
    },
    11744034: {
      name: "OTP Észak-keleti r., Kisvárda",
      bic: "OTPVHUHB"
    },
    11744041: {
      name: "OTP Észak-keleti r., Mátészalka",
      bic: "OTPVHUHB"
    },
    11744058: {
      name: "OTP Észak-keleti r., Nyírbátor",
      bic: "OTPVHUHB"
    },
    11744065: {
      name: "OTP Észak-keleti r., Vásárosnamény",
      bic: "OTPVHUHB"
    },
    11744072: {
      name: "OTP Észak-keleti r., Baktalórántháza",
      bic: "OTPVHUHB"
    },
    11744089: {
      name: "OTP Észak-keleti r., Nagykálló",
      bic: "OTPVHUHB"
    },
    11744096: {
      name: "OTP Észak-keleti r., Csenger",
      bic: "OTPVHUHB"
    },
    11744106: {
      name: "OTP Észak-keleti r., Dombrád",
      bic: "OTPVHUHB"
    },
    11744113: {
      name: "OTP Észak-keleti r., Kemecse",
      bic: "OTPVHUHB"
    },
    11744120: {
      name: "OTP Észak-keleti r., Nagykálló",
      bic: "OTPVHUHB"
    },
    11744137: {
      name: "OTP Észak-keleti r., Tiszalök",
      bic: "OTPVHUHB"
    },
    11744144: {
      name: "OTP Észak-keleti r., Tiszavasvári",
      bic: "OTPVHUHB"
    },
    11744151: {
      name: "OTP Észak-keleti r., Újfehértó",
      bic: "OTPVHUHB"
    },
    11744168: {
      name: "OTP Észak-keleti r., Záhony",
      bic: "OTPVHUHB"
    },
    11744175: {
      name: "OTP Észak-keleti r., Nyíregyháza",
      bic: "OTPVHUHB"
    },
    11744182: {
      name: "OTP Észak-keleti r., Nyíregyháza",
      bic: "OTPVHUHB"
    },
    11744199: {
      name: "OTP Nyíregyháza Partner Centrum",
      bic: "OTPVHUHB"
    },
    11745004: {
      name: "OTP Dél-alföldi r., Szolnok",
      bic: "OTPVHUHB"
    },
    11745011: {
      name: "OTP Dél-alföldi r., Szolnok",
      bic: "OTPVHUHB"
    },
    11745028: {
      name: "OTP Dél-alföldi r., Szolnok",
      bic: "OTPVHUHB"
    },
    11745035: {
      name: "OTP Dél-alföldi r., Jászberény",
      bic: "OTPVHUHB"
    },
    11745042: {
      name: "OTP Dél-alföldi r., Kunszentmárton",
      bic: "OTPVHUHB"
    },
    11745059: {
      name: "OTP Dél-alföldi r., Tiszafüred",
      bic: "OTPVHUHB"
    },
    11745066: {
      name: "OTP Dél-alföldi r., Törökszentmiklós",
      bic: "OTPVHUHB"
    },
    11745073: {
      name: "OTP Dél-alföldi r., Karcag",
      bic: "OTPVHUHB"
    },
    11745080: {
      name: "OTP Dél-alföldi r., Kisújszállás",
      bic: "OTPVHUHB"
    },
    11745097: {
      name: "OTP Dél-alföldi r., Mezőtúr",
      bic: "OTPVHUHB"
    },
    11745107: {
      name: "OTP Dél-alföldi r., Túrkeve",
      bic: "OTPVHUHB"
    },
    11745114: {
      name: "OTP Dél-alföldi r., Jászapáti",
      bic: "OTPVHUHB"
    },
    11745121: {
      name: "OTP Dél-alföldi r., Jászárokszállás",
      bic: "OTPVHUHB"
    },
    11745138: {
      name: "OTP Dél-alföldi r., Jászladány",
      bic: "OTPVHUHB"
    },
    11745145: {
      name: "OTP Dél-alföldi r., Kunhegyes",
      bic: "OTPVHUHB"
    },
    11745152: {
      name: "OTP Dél-alföldi r., Karcag",
      bic: "OTPVHUHB"
    },
    11745169: {
      name: "OTP Dél-alföldi r., Tiszaföldvár",
      bic: "OTPVHUHB"
    },
    11745176: {
      name: "OTP Dél-alföldi r., Tiszaföldvár",
      bic: "OTPVHUHB"
    },
    11745183: {
      name: "OTP Dél-alföldi r., Szolnok-Széchenyi",
      bic: "OTPVHUHB"
    },
    11745217: {
      name: "OTP DAR Szolnok Partner Centrum",
      bic: "OTPVHUHB"
    },
    11746005: {
      name: "OTP Dél-dunántúli r., Szekszárd",
      bic: "OTPVHUHB"
    },
    11746012: {
      name: "OTP Dél-dunántúli r., Paks",
      bic: "OTPVHUHB"
    },
    11746029: {
      name: "OTP Dél-dunántúli r., Tamási",
      bic: "OTPVHUHB"
    },
    11746036: {
      name: "OTP Dél-dunántúli r., Bonyhád",
      bic: "OTPVHUHB"
    },
    11746043: {
      name: "OTP Dél-dunántúli r., Dombóvár",
      bic: "OTPVHUHB"
    },
    11746050: {
      name: "OTP Dél-dunántúli r., Dunaföldvár",
      bic: "OTPVHUHB"
    },
    11746067: {
      name: "OTP Dél-dunántúli r., Hőgyész",
      bic: "OTPVHUHB"
    },
    11746074: {
      name: "OTP Dél-dunántúli r., Hőgyész",
      bic: "OTPVHUHB"
    },
    11746081: {
      name: "OTP Dél-dunántúli r., Paks",
      bic: "OTPVHUHB"
    },
    11746098: {
      name: "OTP Dél-dunántúli r., Simontornya",
      bic: "OTPVHUHB"
    },
    11746108: {
      name: "OTP Dél-dunántúli r., Tolna",
      bic: "OTPVHUHB"
    },
    11746115: {
      name: "OTP DDR Paks",
      bic: "OTPVHUHB"
    },
    11746122: {
      name: "OTP Dél-dunántúli r., Bátaszék",
      bic: "OTPVHUHB"
    },
    11746139: {
      name: "OTP DDR Partner Centrum Szekszárd",
      bic: "OTPVHUHB"
    },
    11747006: {
      name: "OTP Észak-dunántúli r., Szombathely",
      bic: "OTPVHUHB"
    },
    11747013: {
      name: "OTP Észak-dunántúli r., Szombathely",
      bic: "OTPVHUHB"
    },
    11747020: {
      name: "OTP Észak-dunántúli r., Körmend",
      bic: "OTPVHUHB"
    },
    11747037: {
      name: "OTP Észak-dunántúli r., Sárvár",
      bic: "OTPVHUHB"
    },
    11747044: {
      name: "OTP Észak-dunántúli r., Celldömölk",
      bic: "OTPVHUHB"
    },
    11747051: {
      name: "OTP Észak-dunántúli r., Kőszeg",
      bic: "OTPVHUHB"
    },
    11747068: {
      name: "OTP Észak-dunántúli r., Szentgotthárd",
      bic: "OTPVHUHB"
    },
    11747075: {
      name: "OTP Észak-dunántúli r., Vasvár",
      bic: "OTPVHUHB"
    },
    11747082: {
      name: "OTP Észak-dunántúli r., Bük",
      bic: "OTPVHUHB"
    },
    11747109: {
      name: "OTP Észak-dunántúli r., Szombathely",
      bic: "OTPVHUHB"
    },
    11747147: {
      name: "OTP ÉDR Szombathely Partner Centrum",
      bic: "OTPVHUHB"
    },
    11748007: {
      name: "OTP Észak-dunántúli r., Veszprém",
      bic: "OTPVHUHB"
    },
    11748021: {
      name: "OTP Észak-dunántúli r., Veszprém",
      bic: "OTPVHUHB"
    },
    11748038: {
      name: "OTP Észak-dunántúli r., Ajka",
      bic: "OTPVHUHB"
    },
    11748045: {
      name: "OTP Észak-dunántúli r., Pápa",
      bic: "OTPVHUHB"
    },
    11748052: {
      name: "OTP Észak-dunántúli r., Tapolca",
      bic: "OTPVHUHB"
    },
    11748069: {
      name: "OTP Észak-dunántúli r., Balatonfüred",
      bic: "OTPVHUHB"
    },
    11748076: {
      name: "OTP Észak-dunántúli r., Várpalota",
      bic: "OTPVHUHB"
    },
    11748083: {
      name: "OTP Észak-dunántúli r., Balatonalmádi",
      bic: "OTPVHUHB"
    },
    11748090: {
      name: "OTP Észak-dunántúli r., Ajka",
      bic: "OTPVHUHB"
    },
    11748100: {
      name: "OTP Észak-dunántúli r., Sümeg",
      bic: "OTPVHUHB"
    },
    11748117: {
      name: "OTP Észak-dunántúli r., Zirc",
      bic: "OTPVHUHB"
    },
    11748131: {
      name: "OTP Észak-dunántúli r., Pápa",
      bic: "OTPVHUHB"
    },
    11749008: {
      name: "OTP Dél-dunántúli r., Zalaegerszeg",
      bic: "OTPVHUHB"
    },
    11749015: {
      name: "OTP Dél-dunántúli r., Nagykanizsa",
      bic: "OTPVHUHB"
    },
    11749022: {
      name: "OTP Dél-dunántúli r., Lenti",
      bic: "OTPVHUHB"
    },
    11749039: {
      name: "OTP Dél-dunántúli r., Keszthely",
      bic: "OTPVHUHB"
    },
    11749046: {
      name: "OTP Dél-dunántúli r., Nagykanizsa",
      bic: "OTPVHUHB"
    },
    11749053: {
      name: "OTP Dél-dunántúli r., Zalaszentgrót",
      bic: "OTPVHUHB"
    },
    11749060: {
      name: "OTP Dél-dunántúli r., Nagykanizsa",
      bic: "OTPVHUHB"
    },
    11749077: {
      name: "OTP Dél-dunántúli r., Hévíz",
      bic: "OTPVHUHB"
    },
    11749084: {
      name: "OTP DDR Partner Centrum Zalaegerszeg",
      bic: "OTPVHUHB"
    },
    11749091: {
      name: "OTP DDR, Nagykanizsa Cashless Fiók",
      bic: "OTPVHUHB"
    },
    11751016: {
      name: "OTP I. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751023: {
      name: "OTP II. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751030: {
      name: "OTP III. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751047: {
      name: "OTP IV. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751054: {
      name: "OTP V. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751061: {
      name: "OTP VI. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751078: {
      name: "OTP VII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751085: {
      name: "OTP VIII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751092: {
      name: "OTP IX. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751102: {
      name: "OTP X. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751119: {
      name: "OTP XI. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751126: {
      name: "OTP XII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751133: {
      name: "OTP XIII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751140: {
      name: "OTP XIV. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751157: {
      name: "OTP XV. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751164: {
      name: "OTP XVI. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751171: {
      name: "OTP XVII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751188: {
      name: "OTP XVIII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751195: {
      name: "OTP XIX. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751205: {
      name: "OTP XX-XXIII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751212: {
      name: "OTP XXI. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751229: {
      name: "OTP XXII. ker. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751315: {
      name: "OTP Baranya m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751322: {
      name: "OTP Bács-Kiskun m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751339: {
      name: "OTP Békés m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751346: {
      name: "OTP BAZ m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751353: {
      name: "OTP Csongrád m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751360: {
      name: "OTP Fejér m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751377: {
      name: "OTP Győr-M-S m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751384: {
      name: "OTP Hajdú-Bihar m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751391: {
      name: "OTP Heves m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751401: {
      name: "OTP Komárom-E m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751418: {
      name: "OTP Nógrád m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751425: {
      name: "OTP Pest m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751432: {
      name: "OTP Somogy m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751449: {
      name: "OTP Szabolcs-Sz-B m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751456: {
      name: "OTP J-N-Szolnok m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751463: {
      name: "OTP Tolna m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751470: {
      name: "OTP Vas m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751487: {
      name: "OTP Veszprém m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751494: {
      name: "OTP Zala m. Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751841: {
      name: "OTP Ker.Banki Centrum Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751865: {
      name: "OTP Pest-Buda fiók Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751937: {
      name: "OTP Kelet-Pesti fiók Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751944: {
      name: "OTP Központi fiók Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751951: {
      name: "OTP Budai fiók Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11751968: {
      name: "OTP Észak-Pesti fiók Önkorm. Devizái",
      bic: "OTPVHUHB"
    },
    11759007: {
      name: "OTP Központi Számlavezetés",
      bic: "OTPVHUHB"
    },
    11763017: {
      name: "OTP I.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763024: {
      name: "OTP II.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763031: {
      name: "OTP III.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763048: {
      name: "OTP IV.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763055: {
      name: "OTP V.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763062: {
      name: "OTP VI.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763079: {
      name: "OTP VII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763086: {
      name: "OTP VIII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763093: {
      name: "OTP IX.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763103: {
      name: "OTP X.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763110: {
      name: "OTP XI.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763127: {
      name: "OTP XII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763134: {
      name: "OTP XIII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763141: {
      name: "OTP XIV.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763158: {
      name: "OTP XV.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763165: {
      name: "OTP XVI.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763172: {
      name: "OTP XVII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763189: {
      name: "OTP XVIII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763196: {
      name: "OTP XIX.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763206: {
      name: "OTP XX-XXIII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763213: {
      name: "OTP XXI.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763220: {
      name: "OTP XXII.ker. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763316: {
      name: "OTP Baranya m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763323: {
      name: "OTP Bács-Kiskun m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763330: {
      name: "OTP Békés m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763347: {
      name: "OTP Borsod-Abaúj-Z.m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763354: {
      name: "OTP Csongrád m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763361: {
      name: "OTP Fejér m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763378: {
      name: "OTP Győr-Moson-S. m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763385: {
      name: "OTP Hajdú-Bihar m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763392: {
      name: "OTP Heves m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763402: {
      name: "OTP Komárom-E. megyei Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763419: {
      name: "OTP Nógrád megyei Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763426: {
      name: "OTP Pest megyei Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763433: {
      name: "OTP Somogy megyei Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763440: {
      name: "OTP Szabolcs-Sz.-B.m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763457: {
      name: "OTP Jász-N-Sz.megyei Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763464: {
      name: "OTP Tolna m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763471: {
      name: "OTP Vas m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763488: {
      name: "OTP Veszprém m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763495: {
      name: "OTP Zala m. Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763804: {
      name: "OTP Ker. Faktoring Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763811: {
      name: "OTP Központi r., HTC INST Központi elsz.",
      bic: "OTPVHUHB"
    },
    11763842: {
      name: "OTP Ker.Banki Centrum Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763866: {
      name: "OTP Pest-Buda Fiók Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763938: {
      name: "OTP Kelet-Pesti Fiók Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763945: {
      name: "OTP Központi Fiók Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763952: {
      name: "OTP Budai Fiók Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11763969: {
      name: "OTP Észak-Pesti Fiók Belföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764018: {
      name: "OTP I.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764025: {
      name: "OTP II.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764032: {
      name: "OTP III.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764049: {
      name: "OTP IV.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764056: {
      name: "OTP V.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764063: {
      name: "OTP VI.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764070: {
      name: "OTP VII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764087: {
      name: "OTP VIII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764094: {
      name: "OTP IX.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764104: {
      name: "OTP X.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764111: {
      name: "OTP XI.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764128: {
      name: "OTP XII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764135: {
      name: "OTP XIII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764142: {
      name: "OTP XIV.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764159: {
      name: "OTP XV.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764166: {
      name: "OTP XVI.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764173: {
      name: "OTP XVII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764180: {
      name: "OTP XVIII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764197: {
      name: "OTP XIX.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764207: {
      name: "OTP XX-XXIII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764214: {
      name: "OTP XXI.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764221: {
      name: "OTP XXII.ker. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764317: {
      name: "OTP Baranya m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764324: {
      name: "OTP Bács-Kiskun m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764331: {
      name: "OTP Békés m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764348: {
      name: "OTP Borsod-Abaúj-Z.m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764355: {
      name: "OTP Csongrád m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764362: {
      name: "OTP Fejér m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764379: {
      name: "OTP Győr-Moson-S. m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764386: {
      name: "OTP Hajdú-Bihar m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764393: {
      name: "OTP Heves m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764403: {
      name: "OTP Komárom-E. megyei Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764410: {
      name: "OTP Nógrád megyei Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764427: {
      name: "OTP Pest megyei Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764434: {
      name: "OTP Somogy megyei Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764441: {
      name: "OTP Szabolcs-Sz.-B.m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764458: {
      name: "OTP Jász-N-Sz. megyei Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764465: {
      name: "OTP Tolna m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764472: {
      name: "OTP Vas m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764489: {
      name: "OTP Veszprém m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764496: {
      name: "OTP Zala m. Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764843: {
      name: "OTP Ker.Banki Centrum Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764867: {
      name: "OTP Pest-Buda Fiók Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764939: {
      name: "OTP Kelet-Pesti Fiók Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764946: {
      name: "OTP Központi Fiók Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764953: {
      name: "OTP Budai Fiók Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11764960: {
      name: "OTP Észak-Pesti Fiók Külföldiek Devizái",
      bic: "OTPVHUHB"
    },
    11766003: {
      name: "OTP Országos Betétbiztosítási alap",
      bic: "OTPVHUHB"
    },
    11769006: {
      name: "OTP Központi Számlavezetés",
      bic: "OTPVHUHB"
    },
    11773009: {
      name: "OTP Központi Számlavezetés",
      bic: "OTPVHUHB"
    },
    11773016: {
      name: "OTP I.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773023: {
      name: "OTP II.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773030: {
      name: "OTP III.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773047: {
      name: "OTP IV.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773054: {
      name: "OTP V.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773061: {
      name: "OTP VI.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773078: {
      name: "OTP VII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773085: {
      name: "OTP VIII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773092: {
      name: "OTP IX.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773102: {
      name: "OTP X.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773119: {
      name: "OTP XI.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773126: {
      name: "OTP XII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773133: {
      name: "OTP XIII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773140: {
      name: "OTP XIV.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773157: {
      name: "OTP XV.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773164: {
      name: "OTP XVI.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773171: {
      name: "OTP XVII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773188: {
      name: "OTP XVIII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773195: {
      name: "OTP XIX.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773205: {
      name: "OTP XX.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773212: {
      name: "OTP XXI.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773229: {
      name: "OTP XXII.kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773298: {
      name: "OTP Direkt Call Center",
      bic: "OTPVHUHB"
    },
    11773315: {
      name: "OTP Baranya megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773322: {
      name: "OTP Bács-Kiskun megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773339: {
      name: "OTP Békés megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773346: {
      name: "OTP Borsod-Abaúj-Zemplén megyei LAFO f.",
      bic: "OTPVHUHB"
    },
    11773353: {
      name: "OTP Csongrád megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773360: {
      name: "OTP Fejér megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773377: {
      name: "OTP Győr-Moson-Sopron megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773384: {
      name: "OTP Hajdú-Bihar megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773391: {
      name: "OTP Heves megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773401: {
      name: "OTP Komárom-Esztergom megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773418: {
      name: "OTP Nógrád megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773425: {
      name: "OTP Pest megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773432: {
      name: "OTP Somogy megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773449: {
      name: "OTP Szabolcs-Szatmár-Bereg megyei LAFO f",
      bic: "OTPVHUHB"
    },
    11773456: {
      name: "OTP Jász-Nagykun-Szolnok megyei LAFO f.",
      bic: "OTPVHUHB"
    },
    11773463: {
      name: "OTP Tolna megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773470: {
      name: "OTP Vas megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773487: {
      name: "OTP Veszprém megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773494: {
      name: "OTP Zala megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773535: {
      name: "OTP Fejér megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773683: {
      name: "OTP Pest megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11773834: {
      name: "OTP Budapesti r. Postabetét Elsz. fiók",
      bic: "OTPVHUHB"
    },
    11773944: {
      name: "OTP Központi fiók - LÉNY szla. vezetés",
      bic: "OTPVHUHB"
    },
    11773951: {
      name: "OTP Budai fiók - LÉNY szla. vezetés",
      bic: "OTPVHUHB"
    },
    11773968: {
      name: "OTP Pénzforgalmi Főosztály - BABOO",
      bic: "OTPVHUHB"
    },
    11773999: {
      name: "OTP Budapesti Önkormányzati fiók LTP f.",
      bic: "OTPVHUHB"
    },
    11774000: {
      name: "OTP C-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774017: {
      name: "OTP I.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774024: {
      name: "OTP II.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774031: {
      name: "OTP III.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774048: {
      name: "OTP IV.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774055: {
      name: "OTP V.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774062: {
      name: "OTP VI.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774079: {
      name: "OTP VII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774086: {
      name: "OTP VIII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774093: {
      name: "OTP IX.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774103: {
      name: "OTP X.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774110: {
      name: "OTP XI.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774127: {
      name: "OTP XII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774134: {
      name: "OTP XIII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774141: {
      name: "OTP XIV.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774158: {
      name: "OTP XV.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774165: {
      name: "OTP XVI.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774172: {
      name: "OTP XVII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774189: {
      name: "OTP XVIII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774196: {
      name: "OTP XIX.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774206: {
      name: "OTP XX.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774213: {
      name: "OTP XXI.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774220: {
      name: "OTP XXII.ker. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774299: {
      name: "OTP Központi számlavezetés (Call Center)",
      bic: "OTPVHUHB"
    },
    11774316: {
      name: "OTP Baranya m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774323: {
      name: "OTP Bács-Kiskun m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774330: {
      name: "OTP Békés m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774347: {
      name: "OTP BAZ m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774354: {
      name: "OTP Csongrád m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774361: {
      name: "OTP Fejér m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774378: {
      name: "OTP Győr-Moson-Sopron B-hitel ü.ági kód",
      bic: "OTPVHUHB"
    },
    11774385: {
      name: "OTP Hajdú-Bihar m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774392: {
      name: "OTP Heves m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774402: {
      name: "OTP Komárom-Esztergom m.B-hit. ü.ági kód",
      bic: "OTPVHUHB"
    },
    11774419: {
      name: "OTP Nógrád m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774426: {
      name: "OTP Pest m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774433: {
      name: "OTP Somogy m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774440: {
      name: "OTP Szabolcs-Szatmár-B.m. B-hit. ü.ági k",
      bic: "OTPVHUHB"
    },
    11774457: {
      name: "OTP Jász-Nagykun-Sz. m. B-hitel ü.ági k.",
      bic: "OTPVHUHB"
    },
    11774464: {
      name: "OTP Tolna m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774471: {
      name: "OTP Vas m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774488: {
      name: "OTP Veszprém m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774495: {
      name: "OTP Zala m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774536: {
      name: "OTP Fejér m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774684: {
      name: "OTP Pest m. B-hitel üzletági kód",
      bic: "OTPVHUHB"
    },
    11774880: {
      name: "OTP B-hitel Plussz üzletági kód",
      bic: "OTPVHUHB"
    },
    11775018: {
      name: "OTP I.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775025: {
      name: "OTP II.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775032: {
      name: "OTP III.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775049: {
      name: "OTP IV.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775056: {
      name: "OTP V.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775063: {
      name: "OTP VI.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775070: {
      name: "OTP VII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775087: {
      name: "OTP VIII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775094: {
      name: "OTP IX.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775104: {
      name: "OTP X.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775111: {
      name: "OTP XI.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775128: {
      name: "OTP XII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775135: {
      name: "OTP XIII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775142: {
      name: "OTP XIV.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775159: {
      name: "OTP XV.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775166: {
      name: "OTP XVI.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775173: {
      name: "OTP XVII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775180: {
      name: "OTP XVIII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775197: {
      name: "OTP XIX.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775207: {
      name: "OTP XX-XXIII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775214: {
      name: "OTP XXI.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775221: {
      name: "OTP XXII.ker. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775317: {
      name: "OTP Baranya megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775324: {
      name: "OTP Bács-Kiskun megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775331: {
      name: "OTP Békés megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775348: {
      name: "OTP Borsod-A.-Z. megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775355: {
      name: "OTP Csongrád megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775362: {
      name: "OTP Fejér megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775379: {
      name: "OTP Győr-M.-S. megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775386: {
      name: "OTP Hajdú-Bihar megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775393: {
      name: "OTP Heves megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775403: {
      name: "OTP Komárom-E. megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775410: {
      name: "OTP Nógrád megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775427: {
      name: "OTP Pest megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775434: {
      name: "OTP Somogy megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775441: {
      name: "OTP Szabolcs-Sz.-B.m. Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775458: {
      name: "OTP Jász-N-Sz. megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775465: {
      name: "OTP Tolna megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775472: {
      name: "OTP Vas megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775489: {
      name: "OTP Veszprém megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775496: {
      name: "OTP Zala megyei Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11775946: {
      name: "OTP Központi fiók - Lakossági Deviza",
      bic: "OTPVHUHB"
    },
    11776019: {
      name: "OTP I. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776026: {
      name: "OTP II. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776033: {
      name: "OTP III. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776040: {
      name: "OTP IV. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776057: {
      name: "OTP V. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776064: {
      name: "OTP VI. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776071: {
      name: "OTP VII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776088: {
      name: "OTP VIII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776095: {
      name: "OTP IX. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776105: {
      name: "OTP X. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776112: {
      name: "OTP XI. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776129: {
      name: "OTP XII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776136: {
      name: "OTP XIII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776143: {
      name: "OTP XIV. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776150: {
      name: "OTP XV. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776167: {
      name: "OTP XVI. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776174: {
      name: "OTP XVII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776181: {
      name: "OTP XVIII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776198: {
      name: "OTP XIX. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776208: {
      name: "OTP XX. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776215: {
      name: "OTP XXI. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776222: {
      name: "OTP XXII. kerületi LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776318: {
      name: "OTP Baranya megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776325: {
      name: "OTP Bács-Kiskun megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776332: {
      name: "OTP Békés megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776349: {
      name: "OTP Borsod-Abaúj-Zemplén megyei LAFO f.",
      bic: "OTPVHUHB"
    },
    11776356: {
      name: "OTP Csongrád megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776363: {
      name: "OTP Fejér megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776370: {
      name: "OTP Győr-Moson-Sopron megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776387: {
      name: "OTP Hajdú-Bihar megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776394: {
      name: "OTP Heves megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776404: {
      name: "OTP Komárom-Esztergom megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776411: {
      name: "OTP Nógrád megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776428: {
      name: "OTP Pest megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776435: {
      name: "OTP Somogy megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776442: {
      name: "OTP Szabolcs-Szatmár-Bereg megyei LAFO f",
      bic: "OTPVHUHB"
    },
    11776459: {
      name: "OTP Jász-Nagykun-Szolnok megyei LAFO f.",
      bic: "OTPVHUHB"
    },
    11776466: {
      name: "OTP Tolna megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776473: {
      name: "OTP Vas megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776480: {
      name: "OTP Veszprém megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776497: {
      name: "OTP Zala megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776538: {
      name: "OTP Fejér megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776686: {
      name: "OTP Pest megyei LAFO fiók",
      bic: "OTPVHUHB"
    },
    11776837: {
      name: "OTP Központ Lekötött postai lak.betét",
      bic: "OTPVHUHB"
    },
    11776961: {
      name: "OTP Pénzforgalmi Főosztály - BABOO",
      bic: "OTPVHUHB"
    },
    11777010: {
      name: "OTP I. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777027: {
      name: "OTP II. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777034: {
      name: "OTP III. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777041: {
      name: "OTP IV. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777058: {
      name: "OTP V. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777065: {
      name: "OTP VI. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777072: {
      name: "OTP VII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777089: {
      name: "OTP VIII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777096: {
      name: "OTP IX. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777106: {
      name: "OTP X. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777113: {
      name: "OTP XI. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777120: {
      name: "OTP XII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777137: {
      name: "OTP XIII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777144: {
      name: "OTP XIV. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777151: {
      name: "OTP XV. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777168: {
      name: "OTP XVI. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777175: {
      name: "OTP XVII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777182: {
      name: "OTP XVIII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777199: {
      name: "OTP XIX. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777209: {
      name: "OTP XX-XXIII. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777216: {
      name: "OTP XXI. ker. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777319: {
      name: "OTP Baranya m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777326: {
      name: "OTP Bács-Kiskun m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777333: {
      name: "OTP Békés m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777340: {
      name: "OTP BAZ m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777357: {
      name: "OTP Csongrád m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777364: {
      name: "OTP Fejér m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777371: {
      name: "OTP Győr-Moson-S. m . ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777388: {
      name: "OTP Hajdú-Bihar m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777395: {
      name: "OTP Heves m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777405: {
      name: "OTP Komárom-E. m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777412: {
      name: "OTP Nógrád m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777429: {
      name: "OTP Pest m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777436: {
      name: "OTP Somogy m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777443: {
      name: "OTP Szabolcs-Sz.-B. m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777450: {
      name: "OTP Jász-N.-Szolnok m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777467: {
      name: "OTP Tolna m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777474: {
      name: "OTP Vas m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777481: {
      name: "OTP Veszprém m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11777498: {
      name: "OTP Zala m. ITB üzletági kód",
      bic: "OTPVHUHB"
    },
    11778004: {
      name: "OTP Mobil betét számla",
      bic: "OTPVHUHB"
    },
    11778994: {
      name: "OTP Mobil betétszámla",
      bic: "OTPVHUHB"
    },
    11780005: {
      name: "OTP Központ Budapest",
      bic: "OTPVHUHB"
    },
    11780029: {
      name: "OTP Központ KKFO",
      bic: "OTPVHUHB"
    },
    11780809: {
      name: "OTP Ker. Faktoring",
      bic: "OTPVHUHB"
    },
    11780816: {
      name: "OTP LTP Pénzforgalom",
      bic: "OTPVHUHB"
    },
    11780847: {
      name: "OTP JZB Pénzforgalom",
      bic: "OTPVHUHB"
    },
    11781006: {
      name: "OTP Elszámolásforgalmi Back-Office Oszt.",
      bic: "OTPVHUHB"
    },
    11781013: {
      name: "OTP EBOO Központi kezelésű szla.",
      bic: "OTPVHUHB"
    },
    11781020: {
      name: "OTP EBOO VIBER technikai szla.",
      bic: "OTPVHUHB"
    },
    11781037: {
      name: "OTP EBOO Központi rendezésű tételek",
      bic: "OTPVHUHB"
    },
    11781051: {
      name: "OTP IG2 Központi Elszámolás EBOO",
      bic: "OTPVHUHB"
    },
    11781068: {
      name: "OTP HTC INST KÖZPONTI ELSZÁMOLÁS",
      bic: "OTPVHUHB"
    },
    11782007: {
      name: "OTP Bankszámla Műveletek Back-Office O",
      bic: "OTPVHUHB"
    },
    11782100: {
      name: "OTP Központi Letétkezelés",
      bic: "OTPVHUHB"
    },
    11782131: {
      name: "OTP Főkönyvi Könyvelési Oszt.",
      bic: "OTPVHUHB"
    },
    11782148: {
      name: "OTP Főkönyvi Könyvelési Oszt.",
      bic: "OTPVHUHB"
    },
    11783008: {
      name: "OTP Központ PFO - HÜMBOO",
      bic: "OTPVHUHB"
    },
    11784009: {
      name: "OTP Kereskedelmi Banki Centrum",
      bic: "OTPVHUHB"
    },
    11786001: {
      name: "OTP Budapesti r., VI. Andrássy út",
      bic: "OTPVHUHB"
    },
    11790004: {
      name: "OTP Központi Back-Office (KBO)",
      bic: "OTPVHUHB"
    },
    11790011: {
      name: "OTP HABOF Vállalkozói Hitelek Osztály",
      bic: "OTPVHUHB"
    },
    11790028: {
      name: "OTP HABOF HHO-EBOO",
      bic: "OTPVHUHB"
    },
    11790042: {
      name: "OTP Betétadminisztrációs Backoffice O.",
      bic: "OTPVHUHB"
    },
    11791005: {
      name: "OTP Bankkártya Fejl. És Üzem. O.",
      bic: "OTPVHUHB"
    },
    11792006: {
      name: "OTP Balatonszemesi Üdülő",
      bic: "OTPVHUHB"
    },
    11793007: {
      name: "OTP Budapesti r., IX., Banki fiók",
      bic: "OTPVHUHB"
    },
    11794008: {
      name: "OTP Budapesti r., Központi fiók",
      bic: "OTPVHUHB"
    },
    11794015: {
      name: "OTP Budapesti r., V. Bankcenter fiók",
      bic: "OTPVHUHB"
    },
    11794022: {
      name: "OTP Központi f. - Csoporttagi cégek fin.",
      bic: "OTPVHUHB"
    },
    11794039: {
      name: "OTP Hálózati ALM",
      bic: "OTPVHUHB"
    },
    11794046: {
      name: "OTP EU Vállalati Tanácsadás",
      bic: "OTPVHUHB"
    },
    11794503: {
      name: "OTP Kereskedelmi Banki Hitelcentrum",
      bic: "OTPVHUHB"
    },
    11794510: {
      name: "OTP Budapesti Önkormányzati Fiók",
      bic: "OTPVHUHB"
    },
    11795009: {
      name: "OTP Budapesti r., Budapest",
      bic: "OTPVHUHB"
    },
    11795016: {
      name: "OTP Értékpapír Főosztály",
      bic: "OTPVHUHB"
    },
    11795504: {
      name: "OTP Bp. Back Office Főosztály",
      bic: "OTPVHUHB"
    },
    11796000: {
      name: "OTP Pénzforgalmi Főosztály - BABOO",
      bic: "OTPVHUHB"
    },
    11796017: {
      name: "OTP Pénzforgalmi Főosztály - BABOO",
      bic: "OTPVHUHB"
    },
    11799010: {
      name: "OTP Értékpapír-forgalom Technikai Fiók",
      bic: "OTPVHUHB"
    },
    11799096: {
      name: "OTP Jelzálog Bank Rt.",
      bic: "OTPVHUHB"
    },
    11799515: {
      name: "OTP CCSZF TÁVSZAKI FIÓK",
      bic: "OTPVHUHB"
    },
    11799601: {
      name: "OTP Faktoring - vállalkozási régió",
      bic: "OTPVHUHB"
    },
    11799618: {
      name: "OTP Faktoring - lakossági r.-fedezetlen",
      bic: "OTPVHUHB"
    },
    11799625: {
      name: "OTP Faktoring - lakossági r.,-fedezett",
      bic: "OTPVHUHB"
    },
    11799632: {
      name: "OTP Faktoring - Észak-magyaro-i r.",
      bic: "OTPVHUHB"
    },
    11799649: {
      name: "OTP Faktoring - Észak-alföldi régió",
      bic: "OTPVHUHB"
    },
    11799656: {
      name: "OTP Faktoring - Dél-alföldi régió",
      bic: "OTPVHUHB"
    },
    11799663: {
      name: "OTP Faktoring - Dél-dunántúli régió",
      bic: "OTPVHUHB"
    },
    11799670: {
      name: "OTP Faktoring - Nyugat-dunántúli régió",
      bic: "OTPVHUHB"
    },
    11799687: {
      name: "OTP Faktoring - Közép-dunántúli régió",
      bic: "OTPVHUHB"
    },
    11799694: {
      name: "OTP Faktoring - Külső kezelők",
      bic: "OTPVHUHB"
    },
    11799704: {
      name: "OTP Faktoring - OTP Bank köv. kezelő",
      bic: "OTPVHUHB"
    },
    11799962: {
      name: "OTP Elektronikus Banki Igazgatóság",
      bic: "OTPVHUHB"
    },
    11799986: {
      name: "OTP LTP hitelszámlák (KKFO)",
      bic: "OTPVHUHB"
    },
    11800000: {
      name: "iCARD AD",
      bic: "INTFBGSF"
    },
    11901558: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11901572: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11901589: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11901596: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11901871: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11906405: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11909518: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11944447: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11990101: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991009: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991085: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991092: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991102: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991119: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991212: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991229: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991250: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991267: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991281: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991298: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991308: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11991315: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992000: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992024: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992141: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992206: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992309: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992402: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992464: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992505: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992608: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992804: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992952: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992969: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11992976: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11993001: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11993300: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11993403: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11993506: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11993609: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11993805: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994002: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994105: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994246: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994301: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994507: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994600: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11994868: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11995144: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996004: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996183: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996190: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996200: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996217: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996224: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996231: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996248: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996255: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996279: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996286: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996303: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996365: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996389: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996396: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996406: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996413: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996509: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996554: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996592: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996602: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996705: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996808: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11996846: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998006: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998305: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998408: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998501: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998707: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998783: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11998927: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    11999007: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    12001008: {
      name: "Raiffeisen Bank Zrt. Budapesti Fiók",
      bic: "UBRTHUHB"
    },
    12002102: {
      name: "Raiffeisen Bank Zrt. Központ",
      bic: "UBRTHUHB"
    },
    12010116: {
      name: "Raiffeisen Bank Zrt. Batthyányi tér",
      bic: "UBRTHUHB"
    },
    12010154: {
      name: "Raiffeisen Bank Zrt. Bp. I. ker. Fiók",
      bic: "UBRTHUHB"
    },
    12010240: {
      name: "Raiffeisen Bank Zrt. RBH-Mammut I.",
      bic: "UBRTHUHB"
    },
    12010264: {
      name: "Raiffeisen Bank Zrt Budagyöngye",
      bic: "UBRTHUHB"
    },
    12010271: {
      name: "Raiffeisen Bank Zrt. RBH-Bp. Margit krt.",
      bic: "UBRTHUHB"
    },
    12010350: {
      name: "Raiffeisen Bank Zrt. Stop-Shop III.",
      bic: "UBRTHUHB"
    },
    12010367: {
      name: "Raiffeisen Bank Zrt. Vörösvári út",
      bic: "UBRTHUHB"
    },
    12010374: {
      name: "Raiffeisen Bank Zrt. Bp- III. Ker. Fiók",
      bic: "UBRTHUHB"
    },
    12010381: {
      name: "Raiffeisen Bank Zrt. RBH-Bp. Montevideó",
      bic: "UBRTHUHB"
    },
    12010398: {
      name: "Raiffeisen Bank Zrt. Békásmegyer",
      bic: "UBRTHUHB"
    },
    12010422: {
      name: "Raiffeisen Bank Zrt. Bpest.IV.ker-i Fiók",
      bic: "UBRTHUHB"
    },
    12010453: {
      name: "Raiffeisen Bank Zrt. IV. ker. Árpád út",
      bic: "UBRTHUHB"
    },
    12010501: {
      name: "Raiffeisen Bank Zrt. Akadémia utcai Fiók",
      bic: "UBRTHUHB"
    },
    12010518: {
      name: "Raiffeisen Bank Zrt. - Vörösmarty tér PB",
      bic: "UBRTHUHB"
    },
    12010525: {
      name: "Raiffeisen Bank Zrt. Bp. Petőfi",
      bic: "UBRTHUHB"
    },
    12010532: {
      name: "Raiffeisen Bank Zrt. Ferenciek tere",
      bic: "UBRTHUHB"
    },
    12010556: {
      name: "Raiffeisen Bank Zrt. Kálvin tér",
      bic: "UBRTHUHB"
    },
    12010563: {
      name: "Raiffeisen Bank Zrt. Bajcsy",
      bic: "UBRTHUHB"
    },
    12010611: {
      name: "Raiffeisen Bank Zrt. Bp. VI. ker. Fiók",
      bic: "UBRTHUHB"
    },
    12010628: {
      name: "Raiffeisen Bank Zrt. Nyugati tér",
      bic: "UBRTHUHB"
    },
    12010635: {
      name: "Raiffeisen Bank Zrt. Westend",
      bic: "UBRTHUHB"
    },
    12010659: {
      name: "Raiffeisen Bank Zrt. Oktogon",
      bic: "UBRTHUHB"
    },
    12010721: {
      name: "Raiffeisen Bank Zrt. Blaha Lujza tér",
      bic: "UBRTHUHB"
    },
    12010776: {
      name: "Raiifeisen Bank Zrt. Baross tér",
      bic: "UBRTHUHB"
    },
    12010824: {
      name: "Raiffeisen Bank Zrt. EMKE, Blaha",
      bic: "UBRTHUHB"
    },
    12010855: {
      name: "Raiffeisen Bank Zrt. Üllői út",
      bic: "UBRTHUHB"
    },
    12010862: {
      name: "Raiffeisen Bank Zrt. Aréna Plaza",
      bic: "UBRTHUHB"
    },
    12010879: {
      name: "Raiffeisen Bank Zrt. Arena Corner",
      bic: "UBRTHUHB"
    },
    12010886: {
      name: "Raiffeisen Bank Zrt. EMKE, Blaha",
      bic: "UBRTHUHB"
    },
    12010934: {
      name: "Raiffeisen Bank Zrt. Bp. Boráros tér",
      bic: "UBRTHUHB"
    },
    12011021: {
      name: "Raiffeisen Bank Zrt. Kőbánya",
      bic: "UBRTHUHB"
    },
    12011038: {
      name: "Raiffeisen Bank Zrt. Népliget",
      bic: "UBRTHUHB"
    },
    12011069: {
      name: "Raiffeisen Bank Zrt. Árkád 2.",
      bic: "UBRTHUHB"
    },
    12011148: {
      name: "Raiffeisen Bank Zrt. XI. kerületi Fiók",
      bic: "UBRTHUHB"
    },
    12011155: {
      name: "Raiffeisen Bank Zrt. Etele Plaza",
      bic: "UBRTHUHB"
    },
    12011179: {
      name: "Raiffeisen Bank Zrt. Móricz Zsigmond kt.",
      bic: "UBRTHUHB"
    },
    12011186: {
      name: "Raiffeisen Bank Zrt. Allee",
      bic: "UBRTHUHB"
    },
    12011234: {
      name: "Raiffeisen Bank Zrt. Déli pályaudvar",
      bic: "UBRTHUHB"
    },
    12011265: {
      name: "Raiffeisen Bank Zrt. Bpest.XII.ker-i Fió",
      bic: "UBRTHUHB"
    },
    12011272: {
      name: "Raiffeisen Bank Zrt. Királyhágó tér PB F",
      bic: "UBRTHUHB"
    },
    12011344: {
      name: "Raiffeisen Bank Zrt. RBH-Béke tér",
      bic: "UBRTHUHB"
    },
    12011351: {
      name: "Raiffeisen Bank Zrt. XIII. kerület",
      bic: "UBRTHUHB"
    },
    12011368: {
      name: "Raiffeisen Bank Zrt. Agora PB fiók",
      bic: "UBRTHUHB"
    },
    12011375: {
      name: "Raiffeisen Bank Zrt. Agora RET",
      bic: "UBRTHUHB"
    },
    12011382: {
      name: "Raiffeisen Bank Zrt. Váci út BSR",
      bic: "UBRTHUHB"
    },
    12011409: {
      name: "Raiffeisen Bank Zrt.Bp. XIV. Kerület",
      bic: "UBRTHUHB"
    },
    12011416: {
      name: "Raiffeisen Bank Zrt. Hermina Residence",
      bic: "UBRTHUHB"
    },
    12011461: {
      name: "Raiffeisen Bank Zrt. Thököly",
      bic: "UBRTHUHB"
    },
    12011526: {
      name: "Raiffeisen Bank Zrt. Pólus",
      bic: "UBRTHUHB"
    },
    12011650: {
      name: "Raiffeisen Bank Zrt. Mátyásföld",
      bic: "UBRTHUHB"
    },
    12011739: {
      name: "Raiffeisen Bank Zrt. Budapest XVII. ker.",
      bic: "UBRTHUHB"
    },
    12011856: {
      name: "Raiffeisen Bank Zrt Pestszentlőrinc",
      bic: "UBRTHUHB"
    },
    12011887: {
      name: "Raiffeisen Bank Zrt. Pestszentimre",
      bic: "UBRTHUHB"
    },
    12011911: {
      name: "Raiffeisen Bank Zrt. Kispest",
      bic: "UBRTHUHB"
    },
    12012008: {
      name: "Raiffeisen Bank Zrt. XX. kerület",
      bic: "UBRTHUHB"
    },
    12012156: {
      name: "Raiffeisen Bank Zrt. XXI. Kerület",
      bic: "UBRTHUHB"
    },
    12012204: {
      name: "Raiffeisen Bank Zrt. XXII. kerület",
      bic: "UBRTHUHB"
    },
    12012228: {
      name: "Raiffeisen Bank Zrt. Campona",
      bic: "UBRTHUHB"
    },
    12012307: {
      name: "Raiffeisen Bank Zrt. Soroksár",
      bic: "UBRTHUHB"
    },
    12020005: {
      name: "Raiffeisen Bank Zrt. Szentendre",
      bic: "UBRTHUHB"
    },
    12020304: {
      name: "Raiffeisen Bank Zrt. Érd",
      bic: "UBRTHUHB"
    },
    12020407: {
      name: "Raiffeisen Bank Zrt. Budaörs",
      bic: "UBRTHUHB"
    },
    12020603: {
      name: "Raiffeisen Bank Zrt. Bicske",
      bic: "UBRTHUHB"
    },
    12020854: {
      name: "Raiffeisen Bank Zrt. Pilisvörösvár",
      bic: "UBRTHUHB"
    },
    12020926: {
      name: "Raiffeisen Bank Zrt. Budakeszi",
      bic: "UBRTHUHB"
    },
    12021006: {
      name: "Raiffeisen Bank Zrt. Gödöllő",
      bic: "UBRTHUHB"
    },
    12021202: {
      name: "Raiffeisen Bank Zrt. Dunakeszi Auchan",
      bic: "UBRTHUHB"
    },
    12022007: {
      name: "Raiffeisen Bank Zrt. Monor",
      bic: "UBRTHUHB"
    },
    12022203: {
      name: "Raiffeisen Bank Zrt. Vecsés",
      bic: "UBRTHUHB"
    },
    12023008: {
      name: "Raiffeisen Bank Zrt. Székesfehérvár",
      bic: "UBRTHUHB"
    },
    12023101: {
      name: "Raiffeisen Bank Zrt. Szfehérvár 2.sz.Fió",
      bic: "UBRTHUHB"
    },
    12023125: {
      name: "Raiffeisen Bank Zrt. Ráckeve",
      bic: "UBRTHUHB"
    },
    12023132: {
      name: "Raiffeisen Bank Zrt. Szigetszentmiklós",
      bic: "UBRTHUHB"
    },
    12023204: {
      name: "Raiffeisen Bank Zrt. Székesfehérvár",
      bic: "UBRTHUHB"
    },
    12024009: {
      name: "Raiffeisen Bank Zrt. Dunaújvárosi Fiók",
      bic: "UBRTHUHB"
    },
    12024102: {
      name: "Raiffeisen Bank Zrt.",
      bic: "UBRTHUHB"
    },
    12025000: {
      name: "Raiffeisen Bank Zrt. Esztergomi Fiók",
      bic: "UBRTHUHB"
    },
    12026001: {
      name: "Raiffeisen Bank Zrt. Váci Fiók",
      bic: "UBRTHUHB"
    },
    12026609: {
      name: "Raiffeisen Bank Zrt. Balassagyarmat",
      bic: "UBRTHUHB"
    },
    12027002: {
      name: "Raiffeisen Bank Zrt. Cegléd",
      bic: "UBRTHUHB"
    },
    12028003: {
      name: "Raiffeisen Bank Zrt. Tatabánya I.",
      bic: "UBRTHUHB"
    },
    12028106: {
      name: "Raiffeisen Bank Zrt. Tatabánya 2. sz Fió",
      bic: "UBRTHUHB"
    },
    12028209: {
      name: "Raiffeisen Bank Zrt. Tatabánya II.",
      bic: "UBRTHUHB"
    },
    12028405: {
      name: "Raiffeisen Bank Zrt. Oroszlány",
      bic: "UBRTHUHB"
    },
    12028900: {
      name: "Raiffeisen Bank Zrt. Tata",
      bic: "UBRTHUHB"
    },
    12029004: {
      name: "Raiffeisen Bank Zrt. Komáromi Fiók",
      bic: "UBRTHUHB"
    },
    12029011: {
      name: "Raiffeisen Bank Zrt. Komárom Automata f.",
      bic: "UBRTHUHB"
    },
    12030004: {
      name: "Raiffeisen Bank Zrt. Hatvan",
      bic: "UBRTHUHB"
    },
    12031005: {
      name: "Raiffeisen Bank Zrt. Salgótarján",
      bic: "UBRTHUHB"
    },
    12032006: {
      name: "Raiffeisen Bank Zrt. Gyöngyös",
      bic: "UBRTHUHB"
    },
    12033007: {
      name: "Raiffeisen Bank Zrt. Eger I.",
      bic: "UBRTHUHB"
    },
    12033052: {
      name: "Raiffeisen Bank Zrt. Eger II",
      bic: "UBRTHUHB"
    },
    12034008: {
      name: "Raiffeisen Bank Zrt. Mezőkövesd",
      bic: "UBRTHUHB"
    },
    12035157: {
      name: "Raiffeisen Bank Zrt. Miskolc SP",
      bic: "UBRTHUHB"
    },
    12035803: {
      name: "Raiffeisen Bank Zrt. Tiszaújváros",
      bic: "UBRTHUHB"
    },
    12036000: {
      name: "Raiffeisen Bank Zrt. Ózd",
      bic: "UBRTHUHB"
    },
    12037001: {
      name: "Raiffeisen Bank Zrt. Kazincbarcika",
      bic: "UBRTHUHB"
    },
    12037805: {
      name: "Raiffeisen Bank Zrt. Kazincbarcika",
      bic: "UBRTHUHB"
    },
    12039807: {
      name: "Raiffeisen Bank Zrt. Sátoraljaújhely",
      bic: "UBRTHUHB"
    },
    12040807: {
      name: "Raiffeisen Bank Zrt. Hajdúnánás",
      bic: "UBRTHUHB"
    },
    12041004: {
      name: "Raiffeisen Bank Zrt. Berettyóújfalu",
      bic: "UBRTHUHB"
    },
    12042005: {
      name: "Raiffeisen Bank Zrt. Hajdúszoboszló",
      bic: "UBRTHUHB"
    },
    12042201: {
      name: "Raiffeisen Bank Zrt. Hajdúböszörmény",
      bic: "UBRTHUHB"
    },
    12042809: {
      name: "Raiffeisen Bank Zrt. Nyíregyháza",
      bic: "UBRTHUHB"
    },
    12042816: {
      name: "Raiffeisen Bank Zrt. Nyíregyháza II.",
      bic: "UBRTHUHB"
    },
    12042823: {
      name: "Raiffeisen Bank Zrt. Nyíregyháza II.",
      bic: "UBRTHUHB"
    },
    12042830: {
      name: "Raiffeisen Bank Zrt. Nyíregyháza Intersp",
      bic: "UBRTHUHB"
    },
    12042847: {
      name: "Raiffeisen Bank Zrt. Video Center",
      bic: "UBRTHUHB"
    },
    12043006: {
      name: "Raiffeisen Bank Zrt. Mátészalka",
      bic: "UBRTHUHB"
    },
    12046009: {
      name: "Raiffeisen Bank Zrt. Kisvárda",
      bic: "UBRTHUHB"
    },
    12046102: {
      name: "Raiffeisen Bank Zrt. Miskolci Fiók",
      bic: "UBRTHUHB"
    },
    12046119: {
      name: "Raiffeisen Bank Zrt. Miskolc, 2. Fiók",
      bic: "UBRTHUHB"
    },
    12046126: {
      name: "Raiffeisen Bank Zrt. Miskolc II.",
      bic: "UBRTHUHB"
    },
    12046133: {
      name: "Raiffeisen Bank Zrt. Miskolc III.",
      bic: "UBRTHUHB"
    },
    12047000: {
      name: "Raiffeisen Bank Zrt. Mátészalka",
      bic: "UBRTHUHB"
    },
    12048489: {
      name: "Raiffeisen Bank Zrt. Telef. ügyfélsz.",
      bic: "UBRTHUHB"
    },
    12050002: {
      name: "Raiffeisen Bank Zrt. Szolnoki Fiók",
      bic: "UBRTHUHB"
    },
    12050105: {
      name: "Raiffeisen Bank Zrt. Szolnok II.",
      bic: "UBRTHUHB"
    },
    12051003: {
      name: "Raiffeisen Bank Zrt. Jászberény",
      bic: "UBRTHUHB"
    },
    12052004: {
      name: "Raiffeisen Bank Zrt. Törökszentmiklós",
      bic: "UBRTHUHB"
    },
    12052705: {
      name: "Raiffeisen Bank Zrt. Debrecen I.",
      bic: "UBRTHUHB"
    },
    12052712: {
      name: "Raiffeisen Bank Zrt. Debrecen 2.sz.Fiók",
      bic: "UBRTHUHB"
    },
    12052729: {
      name: "Raiffeisen Bank Zrt. Debrecen III.",
      bic: "UBRTHUHB"
    },
    12053005: {
      name: "Raiffeisen Bank Zrt. Karcag",
      bic: "UBRTHUHB"
    },
    12054006: {
      name: "Raiffeisen Bank Zrt. Szolnok",
      bic: "UBRTHUHB"
    },
    12055007: {
      name: "Raiffeisen Bank Zrt. Gyomaendrőd",
      bic: "UBRTHUHB"
    },
    12055409: {
      name: "Raiffeisen Bank Zrt. Szarvas",
      bic: "UBRTHUHB"
    },
    12056008: {
      name: "Raiffeisen Bank Zrt. Békéscsabai Fiók",
      bic: "UBRTHUHB"
    },
    12056101: {
      name: "Raiffeisen Bank Zrt. Békéscsaba II.",
      bic: "UBRTHUHB"
    },
    12056307: {
      name: "Raiffeisen Bank Zrt. Békéscsaba",
      bic: "UBRTHUHB"
    },
    12057016: {
      name: "Raiffeisen Bank Zrt. Gyula",
      bic: "UBRTHUHB"
    },
    12059001: {
      name: "Raiffeisen Bank Zrt. Orosháza",
      bic: "UBRTHUHB"
    },
    12061002: {
      name: "Raiffeisen Bank Zrt. Kiskunfélegyháza",
      bic: "UBRTHUHB"
    },
    12062003: {
      name: "Raiffeisen Bank Zrt. Kiskőrös",
      bic: "UBRTHUHB"
    },
    12063004: {
      name: "Raiffeisen Bank Zrt. Kalocsa",
      bic: "UBRTHUHB"
    },
    12064005: {
      name: "Raiffeisen Bank Zrt. Kiskunhalas",
      bic: "UBRTHUHB"
    },
    12065006: {
      name: "Raiffeisen Bank Zrt. Baja",
      bic: "UBRTHUHB"
    },
    12066007: {
      name: "Raiffeisen Bank Zrt. Szentes",
      bic: "UBRTHUHB"
    },
    12066409: {
      name: "Raiffeisen Bank Zrt. Csongrád",
      bic: "UBRTHUHB"
    },
    12067008: {
      name: "Raiffeisen Bank Zrt. Szegedi Fiók",
      bic: "UBRTHUHB"
    },
    12067204: {
      name: "Raiffeisen Bank Zrt. Szeged II. Fiók",
      bic: "UBRTHUHB"
    },
    12067307: {
      name: "Raiffeisen Bank Zrt. Szeged III.",
      bic: "UBRTHUHB"
    },
    12068009: {
      name: "Raiffeisen Bank Zrt. Hódmezővásárhely",
      bic: "UBRTHUHB"
    },
    12069000: {
      name: "Raiffeisen Bank Zrt. Makó",
      bic: "UBRTHUHB"
    },
    12070907: {
      name: "Raiffeisen Bank Zrt. Tamási",
      bic: "UBRTHUHB"
    },
    12071001: {
      name: "Raiffeisen Bank Zrt. Szekszárdi Fiók",
      bic: "UBRTHUHB"
    },
    12072002: {
      name: "Raiffeisen Bank Zrt. Dombóvár",
      bic: "UBRTHUHB"
    },
    12072507: {
      name: "Raiffeisen Bank Zrt. Pécsi Fiók",
      bic: "UBRTHUHB"
    },
    12072514: {
      name: "Raiffeisen Bank Zrt. Kaposvári Fiók",
      bic: "UBRTHUHB"
    },
    12072521: {
      name: "Raiffeisen Bank Zrt. Pécs 2.sz. Fiók",
      bic: "UBRTHUHB"
    },
    12072538: {
      name: "Raiffeisen Bank Zrt. Kaposvári 2. Fiók",
      bic: "UBRTHUHB"
    },
    12072545: {
      name: "Raiffeisen Bank Zrt. Kaposvár Plaza",
      bic: "UBRTHUHB"
    },
    12072552: {
      name: "Raiffeisen Bank Zrt. Pécs III.",
      bic: "UBRTHUHB"
    },
    12072569: {
      name: "Raiffeisen Bank Zrt. PÉCS Rókus utcai f.",
      bic: "UBRTHUHB"
    },
    12073003: {
      name: "Raiffeisen Bank Zrt. Komló",
      bic: "UBRTHUHB"
    },
    12076903: {
      name: "Raiffeisen Bank Zrt. Kecskeméti Fiók",
      bic: "UBRTHUHB"
    },
    12076910: {
      name: "Raiffeisen Bank Zrt. Kecskemét retail",
      bic: "UBRTHUHB"
    },
    12076927: {
      name: "Raiffeisen Bank Zrt. Kecskemét II.",
      bic: "UBRTHUHB"
    },
    12077007: {
      name: "Raiffeisen Bank Zrt. Mohács",
      bic: "UBRTHUHB"
    },
    12080607: {
      name: "Raiffeisen Bank Zrt. Mór",
      bic: "UBRTHUHB"
    },
    12081000: {
      name: "Raiffeisen Bank Zrt. Várpalota",
      bic: "UBRTHUHB"
    },
    12082001: {
      name: "Raiffeisen Bank Zrt. Veszprémi Fiók",
      bic: "UBRTHUHB"
    },
    12082104: {
      name: "Raiffeisen Bank Zrt. Veszprém II.",
      bic: "UBRTHUHB"
    },
    12083002: {
      name: "Raiffeisen Bank Zrt. Tapolca",
      bic: "UBRTHUHB"
    },
    12083600: {
      name: "Raiffeisen Bank Zrt. Keszthelyi Fiók",
      bic: "UBRTHUHB"
    },
    12084003: {
      name: "Raiffeisen Bank Zrt. Ajkai Fiók",
      bic: "UBRTHUHB"
    },
    12085004: {
      name: "Raiffeisen Bank Zrt. Pápai Fiók",
      bic: "UBRTHUHB"
    },
    12086005: {
      name: "Raiffeisen Bank Zrt. Siófok",
      bic: "UBRTHUHB"
    },
    12087006: {
      name: "Raiffeisen Bank Zrt. Keszthely",
      bic: "UBRTHUHB"
    },
    12088007: {
      name: "Raiffeisen Bank Zrt. Nagykanizsa",
      bic: "UBRTHUHB"
    },
    12089008: {
      name: "Raiffeisen Bank Zrt. Zalaegerszeg II.",
      bic: "UBRTHUHB"
    },
    12092000: {
      name: "Raiffeisen Bank Zrt. Mosonmagyaróvár",
      bic: "UBRTHUHB"
    },
    12092309: {
      name: "Raiffeisen Bank Zrt. Zalaegerszegi Fiók",
      bic: "UBRTHUHB"
    },
    12093001: {
      name: "Raiffeisen Bank Zrt. Csorna",
      bic: "UBRTHUHB"
    },
    12094002: {
      name: "Raiffeisen Bank Zrt. Soproni Fiók",
      bic: "UBRTHUHB"
    },
    12094318: {
      name: "Raiffeisen Bank Zrt. Fertődi Fiók",
      bic: "UBRTHUHB"
    },
    12094507: {
      name: "Raiffeisen Bank Zrt. Szombathelyi Fiók",
      bic: "UBRTHUHB"
    },
    12094600: {
      name: "Raiffeisen Bank Zrt. Szombathely II.",
      bic: "UBRTHUHB"
    },
    12095003: {
      name: "Raiffeisen Bank Zrt. Celldömölk",
      bic: "UBRTHUHB"
    },
    12096004: {
      name: "Raiffeisen Bank Zrt. Sárvár",
      bic: "UBRTHUHB"
    },
    12096705: {
      name: "Raiffeisen Bank Zrt. Győri Fiók",
      bic: "UBRTHUHB"
    },
    12096712: {
      name: "Raiffeisen Bank Zrt. Győri 2. Fiók",
      bic: "UBRTHUHB"
    },
    12096729: {
      name: "Raiffeisen Bank Zrt. Győr III.",
      bic: "UBRTHUHB"
    },
    12096736: {
      name: "Raiffeisen Bank Zrt. Győr IV.",
      bic: "UBRTHUHB"
    },
    12097304: {
      name: "Raiffeisen Bank Zrt. Kőszeg",
      bic: "UBRTHUHB"
    },
    12099007: {
      name: "Raiffeisen Bank Zrt. Körmend",
      bic: "UBRTHUHB"
    },
    12100004: {
      name: "Gránit Bank Zrt.",
      bic: "GNBAHUHB"
    },
    12100011: {
      name: "Gránit Bank Zrt.",
      bic: "GNBAHUHB"
    },
    12100028: {
      name: "Gránit Bank Zrt.",
      bic: "GNBAHUHB"
    },
    12100035: {
      name: "GRÁNIT Bank Zrt. WestEnd Fiók",
      bic: "GNBAHUHB"
    },
    12501041: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    12600016: {
      name: "Wise Europe SA",
      bic: "TRWIBEBB"
    },
    12801004: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801011: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801028: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801059: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801066: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801073: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801080: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801097: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801107: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801114: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801121: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801145: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801152: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12801169: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12802005: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12802050: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12802122: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12802146: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12802160: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12802177: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12806009: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12806054: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12806126: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12806140: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12806157: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12806164: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12807000: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12807055: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12807127: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12807141: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12807158: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12807165: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12808128: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12808142: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12809129: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12809143: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12810002: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12810143: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12810150: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12815007: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12815148: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12815155: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12816008: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12816125: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12816149: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12816156: {
      name: "Merkantil Bank Zrt.",
      bic: "MRKBHUHB"
    },
    12817126: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12817140: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12818127: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12818141: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12819128: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    12819142: {
      name: "MERKANTIL BANK Zrt.",
      bic: "MRKBHUHB"
    },
    13100007: {
      name: "BNP-Paribas Magyarországi fióktelepe",
      bic: "BNPAHUHX"
    },
    13501350: {
      name: "KDB Bank Európa Zrt.",
      bic: "KODBHUHB"
    },
    13511012: {
      name: "KDB Bank Európa Zrt. Kőbányai úti fiók",
      bic: "KODBHUHB"
    },
    13513203: {
      name: "KDB Bank Európa Zrt Kőbányai fiók",
      bic: "KODBHUHB"
    },
    13520405: {
      name: "KDB Bank Európa Zrt Margit körúti fiók",
      bic: "KODBHUHB"
    },
    13523422: {
      name: "KDB Bank Európa Zrt.",
      bic: "KODBHUHB"
    },
    13524007: {
      name: "KDB BANK EURÓPA Zrt Bartók fiók",
      bic: "KODBHUHB"
    },
    13545680: {
      name: "KDB Bank Európa Zrt Margit körúti fiók",
      bic: "KODBHUHB"
    },
    13555555: {
      name: "KDB Bank Európa Zrt. Bartók fiók",
      bic: "KODBHUHB"
    },
    13576592: {
      name: "KDB Bank Európa Zrt Margit körúti fiók",
      bic: "KODBHUHB"
    },
    13597539: {
      name: "KDB Bank Európa Zrt.",
      bic: "KODBHUHB"
    },
    13598121: {
      name: "KDB Bank Európa Zrt.",
      bic: "KODBHUHB"
    },
    13700016: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13700023: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13701017: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13702018: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13703019: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13704010: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13705011: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13706012: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13707013: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13708014: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13709015: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13710015: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13711016: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13712017: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13713018: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13716011: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13717012: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13719014: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13722016: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13728012: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13729013: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13734017: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13736019: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13741013: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13742014: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13743015: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13760010: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13777016: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13789017: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13790017: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13791018: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13794011: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13795012: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13796013: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13797014: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13798015: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    13799016: {
      name: "ING Bank N.V. Magyarországi Fióktelepe",
      bic: "INGBHUHB"
    },
    14220108: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220115: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220122: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220146: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220160: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220201: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220218: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220225: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220232: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220249: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220256: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220263: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220270: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220287: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220294: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220304: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220933: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14220940: {
      name: "Erste Bank Zrt.",
      bic: "GIBAHUHB"
    },
    14400018: {
      name: "KELER Zrt.",
      bic: "KELRHUHBABC"
    },
    14400025: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14400111: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14400128: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14410024: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14420023: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14430022: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14440021: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14450020: {
      name: "KELER Zrt. technikai fiók",
      bic: "KELRHUHBABC"
    },
    14600012: {
      name: "MFB Magyar Fejlesztési Bank Zrt.",
      bic: "HBIDHUHB"
    },
    14600029: {
      name: "MFB Magyar Fejlesztési Bank Zrt.",
      bic: "HBIDHUHB"
    },
    14600036: {
      name: "MFB Magyar Fejlesztési Bank Zrt.",
      bic: "HBIDHUHB"
    },
    14800016: {
      name: "Eximbank Zrt.",
      bic: "HEXIHUHB"
    },
    15100003: {
      name: "Paystrax UAB",
      bic: "PAUALT22"
    },
    16200003: {
      name: "MAGNET Bank",
      bic: "HBWEHUHB"
    },
    16200010: {
      name: "MAGNET Bank Belvárosi fiók",
      bic: "HBWEHUHB"
    },
    16200041: {
      name: "MAGNET Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    16200058: {
      name: "MAGNET Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    16200065: {
      name: "MAGNET Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    16200089: {
      name: "MAGNET Bank, Központi fiók",
      bic: "HBWEHUHB"
    },
    16200096: {
      name: "MAGNET Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    16200106: {
      name: "MAGNET Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    16200113: {
      name: "MAGNET Bank Belvárosi fiók",
      bic: "HBWEHUHB"
    },
    16200120: {
      name: "MAGNET Bank Zuglói fiók",
      bic: "HBWEHUHB"
    },
    16200137: {
      name: "MAGNET Bank Solymári fiók",
      bic: "HBWEHUHB"
    },
    16200144: {
      name: "MAGNET Bank Kispesti fiók",
      bic: "HBWEHUHB"
    },
    16200151: {
      name: "MAGNET Bank Újbudai fiók",
      bic: "HBWEHUHB"
    },
    16200168: {
      name: "MAGNET Bank Óbudai fiók",
      bic: "HBWEHUHB"
    },
    16200175: {
      name: "MAGNET Bank Józsefvárosi fiók",
      bic: "HBWEHUHB"
    },
    16200182: {
      name: "MAGNET Bank Erzsébeti fiók",
      bic: "HBWEHUHB"
    },
    16200199: {
      name: "MAGNET Bank Belvárosi fiók",
      bic: "HBWEHUHB"
    },
    16200209: {
      name: "MAGNET Bank Óbudai fiók",
      bic: "HBWEHUHB"
    },
    16200216: {
      name: "MAGNET Bank Józsefvárosi fiók",
      bic: "HBWEHUHB"
    },
    16200223: {
      name: "MAGNET Bank Astoria fiók",
      bic: "HBWEHUHB"
    },
    16200230: {
      name: "MAGNET Bank Dunakeszi fiók",
      bic: "HBWEHUHB"
    },
    16200247: {
      name: "MAGNET Bank Székesfehérvári fiók",
      bic: "HBWEHUHB"
    },
    16200254: {
      name: "MAGNET Bank",
      bic: "HBWEHUHB"
    },
    16200261: {
      name: "MAGNET Bank",
      bic: "HBWEHUHB"
    },
    16200278: {
      name: "MAGNET Bank",
      bic: "HBWEHUHB"
    },
    16200625: {
      name: "MagNet Bank Budapest Pesti Fiók (megsz)",
      bic: "HBWEHUHB"
    },
    16200632: {
      name: "MagNet Bank Székesfehérvári Fiók (megsz)",
      bic: "HBWEHUHB"
    },
    16200649: {
      name: "MagNet Bank Sopron Központi fiók",
      bic: "HBWEHUHB"
    },
    16200656: {
      name: "MagNet Bank Balatonfüredi fiók",
      bic: "HBWEHUHB"
    },
    16200663: {
      name: "MagNet Bank Győri fiók",
      bic: "HBWEHUHB"
    },
    16200670: {
      name: "MagNet Bank Keszthelyi fiók",
      bic: "HBWEHUHB"
    },
    16200687: {
      name: "MagNet Bank Szombathelyi fiók",
      bic: "HBWEHUHB"
    },
    16200694: {
      name: "MagNet Bank Veszprémi fiók",
      bic: "HBWEHUHB"
    },
    16200979: {
      name: "MAGNET Bank",
      bic: "HBWEHUHB"
    },
    16200986: {
      name: "MAGNET Bank 98.sz.techn.fiók",
      bic: "HBWEHUHB"
    },
    16200993: {
      name: "MAGNET Bank 99.sz.techn.fiók",
      bic: "HBWEHUHB"
    },
    16209992: {
      name: "MAGNET Bank",
      bic: "HBWEHUHB"
    },
    16233333: {
      name: "MAGNET Bank Netbank",
      bic: "HBWEHUHB"
    },
    16300000: {
      name: "Deutsche Bank AG Magyarországi Fióktelep",
      bic: "DEUTHU2B"
    },
    16700015: {
      name: "Magyar Cetelem Bank Zrt.",
      bic: "MCBHHUHB"
    },
    16710014: {
      name: "Magyar Cetelem Bank, Belső gazd. Szla",
      bic: "MCBHHUHB"
    },
    16720013: {
      name: "Magyar Cetelem Bank, Ügyfélszla Credit",
      bic: "MCBHHUHB"
    },
    16730012: {
      name: "Magyar Cetelem Bank, Ügyfélszla Debit",
      bic: "MCBHHUHB"
    },
    16740011: {
      name: "Magyar Cetelem Bank, Ügyfélszla csekkbef",
      bic: "MCBHHUHB"
    },
    16750010: {
      name: "Magyar Cetelem Ügyfél betét számla",
      bic: "MCBHHUHB"
    },
    16760019: {
      name: "Magyar Cetelem Belső gazd. betét számla",
      bic: "MCBHHUHB"
    },
    16801680: {
      name: "MBH Jelzálogbank Nyrt.",
      bic: "FHJBHUHB"
    },
    17000019: {
      name: "OTP Bank Nyrt.",
      bic: "OTPVHUHB"
    },
    17100009: {
      name: "UniCredit Jelzálogbank Zrt.",
      bic: "BACXHUHB"
    },
    17500014: {
      name: "Bank of China (CEE) Zrt.",
      bic: "BKCHHUHB"
    },
    17600004: {
      name: "MagNet Bank Soproni fiók",
      bic: "HBWEHUHB"
    },
    17600011: {
      name: "MagNet Bank Soproni fiók",
      bic: "HBWEHUHB"
    },
    17600028: {
      name: "MagNet Bank Soproni fiók",
      bic: "HBWEHUHB"
    },
    17600035: {
      name: "MagNet Bank Győri fiók",
      bic: "HBWEHUHB"
    },
    17600042: {
      name: "MagNet Bank Szombathelyi fiók",
      bic: "HBWEHUHB"
    },
    17600059: {
      name: "MagNet Bank Keszthelyi fiók",
      bic: "HBWEHUHB"
    },
    17600066: {
      name: "MagNet Bank Veszprémi fiók",
      bic: "HBWEHUHB"
    },
    17600080: {
      name: "MagNet Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    17600097: {
      name: "MagNet Bank Keszthelyi fiók",
      bic: "HBWEHUHB"
    },
    17600107: {
      name: "MagNet Bank Keszthelyi fiók",
      bic: "HBWEHUHB"
    },
    17600114: {
      name: "MagNet Bank Szombathelyi fiók",
      bic: "HBWEHUHB"
    },
    17600121: {
      name: "MagNet Bank Székesfehérvári fiók",
      bic: "HBWEHUHB"
    },
    17600138: {
      name: "MagNet Bank Balatonfüredi fiók",
      bic: "HBWEHUHB"
    },
    17600145: {
      name: "MagNet Bank Győri fiók",
      bic: "HBWEHUHB"
    },
    17600152: {
      name: "MagNet Bank Szombathelyi fiók",
      bic: "HBWEHUHB"
    },
    17600169: {
      name: "MagNet Bank Győri fiók",
      bic: "HBWEHUHB"
    },
    17600176: {
      name: "MagNet Bank Soproni fiók",
      bic: "HBWEHUHB"
    },
    17600183: {
      name: "MagNet Bank Szombathelyi fiók",
      bic: "HBWEHUHB"
    },
    17600190: {
      name: "MagNet Bank Veszprémi fiók",
      bic: "HBWEHUHB"
    },
    17600200: {
      name: "MagNet Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    17600217: {
      name: "MagNet Bank Győri fiók",
      bic: "HBWEHUHB"
    },
    17600224: {
      name: "MagNet Bank Soproni fiók",
      bic: "HBWEHUHB"
    },
    17600231: {
      name: "MagNet Bank Központi fiók",
      bic: "HBWEHUHB"
    },
    17600248: {
      name: "MagNet Bank Szombathelyi fiók",
      bic: "HBWEHUHB"
    },
    17600255: {
      name: "MagNet Bank Győri fiók",
      bic: "HBWEHUHB"
    },
    17600262: {
      name: "MagNet Bank Veszprémi fiók",
      bic: "HBWEHUHB"
    },
    17600279: {
      name: "MagNet Bank Székesfehérvári fiók",
      bic: "HBWEHUHB"
    },
    17600286: {
      name: "MagNet Bank Keszthelyi fiók",
      bic: "HBWEHUHB"
    },
    17810007: {
      name: "BNP-Paribas Magyarországi fióktelepe",
      bic: "BNPAHUHX"
    },
    18100002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18200009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18201017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18201024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18201031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203040: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    18203057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203239: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203246: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203253: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203260: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203277: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203284: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203291: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203301: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203318: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203325: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203332: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203349: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203356: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203363: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203370: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203387: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203394: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203404: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203411: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203428: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203435: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203459: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203466: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203473: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203480: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203497: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203514: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203521: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203538: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    18203545: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203552: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203569: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    18203576: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203583: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203590: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203600: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203617: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203624: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203631: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203648: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203662: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203679: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203686: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203693: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203703: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203923: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18203930: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    18300006: {
      name: "BNP-Paribas Magyarországi fióktelepe",
      bic: "BNPAHUHX"
    },
    18400010: {
      name: "OBERBANK Ag, Magyarországi fióktelep",
      bic: "OBKLHUHB"
    },
    18700004: {
      name: "Banco Primus Fióktelep Magyarország",
      bic: "OTPVHUHB"
    },
    19017004: {
      name: "Magyar Nemzeti Bank",
      bic: "MANEHUHH"
    },
    19600000: {
      name: "CLS Bank International",
      bic: "CLSBUS33"
    },
    19700014: {
      name: "Bank of China Limited Mo-i Fióktelepe",
      bic: "BKCHHUHH"
    },
    20080004: {
      name: "OTP Pénztárszolgáltató Zrt.",
      bic: "OTPVHUHB"
    },
    22222222: {
      name: "O.F.SZ. Zrt",
      bic: "OFSZHUHB"
    },
    29600001: {
      name: "Libra Internet Bank S.A.",
      bic: "BRELROBU"
    },
    29700008: {
      name: "Első Fedezetkezelő Zrt. Központi Fiók",
      bic: "ELFZHUHH"
    },
    29800005: {
      name: "Banking Circle S.A.",
      bic: "BCIRLULL"
    },
    29900002: {
      name: "Trive Bank Hungary Zrt",
      bic: "THZTHUHH"
    },
    30400001: {
      name: "BinX Zrt.",
      bic: "BBIXHUHH"
    },
    30500008: {
      name: "DiPocket UAB",
      bic: "DIUALT22"
    },
    50088885: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50100208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300006: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300161: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300178: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300185: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300192: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50300202: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400072: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400089: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400096: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400106: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400113: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400120: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400137: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400144: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400151: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400168: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50400209: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50410215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420018: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    50420025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420159: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420166: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420173: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420180: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420197: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420214: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420221: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420238: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420245: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420252: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420269: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420276: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420283: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420290: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420300: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420317: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420324: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420331: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420348: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420355: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420362: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420379: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420386: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420393: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420403: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420410: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420427: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420434: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420441: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420458: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420465: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420472: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420489: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420496: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420506: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420513: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420520: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420537: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420544: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420551: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420568: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420575: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420582: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420599: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420609: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420616: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420623: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420630: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    50420647: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    50420654: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420661: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420678: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420685: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420692: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420719: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420726: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420733: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420740: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420757: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420764: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420771: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420788: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420795: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420805: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420812: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420829: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420836: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420843: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420850: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420867: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420874: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420881: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420898: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420908: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420915: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420922: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420939: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420946: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50420953: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420960: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420977: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420984: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50420991: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50421222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50425013: {
      name: "MBH 101 Ajka",
      bic: "MKKBHUHB"
    },
    50425020: {
      name: "MBH 103 Baja",
      bic: "MKKBHUHB"
    },
    50425037: {
      name: "MBH 101 Balassagyarmat",
      bic: "MKKBHUHB"
    },
    50425044: {
      name: "MBH 101 Békéscsaba",
      bic: "MKKBHUHB"
    },
    50425051: {
      name: "MBH 101 Berettyóújfalu",
      bic: "MKKBHUHB"
    },
    50425068: {
      name: "MBH 101 Bicske",
      bic: "MKKBHUHB"
    },
    50425075: {
      name: "MBH 103 Budaörs",
      bic: "MKKBHUHB"
    },
    50425082: {
      name: "MBH 103 Árkád",
      bic: "MKKBHUHB"
    },
    50425099: {
      name: "MBH 101 Bartók Béla út",
      bic: "MKKBHUHB"
    },
    50425109: {
      name: "MBH 101 Békásmegyer",
      bic: "MKKBHUHB"
    },
    50425116: {
      name: "MBH 101 Belváros",
      bic: "MKKBHUHB"
    },
    50425123: {
      name: "MBH 103 Boráros tér (Duna-ház)",
      bic: "MKKBHUHB"
    },
    50425130: {
      name: "MBH 101 Bosnyák",
      bic: "MKKBHUHB"
    },
    50425147: {
      name: "MBH 101 Budagyöngye",
      bic: "MKKBHUHB"
    },
    50425154: {
      name: "MBH 101 Campona",
      bic: "MKKBHUHB"
    },
    50425161: {
      name: "MBH 101 Csepel",
      bic: "MKKBHUHB"
    },
    50425178: {
      name: "MBH 103 Csepel Plaza",
      bic: "MKKBHUHB"
    },
    50425185: {
      name: "MBH 101 Délbuda",
      bic: "MKKBHUHB"
    },
    50425192: {
      name: "MBH 103 Duna Plaza",
      bic: "MKKBHUHB"
    },
    50425202: {
      name: "MBH 101 Emke",
      bic: "MKKBHUHB"
    },
    50425219: {
      name: "MBH 101 Északpest",
      bic: "MKKBHUHB"
    },
    50425226: {
      name: "MBH 103 Eurocenter",
      bic: "MKKBHUHB"
    },
    50425233: {
      name: "MBH 103 Fehérvári út",
      bic: "MKKBHUHB"
    },
    50425240: {
      name: "MBH 101 Fogarasi út",
      bic: "MKKBHUHB"
    },
    50425257: {
      name: "MBH 101 Gazdagrét",
      bic: "MKKBHUHB"
    },
    50425264: {
      name: "MBH 101 Kispest",
      bic: "MKKBHUHB"
    },
    50425271: {
      name: "MBH 101 Kőbánya",
      bic: "MKKBHUHB"
    },
    50425288: {
      name: "MBH 101 Lipótváros",
      bic: "MKKBHUHB"
    },
    50425295: {
      name: "MBH 103 Mammut",
      bic: "MKKBHUHB"
    },
    50425305: {
      name: "MBH 103 MOM Park",
      bic: "MKKBHUHB"
    },
    50425312: {
      name: "MBH 101 Nyírpalota út",
      bic: "MKKBHUHB"
    },
    50425329: {
      name: "MBH 103 Nyugati tér",
      bic: "MKKBHUHB"
    },
    50425336: {
      name: "MBH 101 Óbuda",
      bic: "MKKBHUHB"
    },
    50425343: {
      name: "MBH 101 Pesterzsébet",
      bic: "MKKBHUHB"
    },
    50425350: {
      name: "MBH 101 Pestszentimre",
      bic: "MKKBHUHB"
    },
    50425367: {
      name: "MBH 101 Pestszentlőrinc",
      bic: "MKKBHUHB"
    },
    50425374: {
      name: "MBH 101 Rákoskeresztúr",
      bic: "MKKBHUHB"
    },
    50425381: {
      name: "MBH 101 Rákosszentmihály",
      bic: "MKKBHUHB"
    },
    50425398: {
      name: "MBH 103 Székház",
      bic: "MKKBHUHB"
    },
    50425408: {
      name: "MBH 103 Szent István tér",
      bic: "MKKBHUHB"
    },
    50425415: {
      name: "MBH 103 Thököly út",
      bic: "MKKBHUHB"
    },
    50425422: {
      name: "MBH 101 Újpest",
      bic: "MKKBHUHB"
    },
    50425439: {
      name: "MBH 101 Váci Greens",
      bic: "MKKBHUHB"
    },
    50425446: {
      name: "MBH 101 Cegléd",
      bic: "MKKBHUHB"
    },
    50425453: {
      name: "MBH 101 Dabas",
      bic: "MKKBHUHB"
    },
    50425460: {
      name: "MBH 101 Debrecen",
      bic: "MKKBHUHB"
    },
    50425477: {
      name: "MBH 101 Dombóvár",
      bic: "MKKBHUHB"
    },
    50425484: {
      name: "MBH 103 Dunakeszi",
      bic: "MKKBHUHB"
    },
    50425491: {
      name: "MBH 101 Dunaújváros",
      bic: "MKKBHUHB"
    },
    50425501: {
      name: "MBH 101 Eger",
      bic: "MKKBHUHB"
    },
    50425518: {
      name: "MBH 101 Esztergom",
      bic: "MKKBHUHB"
    },
    50425525: {
      name: "MBH 101 Balatonboglár",
      bic: "MKKBHUHB"
    },
    50425532: {
      name: "MBH 101 Gödöllő",
      bic: "MKKBHUHB"
    },
    50425549: {
      name: "MBH 101 Gyöngyös",
      bic: "MKKBHUHB"
    },
    50425556: {
      name: "MBH 101 Győr",
      bic: "MKKBHUHB"
    },
    50425563: {
      name: "MBH 103 Győr - Árkád",
      bic: "MKKBHUHB"
    },
    50425570: {
      name: "MBH 101 Hajdúböszörmény",
      bic: "MKKBHUHB"
    },
    50425587: {
      name: "MBH 101 Hatvan",
      bic: "MKKBHUHB"
    },
    50425594: {
      name: "MBH 103 Hódmezővásárhely",
      bic: "MKKBHUHB"
    },
    50425604: {
      name: "MBH 101 Hódmezővásárhely",
      bic: "MKKBHUHB"
    },
    50425611: {
      name: "MBH 101 Jászberény",
      bic: "MKKBHUHB"
    },
    50425628: {
      name: "MBH 101 Kalocsa",
      bic: "MKKBHUHB"
    },
    50425635: {
      name: "MBH 101 Kaposvár",
      bic: "MKKBHUHB"
    },
    50425642: {
      name: "MBH 101 Karcag",
      bic: "MKKBHUHB"
    },
    50425659: {
      name: "MBH 101 Kazincbarcika",
      bic: "MKKBHUHB"
    },
    50425666: {
      name: "MBH 103 Kecskemét",
      bic: "MKKBHUHB"
    },
    50425673: {
      name: "MBH 101 Kecskemét",
      bic: "MKKBHUHB"
    },
    50425680: {
      name: "MBH 101 Keszthely",
      bic: "MKKBHUHB"
    },
    50425697: {
      name: "MBH 101 Kiskőrös",
      bic: "MKKBHUHB"
    },
    50425707: {
      name: "MBH 101 Kiskunhalas",
      bic: "MKKBHUHB"
    },
    50425714: {
      name: "MBH 103 Kisvárda",
      bic: "MKKBHUHB"
    },
    50425721: {
      name: "MBH 101 Kisvárda",
      bic: "MKKBHUHB"
    },
    50425738: {
      name: "MBH 101 Komárom",
      bic: "MKKBHUHB"
    },
    50425745: {
      name: "MBH 101 Mezőkövesd",
      bic: "MKKBHUHB"
    },
    50425752: {
      name: "MBH 101 Miskolc",
      bic: "MKKBHUHB"
    },
    50425769: {
      name: "MBH 101 Mohács",
      bic: "MKKBHUHB"
    },
    50425776: {
      name: "MBH 101 Monor",
      bic: "MKKBHUHB"
    },
    50425783: {
      name: "MBH 103 Mosonmagyaróvár",
      bic: "MKKBHUHB"
    },
    50425790: {
      name: "MBH 101 Mosonmagyaróvár",
      bic: "MKKBHUHB"
    },
    50425800: {
      name: "MBH 101 Nagykanizsa",
      bic: "MKKBHUHB"
    },
    50425817: {
      name: "MBH 101 Nagykáta",
      bic: "MKKBHUHB"
    },
    50425824: {
      name: "MBH 103 Nyíregyháza",
      bic: "MKKBHUHB"
    },
    50425831: {
      name: "MBH 101 Orosháza",
      bic: "MKKBHUHB"
    },
    50425848: {
      name: "MBH 101 Ózd",
      bic: "MKKBHUHB"
    },
    50425855: {
      name: "MBH 103 Paks",
      bic: "MKKBHUHB"
    },
    50425862: {
      name: "MBH 101 Paks",
      bic: "MKKBHUHB"
    },
    50425879: {
      name: "MBH 101 Pápa",
      bic: "MKKBHUHB"
    },
    50425886: {
      name: "MBH 101 Pécs",
      bic: "MKKBHUHB"
    },
    50425893: {
      name: "MBH 101 Ráckeve",
      bic: "MKKBHUHB"
    },
    50425903: {
      name: "MBH 101 Szigetszentmiklós",
      bic: "MKKBHUHB"
    },
    50425910: {
      name: "MBH 103 Salgótarján",
      bic: "MKKBHUHB"
    },
    50425927: {
      name: "MBH 101 Salgótarján",
      bic: "MKKBHUHB"
    },
    50425934: {
      name: "MBH 103 Siófok",
      bic: "MKKBHUHB"
    },
    50425941: {
      name: "MBH 103 Sopron",
      bic: "MKKBHUHB"
    },
    50425958: {
      name: "MBH 103 Szeged",
      bic: "MKKBHUHB"
    },
    50425965: {
      name: "MBH 103 Szekszárd",
      bic: "MKKBHUHB"
    },
    50425972: {
      name: "MBH 101 Szentendre",
      bic: "MKKBHUHB"
    },
    50425989: {
      name: "MBH 101 Szolnok",
      bic: "MKKBHUHB"
    },
    50425996: {
      name: "MBH 103 Szombathely",
      bic: "MKKBHUHB"
    },
    50426007: {
      name: "MBH 103 Tatabánya",
      bic: "MKKBHUHB"
    },
    50426014: {
      name: "MBH 101 Tatabánya",
      bic: "MKKBHUHB"
    },
    50426021: {
      name: "MBH 101 Tiszaújváros",
      bic: "MKKBHUHB"
    },
    50426038: {
      name: "MBH 101 Vác",
      bic: "MKKBHUHB"
    },
    50426045: {
      name: "MBH 103 Veszprém",
      bic: "MKKBHUHB"
    },
    50426052: {
      name: "MBH 101 Veszprém",
      bic: "MKKBHUHB"
    },
    50426069: {
      name: "MBH 101 Zalaegerszeg",
      bic: "MKKBHUHB"
    },
    50426076: {
      name: "MBH 101 Érd",
      bic: "MKKBHUHB"
    },
    50426083: {
      name: "MBH 103 Székesfehérvár",
      bic: "MKKBHUHB"
    },
    50426090: {
      name: "MBH 101 Székesfehérvár",
      bic: "MKKBHUHB"
    },
    50426100: {
      name: "MBH 103 ex KÉP-Centrum",
      bic: "MKKBHUHB"
    },
    50426117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426227: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50426234: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430079: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430103: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50430110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430141: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430165: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430189: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430196: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430206: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430213: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430220: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430237: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50430244: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430251: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430268: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430275: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430282: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430299: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430309: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430316: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430323: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430330: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430347: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430354: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430505: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50430543: {
      name: "MBH Bank Nyrt",
      bic: "MKKBHUHB"
    },
    50431001: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431159: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431166: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431173: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431180: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431197: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431214: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431221: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431238: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431245: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431252: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431269: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431276: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431283: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431290: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431300: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431317: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431324: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431331: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431348: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431355: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431362: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431379: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431386: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431393: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431403: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431410: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431427: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431434: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431441: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431458: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431465: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431472: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431489: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431496: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431506: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431513: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431520: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431537: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431544: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431551: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431568: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431575: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431582: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431599: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431609: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431616: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431623: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431630: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431647: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431654: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431661: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431678: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431685: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431692: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431719: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431726: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431733: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431740: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50431757: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432239: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432246: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432253: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432260: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432277: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432284: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432291: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432301: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432318: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432325: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432332: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432349: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432356: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432363: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432370: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432387: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432394: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432404: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432411: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432428: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432435: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432442: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432459: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432466: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432473: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432480: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432497: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432507: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432514: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432521: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432538: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432545: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432552: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432569: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432576: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432583: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432590: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432600: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432617: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432624: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432631: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432648: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432655: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432662: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432679: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432686: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432693: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432703: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432710: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432727: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432734: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432741: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432758: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432765: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432772: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50432789: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433072: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433089: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433096: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433106: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433113: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433120: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433137: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433144: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433151: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433168: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433175: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433182: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433199: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433209: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433216: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433223: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433230: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433247: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433254: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433261: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433278: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433285: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433292: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433302: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433319: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433326: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433333: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433340: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433357: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433364: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433371: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433388: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433395: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433405: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433412: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433429: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50433436: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433443: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433450: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433467: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433474: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433481: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433498: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50433508: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433515: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433522: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433539: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433546: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433553: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433560: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433577: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433584: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433591: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433601: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433618: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433625: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433632: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433649: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433656: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433663: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433670: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433687: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433694: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433704: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50433711: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433728: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433735: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433742: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433759: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433766: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433773: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433780: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433797: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433807: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433814: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433821: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433838: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433845: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433852: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433869: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433876: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433883: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433890: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433900: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433917: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433924: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433931: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433948: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433955: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433962: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433979: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433986: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50433993: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434004: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434114: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50434121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434169: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434176: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434183: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434190: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434200: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434217: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434224: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434231: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434248: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434255: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434262: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434279: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434286: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50434293: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435005: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435108: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435115: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435122: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435139: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435146: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435153: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435160: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435177: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435184: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435191: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435201: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435218: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435225: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435232: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435249: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435256: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435263: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435270: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435287: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435294: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435304: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435311: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435328: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435335: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435342: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435359: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435366: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435373: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435380: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435397: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435407: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435414: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435421: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435438: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435445: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435452: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435469: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435476: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435483: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435490: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435500: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435517: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435524: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435531: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435548: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435555: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435562: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435579: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435586: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435593: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435603: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435610: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435627: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435634: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435641: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435658: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435665: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435672: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435689: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435696: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435706: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435713: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435720: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435737: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435744: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435751: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435768: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435775: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435782: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435799: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435809: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435816: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435823: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435830: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435847: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435854: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435861: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435878: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435885: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435892: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435902: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435919: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435926: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435933: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435940: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435957: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435964: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435971: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435988: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50435995: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436006: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436161: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436178: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436185: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436192: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436202: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436219: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436226: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436233: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436240: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436257: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436264: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436271: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436288: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436295: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436305: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436312: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436329: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436336: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436343: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436350: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436367: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436374: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436381: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436398: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436408: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436415: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436422: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436439: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436446: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436453: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436460: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436477: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436484: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436491: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436501: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436518: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436525: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436532: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436549: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436556: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436563: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436570: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436587: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436594: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436604: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436611: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436628: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436635: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436642: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436659: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436666: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50436673: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437007: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437227: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437234: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437241: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437258: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437265: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437272: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437289: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437296: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437306: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437313: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437320: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437337: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437344: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437351: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437368: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437375: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437382: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437399: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437409: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437416: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437423: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437430: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437447: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437454: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437461: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437478: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437485: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437492: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437502: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437519: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437526: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437533: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437540: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437557: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437564: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437571: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50437588: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438204: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438259: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438266: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438273: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438280: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438297: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438307: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438314: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438321: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438338: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438345: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438352: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438369: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438376: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438383: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438390: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438400: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438417: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438424: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438431: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438448: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438455: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438462: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438479: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438486: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438493: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438503: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438510: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438527: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438534: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438541: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438558: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438565: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438572: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438589: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438596: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438606: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438613: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438620: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438637: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438644: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438651: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438668: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438675: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438682: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438699: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438709: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438716: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438723: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50438730: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50440016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50440023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50450008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453049: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    50453056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453159: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453166: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453173: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453180: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453197: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453214: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453221: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453238: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453290: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453331: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453348: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453379: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453465: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453472: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453506: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453575: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453599: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453623: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453647: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453654: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453922: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50453939: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50457775: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460007: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460227: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460234: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460241: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460258: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460265: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460272: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460289: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460296: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460306: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460313: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460320: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460337: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460344: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460351: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460368: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460375: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460382: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460399: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460409: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460416: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460423: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460430: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460447: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460454: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460461: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460478: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460485: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460492: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460502: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460519: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460526: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460533: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460540: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460557: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460564: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460571: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460588: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460595: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460605: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460612: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460629: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460636: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460643: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460650: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460667: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460674: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460681: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460698: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460708: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460715: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460722: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460739: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460746: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460753: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460760: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460777: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460784: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460791: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460801: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460818: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460825: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460832: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460849: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460856: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460863: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460870: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460887: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460894: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460904: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460911: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460928: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460935: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460942: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460959: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460966: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460973: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460980: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50460997: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461204: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50461242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462229: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462250: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462267: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462274: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462281: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462298: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462308: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462322: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462339: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462346: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462353: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462360: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462377: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462384: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462391: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462401: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462418: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462425: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462432: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462449: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462456: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462463: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462470: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462487: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462494: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462504: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462511: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462528: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462535: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462542: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462559: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462566: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462573: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462580: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462597: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462607: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462614: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462621: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462638: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462645: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462652: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462669: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462676: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462683: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462690: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462700: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462717: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462724: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462731: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462748: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462755: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462762: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462779: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462786: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462793: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462803: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462810: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462827: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462834: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462841: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462858: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462865: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462872: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462889: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462896: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462906: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462913: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462920: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462937: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462944: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462951: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462968: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462975: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462982: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50462999: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463000: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463079: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463141: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463165: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463189: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463196: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463206: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463213: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463220: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463237: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463244: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463251: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463268: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463275: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463282: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463299: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463309: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463316: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463323: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463330: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463347: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463354: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463361: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463378: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463385: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463392: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463402: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463419: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463426: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463433: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463440: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463457: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463464: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463471: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463488: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463495: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463505: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463512: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463529: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463536: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463543: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463550: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463567: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463574: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463581: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463598: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463608: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463615: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463622: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463639: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463646: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463653: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463660: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463677: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463684: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463691: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463701: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463718: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463725: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463732: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463749: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463756: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463763: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463770: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463787: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50463794: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464001: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464159: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464166: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464173: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464180: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464197: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464214: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464221: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464238: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464245: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464252: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464269: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464276: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464283: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464290: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464300: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464317: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464324: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464331: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464348: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464355: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464362: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464379: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464386: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464393: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464403: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464410: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464427: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464434: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464441: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464458: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464465: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464472: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464489: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464496: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464506: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464513: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464520: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464537: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464544: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464551: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464568: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464575: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464582: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464599: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464609: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464616: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464623: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464630: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464647: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464654: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464661: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464678: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464685: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464692: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464719: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464726: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464733: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464740: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464757: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464764: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464771: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464788: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464795: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464805: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464812: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464829: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464836: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464843: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464850: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464867: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464874: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464881: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464898: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464908: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464915: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464922: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464939: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464946: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464953: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464960: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464977: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464984: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50464991: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465239: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465246: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465253: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465260: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465277: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465284: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465291: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465301: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465318: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465325: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465332: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465349: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465356: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465363: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465370: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465387: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465394: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465404: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465411: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465428: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465435: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465442: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465459: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465466: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465473: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465480: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465497: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465507: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465514: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465521: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465538: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465545: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465552: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465569: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465576: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465583: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465590: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465600: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465617: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465624: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465631: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465648: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465655: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465662: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465679: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465686: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465693: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465703: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465710: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465727: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465734: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465741: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465758: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465765: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465772: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50465789: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466072: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466089: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466096: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466106: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466113: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466120: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466137: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466144: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466151: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466168: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466175: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466182: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466199: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466209: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466216: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466223: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466230: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466247: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466254: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466261: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466278: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466285: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466292: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466302: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466319: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466326: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466333: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466340: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466357: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466364: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466371: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466388: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466395: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466405: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466412: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466429: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466436: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466443: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466450: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466467: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466474: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466481: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466498: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466508: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466515: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466522: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466539: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466546: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466553: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466560: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466577: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466584: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466591: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466601: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466618: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466625: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466632: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466649: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466656: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466663: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466670: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466687: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466694: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466704: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466711: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466728: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466735: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466742: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466759: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466766: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466773: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466780: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466797: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466807: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466814: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466821: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466838: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466845: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466852: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466869: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466876: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466883: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466890: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466900: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466917: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466924: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466931: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466948: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466955: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466962: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466979: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466986: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50466993: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50467004: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468005: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468074: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468108: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468115: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468122: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468139: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468146: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468153: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468160: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468177: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468184: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468191: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468201: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468218: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468225: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468232: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468249: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468256: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468263: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468270: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468287: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468294: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468304: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468311: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468328: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468335: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468342: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468359: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468366: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468373: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468380: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468397: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468407: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468414: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468421: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468438: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468445: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468452: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468469: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468476: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468483: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468490: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468500: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468517: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468524: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468531: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468548: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468555: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468562: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468579: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468586: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468593: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    50468603: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468610: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468627: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468634: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468641: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468658: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468665: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468672: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468689: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468696: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468706: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468713: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468720: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468737: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468744: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468751: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468768: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468775: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468782: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468799: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468809: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468816: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468823: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468830: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468847: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468854: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468861: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468878: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468885: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468892: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468902: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468919: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468926: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468933: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468940: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468957: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468964: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468971: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468988: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50468995: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469006: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469161: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469178: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469185: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469192: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469202: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469219: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469226: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469233: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469240: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469257: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469264: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469271: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469288: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469295: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469305: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469312: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469329: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469336: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469343: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469350: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469367: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469374: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469381: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469398: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469408: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469415: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469422: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469439: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469446: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469453: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469460: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469477: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469484: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469491: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469501: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469518: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469525: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469532: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469549: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50469556: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700004: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50700152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800001: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800159: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800166: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800173: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800180: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800197: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800214: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800221: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800238: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800245: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800252: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800269: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800276: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800283: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800290: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800300: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800317: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800324: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800609: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800616: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800623: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800630: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800647: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800654: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800661: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800678: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800685: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800692: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800719: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800726: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800733: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800740: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800757: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800764: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800771: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800788: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800795: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800805: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800812: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800829: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800836: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800843: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800850: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800867: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800874: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800881: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800898: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800908: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800915: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50800922: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50801002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50802003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50803004: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50804005: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50805006: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50807008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50808009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    50809000: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51000194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100005: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51100074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51200071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51400075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51500003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51500010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700007: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700227: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700234: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700241: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700258: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700265: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700272: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700289: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700296: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700306: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700313: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700320: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700337: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700344: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700351: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700368: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700375: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700382: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700399: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700409: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700416: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700423: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700430: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700447: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700454: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700461: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700478: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700485: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700519: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51700526: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51900018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51900025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51900032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51900049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    51900056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52000018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52000025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52000032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52000049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52000056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52000991: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52300019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52300026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52300033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52300040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52500147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52600003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52600010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52600027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52600034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52600041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52600058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52800014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52800021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52800038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52800045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52800052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    52800997: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53100018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53100025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53100032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53100049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53100056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53200132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300108: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300115: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300122: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300139: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300146: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300153: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300160: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300177: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300184: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300191: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300201: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300218: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300225: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300232: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300249: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300256: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300263: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300270: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300287: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300294: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300304: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300311: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300328: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300335: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300342: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300359: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300366: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300373: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300380: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300397: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300407: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300414: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300421: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300438: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300445: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300452: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300469: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300476: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300483: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300490: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300500: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300517: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300524: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300531: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300548: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300555: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300562: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300579: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300586: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300593: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300603: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300610: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300627: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300634: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300641: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300658: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300665: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300672: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300689: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53300696: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500418: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500511: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500614: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500717: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500810: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500827: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500834: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500841: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53500858: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53600123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53700072: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    53900100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54000148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200001: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200159: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200166: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200173: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200180: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54200197: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54300132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54500208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600229: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600250: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600267: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600274: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600281: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600298: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600308: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600322: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600339: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600346: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600353: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600360: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600377: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600384: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600391: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600401: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600418: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    54600425: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100227: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100306: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100313: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100320: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100337: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55100997: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400204: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400259: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400266: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400273: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400280: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400321: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400338: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400345: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400352: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400369: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400376: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400383: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400390: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55400400: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55600181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    55800154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56800016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56800023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56800030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56800047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900075: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    56900082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900099: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    56900109: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    56900116: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    56900123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    56900161: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57100003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57100010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57100106: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57100209: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57100302: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57200000: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200079: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200141: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200165: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57200172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400004: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57400011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400107: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57400145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400169: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400176: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400217: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57400224: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400231: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400255: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400262: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400279: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400286: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400293: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400303: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400341: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400358: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57400365: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57600008: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57600015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600084: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57600091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600101: {
      name: "MBH Szeged Mikszáth",
      bic: "MKKBHUHB"
    },
    57600118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57600132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57700074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800208: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800239: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800246: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800253: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800260: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800277: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800284: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800291: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800301: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800318: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800325: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    57800332: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58100154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58600104: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600214: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600221: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600238: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600245: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600252: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600269: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600276: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600283: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600290: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600300: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600317: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600324: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600331: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600348: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600355: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600362: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600379: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600410: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600427: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600434: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600441: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600458: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600465: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600472: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600489: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600506: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600513: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600520: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600537: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600544: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600551: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600575: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58600582: {
      name: "MBH DUNA Bank Zrt.",
      bic: "DTBAHUHB"
    },
    58900002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    58900105: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    58900215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59000019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59000026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59000033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59000040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59000057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59000064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100016: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59100102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100308: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100401: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100504: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100607: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100700: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100803: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59100906: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59101000: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200020: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59200037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59200161: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59300106: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59300216: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300223: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300230: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300247: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300254: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300261: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300278: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59300285: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300292: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300302: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300319: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300326: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300333: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300340: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300357: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59300364: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300371: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59300388: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500007: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59500100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500203: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59500241: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500258: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500313: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500320: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500337: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500344: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500351: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500368: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500375: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500382: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500454: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500461: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500478: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500485: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500492: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500502: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500519: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59500526: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500533: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500540: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500557: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500564: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500571: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500588: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500605: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500612: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500629: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500643: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500650: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500667: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59500674: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500681: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500698: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500708: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500715: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500722: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59500739: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500746: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500753: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500760: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500777: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500784: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500791: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500801: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500818: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500825: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500832: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500849: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500856: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500863: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500870: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500887: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500894: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500904: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500911: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500928: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500935: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500942: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500959: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500966: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500973: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500980: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59500997: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501204: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501259: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501266: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501273: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501280: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501297: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501307: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59501314: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59600169: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59600310: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800084: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59800091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800101: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59800118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59800163: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    59800170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900005: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    59900074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60300014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60300021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60300038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60300045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60300052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600204: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600259: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600266: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600273: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600280: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600297: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600307: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600314: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600321: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600338: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600345: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600352: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600369: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600376: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600383: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600390: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600400: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600417: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600424: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600431: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600448: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600455: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600462: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600479: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600486: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    60600493: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61200113: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200216: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200223: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200230: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200247: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200254: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200261: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200278: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200285: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200292: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200302: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200319: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200326: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200333: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200340: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200357: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200364: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200371: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200388: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200395: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200405: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200412: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200429: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200436: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61200443: {
      name: "Polgári Bank Zrt.",
      bic: "POLBHU22"
    },
    61400007: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61400997: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61600111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900002: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    61900198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000136: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000143: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000150: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000167: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000174: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000181: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62000198: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100229: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100250: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100267: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100274: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100281: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100298: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100308: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100322: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62100339: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62300216: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62300223: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62300230: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62600169: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62700018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62700111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62700128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62700135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62700142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800259: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800266: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800273: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800280: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800307: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800314: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800321: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800338: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800345: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62800376: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62900012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62900029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62900036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62900050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    62900177: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200157: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    63200171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200250: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200281: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200298: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200308: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200322: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200339: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63200384: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63300130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600306: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600409: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600502: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600605: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600708: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600904: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600911: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600928: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600935: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600942: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600959: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63600966: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63601008: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63601101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63601204: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63601307: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63601400: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63601503: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    63800207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64000077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64400130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700007: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700148: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64700980: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800004: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800200: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800303: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800406: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    64800509: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100084: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100211: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100228: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100235: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100242: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100259: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100266: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100273: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100280: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100297: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100307: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100314: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100321: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100338: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100345: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100352: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100369: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100376: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100383: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100390: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100400: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100417: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100424: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100431: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100448: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100455: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100462: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100479: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100486: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100493: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100503: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100510: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100527: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100534: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100541: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100558: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65100998: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200005: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200108: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200115: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200146: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200153: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65200177: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65500161: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700079: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700141: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65700165: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    65900004: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900169: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900176: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900183: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900190: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900200: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    65900217: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66000169: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    66900100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000014: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000186: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000193: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000203: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000234: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000241: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000258: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67000289: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67600195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800003: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800106: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800113: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800120: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800137: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800144: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800168: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800175: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800182: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800199: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800216: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800223: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800230: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800247: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800254: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800261: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800278: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67800285: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900189: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    67900213: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000213: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000316: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000323: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000330: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68000347: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68200121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500108: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500115: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500122: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500139: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500146: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500153: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500160: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500177: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500184: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500201: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500218: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500225: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68500995: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700229: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700250: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700267: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700274: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700281: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700298: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700308: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700322: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700339: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68700346: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    68800147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300152: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300169: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300176: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300183: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300217: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69300224: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400214: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400221: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400238: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400245: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400317: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400324: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400331: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400410: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400427: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400434: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400441: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400458: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400465: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400616: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400623: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400630: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400647: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400654: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400661: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400678: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400685: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400692: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400719: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400726: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400733: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400740: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400757: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69400764: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500132: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69500194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69501102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69501119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800470: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69800487: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    69801550: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100011: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100121: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100138: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70100145: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300046: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300053: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70300125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70400108: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500033: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500088: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70500105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600188: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600205: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70600212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900141: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900165: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    70900172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800006: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800116: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800123: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800130: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800147: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800154: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800178: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800185: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800192: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800202: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800219: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800226: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800233: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800257: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800264: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800271: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800288: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800295: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800305: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800312: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800329: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800336: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800343: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800350: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800367: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800374: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800381: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800398: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800408: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800415: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800422: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800439: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800446: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800453: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800477: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800518: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800556: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800587: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800594: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800604: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800611: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800628: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800635: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800642: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800659: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800666: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800673: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800697: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800707: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800714: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800721: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800738: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800745: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71800752: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900058: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900072: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900089: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    71900113: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100213: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100220: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100237: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100244: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100251: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100275: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100282: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100299: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100316: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100323: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100330: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100347: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100354: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100419: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100426: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100433: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100440: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100457: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100464: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100471: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100488: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72100512: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600115: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600218: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600225: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600232: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600249: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600256: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600263: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600287: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72600294: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700239: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700246: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700284: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72700291: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72800171: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900075: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900099: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900109: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900604: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900611: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900628: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900635: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900642: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900659: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900666: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900673: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900680: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900697: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900707: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900714: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900721: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900738: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900745: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900752: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900769: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900776: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    72900783: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200079: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200141: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200165: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200189: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200196: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200206: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73200213: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600008: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73600015: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73600022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600039: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73600046: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73600053: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73600060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600077: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600091: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600101: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600118: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600125: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600132: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73600149: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600156: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600163: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600170: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600187: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73600194: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73601016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73601023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73601030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73601054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73601078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602158: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602165: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602172: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73602189: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73603142: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604019: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604026: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604040: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604057: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604064: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604071: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604095: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73604105: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605010: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605027: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605034: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605041: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605065: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605072: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605089: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605096: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605106: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605113: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605120: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605137: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605144: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73605151: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606028: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606035: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606042: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606059: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606066: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606073: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606080: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606097: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73606107: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607012: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607029: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607036: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607043: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607050: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607067: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607074: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607081: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607098: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73607108: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608013: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608020: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608037: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608044: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608051: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608068: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73608082: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609021: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73609038: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73609045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609052: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73609069: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73609076: {
      name: "MBH 103 Herend",
      bic: "MKKBHUHB"
    },
    73609083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609124: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609131: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609155: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73609162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610021: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610038: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610045: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610052: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610069: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610076: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610083: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610090: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610100: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610162: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73610179: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73611015: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73611022: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73611039: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73611060: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612126: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612133: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612140: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73612157: {
      name: "MBH Győr ETO Park",
      bic: "MKKBHUHB"
    },
    73612164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613024: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613031: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613048: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613055: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613062: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613079: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613086: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613093: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613103: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613110: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613127: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73613134: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614018: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614025: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614032: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614049: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614056: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614063: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614070: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614087: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614094: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614111: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614128: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73614135: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900054: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900085: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900092: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900102: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900157: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900164: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900195: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900229: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900425: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900432: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    73900456: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000119: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000212: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000229: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000236: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000243: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000250: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000267: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000274: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000315: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000418: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000425: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000432: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000449: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000456: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000511: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000528: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000535: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000542: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74000559: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500114: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500217: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500231: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500248: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500255: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500262: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500279: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500286: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500293: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500303: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500310: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500327: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500334: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500341: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500358: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500365: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500516: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    74500994: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000112: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000129: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000215: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000222: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000239: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000246: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000253: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000260: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000277: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000284: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000291: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000301: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000325: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000332: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000349: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000356: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000363: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75000370: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500007: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500117: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500210: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500227: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500234: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500241: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500258: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500265: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500289: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500296: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500313: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500320: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500337: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500612: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500629: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75500801: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700104: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700207: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700300: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700403: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700506: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700609: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    75700702: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300009: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300016: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300023: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300030: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300047: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300061: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80300078: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    80600017: {
      name: "MBH Bank Nyrt.",
      bic: "MKKBHUHB"
    },
    88000019: {
      name: "Fundamenta-Lakáskassza Zrt.",
      bic: "FLTPHUHB"
    },
    88100016: {
      name: "OTP Lakástakarékpénztár Zrt.",
      bic: "OTPVHUHB"
    },
    88291015: {
      name: "Fundamenta-Lakáskassza Zrt.",
      bic: "FLTPHUHB"
    },
    88292016: {
      name: "Fundamenta-Lakáskassza Zrt.",
      bic: "FLTPHUHB"
    },
    88293017: {
      name: "Fundamenta-Lakáskassza Zrt.",
      bic: "FLTPHUHB"
    },
    88294018: {
      name: "Fundamenta-Lakáskassza Zrt.",
      bic: "FLTPHUHB"
    },
    88301004: {
      name: "Fundamenta-Lakáskassza Zrt.",
      bic: "FLTPHUHB"
    },
    88411110: {
      name: "OTP Jelzálogbank Zrt.",
      bic: "OTPJHUHB"
    },
    88800015: {
      name: "K&H Jelzálogbank Zrt.",
      bic: "OKHBHUHB"
    },
    90300000: {
      name: "Postai Elszámoló Központ",
      bic: "HUPOHUHB"
    }
  }