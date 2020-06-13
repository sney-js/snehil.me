import { ReactNode } from 'react';
import { LinkType } from './Link';

export class LinkData {
  path: string;
  title?: string;
  newTab?: boolean;
  isExternal?: boolean;
  associatedIcon?: ReactNode;

  constructor(data: any) {
    this.path = data.path;
    Object.assign(this, data);
  }
}
