import iso3166Alpha2 from '../utils/countries';
import { getProject } from './getProject';

const getCountries = async (): Promise<string[]> => {
  const body = await getProject();
  if (body) {
    const codesCountrie = body.countries;
    return codesCountrie.map(
      (code) => `${code in iso3166Alpha2 ? iso3166Alpha2[code] : ''} (${code})`,
    );
  }
  return [];
};

export default getCountries;
