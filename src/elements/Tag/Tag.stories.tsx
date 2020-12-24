import * as React from 'react';
import Tag from './Tag';

export default {
  title: 'elements/Tag',
  component: Tag
};

export const basic = (args): any => {
  let tags = ['test', 'firebase', 'tag', 'longer tag'];
  return (
    <div>
      <div>
        {tags.map((t, i) => (
          <Tag title={t} {...args} key={i} />
        ))}
      </div>
    </div>
  );
};
