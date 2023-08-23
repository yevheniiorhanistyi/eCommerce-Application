import { ModalContextType } from '../../components/ModalProvider/type';
import { ICountrie } from '../../types/types';
import iso3166Alpha2 from '../../utils/countries';
import { getProject } from './project';

const getCountries = async (
  modal: ModalContextType,
): Promise<ICountrie[] | []> => {
  const body = await getProject(modal);
  if (body) {
    const codesCountrie = body.countries;
    return codesCountrie.map((code) => ({
      codeCountrie: code,
      nameCountrie: `${
        code in iso3166Alpha2 ? iso3166Alpha2[code] : ''
      } (${code})`,
    }));
  }
  return [];
};

export default getCountries;
