import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from 'react';
import Container from 'components/Container';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { PageProps } from '../PageType';
import { useContentfulPages } from 'contentful/FrontendApi';
import { resolveLinkInfo } from 'contentful/Resolver';
import { LinkType } from 'models';
import Card from 'components/Card';
import RespImage from 'containers/RespImage';
import { toLinkType } from 'elements/Link/Link';
import { IProject } from 'contentful/@types/contentful';
import { GlobalContext } from '../../containers/Layout/Layout';

const ProjectPage: FunctionComponent<PageProps> = () => {
  return <ProjectFilterList />;
};

type ProjectFilterProps = {
  technologyFilters?: string[];
};

export const ProjectFilterList: FunctionComponent<ProjectFilterProps> = (
  props
) => {
  const pageData = useContentfulPages('project');
  const globalContext = useContext(GlobalContext);

  const selected = new Set(props.technologyFilters);
  let [filteredProjects, setFilteredProjects] = useState<IProject[]>();

  useEffect(() => {
    const filteredProjects = pageData.pages as IProject[];
    if (filteredProjects) {
      if (props.technologyFilters?.length) {
        setFilteredProjects(
          filteredProjects
            .filter((p) => {
              return p.fields.technologies?.some((t) => selected.has(t));
            })
            .sort(() => Math.random() - 0.5)
        );
      } else {
        setFilteredProjects(filteredProjects);
      }
    }
  }, [props.technologyFilters, pageData]);

  return (
    <div className='d-project-block'>
      {pageData.finished && (
        <Container layout='maxWidth'>
          <SwitchTransition mode='out-in'>
            <CSSTransition
              classNames='filter'
              key={props.technologyFilters?.join(',')}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false);
              }}
            >
              <div className='d-project-grid'>
                {filteredProjects?.map((article, i) => {
                  if (!article) return null;

                  const linkInfo = toLinkType(
                    resolveLinkInfo(article)
                  ) as LinkType;

                  return (
                    <div
                      className='d-card-container'
                      key={i}
                    >
                      <Card
                        onMouseLeave={() => globalContext.hideTooltip()}
                        onMouseEnter={(e) => {
                          let target = e.currentTarget.getBoundingClientRect();
                          console.log(target, 'target');
                          globalContext.showTooltip({
                            title: 'Test',
                            children: (
                              <div>
                                <h1>asdasdas</h1>
                                <h1>asdasdas</h1>
                                <h1>asdasdas</h1>
                                <h1>asdasdas</h1>
                                <h1>asdasdas</h1>
                                <h1>asdasdas</h1>
                                no way
                              </div>
                            ),
                            atPosition: [
                              target.x - target.width / 2,
                              target.y + target.height / 2
                            ],
                            style: {
                              width: '360px'
                            }
                          });
                        }}
                        title={article.fields.title}
                        image={
                          <RespImage
                            image={article.fields.image}
                            widthVw={50}
                            widthMax={500}
                          />
                        }
                        tags={article.fields.technologies}
                        // link={linkInfo}
                      />
                    </div>
                  );
                }) || <small>Projects not found!</small>}
                {filteredProjects?.length &&
                  filteredProjects.length % 2 === 1 && (
                    <div className='d-card-container' />
                  )}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div className='d-project-number'>{filteredProjects?.length}</div>
        </Container>
      )}
    </div>
  );
};

export default ProjectPage;
