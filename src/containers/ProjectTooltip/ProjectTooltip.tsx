import React, { FC, ReactChild } from 'react';
import { makeClass, setCSSVar } from 'utils/Helpers';
import { LinkType } from '../../models';
import Grid from '../../components/Grid';
import Link from '../../elements/Link';
import { IcArrowTopright } from '../../elements/SvgElements';

export type MetricsType = { involvement?: number; influence?: number };
export type ProjectTooltipProps = {
  /**
   * Description above title
   */
  title?: string;
  description?: JSX.Element;
  links?: LinkType[];
  images?: ReactChild[];
  metrics?: MetricsType;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `ProjectTooltip` component example.
 * @param props
 * @constructor
 */
const ProjectTooltip: FC<ProjectTooltipProps> = (
  props: ProjectTooltipProps
) => {
  const { className, metrics, description, links, images } = props;
  const classes = makeClass(['d-ProjectTooltip', className]);
  return (
    <div className={classes}>
      {metrics && (
        <div className='pad-y'>
          {Object.keys(metrics).map((m, i) => (
            <Grid
              template='1fr 2fr'
              className='d-ProjectTooltip__metric'
              key={i}
            >
              <span>{m.toUpperCase()}</span>
              <div
                className='d-ProjectTooltip__metric-progress'
                style={setCSSVar({ '--progress': `${metrics[m] * 100}%` })}
              />
            </Grid>
          ))}
        </div>
      )}
      {images && <div className=''>{images}</div>}
      {description && (
        <div className='d-ProjectTooltip__text pad-x'>{description}</div>
      )}
      {links?.map((link, i) => (
        <div className='d-ProjectTooltip__links' key={i}>
          <hr />
          <Link {...link}>
            <Grid
              template='1fr 36px'
              gridStyles={{ alignItems: 'center' }}
              className='pad'
            >
              <span>{link.title}</span>
              <IcArrowTopright />
            </Grid>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectTooltip;
