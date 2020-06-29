import RouteGenerator from './RouteGenerator';
import { ContentfulApi } from './ContentfulApi';

const client = new ContentfulApi({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENV
});

describe('RouteGeneration', () => {
  test('Can Connect', () => {
    expect.assertions(1);
    const routeGenerator = new RouteGenerator(client);
    let routes = routeGenerator.getRoutes();
    return routes.then((r) => {
      // console.log(r,"routes");
      expect(r).toBeDefined();
    });
  });
});
