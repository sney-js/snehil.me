import React, { FunctionComponent, useState } from 'react';
import { PageProps } from './PageType';
import ProjectPage, { ProjectFilterList } from './ProjectPage';
import Container from '../components/Container';
import { useContentfulEntry } from '../contentful/FrontendApi';
import { IFiltersFields } from '../contentful/@types/contentful';
import FilterList from '../containers/FilterList';
import { FilterListProps } from '../containers/FilterList/FilterList';

const HomePage: FunctionComponent<PageProps> = (props) => {
  const [filters, setSelectedFilters] = useState<string[]>([]);
  const filterEntry = useContentfulEntry('filters', 'project-filters');

  return (
    <div>
      <Container className={'d-filter-project-block'}>
        <FilterList
          filterList={getFilteredList(filterEntry)}
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

const getFilteredList = (filters) => {
  const filterList: FilterListProps['filterList'] = [];
  const entries = filters.entry?.fields as IFiltersFields;
  entries?.filtersList.forEach((f) => {
    filterList.push({ name: f, title: f });
  });
  return filterList;
};

export default HomePage;
