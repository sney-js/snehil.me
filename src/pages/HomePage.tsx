import React, { FunctionComponent, useState } from 'react';
import { PageProps } from './PageType';
import { ProjectFilterList } from './ProjectPage';
import Container from '../components/Container';
import { useContentfulEntry } from '../contentful/FrontendApi';
import { IFiltersFields } from '../contentful/@types/contentful';
import FilterList from '../containers/FilterList';
import { FilterListProps } from '../containers/FilterList/FilterList';
import MockFilter from '../mocks/mock-filters.json';

const TEST_DEV = true;

const HomePage: FunctionComponent<PageProps> = (props) => {
  const [filters, setSelectedFilters] = useState<string[]>([]);

  let filterEntry;
  filterEntry = useContentfulEntry('filters', 'project-filters');

  let filtersList = TEST_DEV
    ? MockFilter
    : (filterEntry?.entry?.fields as IFiltersFields)?.filterData;
  return (
    <div>
      <Container className={'d-filter-project-block'}>
        <FilterList
          filterList={getFilteredList(filtersList)}
          selected={(list) => {
            console.log(list);
            setSelectedFilters(list);
          }}
        />
        <ProjectFilterList technologyFilters={filters} />
      </Container>
    </div>
  );
};

const getFilteredList = (filtersList) => {
  const filterList: FilterListProps['filterList'] = [];
  filtersList?.forEach((f) => {
    let split = f.split('#');
    filterList.push({
      name: split[0],
      title: (split[1] || split[0]).toUpperCase(),
      size: parseFloat(split[2]) || 1,
      align: split[3]?.split(':')[0],
      alignVal: split[3]?.split(':')[1]
    });
  });
  return filterList;
};

export default HomePage;
