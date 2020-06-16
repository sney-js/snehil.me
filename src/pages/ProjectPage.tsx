import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Layout from '../containers/Layout';
import { PageProps } from './PageType';
import { useContentfulPages } from '../contentful/FrontendApi';
import { resolveLinkInfo } from '../contentful/Resolver';
import { LinkType } from '../models';
import Grid from '../components/Grid';
import Card from '../components/Card';
import { IArticle } from '../contentful/@types/contentful';
import RespImage from '../containers/RespImage';
import RichText from '../containers/RichText';
import { toLinkType } from '../utils';

const ProjectPage: FunctionComponent<PageProps> = () => {
  let pageData = useContentfulPages('article');

  return (
    <Layout>
      {pageData.finished && (
        <Container pad={'All'} layout={'maxWidth'}>
          <Grid template={'repeat(auto-fill, minmax(300px, 1fr))'}>
            {(pageData.pages as IArticle[])?.map((article) => {
              let linkInfo = toLinkType(resolveLinkInfo(article)) as LinkType;
              return (
                <Card
                  title={article.fields.title}
                  image={<RespImage image={article.fields.image} />}
                  subTitle={article.fields.category?.fields.title}
                  description={
                    <RichText document={article.fields.description} />
                  }
                  link={linkInfo}
                />
              );
            }) || <small>Projects not found!</small>}
          </Grid>
        </Container>
      )}
    </Layout>
  );
};

export default ProjectPage;
