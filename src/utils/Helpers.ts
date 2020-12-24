import { LinkData } from '../models/LinkData';
// import { LinkType } from '../models/Link';

export const makeClass: (
  classes: Array<string | boolean | undefined>
) => string = (classes: Array<string | boolean | undefined>) =>
  classes
    .filter((e) => e)
    .join(' ')
    .trim();

export const WINDOW: any = (typeof window === 'object' && window) || undefined;

type CSSVarType = {
  [key: string]: string | number | undefined;
};
type CSSVarTypeReturn = {
  [key: string]: string | number;
};

export const setCSSVar = (obj: CSSVarType): CSSVarTypeReturn => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    }
  }
  return obj as CSSVarTypeReturn;
};

export const cleanPath = function (result: string) {
  return `${result}/`.toString().replace(/[/]+/g, '/');
};

export const getPathBreaks = function (path?: string) {
  const pathname = path || WINDOW?.location?.pathname;
  return WINDOW && pathname.split('/').filter((e) => e.length);
};

export const transformKeyValue = (code?: string[]): KeyValue[] => {
  if (!code) return [];

  return (
    (code
      .map((e: string): KeyValue | undefined => {
        const split = e.split('#').map((e) => e.trim());

        if (split.length >= 2) {
          let value: string | number = split[1];
          if (parseFloat(value)) value = parseFloat(value);
          return {
            [split[0]]: value
          };
        }

        return undefined;
      })
      .filter((e) => !!e) as KeyValue[]) || []
  );
};

export const fromKeyValue = (arr: KeyValue[]): KeyValue | undefined => {
  if (!arr || !arr.length) return undefined;
  let obj = {};
  arr.forEach((a) => {
    obj = Object.assign(obj, a);
  });
  return obj;
};

export type KeyValue = {
  [key: string]: string | number;
};
