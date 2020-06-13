import { useEffect, useState } from 'react';
import { ContentfulApi } from './ContentfulApi';
import { environment } from '../environments/environment';
import { ContentfulEntry, getContentLocale } from './Resolver';
import RouteGenerator from './RouteGenerator';

type ContentfulPageEntry = {
  finished: boolean;
  page?: ContentfulEntry | undefined;
};

/**
 *
 * @param name
 * @param contentType
 */
export const useContentfulPage = (
  name: string,
  contentType: string
): ContentfulPageEntry => {
  const [page, setPageData] = useState<ContentfulPageEntry>({
    finished: false
  });

  useEffect(() => {
    if (name === undefined) return;
    console.log('init');
    const client = new ContentfulApi({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
      environment: environment.contentful.environment
    });

    client
      .fetchQuery({ content_type: contentType, 'fields.name': name })
      .then((data) => {

        if (data.length) {
          let pageData = RouteGenerator.generatePageData(
            Object.assign({}, data[0]),
            getContentLocale(data[0]) || 'null'
          );

          let finalVal = Object.assign(
            { finished: true },
            {
              page: pageData?.page
            }
          );
          setPageData(finalVal);
        } else {
          setPageData({ finished: true });
        }
      })
      .catch(() => {
        setPageData({ finished: false });
      });
  }, [contentType, name]);

  return page;
};
