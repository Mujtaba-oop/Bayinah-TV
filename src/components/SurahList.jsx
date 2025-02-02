// src/components/SurahList.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import Surah from "./Surah";

const surahData = [
 
  {  
    title: "1-Surah Al-Fatihah",  
    parts: [  
      { title: "1-An Introduction" },  
      { title: "2-Al-Fatihah (Ayah 1a)" },  
      { title: "3-Al-Fatihah (Ayah 1b)" },  
      { title: "4-Al-Fatihah (Ayah 1c)" },  
      { title: "5-Al-Fatihah (Ayah 1d)" },  
      { title: "6-Al-Fatihah (Ayah 2)" },  
      { title: "7-Al-Fatihah (Ayah 3)" },  
      { title: "8-Al-Fatihah (Ayah 4)" },  
      { title: "9-Al-Fatihah (Ayah 5)" },  
      { title: "10-Al-Fatihah (Ayah 6)" },  
      { title: "11-Al-Fatihah (Ayah 7)" },  
      { title: "12-Al-Fatihah - Balance and Observations" },  
    ],  
  },  
  {  
    title: "2-Surah Al-Baqarah",  
    parts: [  
      { title: "1-Al-Baqarah (Ayah 1-3)" },  
      { title: "2-Al-Baqarah (Ayah 4-8)" },  
      { title: "3-Al-Baqarah (Ayah 9-12)" },  
      { title: "4-Al-Baqarah (Ayah 13-17)" },  
      { title: "5-Al-Baqarah (Ayah 18-24)" },  
      { title: "6-Al-Baqarah (Ayah 25-27)" },  
      { title: "7-Al-Baqarah (Ayah 27-33)" },  
      { title: "8-Al-Baqarah (Ayah 34-37)" },  
      { title: "9-Al-Baqarah (Ayah 38-44)" },  
      { title: "10-Al-Baqarah (Ayah 44-51)" },  
      { title: "11-Al-Baqarah (Ayah 52-60)" },  
      { title: "12-Al-Baqarah (Ayah 61-62)" },  
      { title: "13-Al-Baqarah (Ayah 63-74)" },  
      { title: "14-Al-Baqarah (Ayah 74-78)" },  
      { title: "15-Al-Baqarah (Ayah 79-90)" },  
      { title: "16-Al-Baqarah (Ayah 91-102)" },  
      { title: "17-Al-Baqarah (Ayah 102-105)" },  
      { title: "18-Al-Baqarah (Ayah 104-113)" },  
      { title: "19-Al-Baqarah (Ayah 114-128)" },  
      { title: "20-Al-Baqarah (Ayah 129-144)" },  
      { title: "21-Al-Baqarah (Ayah 145-167)" },  
      { title: "22-Al-Baqarah (Ayah 168-185)" },  
      { title: "23-Al-Baqarah (Ayah 186-195)" },  
      { title: "24-Al-Baqarah (Ayah 196-207)" },  
      { title: "25-Al-Baqarah (Ayah 208-220)" },  
      { title: "26-Al-Baqarah (Ayah 221-242)" },  
      { title: "27-Al-Baqarah (Ayah 243-252)" },  
      { title: "28-Al-Baqarah (Ayah 253-256)" },  
      { title: "29-Al-Baqarah (Ayah 257-263)" },  
      { title: "30-Al-Baqarah (Ayah 264-277)" },  
      { title: "31-Al-Baqarah (Ayah 278-286)" },  
    ],  
  }
  ,  {  
    title: "3-Surah Ali 'Imran",  
    parts: [  
      { title: "1-Ayah (1-6)" },  
      { title: "2-Ayah (7-13)" },  
      { title: "3-Ayah (14-16)" },  
      { title: "4-Ayah (17-18)" },  
      { title: "5-Ayah (19-21)" },  
      { title: "6-Ayah (22-25)" },  
      { title: "7-Ayah (26-27)" },  
      { title: "8-Ayah (28-30)" },  
      { title: "9-Ayah (31)" },  
      { title: "10-Ayah (32-37)" },  
      { title: "11-Ayah (37-44)" },  
      { title: "12-Ayah (45-50)" },  
      { title: "13-Ayah (51-58)" },  
      { title: "14-Ayah (59-68)" },  
      { title: "15-Ayah (69-76)" },  
      { title: "16-Ayah (77-84)" },  
      { title: "17-Ayah (85-91)" },  
      { title: "18-Ayah (92-93)" },  
      { title: "19-Ayah (94-100)" },  
      { title: "20-Ayah (101-102)" },  
      { title: "21-Ayah (103)" },  
      { title: "22-Ayah (103-104)" },  
      { title: "23-Ayah (105-110)" },  
      { title: "24-Ayah (111-113)" },  
      { title: "25-Ayah (114-118)" },  
      { title: "26-Ayah (119-122)" },  
      { title: "27-Ayah (123-132)" },  
      { title: "28-Ayah (133-138)" },  
      { title: "29-Ayah (139-143)" },  
      { title: "30-Ayah (144-152)" },  
      { title: "31-Ayah (153-158)" },  
      { title: "32-Ayah (159)" },  
      { title: "33-Ayah (160-166)" },  
      { title: "34-Ayah (167-170)" },  
      { title: "35-Ayah (171-177)" },  
      { title: "36-Ayah (178-184)" },  
      { title: "37-Ayah (185-187)" },  
      { title: "38-Ayah (188-189)" },  
      { title: "39-Ayah (190-191)" },  
      { title: "40-Ayah (192-195)" },  
      { title: "41-Ayah (196-200)" },  
      { title: "42-Closing Remarks Part 1" },  
      { title: "43-Closing Remarks Part 2" },  
    ],  
  },
  {  
    title: "4-Surah An-Nisa'",  
    parts: [  
      { title: "1-Ayah (1-4)" },  
      { title: "2-Ayah (5-9)" },  
      { title: "3-Ayah (10-15)" },  
      { title: "4-Ayah (16-22)" },  
      { title: "5-Ayah (23-25)" },  
      { title: "6-Ayah (26-31)" },  
      { title: "7-Ayah (32-34)" },  
      { title: "8-Ayah (35-39)" },  
      { title: "9-Ayah (40-49)" },  
      { title: "10-Ayah (50-59)" },  
      { title: "11-Ayah (60-66)" },  
      { title: "12-Ayah (67-70)" },  
      { title: "13-Ayah (71-75)" },  
      { title: "14-Ayah (76-77)" },  
      { title: "15-Ayah (78-84)" },  
      { title: "16-Ayah (85-90)" },  
      { title: "17-Ayah (91-94)" },  
      { title: "18-Ayah (95-103)" },  
      { title: "19-Ayah (104-113)" },  
      { title: "20-Ayah (114-121)" },  
      { title: "21-Ayah (122-128)" },  
      { title: "22-Ayah (129-135)" },  
      { title: "23-Ayah (136-143)" },  
      { title: "24-Ayah (144-145)" },  
      { title: "25-Ayah (146-151)" },  
      { title: "26-Ayah (152-158)" },  
      { title: "27-Ayah (159-163)" },  
      { title: "28-Ayah (164-171)" },  
      { title: "29-Ayah (172-176)" },  
    ],  
  },
  {  
    title: "5-Surah Al-Ma'idah",  
    parts: [  
      { title: "1-Ayah (1-3)" },  
      { title: "2-Ayah (4-5)" },  
      { title: "3-Ayah (5-8)" },  
      { title: "4-Ayah (9-15)" },  
      { title: "5-Ayah (16-26)" },  
      { title: "6-Ayah (27-32)" },  
      { title: "7-Ayah (33-35)" },  
      { title: "8-Ayah (36-40)" },  
      { title: "9-Ayah (41-42)" },  
      { title: "10-Ayah (43-46)" },  
      { title: "11-Ayah (47-49)" },  
      { title: "12-Ayah (50-54)" },  
      { title: "13-Ayah (54-63)" },  
      { title: "14-Ayah (64-68)" },  
      { title: "15-Ayah (69-76)" },  
      { title: "16-Ayah (77-89)" },  
      { title: "17-Ayah (90-97)" },  
      { title: "18-Ayah (98-106)" },  
      { title: "19-Ayah (107-120)" },  
    ],  
  },{  
    title: "6-Surah Al-An'am",  
    parts: [  
      { title: "1-Ayah (1-6)" },  
      { title: "2-Ayah (1-6)" },  
      { title: "3-Ayah (7-17)" },  
      { title: "4-Ayah (18-25)" },  
      { title: "5-Ayah (26-32)" },  
      { title: "6-Ayah (33-43)" },  
      { title: "7-Ayah (43-55)" },  
      { title: "8-Ayah (56-67)" },  
      { title: "9-Ayah (68-72)" },  
      { title: "10-Ayah (73-82)" },  
      { title: "11-Ayah (83-90)" },  
      { title: "12-Ayah (91-93)" },  
      { title: "13-Ayah (94-99)" },  
      { title: "14-Ayah (100-106)" },  
      { title: "15-Ayah (107-114)" },  
      { title: "16-Ayah (115-125)" },  
      { title: "17-Ayah (126-136)" },  
      { title: "18-Ayah (137-146)" },  
      { title: "19-Ayah (147-158)" },  
      { title: "20-Ayah (159-165)" }  
    ],  
},
{  
  title: "7-Surah Al-A'raf",  
  parts: [  
    { title: "1-Ayah (1-6)" },  
    { title: "2-Ayah (7-15)" },  
    { title: "3-Ayah (16-21)" },  
    { title: "4-Ayah (22-26)" },  
    { title: "5-Ayah (27-31)" },  
    { title: "6-Ayah (32-43)" },  
    { title: "7-Ayah (44-53)" },  
    { title: "8-Ayah (54-64)" },  
    { title: "9-Ayah (65-79)" },  
    { title: "10-Ayah (80-85)" },  
    { title: "11-Ayah (86-99)" },  
    { title: "12-Ayah (100-103)" },  
    { title: "13-Ayah (104-122)" },  
    { title: "14-Ayah (123-131)" },  
    { title: "15-Ayah (132-141)" },  
    { title: "16-Ayah (142-149)" },  
    { title: "17-Ayah (150-158)" },  
    { title: "18-Ayah (159-167)" },  
    { title: "19-Ayah (168-174)" },  
    { title: "20-Ayah (175-180)" },  
    { title: "21-Ayah (181-199)" },  
    { title: "22-Ayah (200-206)" }  
  ],  
},
{  
  title: "8-Surah Al-'Anfal",  
  parts: [  
    { title: "1-Ayah (1)" },  
    { title: "2-Ayah (2-11)" },  
    { title: "3-Ayah (12-23)" },  
    { title: "4-Ayah (24-30)" },  
    { title: "5-Ayah (31-42)" },  
    { title: "6-Ayah (43-53)" },  
    { title: "7-Ayah (54-63)" },  
    { title: "8-Ayah (31-69)" },  
    { title: "9-Ayah (68-75)" }  
  ],  
},
{  
  title: "9-Surah At-Tawbah",  
  parts: [  
    { title: "1-Introduction Part 1" },  
    { title: "2-Introduction Part 2" },  
    { title: "3-Ayah (1-6)" },  
    { title: "4-Ayah (7-20)" },  
    { title: "5-Ayah (21-25)" },  
    { title: "6-Ayah (26-32)" },  
    { title: "7-Ayah (32-33)" },  
    { title: "8-Ayah (34-37)" },  
    { title: "9-Ayah (38-42)" },  
    { title: "10-Ayah (43-47)" },  
    { title: "11-Ayah (48-55)" },  
    { title: "12-Ayah (56-67)" },  
    { title: "13-Ayah (68-77)" },  
    { title: "14-Ayah (78-90)" },  
    { title: "15-Ayah (91-101)" },  
    { title: "16-Ayah (102-110)" },  
    { title: "17-Ayah (111-119)" },  
    { title: "18-Ayah (120-128)" },  
    { title: "19-Ayah (129)" }  
  ],  
},
{  
  title: "10-Surah Yunus",  
  parts: [  
    { title: "1-Introduction" },  
    { title: "2-Ayah (1-10)" },  
    { title: "3-Ayah (11-21)" },  
    { title: "4-Ayah (22-25)" },  
    { title: "5-Ayah (26-38)" },  
    { title: "6-Ayah (39-55)" },  
    { title: "7-Ayah (56-63)" },  
    { title: "8-Ayah (64-82)" },  
    { title: "9-Ayah (83-95)" },  
    { title: "10-Ayah (96-109)" }  
  ],  
},
{  
  title: "11-Surah Hud",  
  parts: [  
    { title: "1-Ayah (1-5)" },  
    { title: "2-Ayah (6-9)" },  
    { title: "3-Ayah (10-17)" },  
    { title: "4-Ayah (18-27)" },  
    { title: "5-Ayah (28-40)" },  
    { title: "6-Ayah (41-49)" },  
    { title: "7-Ayah (50-65)" },  
    { title: "8-Ayah (66-77)" },  
    { title: "9-Ayah (78-97)" },  
    { title: "10-Ayah (98-123)" }  
  ],  
},
{  
  title: "12-Surah Yusuf",  
  parts: [  
    { title: "1-Ayah (1-3)" },  
    { title: "2-Ayah (4-6)" },  
    { title: "3-Ayah (7-11)" },  
    { title: "4-Ayah (12-18)" },  
    { title: "5-Ayah (19-23)" },  
    { title: "6-Ayah (23-29)" },  
    { title: "7-Ayah (29-36)" },  
    { title: "8-Ayah (37-43)" },  
    { title: "9-Ayah (44-57)" },  
    { title: "10-Ayah (58-76)" },  
    { title: "11-Ayah (77-90)" },  
    { title: "12-Ayah (91-108)" },  
    { title: "13-Ayah (102-111)" },  
    { title: "14-Literary Qualities Part 1" },  
    { title: "15-Literary Qualities Part 2" }  
  ],  
},
{  
  title: "13-Surah Ar-Ra'd",  
  parts: [  
    { title: "1-Ayah (1-6)" },  
    { title: "2-Ayah (7-15)" },  
    { title: "3-Ayah (16-25)" },  
    { title: "4-Ayah (26-37)" },  
    { title: "5-Ayah (38-43)" }  
  ],  
},
{  
  title: "14-Surah Ibrahim",  
  parts: [  
    { title: "1-Ayah (1-14)" },  
    { title: "2-Ayah (15-32)" },  
    { title: "3-Ayah (33-39)" },  
    { title: "4-Ayah (40-52)" }  
  ],  
},
{  
  title: "15-Surah Al-Hijr",  
  parts: [  
      { title: "1-Ayah (1-11)" },  
      { title: "2-Ayah (12-25)" },  
      { title: "3-Ayah (26-47)" },  
      { title: "4-Ayah (48-75)" },  
      { title: "5-Ayah (76-99)" }  
  ]  
},  
{  
  title: "16-Surah An-Nahl",  
  parts: [  
      { title: "1-Ayah (1-17)" },  
      { title: "2-Ayah (18-35)" },  
      { title: "3-Ayah (36-50)" },  
      { title: "4-Ayah (51-65)" },  
      { title: "5-Ayah (66-71)" },  
      { title: "6-Ayah (72-78)" },  
      { title: "7-Ayah (79-88)" },  
      { title: "8-Ayah (89-93)" },  
      { title: "9-Ayah (94-105)" },  
      { title: "10-Ayah (106-119)" },  
      { title: "11-Ayah (120-125)" },  
      { title: "12-Ayah (125-128)" }  
  ]  
},  
{  
  title: "17-Surah Al-Isra'",  
  parts: [  
      { title: "1-Ayah (1-4)" },  
      { title: "2-Ayah (4-5)" },  
      { title: "3-Ayah (6-14)" },  
      { title: "4-Ayah (15-16)" },  
      { title: "5-Ayah (17-23)" },  
      { title: "6-Ayah (23-25)" },  
      { title: "7-Ayah (26-31)" },  
      { title: "8-Ayah (32-36)" },  
      { title: "9-Ayah (37-52)" },  
      { title: "10-Ayah (53-67)" },  
      { title: "11-Ayah (68-82)" },  
      { title: "12-Ayah (83-102)" },  
      { title: "13-Ayah (103-111)" }  
  ]  
},{  
  "title": "18-Al-Kahf",  
  "parts": [  
    { "title": "1-Ayah (1-3)", "duration": "23m 27s" },  
    { "title": "2-Ayah (4-9)", "duration": "20m 39s" },  
    { "title": "3-Ayah (10-16)", "duration": "22m 11s" },  
    { "title": "4-Ayah (15-19)", "duration": "18m 47s" },  
    { "title": "5-Ayah (20-25)", "duration": "18m 21s" },  
    { "title": "6-Ayah (26-29)", "duration": "20m 22s" },  
    { "title": "7-Ayah (30-37)", "duration": "19m 00s" },  
    { "title": "8-Ayah (38-45)", "duration": "16m 32s" },  
    { "title": "9-Ayah (46-57)", "duration": "24m 11s" },  
    { "title": "10-Ayah (58-73)", "duration": "22m 55s" },  
    { "title": "11-Ayah (74-82)", "duration": "22m 01s" },  
    { "title": "12-Ayah (83-99)", "duration": "24m 38s" },  
    { "title": "13-Ayah (100-110)", "duration": "26m 05s" }  
  ]  
},
{  
  "title": "19-Surah Maryam",  
  "parts": [  
      { "title": "1-Ayah (1-11)" },  
      { "title": "2-Ayah (12-29)" },  
      { "title": "3-Ayah (30-45)" },  
      { "title": "4-Ayah (46-59)" },  
      { "title": "5-Ayah (60-75)" },  
      { "title": "6-Ayah (76-98)" }  
  ]  
},
{  
  "title": "20-Surah Taha",  
  "parts": [  
      { "title": "1-Ayah (1-8)" },  
      { "title": "2-Ayah (9-16)" },  
      { "title": "3-Ayah (17-24)" },  
      { "title": "4-Ayah (25-38)" },  
      { "title": "5-Ayah (39-41)" },  
      { "title": "6-Ayah (42-56)" },  
      { "title": "7-Ayah (57-70)" },  
      { "title": "8-Ayah (71-87)" },  
      { "title": "9-Ayah (88-94)" },  
      { "title": "10-Ayah (95-101)" },  
      { "title": "11-Ayah (102-117)" },  
      { "title": "12-Ayah (118-135)" }  
  ]  
},
{  
  "title": "21-Surah Al-Anbya",  
  "parts": [  
      { "title": "1-Ayah (1-18)" },  
      { "title": "2-Ayah (19-33)" },  
      { "title": "3-Ayah (34-46)" },  
      { "title": "4-Ayah (47-52)" },  
      { "title": "5-Ayah (53-68)" },  
      { "title": "6-Ayah (69-88)" },  
      { "title": "7-Ayah (89-112)" }  
  ]  
},
{  
  "title": "22-Surah Al-Hajj",  
  "parts": [  
      { "title": "1-Ayah (1-4)" },  
      { "title": "2-Ayah (5-10)" },  
      { "title": "3-Ayah (11-18)" },  
      { "title": "4-Ayah (19-29)" },  
      { "title": "5-Ayah (30-35)" },  
      { "title": "6-Ayah (36-40)" },  
      { "title": "7-Ayah (41-53)" },  
      { "title": "8-Ayah (54-72)" },  
      { "title": "9-Ayah (73)" },  
      { "title": "10-Ayah (74-77)" },  
      { "title": "11-Ayah (78)" }  
  ]  
},
{  
  "title": "23-Surah Al-Mu'minun",  
  "parts": [  
      { "title": "1-Ayah (1-11)", "duration": "59m 22s" },  
      { "title": "2-Ayah (12-53)", "duration": "1h 02m" },  
      { "title": "3-Ayah (54-118)", "duration": "58m 16s" }  
  ]  
},
{  
  "title": "24-Surah An-Nur",  
  "parts": [  
      { "title": "1-Ayah (1-13)", "duration": "1h 00m" },  
      { "title": "2-Ayah (14-31)", "duration": "1h 09m" },  
      { "title": "3-Ayah (32-43)", "duration": "57m 13s" },  
      { "title": "4-Ayah (44-61)", "duration": "34m 48s" },  
      { "title": "5-Ayah (62-64)", "duration": "34m 50s" }  
  ]  
},
{  
  "title": "25-Surah Al-Furqan",  
  "parts": [  
      { "title": "1-Ayah (1-32)", "duration": "1h 02m" },  
      { "title": "2-Ayah (33-60)", "duration": "49m 10s" },  
      { "title": "3-Ayah (61-77)", "duration": "1h 00m" }  
  ]  
},
{  
  "title": "26-Surah Ash-Shu'ara",  
  "parts": [  
      { "title": "1-Ayah (1-20)", "duration": "1h 00m" },  
      { "title": "2-Ayah (21-66)", "duration": "1h 06m" },  
      { "title": "3-Ayah (67-191)", "duration": "59m 08s" },  
      { "title": "4-Ayah (192-227)", "duration": "35m 12s" }  
  ]  
},
{  
  "title": "27-Surah An-Naml",  
  "parts": [  
      { "title": "1-Ayah (1-24)", "duration": "2h 01m" },  
      { "title": "2-Ayah (25-61)", "duration": "59m 46s" },  
      { "title": "3-Ayah (62-93)", "duration": "35m 25s" }  
  ]  
},
{  
  "title": "28-Surah Al-Qasas",  
  "parts": [  
      { "title": "1-Ayah (1-10)", "duration": "57m 31s" },  
      { "title": "2-Ayah (11-27)", "duration": "1h 11m" },  
      { "title": "3-Ayah (28-58)", "duration": "58m 41s" },  
      { "title": "4-Ayah (59-77)", "duration": "57m 18s" },  
      { "title": "5-Ayah (78-88)", "duration": "20m 14s" }  
  ]  
},
{  
  "title": "29-Surah Al-'Ankabut",  
  "parts": [  
      { "title": "1-Ayah (1-14)", "duration": "54m 31s" },  
      { "title": "2-Ayah (15-59)", "duration": "1h 01m" },  
      { "title": "3-Ayah (60-69)", "duration": "39m 10s" }  
  ]  
},
{  
  "title": "30-Surah Ar-Rum",  
  "parts": [  
      { "title": "1-Ayah (1-31)", "duration": "1h 03m" },  
      { "title": "2-Ayah (32-60)", "duration": "55m 39s" }  
  ]  
},
{  
  "title": "31-Surah Luqman",  
  "parts": [  
      { "title": "1-Ayah (1-20)", "duration": "50m 07s" },  
      { "title": "2-Ayah (20-34)", "duration": "52m 14s" }  
  ]  
},
{  
  "title": "32-Surah As-Sajdah",  
  "parts": [  
      { "title": "1-Ayah (1-30)", "duration": "53m 05s" }  
  ]  
},
{  
  "title": "33-Surah Al-Ahzab",  
  "parts": [  
      { "title": "1-Ayah (1-18)", "duration": "1h 02m" },  
      { "title": "2-Ayah (19-27)", "duration": "30m 40s" },  
      { "title": "3-Ayah (28-36)", "duration": "49m 59s" },  
      { "title": "4-Ayah (35-54)", "duration": "1h 06m" },  
      { "title": "5-Ayah (55-73)", "duration": "54m 18s" }  
  ]  
},
{  
  "title": "34-Surah Saba",  
  "parts": [  
      { "title": "1-Ayah (1-14)", "duration": "1h 00m" },  
      { "title": "2-Ayah (14-54)", "duration": "1h 01m" },  
      { "title": "3-Ayah (10-14)", "duration": "20m 15s" },  
      { "title": "4-Ayah (15-27)", "duration": "20m 09s" },  
      { "title": "5-Ayah (28-40)", "duration": "20m 07s" },  
      { "title": "6-Ayah (40-54)", "duration": "21m 10s" }  
  ]  
},
{  
  "title": "35-Surah Fatir",  
  "parts": [  
      { "title": "1-Ayah (1-11)", "duration": "19m 44s" },  
      { "title": "2-Ayah (12-28)", "duration": "20m 11s" },  
      { "title": "3-Ayah (28-45)", "duration": "26m 05s" }  
  ]  
},
{  
  "title": "36-Surah Ya-Sin",  
  "parts": [  
      { "title": "1-Ayah (1-9)", "duration": "20m 05s" },  
      { "title": "2-Ayah (9-23)", "duration": "20m 12s" },  
      { "title": "3-Ayah (23-33)", "duration": "07m 37s" },  
      { "title": "4-Ayah (34-58)", "duration": "20m 20s" },  
      { "title": "5-Ayah (58-78)", "duration": "20m 10s" },  
      { "title": "6-Ayah (78-83)", "duration": "05m 02s" }  
  ]  
},
{  
  "title": "37-Surah As-Saffat",  
  "parts": [  
      { "title": "1-Ayah (1-30)", "duration": "20m 09s" },  
      { "title": "2-Ayah (31-60)", "duration": "20m 24s" },  
      { "title": "3-Ayah (61-102)", "duration": "20m 24s" },  
      { "title": "4-Ayah (102-116)", "duration": "12m 01s" },  
      { "title": "5-Ayah (117-172)", "duration": "19m 57s" },  
      { "title": "6-Ayah (172-182)", "duration": "03m 37s" }  
  ]  
},
{  
  "title": "38-Surah Sad",  
  "parts": [  
      { "title": "1-Ayah (1-4)", "duration": "20m 05s" },  
      { "title": "2-Ayah (4-17)", "duration": "20m 08s" },  
      { "title": "3-Ayah (17-24)", "duration": "19m 32s" },  
      { "title": "4-Ayah (25-32)", "duration": "20m 11s" },  
      { "title": "5-Ayah (32-41)", "duration": "20m 11s" },  
      { "title": "6-Ayah (41-71)", "duration": "24m 33s" },  
      { "title": "7-Ayah (72-88)", "duration": "12m 25s" }  
  ]  
},{  
  "title": "39-Surah Az-Zumar",  
  "parts": [  
      { "title": "1-Ayah (1-11)", "duration": "20m 24s" },  
      { "title": "2-Ayah (11-28)", "duration": "20m 17s" },  
      { "title": "3-Ayah (28-36)", "duration": "09m 32s" },  
      { "title": "4-Ayah (36-49)", "duration": "20m 05s" },  
      { "title": "5-Ayah (49-56)", "duration": "20m 23s" },  
      { "title": "6-Ayah (56-75)", "duration": "22m 27s" },  
      { "title": "Reflections on Ayah 18", "duration": "1h 01m" }  
  ]  
},{  
  "title": "40-Surah Ghafir",  
  "parts": [  
      { "title": "1-Ayah (1-17)", "duration": "20m 05s" },  
      { "title": "2-Ayah (17-37)", "duration": "20m 15s" },  
      { "title": "3-Ayah (37-65)", "duration": "22m 36s" },  
      { "title": "4-Ayah (66-80)", "duration": "20m 12s" },  
      { "title": "5-Ayah (80-85)", "duration": "14m 55s" }  
  ]  
},
{  
  "title": "41-Surah Fussilat",  
  "parts": [  
      { "title": "1-Ayah (1-16)", "duration": "19m 28s" },  
      { "title": "2-Ayah (16-25)", "duration": "20m 07s" },  
      { "title": "3-Ayah (25-31)", "duration": "20m 05s" },  
      { "title": "4-Ayah (31-33)", "duration": "11m 45s" },  
      { "title": "5-Ayah (34-47)", "duration": "20m 08s" },  
      { "title": "6-Ayah (47-54)", "duration": "22m 32s" }  
  ]  
},
{  
  "title": "42-Surah Ash-Shuraa",  
  "parts": [  
      { "title": "1-Ayah (1-14)", "duration": "20m 06s" },  
      { "title": "2-Ayah (14-27)", "duration": "20m 10s" },  
      { "title": "3-Ayah (27-36)", "duration": "07m 23s" },  
      { "title": "4-Ayah (36-38)", "duration": "20m 08s" },  
      { "title": "5-Ayah (38-44)", "duration": "20m 06s" },  
      { "title": "6-Ayah (44-53)", "duration": "17m 00s" }  
  ]  
},
{  
  "title": "43-Surah Az-Zukhruf",  
  "parts": [  
      { "title": "1-Ayah (1-15)", "duration": "20m 09s" },  
      { "title": "2-Ayah (15-36)", "duration": "20m 09s" },  
      { "title": "3-Ayah (36-54)", "duration": "20m 25s" },  
      { "title": "4-Ayah (55-81)", "duration": "20m 04s" },  
      { "title": "5-Ayah (81-89)", "duration": "09m 21s" }  
  ]  
},
{  
  "title": "44-Surah Ad-Dukhan",  
  "parts": [  
      { "title": "1-Ayah (1-14)", "duration": "20m 33s" },  
      { "title": "2-Ayah (14-38)", "duration": "20m 06s" },  
      { "title": "3-Ayah (38-59)", "duration": "10m 11s" }  
  ]  
},
{  
  "title": "45-Surah Al-Jathiyah",  
  "parts": [  
      { "title": "1-Ayah (1-17)", "duration": "20m 07s" },  
      { "title": "2-Ayah (17-24)", "duration": "20m 03s" },  
      { "title": "3-Ayah (24-37)", "duration": "12m 31s" }  
  ]  
},
{  
  "title": "46-Surah Al-Ahqaf",  
  "parts": [  
      { "title": "1-Ayah (1-16)", "duration": "20m 03s" },  
      { "title": "2-Ayah (16-29)", "duration": "20m 09s" },  
      { "title": "3-Ayah (29-35)", "duration": "21m 45s" }  
  ]  
},
{  
  "title": "47-Surah Muhammad",  
  "parts": [  
      { "title": "1-Ayah (1-4)", "duration": "20m 03s" },  
      { "title": "2-Ayah (4-13)", "duration": "20m 07s" },  
      { "title": "3-Ayah (13-19)", "duration": "27m 39s" },  
      { "title": "4-Ayah (20-28)", "duration": "20m 05s" },  
      { "title": "5-Ayah (28-38)", "duration": "22m 58s" }  
  ]  
},
{  
  "title": "48-Surah Al-Fath",  
  "parts": [  
      { "title": "1-Introduction", "duration": "19m 59s" },  
      { "title": "2-Ayah (1-8)", "duration": "20m 05s" },  
      { "title": "3-Ayah (9-15)", "duration": "20m 05s" },  
      { "title": "4-Ayah (15-24)", "duration": "10m 53s" },  
      { "title": "5-Ayah (25-28)", "duration": "20m 03s" },  
      { "title": "6-Ayah (29)", "duration": "21m 40s" }  
  ]  
},
{  
  "title": "49-Surah Al-Hujurat",  
  "parts": [  
      { "title": "1-Ayah (1-6)", "duration": "20m 07s" },  
      { "title": "2-Ayah (6-11)", "duration": "20m 09s" },  
      { "title": "3-Ayah (11-13)", "duration": "20m 02s" },  
      { "title": "4-Ayah (13-18)", "duration": "13m 32s" }  
  ]  
},
{  
  "title": "50-Surah Qaf",  
  "parts": [  
      { "title": "1-Ayah (1-22)", "duration": "19m 59s" },  
      { "title": "2-Ayah (23-45)", "duration": "13m 46s" }  
  ]  
},
{  
  "title": "51-Surah Adh-Dhariyat",  
  "parts": [  
    { "title": "01. Adh-Dhariyat (Ayah 1-47)", "duration": "18m 28s" },  
    { "title": "02. Adh-Dhariyat (Ayah 47-60)", "duration": "18m 59s" },  
    { "title": "Brief Reflections from Surah 51", "duration": "24m 06s" }  
  ]  
},
{  
  "title": "52-At-Tur",  
  "parts": [  
      { "title": "1-Ayah (1-23)", "duration": "20m 02s" },  
      { "title": "2-Ayah (23-49)", "duration": "" }  
  ]  
},
{  
  "title": "53-An-Najm",  
  "parts": [  
      { "title": "1-Ayah (1-32)", "duration": "20m 06s" },  
      { "title": "2-Ayah (32-62)", "duration": "" }  
  ]  
},
{  
  "title": "54-Al-Qamar",  
  "parts": [  
      { "title": "1-Ayah (1-34)", "duration": "20m 03s" },  
      { "title": "2-Ayah (34-55)", "duration": "17m 51s" }  
  ]  
},
{  
  "title": "55-Ar-Rahman",  
  "parts": [  
      { "title": "1-The Introduction", "duration": "20m 05s" },  
      { "title": "2-Ayah (1-2a)", "duration": "20m 28s" },  
      { "title": "3-Ayah (1-2b)", "duration": "12m 33s" },  
      { "title": "4-Ayah (3-4)", "duration": "20m 07s" },  
      { "title": "5-Ayah (4-9)", "duration": "21m 21s" },  
      { "title": "6-Ayah (10-14)", "duration": "20m 05s" },  
      { "title": "7-Ayah (15-29)", "duration": "20m 05s" },  
      { "title": "8-Ayah (29-39)", "duration": "20m 01s" },  
      { "title": "9-Ayah (39-45)", "duration": "15m 09s" },  
      { "title": "10-Ayah (46-54)", "duration": "20m 07s" },  
      { "title": "11-Ayah (54-66)", "duration": "19m 57s" },  
      { "title": "12-Ayah (66-76)", "duration": "20m 04s" },  
      { "title": "13-Ayah (77-78)", "duration": "09m 01s" }  
  ]  
},
{  
  "title": "56-Al-Waqi'ah",  
  "parts": [  
      { "title": "1-Ayah (1-10)", "duration": "20m 04s" },  
      { "title": "2-Ayah (10-19)", "duration": "20m 03s" },  
      { "title": "3-Ayah (19-50)", "duration": "20m 13s" },  
      { "title": "4-Ayah (51-75)", "duration": "20m 00s" },  
      { "title": "5-Ayah (75-80)", "duration": "22m 07s" },  
      { "title": "6-Ayah (81-90)", "duration": "20m 09s" },  
      { "title": "7-Ayah (91-96)", "duration": "20m 49s" }  
  ]  
},{  
  "title": "57-Al-Hadid",  
  "parts": [  
      { "title": "1-The Introduction Part 1", "duration": "43m 56s" },  
      { "title": "2-The Introduction Part 2", "duration": "41m 13s" },  
      { "title": "3-Ayah (1-7)", "duration": "20m 00s" },  
      { "title": "4-Ayah (7-12)", "duration": "20m 02s" },  
      { "title": "5-Ayah (12-19)", "duration": "20m 01s" },  
      { "title": "6-Ayah (19-20)", "duration": "13m 56s" },  
      { "title": "7-Ayah (21-23)", "duration": "20m 05s" },  
      { "title": "8-Ayah (23-29)", "duration": "" }  
  ]  
},
{  
  "title": "58-Al-Mujadila",  
  "parts": [  
      { "title": "1-Ayah (1-5)", "duration": "20m 03s" },  
      { "title": "2-Ayah (5-9)", "duration": "20m 04s" },  
      { "title": "3-Ayah (9-16)", "duration": "19m 57s" },  
      { "title": "4-Ayah (16-22)", "duration": "11m 17s" }  
  ]  
},
{  
  "title": "59-Al-Hashr",  
  "parts": [  
      { "title": "1-Ayah (1-7)", "duration": "20m 01s" },  
      { "title": "2-Ayah (7-16)", "duration": "20m 06s" },  
      { "title": "3-Ayah (16-24)", "duration": "19m 50s" }  
  ]  
},
{  
  "title": "60-Al-Mumtahanah",  
  "parts": [  
      { "title": "1-Ayah (1-6)", "duration": "20m 10s" },  
      { "title": "2-Ayah (7-13)", "duration": "19m 13s" }  
  ]  
},
{  
  "title": "61-As-Saf",  
  "parts": [  
      { "title": "1-Ayah (1-4)", "duration": "20m 05s" },  
      { "title": "2-Ayah (4-9)", "duration": "20m 24s" },  
      { "title": "3-Ayah (9-14)", "duration": "" }   
  ]  
},
{  
  "title": "62-Al-Jumu'ah",  
  "parts": [  
      { "title": "1-Al Jumu'ah", "duration": "14m 07s" }  
  ]  
},
{  
  "title": "63-Al-Munafiqun",  
  "parts": [  
      { "title": "1-Ayah (1-2)", "duration": "20m 08s" },  
      { "title": "2-Ayah (2-4)", "duration": "19m 54s" },  
      { "title": "3-Ayah (4-9)", "duration": "20m 03s" },  
      { "title": "4-Ayah (9-11)", "duration": "" }  
  ]  
},
{  
  "title": "64-At-Taghabun",  
  "parts": [  
      { "title": "1-Ayah (1-8)", "duration": "19m 55s" },  
      { "title": "2-Ayah (8-14)", "duration": "19m 58s" },  
      { "title": "3-Ayah (14-18)", "duration": "" }  
  ]  
},
{  
  "title": "65-At-Talaq",  
  "parts": [  
      { "title": "1-Ayah (1)", "duration": "20m 09s" },  
      { "title": "2-Ayah (1-3)", "duration": "20m 00s" },  
      { "title": "3-Ayah (3-12)", "duration": "" }  
  ]  
},
{  
  "title": "66-At-Tahrim",  
  "parts": [  
      { "title": "1-Ayah (1-3)", "duration": "20m 05s" },  
      { "title": "2-Ayah (3-6)", "duration": "20m 02s" },  
      { "title": "3-Ayah (6-10)", "duration": "19m 59s" },  
      { "title": "4-Ayah (10-12)", "duration": "21m 10s" }  
  ]  
},
{  
  "title": "67-Al-Mulk",  
  "parts": [  
      { "title": "1-Ayah (1-11)", "duration": "20m 02s" },  
      { "title": "2-Ayah (11-23)", "duration": "20m 02s" },  
      { "title": "3-Ayah (23-30)", "duration": "09m 11s" }  
  ]  
},
{  
  "title": "68-Al-Qalam",  
  "parts": [  
      { "title": "1-Ayah (1-2)", "duration": "20m 01s" },  
      { "title": "2-Ayah (2-15)", "duration": "20m 01s" },  
      { "title": "3-Ayah (15-42)", "duration": "19m 56s" },  
      { "title": "4-Ayah (42-52)", "duration": "10m 39s" }  
  ]  
},
{  
  "title": "69-Al-Haqqah",  
  "parts": [  
      { "title": "1-Ayah (1-7)", "duration": "20m 06s" },  
      { "title": "2-Ayah (8-24)", "duration": "20m 05s" },  
      { "title": "3-Ayah (24-52)", "duration": "24m 30s" }  
  ]  
},
{  
  "title": "70-Al-Ma'arij",  
  "parts": [  
      { "title": "1-Ayah (1-22)", "duration": "20m 02s" },  
      { "title": "2-Ayah (22-33)", "duration": "20m 06s" },  
      { "title": "3-Ayah (34-44)", "duration": "11m 46s" }  
  ]  
},
{  
  "title": "71-Nuh",  
  "parts": [  
      { "title": "1-Ayah (1-end)", "duration": "22m 04s" }  
  ]  
},
{  
  "title": "72-Al-Jinn",  
  "parts": [  
      { "title": "1-Ayah (1-6)", "duration": "20m 02s" },  
      { "title": "2-Ayah (6-16)", "duration": "20m 08s" },  
      { "title": "3-Ayah (16-28)", "duration": "20m 13s" }  
  ]  
},{  
  "title": "73-Al-Muzzammil",  
  "parts": [  
      { "title": "1-Ayah (1-10)", "duration": "20m 09s" },  
      { "title": "2-Ayah (10-20)", "duration": "20m 06s" },  
      { "title": "3-Ayah (20)", "duration": "13m 16s" }  
  ]  
},
{  
  "title": "74-Al-Muddaththir",  
  "parts": [  
      { "title": "1-Ayah (1-18)", "duration": "20m 10s" },  
      { "title": "2-Ayah (18-42)", "duration": "19m 52s" },  
      { "title": "3-Ayah (43-56)", "duration": "09m 55s" }  
  ]  
},
{  
  "title": "75-Al-Qiyamah",  
  "parts": [  
      { "title": "1-Ayah (1-14)", "duration": "20m 01s" },  
      { "title": "2-Ayah (14-40)", "duration": "" }  
  ]  
},
{  
  "title": "76-Al-Insan",  
  "parts": [  
      { "title": "1-Ayah (1-31)", "duration": "22m 04s" }  
  ]  
},
{  
  "title": "77-Al-Mursalat",  
  "parts": [  
      { "title": "1-Ayah (1-23)", "duration": "20m 05s" },  
      { "title": "2-Ayah (24-50)", "duration": "12m 33s" }  
  ]  
},
{  
  "title": "78-An-Naba",  
  "parts": [  
      { "title": "1-Ayah (1-13)", "duration": "42m 04s" },  
      { "title": "2-Ayah (14-37)", "duration": "01h 16m" },  
      { "title": "3-Ayah (37-40)", "duration": "24m 30s" }  
  ]  
},
{  
  "title": "79-An-Nazi'at",  
  "parts": [  
      { "title": "1-Ayah (1-11)", "duration": "01h 08m" },  
      { "title": "2-Ayah (10-20)", "duration": "50m 33s" },  
      { "title": "3-Ayah (17-26)", "duration": "57m 33s" },  
      { "title": "4-Ayah (27-46)", "duration": "01h 16m" }  
  ]  
},
{  
  "title": "'80-Abasa",  
  "parts": [  
    { "title": "1-Ayah (1-10)", "duration": "59m 01s" },  
    { "title": "2-Ayah (11-42)", "duration": "01h 13m" }  
  ]  
},
{  
  "title": "81-At-Takwir",  
  "parts": [  
    { "title": "1-Ayah (1-14)", "duration": "59m 46s" },  
    { "title": "2-Ayah (15-29)", "duration": "59m 48s" }  
  ]  
},
{  
  "title": "82-Al-Infitar",  
  "parts": [  
    { "title": "1-Ayah (1-5)", "duration": "01h 04m" },  
    { "title": "2-Ayah (6-19)", "duration": "01h 04m" }  // Duration for Ayat 6-19 not specified, please provide if available  
  ]  
},
{  
  "title": "83-Al-Mutaffifin",  
  "parts": [  
    { "title": "1-Ayah (1-17)", "duration": "50m 04s" },  
    { "title": "2-Ayah (18-36)", "duration": "32m 36s" }  
  ]  
},
{  
  "title": "84-Al-Inshiqaq",  
  "parts": [  
    { "title": "1-Ayah (1-25)", "duration": "01h 04m" }  
  ]  
},
{  
  "title": "85-Al-Buruj",  
  "parts": [  
    { "title": "1-Ayah (1-22)", "duration": "58m 33s" }  
  ]  
},
{  
  "title": "86-At-Tariq",  
  "parts": [  
    { "title": "1-Ayah (1-17)", "duration": "N/A" }  // Please provide the duration if available  
  ]  
},
{  
  "title": "87-Al-A'la",  
  "parts": [  
    { "title": "1-Ayah (1-7)", "duration": "48m 18s" },  
    { "title": "2-Ayah (7-19)", "duration": "56m 20s" }  
  ]  
},
{  
  "title": "88-Al-Ghashiyah",  
  "parts": [  
    { "title": "1-Ayah (1-26)", "duration": "57m 21s" }  
  ]  
},
{  
  "title": "89-Al-Fajr",  
  "parts": [  
    {  
      "title": "01-Al-Fajr (Ayah 1-16)",  
      "duration": "53m 52s"  
    },  
    {  
      "title": "02-Al-Fajr (Ayah 17-30)",  
      "duration": "57m 25s"  
    }  
  ]  
},
{  
  "title": "90-Al-Balad",  
  "parts": [  
    { "title": "1-Ayah (1-20)", "duration": "01h 13m" }  
  ]  
},
{  
  "title": "91-Ash-Shams",  
  "parts": [  
    { "title": "1-Ayah (1-15)", "duration": "53m 22s" }  
  ]  
},
{  
  "title": "92-Al-Layl",  
  "parts": [  
    { "title": "1-Ayah (1-21)", "duration": "59m 08s" }  
  ]  
},
{  
  "title": "93-Ad-Duhaa",  
  "parts": [  
    { "title": "1-Ayah (1-11)", "duration": "01h 10m" }  
  ]  
},
{  
  "title": "94-Ash-Sharh",  
  "parts": [  
    { "title": "1-Ayah (1-8)", "duration": "54m 21s" }  
  ]  
},
{  
  "title": "95-At-Tin",  
  "parts": [  
    { "title": "1-Ayah (1-8)", "duration": "43m 16s" }  
  ]  
},
{  
  "title": "96-Al-'Alaq",  
  "parts": [  
    { "title": "1-Introduction", "duration": "35m 23s" },  
    { "title": "2-Ayah (1-19)", "duration": "01h 04m" }  
  ]  
},{  
  "title": "97-Al-Qadr",  
  "parts": [  
    {  
      "title": "01-Al-Qadr (Ayah 1-5)",  
      "duration": "37m 15s"  
    }  
  ]  
},
{  
  "title": "98-Al-Bayyinah",  
  "parts": [  
    { "title": "1-Ayah (1-8)", "duration": "50m 27s" }  
  ]  
},
{  
  "title": "99-Az-Zalzalah",  
  "parts": [  
    { "title": "1-Ayah (1-8)", "duration": "40m 42s" }  
  ]  
},
{  
  "title": "100-Al-'Adiyat",  
  "parts": [  
    { "title": "1-Ayah (1-11)", "duration": "01h 26m" }  
  ]  
},
{  
  "title": "101-Al-Qari'ah",  
  "parts": [  
    { "title": "1-Ayah (1-11)", "duration": "01h 07m" }  
  ]  
},
{  
  "title": "102-At-Takathur",  
  "parts": [  
    { "title": "1-Ayah (1-8)", "duration": "01h 15m" }  
  ]  
},
{  
  "title": "103-Al-'Asr",  
  "parts": [  
    { "title": "1-Ayah (Part 1 of 5)", "duration": "01h 12m" },  
    { "title": "2-Ayah (Part 2 of 5)", "duration": "29m 32s" },  
    { "title": "3-Ayah (Part 3 of 5)", "duration": "01h 06m" },  
    { "title": "4-Ayah (Part 4 of 5)", "duration": "01h 17m" },  
    { "title": "5-Ayah (Part 5 of 5)", "duration": "01h 38m" }  
  ]  
},{  
  "title": "104-Al-Humazah",  
  "parts": [  
    {  
      "title": "01-Al-Humazah (Ayah 1-9)",  
      "duration": "01h 17m"  
    }  
  ]  
},
{  
  "title": "105-Al-Fil",  
  "parts": [  
    { "title": "1-Ayah (1-5)", "duration": "01h 07m" }  
  ]  
},
{  
  "title": "106-Quraish",  
  "parts": [  
    {  
      "title": "01-Quraish",  
      "duration": "02m 52s"  
    },  
    {  
      "title": "02-Quraish - 106",  
      "duration": "45m 20s"  
    }  
  ]  
},{  
  "title": "107-Al-Ma'un",  
  "parts": [  
    {  
      "title": "01-Al-Ma'un",  
      "duration": "54m 46s"  
    }  
  ]  
},{  
  "title": "108-Al-Kawthar",  
  "parts": [  
    {  
      "title": "01-Al-Kawthar",  
      "duration": "01h 28m"  
    }  
  ]  
},
{  
  "title": "109-Al-Kafirun",  
  "parts": [  
    {  
      "title": "01-Al-Kafirun",  
      "duration": "1h 17m"  
    }  
  ]  
},
{  
  "title": "110-An-Nasr",  
  "parts": [  
    {  
      "title": "01-An-Nasr",  
      "duration": "1h 20m"  
    }  
  ]  
},
{  
  "title": "111-Al-Masad",  
  "parts": [  
    {  
      "title": "01-Al-Masad",  
      "duration": "1h 18m"  
    }  
  ]  
},
{  
  "title": "112-Al-Ikhlas",  
  "parts": [  
    {  
      "title": "01-Al-Ikhlas",  
      "duration": "1h 26m"  
    }  
  ]  
},
{  
  "title": "113-Al-Falaq",  
  "parts": [  
    {  
      "title": "01-Al-Falaq",  
      "duration": "1h 41m"  
    }  
  ]  
},
{  
  "title": "114-An-Nas",  
  "parts": [  
    {  
      "title": "01-An-Nas",  
      "duration": "1h 18m"  
    }  
  ]  
}













];


