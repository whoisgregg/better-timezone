// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

  "use strict";

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "betterTimezone";
    var defaults = {
      showIANA: false,
      showOptgroups: false,
      prefillBrowserTimeZone: true,
    };
    var data = {
      "Hawaiian Standard Time": [
        {
          "iana": "Pacific/Rarotonga",
          "abbrs": [
            "CKT"
          ]
        },
        {
          "iana": "Pacific/Tahiti",
          "abbrs": [
            "TAHT"
          ]
        },
        {
          "iana": "Pacific/Honolulu",
          "abbrs": [
            "HST"
          ]
        },
        {
          "iana": "Pacific/Johnston",
          "abbrs": [
            "HST"
          ]
        }
      ],
      "Singapore Standard Time": [
        {
          "iana": "Asia/Brunei",
          "abbrs": [
            "BNT"
          ]
        },
        {
          "iana": "Asia/Kuala_Lumpur",
          "abbrs": [
            "MYT"
          ]
        },
        {
          "iana": "Asia/Makassar",
          "abbrs": [
            "WITA"
          ]
        },
        {
          "iana": "Asia/Manila",
          "abbrs": [
            "PHT"
          ]
        },
        {
          "iana": "Asia/Singapore",
          "abbrs": [
            "SGT"
          ]
        },
        {
          "iana": "Asia/Kuching",
          "abbrs": [
            "MYT"
          ]
        }
      ],
      "Venezuela Standard Time": [
        {
          "iana": "America/Caracas",
          "abbrs": [
            "VET"
          ]
        }
      ],
      "Ekaterinburg Standard Time": [
        {
          "iana": "Asia/Yekaterinburg",
          "abbrs": [
            "YEKT",
            "YEKST"
          ]
        }
      ],
      "Turkey Standard Time": [
        {
          "iana": "Europe/Istanbul",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "Eastern European Time": [
        {
          "iana": "Europe/Istanbul",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "GMT Standard Time": [
        {
          "iana": "Atlantic/Canary",
          "abbrs": [
            "WET",
            "WEST"
          ]
        },
        {
          "iana": "Atlantic/Faeroe",
          "abbrs": [
            "WET",
            "WEST"
          ]
        },
        {
          "iana": "Atlantic/Madeira",
          "abbrs": [
            "WET",
            "WEST"
          ]
        },
        {
          "iana": "Europe/Lisbon",
          "abbrs": [
            "WET",
            "WEST"
          ]
        },
        {
          "iana": "Europe/Dublin",
          "abbrs": [
            "GMT",
            "IST"
          ]
        },
        {
          "iana": "Europe/Guernsey",
          "abbrs": [
            "GMT",
            "BST"
          ]
        },
        {
          "iana": "Europe/Isle_of_Man",
          "abbrs": [
            "GMT",
            "BST"
          ]
        },
        {
          "iana": "Europe/Jersey",
          "abbrs": [
            "GMT",
            "BST"
          ]
        },
        {
          "iana": "Europe/London",
          "abbrs": [
            "GMT",
            "BST"
          ]
        }
      ],
      "British Summer Time": [
        {
          "iana": "Europe/London",
          "abbrs": [
            "GMT",
            "BST"
          ]
        }
      ],
      "Pacific SA Standard Time": [
        {
          "iana": "America/Santiago",
          "abbrs": [
            "CLST",
            "CLT"
          ]
        },
        {
          "iana": "Antarctica/Palmer",
          "abbrs": [
            "CLST",
            "CLT"
          ]
        }
      ],
      "Tokyo Standard Time": [
        {
          "iana": "Asia/Dili",
          "abbrs": [
            "TLT"
          ]
        },
        {
          "iana": "Asia/Jayapura",
          "abbrs": [
            "WIT"
          ]
        },
        {
          "iana": "Asia/Tokyo",
          "abbrs": [
            "JST"
          ]
        },
        {
          "iana": "Pacific/Palau",
          "abbrs": [
            "PWT"
          ]
        }
      ],
      "Jordan Standard Time": [
        {
          "iana": "Asia/Amman",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "Bahia Standard Time": [
        {
          "iana": "America/Bahia",
          "abbrs": [
            "BRT",
            "BRST"
          ]
        }
      ],
      "Middle East Standard Time": [
        {
          "iana": "Asia/Beirut",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "SA Eastern Standard Time": [
        {
          "iana": "America/Araguaina",
          "abbrs": [
            "BRT",
            "BRST"
          ]
        },
        {
          "iana": "America/Belem",
          "abbrs": [
            "BRT"
          ]
        },
        {
          "iana": "America/Cayenne",
          "abbrs": [
            "GFT"
          ]
        },
        {
          "iana": "America/Paramaribo",
          "abbrs": [
            "SRT"
          ]
        },
        {
          "iana": "Antarctica/Rothera",
          "abbrs": [
            "ROTT"
          ]
        },
        {
          "iana": "Atlantic/Stanley",
          "abbrs": [
            "FKST",
            "FKT"
          ]
        },
        {
          "iana": "America/Fortaleza",
          "abbrs": [
            "BRT"
          ]
        },
        {
          "iana": "America/Maceio",
          "abbrs": [
            "BRT"
          ]
        },
        {
          "iana": "America/Recife",
          "abbrs": [
            "BRT"
          ]
        },
        {
          "iana": "America/Santarem",
          "abbrs": [
            "BRT"
          ]
        }
      ],
      "N. Central Asia Standard Time": [
        {
          "iana": "Asia/Novokuznetsk",
          "abbrs": [
            "KRAT",
            "NOVST",
            "NOVT"
          ]
        },
        {
          "iana": "Asia/Novosibirsk",
          "abbrs": [
            "NOVT",
            "NOVST"
          ]
        },
        {
          "iana": "Asia/Omsk",
          "abbrs": [
            "OMST",
            "OMSST"
          ]
        }
      ],
      "E. Australia Standard Time": [
        {
          "iana": "Australia/Brisbane",
          "abbrs": [
            "AEST"
          ]
        },
        {
          "iana": "Australia/Lindeman",
          "abbrs": [
            "AEST"
          ]
        }
      ],
      "Paraguay Standard Time": [
        {
          "iana": "America/Asuncion",
          "abbrs": [
            "PYST",
            "PYT"
          ]
        }
      ],
      "New Zealand Standard Time": [
        {
          "iana": "Antarctica/McMurdo",
          "abbrs": [
            "NZDT",
            "NZST"
          ]
        },
        {
          "iana": "Pacific/Auckland",
          "abbrs": [
            "NZDT",
            "NZST"
          ]
        }
      ],
      "Iran Standard Time": [
        {
          "iana": "Asia/Tehran",
          "abbrs": [
            "IRST",
            "IRDT"
          ]
        }
      ],
      "West Asia Standard Time": [
        {
          "iana": "Antarctica/Mawson",
          "abbrs": [
            "MAWT"
          ]
        },
        {
          "iana": "Asia/Aqtau",
          "abbrs": [
            "AQTT"
          ]
        },
        {
          "iana": "Asia/Ashgabat",
          "abbrs": [
            "TMT"
          ]
        },
        {
          "iana": "Asia/Dushanbe",
          "abbrs": [
            "TJT"
          ]
        },
        {
          "iana": "Asia/Oral",
          "abbrs": [
            "ORAT"
          ]
        },
        {
          "iana": "Asia/Samarkand",
          "abbrs": [
            "UZT"
          ]
        },
        {
          "iana": "Indian/Kerguelen",
          "abbrs": [
            "TFT"
          ]
        },
        {
          "iana": "Indian/Maldives",
          "abbrs": [
            "MVT"
          ]
        },
        {
          "iana": "Asia/Aqtobe",
          "abbrs": [
            "AQTT"
          ]
        },
        {
          "iana": "Asia/Tashkent",
          "abbrs": [
            "UZT"
          ]
        }
      ],
      "North Asia East Standard Time": [
        {
          "iana": "Asia/Irkutsk",
          "abbrs": [
            "IRKT",
            "IRKST"
          ]
        }
      ],
      "Sri Lanka Standard Time": [
        {
          "iana": "Asia/Colombo",
          "abbrs": [
            "IST"
          ]
        }
      ],
      "AUS Central Standard Time": [
        {
          "iana": "Australia/Darwin",
          "abbrs": [
            "ACST"
          ]
        }
      ],
      "Yakutsk Standard Time": [
        {
          "iana": "Asia/Chita",
          "abbrs": [
            "YAKT",
            "YAKST",
            "IRKT"
          ]
        },
        {
          "iana": "Asia/Khandyga",
          "abbrs": [
            "VLAT",
            "VLAST",
            "YAKT"
          ]
        },
        {
          "iana": "Asia/Yakutsk",
          "abbrs": [
            "YAKT",
            "YAKST"
          ]
        }
      ],
      "Myanmar Standard Time": [
        {
          "iana": "Asia/Rangoon",
          "abbrs": [
            "MMT"
          ]
        },
        {
          "iana": "Indian/Cocos",
          "abbrs": [
            "CCT"
          ]
        }
      ],
      "Afghanistan Standard Time": [
        {
          "iana": "Asia/Kabul",
          "abbrs": [
            "AFT"
          ]
        }
      ],
      "Vladivostok Standard Time": [
        {
          "iana": "Asia/Sakhalin",
          "abbrs": [
            "SAKT",
            "SAKST"
          ]
        },
        {
          "iana": "Asia/Ust-Nera",
          "abbrs": [
            "MAGT",
            "MAGST",
            "VLAT"
          ]
        },
        {
          "iana": "Asia/Vladivostok",
          "abbrs": [
            "VLAT",
            "VLAST"
          ]
        }
      ],
      "W. Australia Standard Time": [
        {
          "iana": "Antarctica/Casey",
          "abbrs": [
            "CAST",
            "AWST"
          ]
        },
        {
          "iana": "Australia/Perth",
          "abbrs": [
            "AWST"
          ]
        }
      ],
      "Cape Verde Standard Time": [
        {
          "iana": "Atlantic/Cape_Verde",
          "abbrs": [
            "CVT"
          ]
        }
      ],
      "China Standard Time": [
        {
          "iana": "Asia/Hong_Kong",
          "abbrs": [
            "HKT"
          ]
        },
        {
          "iana": "Asia/Macau",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "Asia/Shanghai",
          "abbrs": [
            "CST"
          ]
        }
      ],
      "Central Pacific Standard Time": [
        {
          "iana": "Antarctica/Macquarie",
          "abbrs": [
            "AEDT",
            "MIST"
          ]
        },
        {
          "iana": "Pacific/Efate",
          "abbrs": [
            "VUT"
          ]
        },
        {
          "iana": "Pacific/Guadalcanal",
          "abbrs": [
            "SBT"
          ]
        },
        {
          "iana": "Pacific/Kosrae",
          "abbrs": [
            "KOST"
          ]
        },
        {
          "iana": "Pacific/Noumea",
          "abbrs": [
            "NCT"
          ]
        },
        {
          "iana": "Pacific/Ponape",
          "abbrs": [
            "PONT"
          ]
        }
      ],
      "Greenland Standard Time": [
        {
          "iana": "America/Godthab",
          "abbrs": [
            "WGT",
            "WGST"
          ]
        }
      ],
      "Romance Standard Time": [
        {
          "iana": "Africa/Ceuta",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Brussels",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Copenhagen",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Madrid",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Paris",
          "abbrs": [
            "CET",
            "CEST"
          ]
        }
      ],
      "Syria Standard Time": [
        {
          "iana": "Asia/Damascus",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "Central European Standard Time": [
        {
          "iana": "Europe/Sarajevo",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Skopje",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Warsaw",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Zagreb",
          "abbrs": [
            "CET",
            "CEST"
          ]
        }
      ],
      "Korea Standard Time": [
        {
          "iana": "Asia/Pyongyang",
          "abbrs": [
            "KST"
          ]
        },
        {
          "iana": "Asia/Seoul",
          "abbrs": [
            "KST"
          ]
        }
      ],
      "Azerbaijan Standard Time": [
        {
          "iana": "Asia/Baku",
          "abbrs": [
            "AZT",
            "AZST"
          ]
        }
      ],
      "Newfoundland Standard Time": [
        {
          "iana": "America/St_Johns",
          "abbrs": [
            "NST",
            "NDT"
          ]
        }
      ],
      "Egypt Standard Time": [
        {
          "iana": "Africa/Cairo",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "SA Pacific Standard Time": [
        {
          "iana": "America/Bogota",
          "abbrs": [
            "COT"
          ]
        },
        {
          "iana": "America/Eirunepe",
          "abbrs": [
            "AMT",
            "ACT"
          ]
        },
        {
          "iana": "America/Guayaquil",
          "abbrs": [
            "ECT"
          ]
        },
        {
          "iana": "America/Lima",
          "abbrs": [
            "PET"
          ]
        },
        {
          "iana": "America/Cayman",
          "abbrs": [
            "EST"
          ]
        },
        {
          "iana": "America/Coral_Harbour",
          "abbrs": [
            "EST"
          ]
        },
        {
          "iana": "America/Jamaica",
          "abbrs": [
            "EST"
          ]
        },
        {
          "iana": "America/Panama",
          "abbrs": [
            "EST"
          ]
        },
        {
          "iana": "America/Rio_Branco",
          "abbrs": [
            "AMT",
            "ACT"
          ]
        }
      ],
      "Taipei Standard Time": [
        {
          "iana": "Asia/Taipei",
          "abbrs": [
            "CST"
          ]
        }
      ],
      "Mountain Standard Time - Arizona": [
        {
          "iana": "America/Phoenix",
          "abbrs": [
            "MST"
          ]
        },
      ],
      "Mountain Standard Time": [
        {
        "iana": "America/Denver",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Creston",
          "abbrs": [
            "MST"
          ]
        },
        {
          "iana": "America/Dawson_Creek",
          "abbrs": [
            "MST"
          ]
        },
        {
          "iana": "America/Hermosillo",
          "abbrs": [
            "MST"
          ]
        },
        {
          "iana": "America/Chihuahua",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Mazatlan",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Boise",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Cambridge_Bay",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Denver",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Edmonton",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Inuvik",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Ojinaga",
          "abbrs": [
            "MST",
            "MDT"
          ]
        },
        {
          "iana": "America/Yellowknife",
          "abbrs": [
            "MST",
            "MDT"
          ]
        }
      ],
      "Line Islands Standard Time": [
        {
          "iana": "Pacific/Kiritimati",
          "abbrs": [
            "LINT"
          ]
        }
      ],
      "Bangladesh Standard Time": [
        {
          "iana": "Asia/Dhaka",
          "abbrs": [
            "BDT"
          ]
        },
        {
          "iana": "Asia/Thimphu",
          "abbrs": [
            "BTT"
          ]
        }
      ],
      "Pacific Standard Time": [
        {
          "iana": "America/Los_Angeles",
          "abbrs": [
            "PST",
            "PDT"
          ]
        },
        {
          "iana": "America/Dawson",
          "abbrs": [
            "PST",
            "PDT"
          ]
        },
        {
          "iana": "America/Los_Angeles",
          "abbrs": [
            "PST",
            "PDT"
          ]
        },
        {
          "iana": "America/Tijuana",
          "abbrs": [
            "PST",
            "PDT"
          ]
        },
        {
          "iana": "America/Vancouver",
          "abbrs": [
            "PST",
            "PDT"
          ]
        },
        {
          "iana": "America/Whitehorse",
          "abbrs": [
            "PST",
            "PDT"
          ]
        },
        {
          "iana": "America/Santa_Isabel",
          "abbrs": [
            "PST",
            "PDT"
          ]
        }
      ],
      "Samoa Standard Time": [
        {
          "iana": "Pacific/Apia",
          "abbrs": [
            "SST",
            "SDT",
            "WSDT",
            "WSST"
          ]
        }
      ],
      "Nepal Standard Time": [
        {
          "iana": "Asia/Katmandu",
          "abbrs": [
            "NPT"
          ]
        }
      ],
      "Ulaanbaatar Standard Time": [
        {
          "iana": "Asia/Choibalsan",
          "abbrs": [
            "CHOT"
          ]
        },
        {
          "iana": "Asia/Ulaanbaatar",
          "abbrs": [
            "ULAT"
          ]
        }
      ],
      "Morocco Standard Time": [
        {
          "iana": "Africa/Casablanca",
          "abbrs": [
            "WET",
            "WEST"
          ]
        },
        {
          "iana": "Africa/El_Aaiun",
          "abbrs": [
            "WET",
            "WEST"
          ]
        }
      ],
      "Israel Standard Time": [
        {
          "iana": "Asia/Jerusalem",
          "abbrs": [
            "IST",
            "IDT"
          ]
        }
      ],
      "Central Brazilian Standard Time": [
        {
          "iana": "America/Campo_Grande",
          "abbrs": [
            "AMST",
            "AMT"
          ]
        },
        {
          "iana": "America/Cuiaba",
          "abbrs": [
            "AMST",
            "AMT"
          ]
        }
      ],
      "Central Standard Time": [
        {
        "iana": "America/Chicago",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Bahia_Banderas",
          "abbrs": [
            "MST",
            "CDT",
            "CST"
          ]
        },
        {
          "iana": "America/Cancun",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Merida",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Mexico_City",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Monterrey",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Regina",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "America/Swift_Current",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "America/Chicago",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/North_Dakota/Beulah",
          "abbrs": [
            "MST",
            "MDT",
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Indiana/Knox",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Indiana/Tell_City",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Matamoros",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Menominee",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/North_Dakota/Center",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/North_Dakota/New_Salem",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Rainy_River",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Rankin_Inlet",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Resolute",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Winnipeg",
          "abbrs": [
            "CST",
            "CDT"
          ]
        }
      ],
      "Libya Standard Time": [
        {
          "iana": "Africa/Tripoli",
          "abbrs": [
            "EET",
            "CET",
            "CEST"
          ]
        }
      ],
      "E. Africa Standard Time": [
        {
          "iana": "Africa/Addis_Ababa",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Antarctica/Syowa",
          "abbrs": [
            "SYOT"
          ]
        },
        {
          "iana": "Africa/Asmera",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Dar_es_Salaam",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Djibouti",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Juba",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Kampala",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Khartoum",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Mogadishu",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Africa/Nairobi",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Indian/Antananarivo",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Indian/Comoro",
          "abbrs": [
            "EAT"
          ]
        },
        {
          "iana": "Indian/Mayotte",
          "abbrs": [
            "EAT"
          ]
        }
      ],
      "Alaskan Standard Time": [
        {
          "iana": "America/Anchorage",
          "abbrs": [
            "AKST",
            "AKDT"
          ]
        },
        {
          "iana": "America/Juneau",
          "abbrs": [
            "AKST",
            "AKDT"
          ]
        },
        {
          "iana": "America/Nome",
          "abbrs": [
            "AKST",
            "AKDT"
          ]
        },
        {
          "iana": "America/Sitka",
          "abbrs": [
            "AKST",
            "AKDT"
          ]
        },
        {
          "iana": "America/Yakutat",
          "abbrs": [
            "AKST",
            "AKDT"
          ]
        }
      ],
      "Tasmania Standard Time": [
        {
          "iana": "Australia/Currie",
          "abbrs": [
            "AEDT",
            "AEST"
          ]
        },
        {
          "iana": "Australia/Hobart",
          "abbrs": [
            "AEDT",
            "AEST"
          ]
        }
      ],
      "Greenwich Standard Time": [
        {
          "iana": "Africa/Abidjan",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Accra",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Bamako",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Banjul",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Bissau",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Conakry",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Dakar",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Freetown",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Lome",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Monrovia",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Nouakchott",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Ouagadougou",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Africa/Sao_Tome",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Atlantic/Reykjavik",
          "abbrs": [
            "GMT"
          ]
        },
        {
          "iana": "Atlantic/St_Helena",
          "abbrs": [
            "GMT"
          ]
        }
      ],
      "Montevideo Standard Time": [
        {
          "iana": "America/Montevideo",
          "abbrs": [
            "UYST",
            "UYT"
          ]
        }
      ],
      "SA Western Standard Time": [
        {
          "iana": "America/Anguilla",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Boa_Vista",
          "abbrs": [
            "AMT"
          ]
        },
        {
          "iana": "America/Grand_Turk",
          "abbrs": [
            "EST",
            "EDT",
            "AST"
          ]
        },
        {
          "iana": "America/Guyana",
          "abbrs": [
            "GYT"
          ]
        },
        {
          "iana": "America/La_Paz",
          "abbrs": [
            "BOT"
          ]
        },
        {
          "iana": "America/Antigua",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Aruba",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Barbados",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Blanc-Sablon",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Curacao",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Dominica",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Grenada",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Guadeloupe",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Kralendijk",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Lower_Princes",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Marigot",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Martinique",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Montserrat",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Port_of_Spain",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Puerto_Rico",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Santo_Domingo",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/St_Barthelemy",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/St_Kitts",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/St_Lucia",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/St_Thomas",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/St_Vincent",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Tortola",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "America/Manaus",
          "abbrs": [
            "AMT"
          ]
        },
        {
          "iana": "America/Porto_Velho",
          "abbrs": [
            "AMT"
          ]
        }
      ],
      "North Asia Standard Time": [
        {
          "iana": "Asia/Krasnoyarsk",
          "abbrs": [
            "KRAT",
            "KRAST"
          ]
        }
      ],
      "Arabic Standard Time": [
        {
          "iana": "Asia/Baghdad",
          "abbrs": [
            "AST"
          ]
        }
      ],
      "Arab Standard Time": [
        {
          "iana": "Asia/Aden",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "Asia/Bahrain",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "Asia/Kuwait",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "Asia/Qatar",
          "abbrs": [
            "AST"
          ]
        },
        {
          "iana": "Asia/Riyadh",
          "abbrs": [
            "AST"
          ]
        }
      ],
      "AUS Eastern Standard Time": [
        {
          "iana": "Australia/Melbourne",
          "abbrs": [
            "AEDT",
            "AEST"
          ]
        },
        {
          "iana": "Australia/Sydney",
          "abbrs": [
            "AEDT",
            "AEST"
          ]
        }
      ],
      "W. Central Africa Standard Time": [
        {
          "iana": "Africa/Algiers",
          "abbrs": [
            "CET"
          ]
        },
        {
          "iana": "Africa/Bangui",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Tunis",
          "abbrs": [
            "CET"
          ]
        },
        {
          "iana": "Africa/Brazzaville",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Douala",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Kinshasa",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Lagos",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Libreville",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Luanda",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Malabo",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Ndjamena",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Niamey",
          "abbrs": [
            "WAT"
          ]
        },
        {
          "iana": "Africa/Porto-Novo",
          "abbrs": [
            "WAT"
          ]
        }
      ],
      "Central America Standard Time": [
        {
          "iana": "America/Belize",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "Pacific/Galapagos",
          "abbrs": [
            "GALT"
          ]
        },
        {
          "iana": "America/Costa_Rica",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "America/El_Salvador",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "America/Guatemala",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "America/Managua",
          "abbrs": [
            "CST"
          ]
        },
        {
          "iana": "America/Tegucigalpa",
          "abbrs": [
            "CST"
          ]
        }
      ],
      "FLE Standard Time": [
        {
          "iana": "Europe/Helsinki",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Kiev",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Mariehamn",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Riga",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Sofia",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Tallinn",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Uzhgorod",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Vilnius",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Zaporozhye",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "Cen. Australia Standard Time": [
        {
          "iana": "Australia/Adelaide",
          "abbrs": [
            "ACDT",
            "ACST"
          ]
        },
        {
          "iana": "Australia/Broken_Hill",
          "abbrs": [
            "ACDT",
            "ACST"
          ]
        }
      ],
      "GTB Standard Time": [
        {
          "iana": "Asia/Nicosia",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Athens",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Bucharest",
          "abbrs": [
            "EET",
            "EEST"
          ]
        },
        {
          "iana": "Europe/Chisinau",
          "abbrs": [
            "EET",
            "EEST"
          ]
        }
      ],
      "South Africa Standard Time": [
        {
          "iana": "Africa/Blantyre",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Johannesburg",
          "abbrs": [
            "SAST"
          ]
        },
        {
          "iana": "Africa/Bujumbura",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Gaborone",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Harare",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Kigali",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Lubumbashi",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Lusaka",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Maputo",
          "abbrs": [
            "CAT"
          ]
        },
        {
          "iana": "Africa/Maseru",
          "abbrs": [
            "SAST"
          ]
        },
        {
          "iana": "Africa/Mbabane",
          "abbrs": [
            "SAST"
          ]
        }
      ],
      "Russian Standard Time": [
        {
          "iana": "Europe/Moscow",
          "abbrs": [
            "MSK",
            "MSD"
          ]
        },
        {
          "iana": "Europe/Samara",
          "abbrs": [
            "SAMT",
            "SAMST"
          ]
        },
        {
          "iana": "Europe/Simferopol",
          "abbrs": [
            "EET",
            "EEST",
            "MSK"
          ]
        },
        {
          "iana": "Europe/Volgograd",
          "abbrs": [
            "MSK"
          ]
        }
      ],
      "SE Asia Standard Time": [
        {
          "iana": "Antarctica/Davis",
          "abbrs": [
            "DAVT"
          ]
        },
        {
          "iana": "Asia/Bangkok",
          "abbrs": [
            "ICT"
          ]
        },
        {
          "iana": "Asia/Hovd",
          "abbrs": [
            "HOVT"
          ]
        },
        {
          "iana": "Asia/Jakarta",
          "abbrs": [
            "WIB"
          ]
        },
        {
          "iana": "Indian/Christmas",
          "abbrs": [
            "CXT"
          ]
        },
        {
          "iana": "Asia/Phnom_Penh",
          "abbrs": [
            "ICT"
          ]
        },
        {
          "iana": "Asia/Saigon",
          "abbrs": [
            "ICT"
          ]
        },
        {
          "iana": "Asia/Vientiane",
          "abbrs": [
            "ICT"
          ]
        },
        {
          "iana": "Asia/Pontianak",
          "abbrs": [
            "WIB"
          ]
        }
      ],
      "Caucasus Standard Time": [
        {
          "iana": "Asia/Yerevan",
          "abbrs": [
            "AMT",
            "AMST"
          ]
        }
      ],
      "E. South America Standard Time": [
        {
          "iana": "America/Sao_Paulo",
          "abbrs": [
            "BRST",
            "BRT"
          ]
        }
      ],
      "Argentina Standard Time": [
        {
          "iana": "America/Argentina/La_Rioja",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Argentina/Rio_Gallegos",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Argentina/Salta",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Argentina/San_Juan",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Argentina/San_Luis",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Argentina/Tucuman",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Argentina/Ushuaia",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Buenos_Aires",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Catamarca",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Cordoba",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Jujuy",
          "abbrs": [
            "ART"
          ]
        },
        {
          "iana": "America/Mendoza",
          "abbrs": [
            "ART"
          ]
        }
      ],
      "Azores Standard Time": [
        {
          "iana": "America/Scoresbysund",
          "abbrs": [
            "EGT",
            "EGST"
          ]
        },
        {
          "iana": "Atlantic/Azores",
          "abbrs": [
            "AZOT",
            "AZOST"
          ]
        }
      ],
      "Magadan Standard Time": [
        {
          "iana": "Asia/Anadyr",
          "abbrs": [
            "ANAT",
            "ANAST"
          ]
        },
        {
          "iana": "Asia/Kamchatka",
          "abbrs": [
            "PETT",
            "PETST"
          ]
        },
        {
          "iana": "Asia/Magadan",
          "abbrs": [
            "MAGT",
            "MAGST"
          ]
        },
        {
          "iana": "Asia/Srednekolymsk",
          "abbrs": [
            "MAGT",
            "MAGST",
            "SRET"
          ]
        }
      ],
      "Central Europe Standard Time": [
        {
          "iana": "Europe/Belgrade",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Bratislava",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Budapest",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Ljubljana",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Podgorica",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Prague",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Tirane",
          "abbrs": [
            "CET",
            "CEST"
          ]
        }
      ],
      "W. Europe Standard Time": [
        {
          "iana": "Arctic/Longyearbyen",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Amsterdam",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Andorra",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Berlin",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Busingen",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Gibraltar",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Luxembourg",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Malta",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Monaco",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Oslo",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Rome",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/San_Marino",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Stockholm",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Vaduz",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Vatican",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Vienna",
          "abbrs": [
            "CET",
            "CEST"
          ]
        },
        {
          "iana": "Europe/Zurich",
          "abbrs": [
            "CET",
            "CEST"
          ]
        }
      ],
      "West Pacific Standard Time": [
        {
          "iana": "Antarctica/DumontDUrville",
          "abbrs": [
            "DDUT"
          ]
        },
        {
          "iana": "Pacific/Guam",
          "abbrs": [
            "ChST"
          ]
        },
        {
          "iana": "Pacific/Port_Moresby",
          "abbrs": [
            "PGT"
          ]
        },
        {
          "iana": "Pacific/Truk",
          "abbrs": [
            "CHUT"
          ]
        },
        {
          "iana": "Pacific/Saipan",
          "abbrs": [
            "ChST"
          ]
        }
      ],
      "Arabian Standard Time": [
        {
          "iana": "Asia/Dubai",
          "abbrs": [
            "GST"
          ]
        },
        {
          "iana": "Asia/Muscat",
          "abbrs": [
            "GST"
          ]
        }
      ],
      "Tonga Standard Time": [
        {
          "iana": "Pacific/Enderbury",
          "abbrs": [
            "PHOT"
          ]
        },
        {
          "iana": "Pacific/Fakaofo",
          "abbrs": [
            "TKT"
          ]
        },
        {
          "iana": "Pacific/Tongatapu",
          "abbrs": [
            "TOT"
          ]
        }
      ],
      "Mauritius Standard Time": [
        {
          "iana": "Indian/Mahe",
          "abbrs": [
            "SCT"
          ]
        },
        {
          "iana": "Indian/Mauritius",
          "abbrs": [
            "MUT"
          ]
        },
        {
          "iana": "Indian/Reunion",
          "abbrs": [
            "RET"
          ]
        }
      ],
      "Kaliningrad Standard Time": [
        {
          "iana": "Europe/Kaliningrad",
          "abbrs": [
            "EET",
            "EEST",
            "FET"
          ]
        },
        {
          "iana": "Europe/Minsk",
          "abbrs": [
            "EET",
            "EEST",
            "FET",
            "MSK"
          ]
        }
      ],
      "Namibia Standard Time": [
        {
          "iana": "Africa/Windhoek",
          "abbrs": [
            "WAST",
            "WAT"
          ]
        }
      ],
      "Pakistan Standard Time": [
        {
          "iana": "Asia/Karachi",
          "abbrs": [
            "PKT"
          ]
        }
      ],
      "Eastern Standard Time": [
        {
          "iana": "America/New_York",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Detroit",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Havana",
          "abbrs": [
            "CST",
            "CDT"
          ]
        },
        {
          "iana": "America/Port-au-Prince",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Indiana/Petersburg",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Indiana/Vincennes",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Indiana/Winamac",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Iqaluit",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Kentucky/Monticello",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Louisville",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Montreal",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Nassau",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/New_York",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Nipigon",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Pangnirtung",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Thunder_Bay",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Toronto",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Indiana/Marengo",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Indiana/Vevay",
          "abbrs": [
            "EST",
            "EDT"
          ]
        },
        {
          "iana": "America/Indianapolis",
          "abbrs": [
            "EST",
            "EDT"
          ]
        }
      ],
      "India Standard Time": [
        {
          "iana": "Asia/Calcutta",
          "abbrs": [
            "IST"
          ]
        }
      ],
      "Central Asia Standard Time": [
        {
          "iana": "Antarctica/Vostok",
          "abbrs": [
            "VOST"
          ]
        },
        {
          "iana": "Asia/Almaty",
          "abbrs": [
            "ALMT"
          ]
        },
        {
          "iana": "Asia/Bishkek",
          "abbrs": [
            "KGT"
          ]
        },
        {
          "iana": "Asia/Qyzylorda",
          "abbrs": [
            "QYZT"
          ]
        },
        {
          "iana": "Indian/Chagos",
          "abbrs": [
            "IOT"
          ]
        },
        {
          "iana": "Asia/Urumqi",
          "abbrs": [
            "XJT"
          ]
        }
      ],
      "Georgian Standard Time": [
        {
          "iana": "Asia/Tbilisi",
          "abbrs": [
            "GET"
          ]
        }
      ],
      "Atlantic Standard Time": [
        {
          "iana": "America/Glace_Bay",
          "abbrs": [
            "AST",
            "ADT"
          ]
        },
        {
          "iana": "America/Goose_Bay",
          "abbrs": [
            "AST",
            "ADT"
          ]
        },
        {
          "iana": "America/Halifax",
          "abbrs": [
            "AST",
            "ADT"
          ]
        },
        {
          "iana": "America/Moncton",
          "abbrs": [
            "AST",
            "ADT"
          ]
        },
        {
          "iana": "America/Thule",
          "abbrs": [
            "AST",
            "ADT"
          ]
        },
        {
          "iana": "Atlantic/Bermuda",
          "abbrs": [
            "AST",
            "ADT"
          ]
        }
      ],
      "Fiji Standard Time": [
        {
          "iana": "Pacific/Fiji",
          "abbrs": [
            "FJST",
            "FJT"
          ]
        }
      ]
    };

    // The actual plugin constructor
    function Plugin ( element, options ) {
      this.element = element;
      // jQuery has an extend method which merges the contents of two or
      // more objects, storing the result in the first object. The first object
      // is generally empty as we don't want to alter the default options for
      // future instances of the plugin
      this.settings = $.extend( {}, defaults, options );
      this._defaults = defaults;
      this._name = pluginName;
      this.data = data;
      this.keys = Object.keys(this.data).sort();
      this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
      init: function () {
        var self = this;
        // available: this.element, this.settings
        // build optgroups and options to insert into select
        if (this.settings.showOptgroups && !this.settings.showIANA) {
          throw "showOptsgroups cannot be true when showIANA is false";
        }

        if (this.settings.showOptgroups) {
          this.keys.forEach(function(el, i){
            var $el = $('<optgroup label="'+el+'"></optgroup>');
            self.data[el].forEach(function(place, j){
              var name = place.iana.replace('_', ' ').split('/');
              var nameLast = name[name.length - 1];
              $el.append('<option value="'+place.iana+'">'+place.abbrs.join(' / ')+' - '+nameLast);
              // $(self.element).append('<option value="'+place.iana+'">'+place.abbrs.join(' / ')+' - '+nameLast);
            });
            $(self.element).append($el);
          });
        } else {
          if (this.settings.showIANA) {
            this.keys.forEach(function(el, i){
              self.data[el].forEach(function(place, j){
                var name = place.iana.replace('_', ' ').split('/');
                var nameLast = name[name.length - 1];
                $(self.element).append('<option value="'+place.iana+'">'+place.abbrs.join(' / ')+' - '+nameLast);
              });
            });
          } else {
            this.keys.forEach(function(el, i){
              $(self.element).append('<option value="'+self.data[el][0].iana+'">'+el+' ('+self.data[el][0].abbrs.join('/')+')');
            });
          }
        }

        // instantiate select2
        // $.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
        //   $(self.element).select2({
        //     matcher: oldMatcher(self.match),
        //     placeholder: 'Select a timezone'
        //   });
        // });
        $(self.element).select2({
          placeholder: 'Please select a timezone',
          width: 'style'
        });

        if(this.settings.prefillBrowserTimeZone){
            // prefill
            var abbr = new Date().toTimeString().match(/\((.+)\)/)[1];
            if (abbr === 'PST' || abbr === 'PDT' || abbr === 'Pacific Daylight Time' || abbr === 'Pacific Standard Time') {
              $(self.element).val('America/Los_Angeles').trigger('change');
            } else if (abbr === 'EST' || abbr === 'EDT' || abbr === 'Eastern Standard Time' || abbr === 'Eastern Daylight Time') {
              $(self.element).val('America/New_York').trigger('change');
            } else if (abbr === 'MST' || abbr === 'MDT' || abbr === 'Mountain Standard Time' || abbr === 'Mountain Daylight Time') {
              $(self.element).val('America/Denver').trigger('change');
            } else if (abbr === 'CST' || abbr === 'CDT' || abbr === 'Central Standard Time' || abbr === 'Central Daylight Time') {
              $(self.element).val('America/Chicago').trigger('change');
            } else {
              // look for a match
              var done;
              for (var key in self.data) {
                if (!done) {
                  for (var i = 0; i < self.data[key].length; i++) {
                    var iana = self.data[key][i].iana;
                    if (self.data[key][i].abbrs.indexOf(abbr) !== -1) {
                      $(self.element).val(iana).trigger('change');
                      done = true;
                      break;
                    }
                  }
                } else {
                  break;
                }
              }
              if (!done) {
                // default to PST
                $(self.element).val('America/Los_Angeles').trigger('change');
              }
            }
        } else {
            // allows setting "data-iana" on the <select> in order to select an option
            if($(self.element).data('iana') !== ''){
                $(self.element).val($(self.element).data('iana')).trigger('change');
            }
        }
      },
      match: function (term, text, opt) {
        // TODO: match all caps letters strongly, else weakly
        // TODO: if match optgroup labels, show entire group
      },
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
      return this.each(function() {
        if ( !$.data( this, "plugin_" + pluginName ) ) {
          $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
        }
      });
    };

})( jQuery, window, document );
