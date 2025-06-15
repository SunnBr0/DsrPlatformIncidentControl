import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    country: 'AD',
    'hot dog': 70,
    burger: 100,
    sandwich: 64,
    kebab: 157,
    fries: 95,
    donut: 7,
  },
  {
    country: 'AE',
    'hot dog': 176,
    burger: 88,
    sandwich: 161,
    kebab: 117,
    fries: 14,
    donut: 34,
  },
  {
    country: 'AF',
    'hot dog': 170,
    burger: 90,
    sandwich: 123,
    kebab: 70,
    fries: 58,
    donut: 158,
  },
  {
    country: 'AG',
    'hot dog': 76,
    burger: 196,
    sandwich: 67,
    kebab: 144,
    fries: 83,
    donut: 20,
  },
  {
    country: 'AI',
    'hot dog': 167,
    burger: 87,
    sandwich: 117,
    kebab: 70,
    fries: 193,
    donut: 151,
  },
  {
    country: 'AL',
    'hot dog': 150,
    burger: 103,
    sandwich: 115,
    kebab: 33,
    fries: 89,
    donut: 134,
  },
  {
    country: 'AM',
    'hot dog': 117,
    burger: 174,
    sandwich: 89,
    kebab: 198,
    fries: 38,
    donut: 43,
  },
];

export const MyBar = () => (
  //   <ResponsiveBar
  //     data={data}
  //     indexBy="country"
  //     labelSkipWidth={12}
  //     labelSkipHeight={12}
  //     legends={[
  //       {
  //         dataFrom: 'keys',
  //         anchor: 'bottom-right',
  //         direction: 'column',
  //         translateX: 120,
  //         itemsSpacing: 3,
  //         itemWidth: 100,
  //         itemHeight: 16,
  //       },
  //     ]}
  //     axisBottom={{ legend: 'country (indexBy)', legendOffset: 32 }}
  //     axisLeft={{ legend: 'food', legendOffset: -40 }}
  //     margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  //   />
  <ResponsiveBar /* or Bar for fixed dimensions */
    data={data}
    indexBy="country"
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']} // <-- Добавьте ключи (очень важно!)
    labelSkipWidth={12}
    labelSkipHeight={12}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        translateX: 120,
        itemsSpacing: 3,
        itemWidth: 100,
        itemHeight: 16,
      },
    ]}
    axisBottom={{ legend: 'country (indexBy)', legendOffset: 32 }}
    axisLeft={{ legend: 'food', legendOffset: -40 }}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  />
);
