import React, { FunctionComponent, useState } from 'react';
import { PageProps } from './PageType';
import { ProjectFilterList } from './ProjectPage';
import Container from '../components/Container';
import { useContentfulEntry } from '../contentful/FrontendApi';
import { IFiltersFields } from '../contentful/@types/contentful';
import FilterList, {
  getFilteredList,
  getMockFilterList
} from '../containers/FilterList';

const TEST_DEV = true;

const HomePage: FunctionComponent<PageProps> = (props) => {
  const [filters, setSelectedFilters] = useState<string[]>([]);

  let filterEntry;
  filterEntry = useContentfulEntry('filters', 'project-filters');

  let filtersList = TEST_DEV
    ? getMockFilterList()
    : ((filterEntry?.entry?.fields as IFiltersFields)?.filterData as string[]);
  return (
    <div>
      <Container className='d-filter-project-block'>
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

export default HomePage;
