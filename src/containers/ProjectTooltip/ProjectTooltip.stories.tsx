import * as React from 'react';
import ProjectTooltip, { ProjectTooltipProps } from './ProjectTooltip';
import { DummyImage } from '../../stories/components/Dummies';

export default {
  title: 'components/ProjectTooltip',
  component: ProjectTooltip
};

export const basic = (args): any => {
  return (
    <div style={{ width: '400px' }}>
      <ProjectTooltip {...args} />
    </div>
  );
};

basic.args = {
  description: (
    <p>
      Ambitioni dedisse scripsisse iudicaretur. Quisque ut dolor gravida,
      placerat libero vel, euismod.
    </p>
  ),
  images: [<DummyImage size={'xs'} asImage />],
  links: [
    {
      to: '/',
      title: 'rewards.co.uk'
    },
    {
      to: '/',
      title: 'custom.rewards.co.uk'
    }
  ],
  metrics: {
    influence: 0.4,
    involvement: 0.8
  }
} as ProjectTooltipProps;
