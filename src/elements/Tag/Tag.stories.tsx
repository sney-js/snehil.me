import * as React from 'react';
import Tag from './Tag';
import { StoryDivideContainer } from '../../stories/components/Dummies';

export default {
  title: 'elements/Tag',
  component: Tag
};

export const basic = (): any => {
  let tags = ['test', 'firebase', 'tag', 'longer tag'];
  return (
    <div>
      <div>
        {tags.map((t, i) => (
          <Tag appearance='raised' title={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export const block = (): any => {
  let tags = ['test', 'firebase', 'tag', 'longer tag'];
  return (
    <div>
      <div>
        {tags.map((t, i) => (
          <Tag appearance='block' title={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export const none = (): any => {
  let tags = ['test', 'firebase', 'tag', 'longer tag'];
  return (
    <div>
      <div>
        {tags.map((t, i) => (
          <Tag title={t} key={i} />
        ))}
      </div>
    </div>
  );
};
