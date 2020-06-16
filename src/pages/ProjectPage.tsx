import React, { FunctionComponent } from 'react';
import Container from 'components/Container';
import Layout from '../containers/Layout';
import { PageProps } from './PageType';
import { useContentfulPages } from '../contentful/FrontendApi';
import { resolveLinkInfo } from '../contentful/Resolver';
import { LinkType } from '../models';
import Grid from '../components/Grid';
import Card from '../components/Card';
import { IProject } from '../contentful/@types/contentful';
import RespImage from '../containers/RespImage';
import { toLinkType } from '../elements/Link/Link';

const ProjectPage: FunctionComponent<PageProps> = () => {
  let pageData = useContentfulPages('project');

  console.log(pageData, 'pageData');
  return (
    <Layout>
      {pageData.finished && (
        <Container pad={'All'} layout={'maxWidth'}>
          <Grid template={'repeat(auto-fill, minmax(300px, 1fr))'}>
            {(pageData.pages as IProject[])?.map((article) => {
              if (!article) return null;

              let linkInfo = toLinkType(resolveLinkInfo(article)) as LinkType;

              return (
                <Card
                  title={article.fields.title}
                  image={<RespImage image={article.fields.image} />}
                  subTitle={article.fields.technologies?.join(', ')}
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
