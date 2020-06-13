import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Layout from '../containers/Layout';
import { PageProps } from './PageType';
import { useContentfulPages } from '../contentful/FrontendApi';
import LinkElement from '../containers/LinkElement';
import { resolveLinkInfo } from '../contentful/Resolver';
import { LinkData } from '../models';

const ProjectPage: FunctionComponent<PageProps> = (props) => {
  let pageData = useContentfulPages('article');

  return (
    <Layout>
      {pageData.finished && (
        <Container pad={'All'} layout={'maxWidthNarrow'}>
          {pageData.pages?.map((article) => {
            let linkInfo = resolveLinkInfo(article);
            if (linkInfo) {
              return (
                <LinkElement {...linkInfo}>
                  <h3>{article.fields?.title}</h3>
                </LinkElement>
              );
            }
            return null;
          }) || <small>Projects not found!</small>}
        </Container>
      )}
    </Layout>
  );
};

export default ProjectPage;
