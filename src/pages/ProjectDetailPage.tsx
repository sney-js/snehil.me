import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Layout from '../containers/Layout';
import { PageProps } from './PageType';
import { renderContentContainer } from '../contentful/Renderer';
import { useContentfulPage } from '../contentful/FrontendApi';
import { IArticle, IArticleFields } from "../contentful/@types/contentful";

const ProjectPage: FunctionComponent<PageProps> = (props) => {
  const { projectId } = props.match.params;

  let pageData = useContentfulPage('article', projectId);

  let article = pageData.page as IArticle;
  return (
    <Layout>
      {pageData.finished && (
        <Container pad={'All'} layout={'maxWidth'}>
          {article ? (
            <>
              <Container layout={"maxWidthNarrow"}>
                <h4>{article.fields.category?.fields.title}</h4>
                <h1>{article.fields?.title}</h1>
              </Container>
              {article.fields?.content?.map(renderContentContainer)}
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
