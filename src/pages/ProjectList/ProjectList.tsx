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
import Card from 'components/Card';
import RespImage from 'containers/RespImage';
import { toLinkType } from 'elements/Link/Link';
import { IProject } from 'contentful/@types/contentful';
import { GlobalContext } from '../../containers/Layout/Layout';
import ProjectTooltip from '../../containers/ProjectTooltip';
import RichText from '../../containers/RichText';
import { fromKeyValue, transformKeyValue, makeClass } from 'utils';
import { MetricsType } from '../../containers/ProjectTooltip/ProjectTooltip';

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

  const selected = new Set(props.technologyFilters);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>();

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
                  return <ProjectItem key={i} article={article} />;
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

const ProjectItem: FunctionComponent<{
  article: IProject;
}> = ({ article }) => {
  const globalContext = useContext(GlobalContext);
  const [hasHover, setHasHover] = useState<boolean>();
  return (
    <div className='d-card-container'>
      <Card
        className={makeClass([hasHover && 'has-hover'])}
        onMouseLeave={() => {
          if (hasHover) {
            setHasHover(false);
          }
          setTimeout(() => {
            setHasHover((hov) => {
              if (hov) return hov;
              globalContext.hideTooltip();
            });
          }, 1000);
        }}
        onMouseEnter={(e) => {
          if (!hasHover) {
            setHasHover(true);
          }
          let target = e.currentTarget.getBoundingClientRect();
          setTimeout(() => {
            setHasHover((hov) => {
              if (!hov) return hov;
              let fields = article.fields;
              let metrics = fromKeyValue(
                transformKeyValue(fields.performanceMetrics)
              ) as MetricsType;
              console.log(metrics, 'metrics');
              globalContext.showTooltip({
                children: (
                  <ProjectTooltip
                    description={
                      fields.description ? (
                        <RichText markdown={fields.description} />
                      ) : undefined
                    }
                    links={fields.links?.map(toLinkType)}
                    images={fields.images?.map((im, i) => (
                      <RespImage
                        image={im}
                        widthVw={30}
                        widthMax={500}
                        key={i}
                        id={article.fields.name + '-img-' + i}
                      />
                    ))}
                    metrics={metrics}
                  />
                ),
                atPosition: [
                  target.x - target.width / 2 - 16,
                  target.y + target.height / 2
                ],
              });
              return hov;
            });
          }, 1000);
        }}
        title={article.fields.title}
        image={
          <RespImage image={article.fields.image} widthVw={50} widthMax={500} />
        }
        tags={article.fields.technologies}
        // link={linkInfo}
      />
    </div>
  );
};

export default ProjectPage;
