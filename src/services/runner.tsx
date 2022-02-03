import { Runner } from '../classes/Runner';

const data: Runner[] = [
  {
    base: {
      lat: 45.466467,
      lon: 9.180918,
    },
    name: 'Marco',
    id: 'c28941a3-4420-4f4e-9e3f-243df453cc5f',
  },
  {
    base: {
      lat: 45.498105,
      lon: 9.138253,
    },
    name: 'Giuseppe',
    id: '60627f9e-2c8d-44fa-a1a5-43c3db013589',
  },
  {
    base: {
      lat: 45.483607,
      lon: 9.11517,
    },
    name: 'Luca',
    id: 'a3f0f047-fe9f-42c3-aaa4-b6d727d1606d',
  },
  {
    base: {
      lat: 45.455641,
      lon: 9.14259,
    },
    name: 'Silvio',
    id: 'b2902d3d-02be-4547-8e1c-51a4f8c0fae1',
  },
  {
    base: {
      lat: 45.448698,
      lon: 9.19589,
    },
    name: 'Elena',
    id: 'ff4c7f49-3303-48ee-8846-54ab5603bc82',
  },
  {
    base: {
      lat: 45.460254,
      lon: 9.213859,
    },
    name: 'Silvia',
    id: 'a0c7a1fe-60b6-456f-9698-213ec314fe77',
  },
  {
    base: {
      lat: 45.484897,
      lon: 9.221404,
    },
    name: 'Teresa',
    id: '7eaa1905-345b-415c-a637-5a11ac6ae9db',
  },
  {
    base: {
      lat: 45.498567,
      lon: 9.192917,
    },
    name: 'Lino',
    id: '98ddff1d-af38-470a-bd6d-40b3867059f2',
  },
];

/**
 *
 * @returns all the runners
 */
const get = (): Promise<Runner[]> =>
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
const find = (name: string): Promise<Runner[]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data.filter(runner => runner.name.toLocaleLowerCase() === name.toLocaleLowerCase()));
    }, 2000);
  });

export { get, find };
