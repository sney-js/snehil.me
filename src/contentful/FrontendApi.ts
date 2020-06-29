import { useEffect, useState } from 'react';
import { ContentfulApi } from './ContentfulApi';
import { environment } from '../environments/environment';
import { ContentfulEntry, getContentLocale } from './Resolver';
import RouteGenerator from './RouteGenerator';
import CachedResponses from './CachedResponses';

type ContentfulApiState = { finished: boolean };

const _useContentfulStateProvider = (
  query: object,
  dataHandler: (data: any[]) => any
): ContentfulApiState & object => {
  const [page, setPageData] = useState({
    finished: false
  });

  useEffect(() => {
    if (query === undefined) return;

    const cachedData = CachedResponses.getInstance().getResponse(
      JSON.stringify(query)
    );
    console.log(cachedData, 'cachedData');
    if (cachedData) {
      let finalVal = Object.assign({ finished: true }, cachedData);
      setPageData(finalVal);
      console.log('Using cached');
      return;
    }

    const client = new ContentfulApi({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
      environment: environment.contentful.environment
    });

    client
      .fetchQuery(query)
      .then((data) => {
        if (data.length) {
          let finalData = dataHandler(data);

          // caching in react memory
          CachedResponses.getInstance().setResponse(
            JSON.stringify(query),
            finalData
          );

          let finalVal = Object.assign({ finished: true }, finalData);
          setPageData(finalVal);
        } else {
          setPageData({ finished: true });
        }
      })
      .catch((e) => {
        console.error(e);
        setPageData({ finished: true });
      });
  }, []);

  return page;
};

/**
 *
 * @param name
 * @param contentType
 */
export const useContentfulEntry = (
  contentType: string,
  name: string
): ContentfulApiState & { entry?: ContentfulEntry } => {
  return _useContentfulStateProvider(
    { content_type: contentType, 'fields.name': name },
    (data) => {
      return { entry: data[0] };
    }
  );
};

/**
 *
 * @param name
 * @param contentType
 */
export const useContentfulPage = (
  contentType: string,
  name: string
): ContentfulApiState & { page?: ContentfulEntry } => {
  return _useContentfulStateProvider(
    { content_type: contentType, 'fields.name': name },
    (data) => {
      let pageData = RouteGenerator.generatePageData(
        Object.assign({}, data[0]),
        getContentLocale(data[0]) || 'null'
      );
      return { page: pageData?.page };
    }
  );
};

/**
 * Get multiple pages
 * @param condition
 * @param contentType
 */
export const useContentfulPages = (
  contentType: string,
  condition?: { [key: string]: string }
): ContentfulApiState & { pages?: ContentfulEntry[] } => {
  return _useContentfulStateProvider(
    { content_type: contentType, ...condition },
    (data) => {
      let pagesData = data.map((page) => {
        return RouteGenerator.generatePageData(
          Object.assign({}, page),
          getContentLocale(page) || 'null'
        )?.page;
      });
      return { pages: pagesData };
    }
  );
};
