import * as contentful from 'contentful';

export class ContentfulApi {
  client: any = null;

  private defaultLocale: string;

  private locales: Array<string>;

  private currentLocale: string;

  constructor({ space, accessToken, environment }, host?) {
    this.client = contentful.createClient({
      space,
      accessToken,
      environment,
      host
    });
  }

  setLocale(locale: string) {
    this.currentLocale = locale;
    return this;
  }

  async getLocale() {
    const data = await this.client.getLocales();
    const defaultLocale = data.items.find((item) => item.default).code;
    this.defaultLocale = defaultLocale;
    this.currentLocale = defaultLocale;
    return defaultLocale;
  }

  async getLocales() {
    const locales = await this.client.getLocales();
    this.locales = locales.items.map((item) => item.code);
    return this.locales;
  }

  async getPages(contentTypePageName = 'page', filter?) {
    return await this.client
      .getEntries({
        content_type: contentTypePageName,
        include: 10,
        locale: this.currentLocale,
        ...filter
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  }

  /**
   *
   * @param query = {content_type="page", field:"slug", value:"index", include: 3 }
   * @returns {Promise<Entry<any>>}
   */
  async fetchEntry({ content_type, field, value, ...rest }) {
    const entries = await this.client.getEntries({
      content_type,
      locale: this.currentLocale,
      ...rest
    });
    return entries.items.find((en) => en.fields[field] === value);
  }

  async fetchQuery(query, filter?) {
    const entries = await this.client.getEntries(query);

    if (filter) {
      return entries.items.map(filter);
    }
    return entries.items;
  }
}
