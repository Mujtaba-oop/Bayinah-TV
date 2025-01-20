import React from 'react';
import Surah from './Surah';

// Full surah data
const surahData = [
  {
    title: 'Surah Al-Fatihah',
    duration: '3h',
    parts: [
      { title: 'Al-Fatihah (Ayah 1a)', duration: '20m 28s' },
      { title: 'Al-Fatihah (Ayah 1b)', duration: '20m 41s' },
      { title: 'Al-Fatihah (Ayah 1c)', duration: '21m 58s' },
      { title: 'Al-Fatihah (Ayah 1d)', duration: '23m 05s' },
      { title: 'Al-Fatihah (Ayah 2)', duration: '28m 12s' },
      { title: 'Al-Fatihah (Ayah 3)', duration: '09m 04s' },
      { title: 'Al-Fatihah (Ayah 4)', duration: '24m 09s' },
      { title: 'Al-Fatihah (Ayah 5)', duration: '20m 55s' },
      { title: 'Al-Fatihah (Ayah 6)', duration: '17m 29s' },
      { title: 'Al-Fatihah (Ayah 7)', duration: '25m 28s' },
      { title: 'Al-Fatihah - Balance and Observations', duration: '[Duration Unknown]' },
    ],
  },
  {
    title: 'Surah Al-Baqarah',
    duration: '30h',
    parts: [
      { title: 'Al-Baqarah (Ayah 1-3)', duration: '19m 27s' },
      { title: 'Al-Baqarah (Ayah 4-8)', duration: '18m 21s' },
      { title: 'Al-Baqarah (Ayah 9-12)', duration: '19m 48s' },
      { title: 'Al-Baqarah (Ayah 13-17)', duration: '22m 47s' },
      { title: 'Al-Baqarah (Ayah 18-24)', duration: '18m 39s' },
      { title: 'Al-Baqarah (Ayah 25-27)', duration: '20m 22s' },
      { title: 'Al-Baqarah (Ayah 27-33)', duration: '21m 31s' },
      { title: 'Al-Baqarah (Ayah 34-37)', duration: '18m 20s' },
      { title: 'Al-Baqarah (Ayah 38-44)', duration: '19m 03s' },
      { title: 'Al-Baqarah (Ayah 44-51)', duration: '21m 35s' },
      { title: 'Al-Baqarah (Ayah 52-60)', duration: '20m 31s' },
      { title: 'Al-Baqarah (Ayah 61-62)', duration: '19m 22s' },
      { title: 'Al-Baqarah (Ayah 63-74)', duration: '20m 25s' },
      { title: 'Al-Baqarah (Ayah 74-78)', duration: '20m 23s' },
      { title: 'Al-Baqarah (Ayah 79-90)', duration: '20m 33s' },
      { title: 'Al-Baqarah (Ayah 91-102)', duration: '17m 51s' },
      { title: 'Al-Baqarah (Ayah 102-105)', duration: '20m 05s' },
      { title: 'Al-Baqarah (Ayah 104-113)', duration: '59m 53s' },
      { title: 'Al-Baqarah (Ayah 114-128)', duration: '01h 01m' },
      { title: 'Al-Baqarah (Ayah 129-144)', duration: '01h 00m' },
      { title: 'Al-Baqarah (Ayah 145-167)', duration: '59m 44s' },
      { title: 'Al-Baqarah (Ayah 168-185)', duration: '01h 04m' },
      { title: 'Al-Baqarah (Ayah 186-195)', duration: '57m 46s' },
      { title: 'Al-Baqarah (Ayah 196-207)', duration: '49m 09s' },
      { title: 'Al-Baqarah (Ayah 208-220)', duration: '48m 30s' },
      { title: 'Al-Baqarah (Ayah 221-242)', duration: '58m 21s' },
      { title: 'Al-Baqarah (Ayah 243-252)', duration: '29m 10s' },
      { title: 'Al-Baqarah (Ayah 253-256)', duration: '59m 12s' },
      { title: 'Al-Baqarah (Ayah 257-263)', duration: '01h 00m' },
      { title: 'Al-Baqarah (Ayah 264-277)', duration: '58m 50s' },
      { title: 'Al-Baqarah (Ayah 278-286)', duration: '51m 29s' },
    ],
  },
  {
    title: 'Surah Ali \'Imran',
    duration: 'Unknown',
    parts: [
      { title: 'Ayah 1-6', duration: '15m 47s' },
      { title: 'Ayah 7-13', duration: '21m 03s' },
      { title: 'Ayah 14-16', duration: '23m 22s' },
      { title: 'Ayah 17-18', duration: '25m 21s' },
      { title: 'Ayah 19-21', duration: '19m 05s' },
      { title: 'Ayah 22-25', duration: '12m 58s' },
      { title: 'Ayah 26-27', duration: '19m 59s' },
      { title: 'Ayah 28-30', duration: '23m 55s' },
      { title: 'Ayah 31', duration: '16m 06s' },
      { title: 'Ayah 32-37', duration: '25m 18s' },
      { title: 'Ayah 37-44', duration: '20m 52s' },
      { title: 'Ayah 45-50', duration: '22m 33s' },
      { title: 'Ayah 51-58', duration: '20m 20s' },
      { title: 'Ayah 59-68', duration: '20m 31s' },
      { title: 'Ayah 69-76', duration: '20m 14s' },
      { title: 'Ayah 77-84', duration: '17m 04s' },
      { title: 'Ayah 85-91', duration: '16m 20s' },
      { title: 'Ayah 92-93', duration: '19m 25s' },
      { title: 'Ayah 94-100', duration: '18m 51s' },
      { title: 'Ayah 101-102', duration: '17m 41s' },
      { title: 'Ayah 103', duration: '19m 21s' },
      { title: 'Ayah 103-104', duration: '25m 56s' },
      { title: 'Ayah 105-110', duration: '13m 29s' },
      { title: 'Ayah 111-113', duration: '18m 42s' },
      { title: 'Ayah 114-118', duration: '22m 17s' },
      { title: 'Ayah 119-122', duration: '19m 47s' },
      { title: 'Ayah 123-132', duration: '20m 14s' },
      { title: 'Ayah 133-138', duration: '21m 03s' },
      { title: 'Ayah 139-143', duration: '19m 57s' },
      { title: 'Ayah 144-152', duration: '20m 47s' },
      { title: 'Ayah 153-158', duration: '19m 54s' },
      { title: 'Ayah 159', duration: '30m 32s' },
      { title: 'Ayah 160-166', duration: '15m 02s' },
      { title: 'Ayah 167-170', duration: '15m 50s' },
      { title: 'Ayah 171-177', duration: '20m 20s' },
      { title: 'Ayah 178-184', duration: '18m 54s' },
      { title: 'Ayah 185-187', duration: '19m 33s' },
      { title: 'Ayah 188-189', duration: '15m 44s' },
      { title: 'Ayah 190-191', duration: '23m 54s' },
      { title: 'Ayah 192-195', duration: '16m 05s' },
      { title: 'Ayah 196-200', duration: '22m 52s' },
      { title: 'Closing Remarks Part 1', duration: '18m 52s' },
      { title: 'Closing Remarks Part 2', duration: '20m 34s' },
    ],
  },
];

const SurahList = () => {
  return (
    <div className="space-y-6">
      {surahData.map((surah) => (
        <Surah
          key={surah.title}
          title={surah.title}
          duration={surah.duration}
          parts={surah.parts}
        />
      ))}
    </div>
  );
};

export default SurahList;
