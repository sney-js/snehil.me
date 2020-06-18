import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import { PageProps } from './PageType';
import { useContentfulPages } from '../contentful/FrontendApi';
import { resolveLinkInfo } from '../contentful/Resolver';
import { LinkType } from '../models';
import Grid from '../components/Grid';
import Card from '../components/Card';
import { IProject } from '../contentful/@types/contentful';
import RespImage from '../containers/RespImage';
import { toLinkType } from '../elements/Link/Link';
import RichText from '../containers/RichText';

const ProjectPage: FunctionComponent<PageProps> = () => {
  return <ProjectFilterList />;
};

type ProjectFilterProps = {
  technologyFilters?: string[];
};
export const ProjectFilterList: FunctionComponent<ProjectFilterProps> = (
  props
) => {
  let pageData = useContentfulPages('project');

  let filteredProjects = pageData.pages as IProject[];
  if (props.technologyFilters?.length && filteredProjects) {
    const selected = new Set(props.technologyFilters);
    filteredProjects = filteredProjects.filter((p) => {
      return p.fields.technologies?.some((t) => selected.has(t));
    });
  }

  return (
    <div className={'d-project-block'}>
      {pageData.finished && (
        <Container pad={'Horizontal'} layout={'maxWidth'}>
          <div className={'d-project-grid'}>
            {filteredProjects?.map((article) => {
              if (!article) return null;

              let linkInfo = toLinkType(resolveLinkInfo(article)) as LinkType;

              return (
                <Card
                  title={article.fields.title}
                  image={<RespImage image={article.fields.image} />}
                  subTitle={article.fields.technologies?.join(', ')}
                  link={linkInfo}
                />
              );
            }) || <small>Projects not found!</small>}
          </div>
        </Container>
      )}
    </div>
  );
};

export default ProjectPage;
