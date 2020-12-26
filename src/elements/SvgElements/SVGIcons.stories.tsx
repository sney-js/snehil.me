import * as React from 'react';
import { StoryDivideContainer } from 'stories/components/Dummies';
import * as iconsList from './index';
import Grid from '../../components/Grid';

export default {
  title: 'Elements/Icons'
};

export const SVG = () => {
  const iconsListArray: Array<{ name: string; value: any }> = [];
  for (const key in iconsList) {
    iconsListArray.push({ name: key, value: iconsList[key] });
  }
  return (
    <Grid template={'repeat(auto-fill, 96px'}>
      {iconsListArray.map((e, i) => (
        <div
          key={i}
          style={{
            textAlign: 'center',
            border: '1px dashed lightgrey'
          }}
        >
          {e.value()}
          <code>{`<${e.name} />`}</code>
        </div>
      ))}
    </Grid>
  );
};
