const buildingsData = [
    {
        "id": 1,
        "address": "8481 Bowman Crossing",
        "companyId": 1,
        "fullname": "Kozey-Lowe",
        "phone": "494-640-7276"
      }, {
        "id": 2,
        "address": "4 Annamark Crossing",
        "companyId": 7,
        "fullname": "Legros Inc",
        "phone": "652-529-8417"
      }, {
        "id": 3,
        "address": "8 Wayridge Lane",
        "companyId": 6,
        "fullname": "Skiles-Kertzmann",
        "phone": "724-768-6193"
      }, {
        "id": 4,
        "address": "293 Buhler Court",
        "companyId": 6,
        "fullname": "Bahringer-Dicki",
        "phone": "567-950-1879"
      }, {
        "id": 5,
        "address": "85 Texas Street",
        "companyId": 6,
        "fullname": "Farrell, Walker and Crona",
        "phone": "737-857-5217"
      }, {
        "id": 6,
        "address": "0706 Thierer Way",
        "companyId": 1,
        "fullname": "Becker-Kohler",
        "phone": "586-907-0971"
      }, {
        "id": 7,
        "address": "4 Eastwood Road",
        "companyId": 3,
        "fullname": "Miller, Wilderman and Mohr",
        "phone": "467-214-4771"
      }, {
        "id": 8,
        "address": "23 Straubel Drive",
        "companyId": 6,
        "fullname": "Parker-Carter",
        "phone": "622-781-4866"
      }, {
        "id": 9,
        "address": "429 Merchant Lane",
        "companyId": 4,
        "fullname": "Rosenbaum-Morissette",
        "phone": "145-981-3316"
      }, {
        "id": 10,
        "address": "84128 Marquette Junction",
        "companyId": 4,
        "fullname": "Bode, Welch and Jacobi",
        "phone": "739-787-2974"
      }, {
        "id": 11,
        "address": "3373 John Wall Lane",
        "companyId": 2,
        "fullname": "Feil-Emmerich",
        "phone": "799-617-7793"
      }, {
        "id": 12,
        "address": "6 Butterfield Place",
        "companyId": 1,
        "fullname": "Boyle and Sons",
        "phone": "877-655-0318"
      }, {
        "id": 13,
        "address": "279 Mosinee Circle",
        "companyId": 1,
        "fullname": "Morissette, Rosenbaum and Beier",
        "phone": "611-534-4349"
      }, {
        "id": 14,
        "address": "8343 Bayside Way",
        "companyId": 8,
        "fullname": "Upton Group",
        "phone": "323-194-4324"
      }, {
        "id": 15,
        "address": "49962 Sunbrook Court",
        "companyId": 6,
        "fullname": "Kohler-Morissette",
        "phone": "115-561-3629"
      }, {
        "id": 16,
        "address": "7 Manley Pass",
        "companyId": 10,
        "fullname": "Murray, Zboncak and Boyer",
        "phone": "961-644-3845"
      }, {
        "id": 17,
        "address": "65 Gina Trail",
        "companyId": 3,
        "fullname": "Osinski-Walsh",
        "phone": "912-414-6720"
      }, {
        "id": 18,
        "address": "0211 South Way",
        "companyId": 9,
        "fullname": "O'Kon, Predovic and Oberbrunner",
        "phone": "655-677-1704"
      }, {
        "id": 19,
        "address": "80 Carberry Point",
        "companyId": 7,
        "fullname": "Pfannerstill Inc",
        "phone": "293-704-3779"
      }, {
        "id": 20,
        "address": "1 Rockefeller Avenue",
        "companyId": 5,
        "fullname": "Harris, Mayert and Koepp",
        "phone": "104-266-9233"
      }, {
        "id": 21,
        "address": "5 Larry Court",
        "companyId": 1,
        "fullname": "Parker, Carter and Hilll",
        "phone": "538-298-1807"
      }, {
        "id": 22,
        "address": "5 Melby Crossing",
        "companyId": 6,
        "fullname": "Reynolds-Pacocha",
        "phone": "312-204-5341"
      }, {
        "id": 23,
        "address": "29118 Service Hill",
        "companyId": 2,
        "fullname": "Kessler, Kovacek and Goldner",
        "phone": "506-233-9161"
      }, {
        "id": 24,
        "address": "120 Warner Center",
        "companyId": 2,
        "fullname": "Schulist-Marks",
        "phone": "164-653-7757"
      }, {
        "id": 25,
        "address": "9 Victoria Court",
        "companyId": 4,
        "fullname": "Ryan and Sons",
        "phone": "622-553-0447"
      }, {
        "id": 26,
        "address": "957 Bluejay Drive",
        "companyId": 7,
        "fullname": "Yost and Sons",
        "phone": "973-538-3050"
      }, {
        "id": 27,
        "address": "1 Union Court",
        "companyId": 3,
        "fullname": "Schneider, Mitchell and Bradtke",
        "phone": "906-532-6409"
      }, {
        "id": 28,
        "address": "682 Graceland Circle",
        "companyId": 6,
        "fullname": "Wyman, Greenfelder and Pfeffer",
        "phone": "191-795-8995"
      }, {
        "id": 29,
        "address": "081 Gale Court",
        "companyId": 8,
        "fullname": "Waters and Sons",
        "phone": "251-797-5515"
      }, {
        "id": 30,
        "address": "5 Toban Way",
        "companyId": 3,
        "fullname": "Feil-Kihn",
        "phone": "216-402-6205"
      }, {
        "id": 31,
        "address": "8 Thompson Place",
        "companyId": 5,
        "fullname": "O'Kon LLC",
        "phone": "569-815-2447"
      }, {
        "id": 32,
        "address": "9157 Dovetail Road",
        "companyId": 10,
        "fullname": "Trantow, Stracke and Schaefer",
        "phone": "209-645-4459"
      }, {
        "id": 33,
        "address": "15181 Springview Parkway",
        "companyId": 1,
        "fullname": "Harris LLC",
        "phone": "835-809-5495"
      }, {
        "id": 34,
        "address": "2190 Amoth Avenue",
        "companyId": 10,
        "fullname": "Schimmel, Mohr and Hickle",
        "phone": "614-555-4352"
      }, {
        "id": 35,
        "address": "109 Jay Point",
        "companyId": 6,
        "fullname": "Kovacek, Heaney and Runolfsdottir",
        "phone": "681-586-2440"
      }, {
        "id": 36,
        "address": "610 Homewood Junction",
        "companyId": 8,
        "fullname": "Corwin Inc",
        "phone": "879-515-9911"
      }, {
        "id": 37,
        "address": "951 5th Point",
        "companyId": 10,
        "fullname": "Prohaska Inc",
        "phone": "212-965-3432"
      }, {
        "id": 38,
        "address": "947 Westport Terrace",
        "companyId": 10,
        "fullname": "Bechtelar LLC",
        "phone": "176-153-0311"
      }, {
        "id": 39,
        "address": "33966 Goodland Park",
        "companyId": 6,
        "fullname": "Stoltenberg, Moen and Keeling",
        "phone": "248-419-2196"
      }, {
        "id": 40,
        "address": "40 Schmedeman Plaza",
        "companyId": 3,
        "fullname": "Beier, Schaefer and Greenfelder",
        "phone": "191-560-0436"
      }, {
        "id": 41,
        "address": "07530 Bobwhite Circle",
        "companyId": 5,
        "fullname": "Koss, Hintz and Price",
        "phone": "354-960-5884"
      }, {
        "id": 42,
        "address": "80 Thackeray Lane",
        "companyId": 9,
        "fullname": "Nikolaus LLC",
        "phone": "876-989-9831"
      }, {
        "id": 43,
        "address": "47 Sloan Place",
        "companyId": 2,
        "fullname": "Ruecker, Kutch and Prohaska",
        "phone": "851-153-8452"
      }, {
        "id": 44,
        "address": "2 Norway Maple Point",
        "companyId": 7,
        "fullname": "Cartwright, Rosenbaum and Ledner",
        "phone": "208-465-0822"
      }, {
        "id": 45,
        "address": "011 East Point",
        "companyId": 9,
        "fullname": "Heathcote-Wolf",
        "phone": "480-845-2803"
      }, {
        "id": 46,
        "address": "61709 Mosinee Court",
        "companyId": 1,
        "fullname": "Turcotte Inc",
        "phone": "735-240-8136"
      }, {
        "id": 47,
        "address": "6764 International Park",
        "companyId": 9,
        "fullname": "Stroman, Rath and Emmerich",
        "phone": "845-468-9839"
      }, {
        "id": 48,
        "address": "4354 Mariners Cove Circle",
        "companyId": 10,
        "fullname": "Hyatt Inc",
        "phone": "283-514-8322"
      }, {
        "id": 49,
        "address": "295 Moulton Road",
        "companyId": 10,
        "fullname": "Hermiston-Rogahn",
        "phone": "190-328-6683"
      }, {
        "id": 50,
        "address": "17462 Forest Run Court",
        "companyId": 8,
        "fullname": "Batz-Torphy",
        "phone": "234-630-9734"
      }
]
export default boilersData;