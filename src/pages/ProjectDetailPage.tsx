import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import { PageProps } from './PageType';
import { renderContentContainer } from '../contentful/Renderer';
import { useContentfulPage } from '../contentful/FrontendApi';
import {
  IProject,
  IProjectContentBlock
} from '../contentful/@types/contentful';
import RichText from '../containers/RichText/RichText';
import LinkElement from '../containers/LinkElement';
import Tag from '../elements/Tag';
import Button from '../elements/Button';
import { IcClose } from '../elements/SvgElements';
import Link from '../elements/Link';

const ProjectDetailPage: FunctionComponent<PageProps> = (props) => {
  const { projectId } = props.match.params;

  let pageData = useContentfulPage('project', projectId);

  let article = pageData.page as IProject;
  return (
    <div>
      {pageData.finished && (
        <Container pad='All' layout='maxWidth' className='d-project-page'>
          <div className='d-project-close'>
            <Link to='/'>
              <Button icon={<IcClose />} appearance='secondary' />
            </Link>
          </div>
          {article ? (
            <>
              <Container layout='maxWidthNarrow' pad='Top'>
                <h1>{article.fields?.title}</h1>
                <div>
                  {article.fields.technologies?.map((a, i) => (
                    <Tag appearance='block' title={a} key={i} />
                  ))}
                </div>
                <RichText markdown={article.fields.description} />
              </Container>
            </>
          ) : (
            <small>Project not found!</small>
          )}
        </Container>
      )}
    </div>
  );
};

const renderProjectContent = (item, key) => {
  const contentItem = item as IProjectContentBlock;
  return (
    <Container key={key} layout='maxWidth'>
      {contentItem.fields.images?.map((asset, i) =>
        renderContentContainer({ type: 'Asset', ...asset }, key + i)
      )}
      {contentItem.fields.textBlock1 && (
        <Container pad='Vertical' layout='maxWidthNarrow'>
          <RichText markdown={contentItem.fields.textBlock1} />
        </Container>
      )}
      {contentItem.fields.textBlock2 && (
        <Container pad='Vertical' layout='maxWidthNarrow'>
          <RichText markdown={contentItem.fields.textBlock2} />
        </Container>
      )}
      {contentItem.fields.iFrame && (
        <Container pad='Vertical'>
          <div
            dangerouslySetInnerHTML={{ __html: contentItem.fields.iFrame }}
          />
        </Container>
      )}
    </Container>
  );
};

export default ProjectDetailPage;
