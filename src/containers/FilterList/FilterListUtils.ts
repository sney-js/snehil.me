import MockFilter from '../../mocks/mock-filters.json';

export type FilterItem = {
  name: string[];
  title: string;
  size?: number;
  align?: 'left' | 'center' | 'right' | string;
  alignVal?: string;
};

export const filterNameSeparator = '|';
export const filterDataSeparator = '#';

/**
 *
 * @param filtersList
 */
export const getFilteredList = (filtersList?: string[]) => {
  const filterList: FilterItem[] =
    filtersList?.map((f) => parseFilterData(f)) || [];
  return filterList;
};

export const getNameList = (name: string) => name.split('|');

let parseFilterData = (filterString: string): FilterItem => {
  let split = filterString.split(filterDataSeparator);
  return {
    name: getNameList(split[0]),
    title: (split[1] || getNameList(split[0])[0]).toUpperCase(),
    size: parseFloat(split[2]) || 1,
    align: split[3]?.split(':')[0],
    alignVal: split[3]?.split(':')[1]
  };
};

export const getMockFilterList = () => MockFilter;
