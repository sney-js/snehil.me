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

const ProjectDetailPage: FunctionComponent<PageProps> = (props) => {
  const { projectId } = props.match.params;

  let pageData = useContentfulPage('project', projectId);

  let article = pageData.page as IProject;
  return (
    <div>
      {pageData.finished && (
        <Container pad={'All'} layout={'maxWidth'}>
          {article ? (
            <>
              <Container layout={'maxWidthNarrow'}>
                <LinkElement path={'/'} title={'< Back to Projects'} />
                <h1>{article.fields?.title}</h1>
                <h4>{article.fields.technologies?.join(', ')}</h4>
                <RichText markdown={article.fields.description} />
              </Container>
              {article.fields?.content?.map(renderProjectContent)}
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
    <Container key={key} layout={'maxWidth'}>
      {contentItem.fields.images?.map((asset, i) =>
        renderContentContainer({ type: 'Asset', ...asset }, key + i)
      )}
      {contentItem.fields.textBlock1 && (
        <Container pad='Vertical' layout={'maxWidthNarrow'}>
          <RichText markdown={contentItem.fields.textBlock1} />
        </Container>
      )}
      {contentItem.fields.textBlock2 && (
        <Container pad='Vertical' layout={'maxWidthNarrow'}>
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
