import iso3166Alpha2 from '../utils/countries';
import { getProject } from './getProject';

const getCountries: () => Promise<string[]> = async () => {
  const body = await getProject();
  if (body) {
    const codesCountrie = body.countries;
    return codesCountrie.map(
      (code) => `${code in iso3166Alpha2 ? iso3166Alpha2[code] : ''} (${code})`,
    );
  }
  return [];
};

// [
//   'European Union (EU)',
//   'Poland (PL)',
//   'United Kingdom (GB)',
// ];

export default getCountries;
