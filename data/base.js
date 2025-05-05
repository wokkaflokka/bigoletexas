const baseData = {
    "Central Region": {
        "ratio": "0.0141137604136742",
        "bigger": "false",
        "size": "9826",
        "notes": "Third smallest region of Ghana."
    },
    "Southern Federal District": {
        "ratio": "0.846308532031026",
        "bigger": "false",
        "size": "589200",
        "notes": "Federal district of Russia, created May 2000."
    },
    "Smolyan Province": {
        "ratio": "0.00507325481183568",
        "bigger": "false",
        "size": "3532",
        "notes": "Province of Bulgaria."
    },
    "Santa Barbara": {
        "ratio": "0.00734702671646079",
        "bigger": "false",
        "size": "5115",
        "notes": "Department of Honduras."
    },
    "Lavalleja Department": {
        "ratio": "0.0143866704969836",
        "bigger": "false",
        "size": "10016",
        "notes": "Department of Uruguay."
    },
    "Kiev Oblast": {
        "ratio": "0.040406492387245",
        "bigger": "false",
        "size": "28131",
        "notes": "Oblast of Ukraine."
    },
    "Southampton": {
        "ratio": "7.18184429761563e-05",
        "bigger": "false",
        "size": "50",
        "notes": "Unitary authority (city) of England."
    },
    "County Offaly": {
        "ratio": "0.00287273771904625",
        "bigger": "false",
        "size": "2000",
        "notes": "A county in the Leinster province of the Republic of Ireland."
    },
    "Moon": {
        "ratio": "54.4814708417122",
        "bigger": "true",
        "size": "37930000",
        "notes": "Satellite in orbit around the Earth, excluded by treaty from national claims of ownership."
    },
    "Chola Dynasty": {
        "ratio": "5.17092789428325",
        "bigger": "true",
        "size": "3600000",
        "notes": "A south Asian empire lasting from 330 BC-1279, measured at its apex in 1050."
    },
    "La Paz": {
        "ratio": "0.00334817581154841",
        "bigger": "false",
        "size": "2331",
        "notes": "Department of Honduras."
    },
    "Republic of Adygea": {
        "ratio": "0.0109164033323758",
        "bigger": "false",
        "size": "7600",
        "notes": "Third smallest federal subject of Russia."
    },
    "Ibaraki": {
        "ratio": "0.00875610456765297",
        "bigger": "false",
        "size": "6096",
        "notes": "Prefecture of Japan."
    },
    "Kansas": {
        "ratio": "0.30608445848894",
        "bigger": "false",
        "size": "213096",
        "notes": "State of the United States."
    },
    "Harari Region": {
        "ratio": "0.000446710715311692",
        "bigger": "false",
        "size": "311",
        "notes": "Smallest region of Ethiopia."
    },
    "HautMbomou": {
        "ratio": "0.0797615627693192",
        "bigger": "false",
        "size": "55530",
        "notes": "Prefecture of the Central African Republic."
    },
    "Hajjah Governorate": {
        "ratio": "0.0119218615340419",
        "bigger": "false",
        "size": "8300",
        "notes": "Governorate of Yemen."
    },
    "Yemen": {
        "ratio": "0.758356794024706",
        "bigger": "false",
        "size": "527968",
        "notes": "Country in Middle East. Includes Perim, Socotra, the former Yemen Arab Republic (YAR or North Yemen), and the former People's Democratic Republic of Yemen (PDRY or South Yemen)."
    },
    "Morocco": {
        "ratio": "0.641410514220052",
        "bigger": "false",
        "size": "446550",
        "notes": "Country in Africa; excluding Western Sahara."
    },
    "Centre Province": {
        "ratio": "0.099003160011491",
        "bigger": "false",
        "size": "68926",
        "notes": "Second largest province of Cameroon."
    },
    "Portalegre": {
        "ratio": "0.00871157713300776",
        "bigger": "false",
        "size": "6065",
        "notes": "District of Portugal."
    },
    "Sakhalin Oblast": {
        "ratio": "0.125107727664464",
        "bigger": "false",
        "size": "87100",
        "notes": "Federal subject of Russia."
    },
    "Nueva Segovia": {
        "ratio": "0.00501436368859523",
        "bigger": "false",
        "size": "3491",
        "notes": "Region of Nicaragua."
    },
    "Inhambane Province": {
        "ratio": "0.0985564492961793",
        "bigger": "false",
        "size": "68615",
        "notes": "Province of Mozambique."
    },
    "Zambales": {
        "ratio": "0.0053352484918127",
        "bigger": "false",
        "size": "3714.40",
        "notes": "Province of the Philippines; includes the independent city of Olongapo."
    },
    "County Londonderry": {
        "ratio": "0.00297902901465096",
        "bigger": "false",
        "size": "2074",
        "notes": "A county in the Ulster province of Northern Ireland."
    },
    "Laane County": {
        "ratio": "0.00342286699224361",
        "bigger": "false",
        "size": "2383",
        "notes": "County of Estonia."
    },
    "Jujuy": {
        "ratio": "0.0764421143349612",
        "bigger": "false",
        "size": "53219",
        "notes": "Province of Argentina."
    },
    "Paraiba": {
        "ratio": "0.0810686584314852",
        "bigger": "false",
        "size": "56440",
        "notes": "State of Brazil."
    },
    "Hail Province": {
        "ratio": "0.179546107440391",
        "bigger": "false",
        "size": "125000",
        "notes": "Province of Saudi Arabia."
    },
    "Saraburi Province": {
        "ratio": "0.00513789141051422",
        "bigger": "false",
        "size": "3577",
        "notes": "Province of Thailand."
    },
    "SisakMoslavina": {
        "ratio": "0.00641769606434932",
        "bigger": "false",
        "size": "4468",
        "notes": "Third largest county of Croatia."
    },
    "Connecticut": {
        "ratio": "0.0206219477161735",
        "bigger": "false",
        "size": "14357",
        "notes": "State of the United States."
    },
    "Bridgend": {
        "ratio": "0.000353346739442689",
        "bigger": "false",
        "size": "246",
        "notes": "Unitary authority of Wales."
    },
    "Morelos": {
        "ratio": "0.00711002585463947",
        "bigger": "false",
        "size": "4950",
        "notes": "State of Mexico."
    },
    "Galapagos Province": {
        "ratio": "0.0115053145647802",
        "bigger": "false",
        "size": "8010",
        "notes": "Province of Ecuador."
    },
    "Shumen Province": {
        "ratio": "0.00483338121229532",
        "bigger": "false",
        "size": "3365",
        "notes": "Province of Bulgaria."
    },
    "Zaire Province": {
        "ratio": "0.057641482332663",
        "bigger": "false",
        "size": "40130",
        "notes": "Province of Angola."
    },
    "Abyan Governorate": {
        "ratio": "0.0236282677391554",
        "bigger": "false",
        "size": "16450",
        "notes": "Governorate of Yemen."
    },
    "Northern Borders Region": {
        "ratio": "0.182418845159437",
        "bigger": "false",
        "size": "127000",
        "notes": "Province of Saudi Arabia."
    },
    "Teleorman County": {
        "ratio": "0.0083165756966389",
        "bigger": "false",
        "size": "5790",
        "notes": "County of Romania."
    },
    "Phrae Province": {
        "ratio": "0.00367279517380063",
        "bigger": "false",
        "size": "2557",
        "notes": "Province of Thailand."
    },
    "Saint Vincent and the Grenadines": {
        "ratio": "0.000557311117494973",
        "bigger": "false",
        "size": "388",
        "notes": "Country in the Caribbean."
    },
    "Braila County": {
        "ratio": "0.00684573398448722",
        "bigger": "false",
        "size": "4766",
        "notes": "County of Romania."
    },
    "Upper West Region": {
        "ratio": "0.0265397874174088",
        "bigger": "false",
        "size": "18477",
        "notes": "Region of Ghana."
    },
    "Central Greece": {
        "ratio": "0.0223340993967251",
        "bigger": "false",
        "size": "15549",
        "notes": "Second largest region of Greece."
    },
    "Margibi": {
        "ratio": "0.0037575409365125",
        "bigger": "false",
        "size": "2616",
        "notes": "County of Liberia."
    },
    "Malawi": {
        "ratio": "0.170186727951738",
        "bigger": "false",
        "size": "118484",
        "notes": "Country in Africa."
    },
    "Namibia": {
        "ratio": "1.18398735995404",
        "bigger": "true",
        "size": "824292",
        "notes": "Country in Africa."
    },
    "Louisiana Purchase": {
        "ratio": "3.08388394139615",
        "bigger": "true",
        "size": "2147000",
        "notes": "Area of the United States purchased from France in 1803, which now comprises all or part of fifteen U.S. states."
    }
};

export default baseData; 