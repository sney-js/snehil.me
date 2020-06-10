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
