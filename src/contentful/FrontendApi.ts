import { useEffect, useState } from 'react';
import { ContentfulApi } from './ContentfulApi';
import { environment } from '../environments/environment';
import { ContentfulEntry, getContentLocale } from './Resolver';
import RouteGenerator from './RouteGenerator';

const _useContentfulStateProvider = (
  query: object,
  dataHandler: (data: any[]) => void
): {
  finished: boolean;
  data?: any;
} => {
  const [page, setPageData] = useState({
    finished: false
  });

  useEffect(() => {
    if (query === undefined) return;

    const client = new ContentfulApi({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
      environment: environment.contentful.environment
    });

    client
      .fetchQuery(query)
      .then((data) => {
        if (data.length) {
          let finalVal = Object.assign({ finished: true }, dataHandler(data));
          setPageData(finalVal);
        } else {
          setPageData({ finished: true });
        }
      })
      .catch((e) => {
        console.error(e);
        setPageData({ finished: false });
      });
  }, [query]);

  return page;
};

/**
 *
 * @param name
 * @param contentType
 */
export const useContentfulPage = (
  contentType: string,
  name: string
): {
  finished: boolean;
  page?: ContentfulEntry;
} => {
  const [page, setPageData] = useState<{
    finished: boolean;
    page?: ContentfulEntry;
  }>({
    finished: false
  });

  useEffect(() => {
    if (name === undefined) return;

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
            { page: pageData?.page }
          );
          setPageData(finalVal);
        } else {
          setPageData({ finished: true });
        }
      })
      .catch((e) => {
        console.error(e);
        setPageData({ finished: false });
      });
  }, [contentType, name]);

  return page;
};

/**
 * Get multiple pages
 * @param condition
 * @param contentType
 */
export const useContentfulPages = (
  contentType: string,
  condition?: { [key: string]: string }
): {
  finished: boolean;
  pages?: ContentfulEntry[];
} => {
  const [page, setPageData] = useState<{
    finished: boolean;
    pages?: ContentfulEntry[];
  }>({
    finished: false
  });

  useEffect(() => {
    if (contentType === undefined) return;
    if (!condition) condition = {};

    const client = new ContentfulApi({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
      environment: environment.contentful.environment
    });

    client
      .fetchQuery({ content_type: contentType, ...condition })
      .then((data) => {
        if (data.length) {
          let pagesData = data.map((page) => {
            return RouteGenerator.generatePageData(
              Object.assign({}, page),
              getContentLocale(page) || 'null'
            )?.page;
          });

          let finalVal = Object.assign(
            { finished: true },
            { pages: pagesData }
          );
          setPageData(finalVal);
        } else {
          setPageData({ finished: true });
        }
      })
      .catch((e) => {
        console.error(e);
        setPageData({ finished: false });
      });
  }, [contentType, condition]);

  return page;
};
