import { Data } from "../classes/Data";

/**
 *This is some part of data in Excel file, Data in Excel file can be saved in a SQL
 Database and the send by API as a Json file (like below format) 
 */
const data: Data[] = [
    {
        name: 'Aruba',
        code: 'ABW',
        indicator: 50,
        indicator_code: 'SP.RUR.TOTL.ZS',
        year_1960: 49.224,
        year_1961: 49.239,
        year_1962: 49.254,
        year_1963: 90.89
    },
    {
      name: 'Afghanistan',
      code: 'AFG',
      indicator: 60,
      indicator_code: 'SP.RUR.TOTL.ZS',
      year_1960: 91.779,
      year_1961: 91.779,
      year_1962: 91.195,
      year_1963: 90.89
  },
  {
    name: 'India',
    code: 'IN',
    indicator: 1324171354,
    indicator_code: 'SP.RUR.TOTL.ZS',
    year_1960: 82.076,
    year_1961: 82.076,
    year_1962: 81.782,
    year_1963: 81.595
},
{
  name: 'China',
  code: 'CN',
  indicator: 1403500365,
  indicator_code: 'SP.RUR.TOTL.ZS',
  year_1960: 83.797,
  year_1961: 83.292,
  year_1962: 82.774,
  year_1963: 82.243
},
{
  name: 'Italy',
  code: 'IT',
  indicator: 60483973,
  indicator_code: 'SP.RUR.TOTL.ZS',
  year_1960: 40.639,
  year_1961: 40.144,
  year_1962: 39.645,
  year_1963: 39.147
},
{
  name: 'United States',
  code: 'US',
  indicator: 327167434,
  indicator_code: 'SP.RUR.TOTL.ZS',
  year_1960: 30.004,
  year_1961: 29.623,
  year_1962: 29.243,
  year_1963: 28.866
},
{
  name: 'Canada',
  code: 'CA',
  indicator: 37602103,
  indicator_code: 'SP.RUR.TOTL.ZS',
  year_1960: 30.939,
  year_1961: 30.332,
  year_1962: 29.506,
  year_1963: 28.693
},
{
  name: 'Germany',
  code: 'DE',
  indicator: 83019200,
  indicator_code: 'SP.RUR.TOTL.ZS',
  year_1960: 28.616,
  year_1961: 28.303,
  year_1962: 28.238,
  year_1963: 28.174
},
];

/**
 * We can replace this part with 
 * axios.get<IPost[]>("OUR URL");
 * @returns all the runners
 */
const get = (): Promise<Data[]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

/**
 *
 * @param name
 * @returns runners by name (no case sensitive)
 */
const find = (name: string): Promise<Data[]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data.filter(country => country.name.toLocaleLowerCase() === name.toLocaleLowerCase()));
    }, 2000);
  });

export { get, find };