const SurahList = () => {
  const [watchedParts, setWatchedParts] = useState([]);

  useEffect(() => {
    const userRef = doc(db, "users", "user_id"); // Replace "user_id" with dynamic user ID
    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        setWatchedParts(docSnap.data().watchedParts || []);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleWatch = async (surahTitle, partTitle) => {
    const updatedWatchedParts = [...watchedParts, { surah: surahTitle, part: partTitle }];
    setWatchedParts(updatedWatchedParts);

    const userRef = doc(db, "users", "user_id");
    await setDoc(
      userRef,
      { watchedParts: updatedWatchedParts },
      { merge: true }
    );
  };

  const handleUnwatch = async (surahTitle, partTitle) => {
    const updatedWatchedParts = watchedParts.filter(
      (watched) => !(watched.surah === surahTitle && watched.part === partTitle)
    );
    setWatchedParts(updatedWatchedParts);

    const userRef = doc(db, "users", "user_id");
    await setDoc(
      userRef,
      { watchedParts: updatedWatchedParts },
      { merge: true }
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      
      <div className="space-y-8">
        {surahData.map((surah) => (
          <Surah
            key={surah.title}
            title={surah.title}
            duration={surah.duration}
            parts={surah.parts}
            watchedParts={watchedParts}
            onWatch={handleWatch}
            onUnwatch={handleUnwatch}
          />
        ))}
      </div>
    </div>
  );
};

export default SurahList;
