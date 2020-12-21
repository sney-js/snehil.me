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
import { makeClass } from '../../utils';

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

                  const linkInfo = toLinkType(
                    resolveLinkInfo(article)
                  ) as LinkType;

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

const ProjectItem: FunctionComponent<any> = ({ article }) => {
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
              globalContext.showTooltip({
                children: (
                  <div>
                    <p>
                      Mercedem aut nummos unde unde extricat, amaras. Etiam
                      habebis sem dicantur magna mollis euismod. Quam diu etiam
                      furor iste tuus nos eludet? Cum ceteris in veneratione tui
                      montes, nascetur mus. Quisque ut dolor gravida, placerat
                      libero vel, euismod. Morbi odio eros, volutpat ut pharetra
                      vitae, lobortis sed nibh.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisici elit,
                      sed eiusmod tempor incidunt ut labore et dolore magna
                      aliqua. Tityre, tu patulae recubans sub tegmine fagi
                      dolor. Ab illo tempore, ab est sed immemorabili. Fictum,
                      deserunt mollit anim laborum astutumque!
                    </p>
                    <p>
                      Prima luce, cum quibus mons aliud consensu ab eo. Quid
                      securi etiam tamquam eu fugiat nulla pariatur. Integer
                      legentibus erat a ante historiarum dapibus. Quam temere in
                      vitiis, legem sancimus haerentia. Phasellus laoreet lorem
                      vel dolor tempus vehicula. Inmensae subtilitatis, obscuris
                      et malesuada fames.
                    </p>
                    no way
                  </div>
                ),
                atPosition: [
                  target.x - target.width / 2 - 16,
                  target.y + target.height / 2
                ],
                style: {
                  width: '360px'
                }
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
