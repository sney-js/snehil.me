import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Layout from '../containers/Layout';
import Link from '../elements/Link';
import { PageProps } from './PageType';
import { renderContentContainer } from '../contentful/Renderer';
import { useContentfulPage } from '../contentful/FrontendApi';

const ProjectPage: FunctionComponent<PageProps> = (props) => {
  const { projectId } = props.match.params;

  let pageData = useContentfulPage(projectId, 'article');

  if (!projectId) {
    return (
      <Layout>
        <Container pad={'All'} layout={'maxWidthNarrow'}>
          <Link to={'/project/article-3'}>Article 3 Project</Link>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      {pageData.finished && (
        <Container pad={'All'} layout={'maxWidthNarrow'}>
          <h4>{projectId}</h4>
          {pageData.page ? (
            <>
              <h1>{pageData.page.fields.title}</h1>
              {pageData.page.fields.content?.map(renderContentContainer)}}
            </>
          ) : (
            <small>Project not found!</small>
          )}
        </Container>
      )}
    </Layout>
  );
};

export default ProjectPage;
