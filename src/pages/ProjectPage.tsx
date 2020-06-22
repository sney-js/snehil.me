import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import { PageProps } from './PageType';
import { useContentfulPages } from '../contentful/FrontendApi';
import { resolveLinkInfo } from '../contentful/Resolver';
import { LinkType } from '../models';
import Card from '../components/Card';
import { IProject } from '../contentful/@types/contentful';
import RespImage from '../containers/RespImage';
import { toLinkType } from '../elements/Link/Link';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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

  const selected = new Set(props.technologyFilters);
  let filteredProjects = pageData.pages as IProject[];
  if (props.technologyFilters?.length && filteredProjects) {
    filteredProjects = filteredProjects
      .filter((p) => {
        return p.fields.technologies?.some((t) => selected.has(t));
      })
      .sort(() => Math.random() - 0.5);
  }

  return (
    <div className={'d-project-block'}>
      {pageData.finished && (
        <Container layout={'maxWidth'}>
          <SwitchTransition mode={'out-in'}>
            <CSSTransition
              classNames='filter'
              key={props.technologyFilters?.join(',')}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false);
              }}
            >
              <div className={'d-project-grid'}>
                {filteredProjects?.map((article, i) => {
                  if (!article) return null;

                  let linkInfo = toLinkType(
                    resolveLinkInfo(article)
                  ) as LinkType;

                  return (
                    <div className={'d-card-container'}>
                      <Card
                        title={article.fields.title}
                        image={<RespImage image={article.fields.image} />}
                        tags={article.fields.technologies}
                        link={linkInfo}
                      />
                    </div>
                  );
                }) || <small>Projects not found!</small>}
                {filteredProjects.length &&
                  filteredProjects.length % 2 == 1 && (
                    <div className={'d-card-container'} />
                  )}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div className={'d-project-number'}>{filteredProjects.length}</div>
        </Container>
      )}
    </div>
  );
};

export default ProjectPage;
