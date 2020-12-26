import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import { makeClass } from 'utils/Helpers';
import { CSSTransition } from 'react-transition-group';

export type TooltipProps = {
  /**
   * Description above title
   */
  title?: string;
  /**
   * Custom Position coords
   */
  atPosition?: [number, number];
  /**
   *
   */
  show?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `Tooltip` component example.
 * @param props
 * @constructor
 */
const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  const { atPosition, className, children, show, ...rest } = props;
  const classes = makeClass(['d-Tooltip', className]);
  const ref = useRef<any>();
  const [hasHover, setHasHover] = useState<boolean>();

  useLayoutEffect(() => {
    adjustPosition(atPosition, ref.current);
  }, [ref.current, atPosition]);

  return (
    <CSSTransition
      unmountOnExit
      in={show || hasHover}
      timeout={{ enter: 0, exit: 500 }}
      classNames='tooltip'
    >
      <div
        className={classes}
        {...rest}
        ref={ref}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
      >
        {children}
      </div>
    </CSSTransition>
  );
};

function adjustPosition(atPosition?: [number, number], element?: HTMLElement) {
  if (!atPosition || !element) return;
  let tooltip = element;
  let posX = atPosition[0];
  let posY = atPosition[1];
  let sp = 16;

  let width = tooltip.clientWidth;
  let overflowLeft = posX - width / 2 - sp < 0;
  let overflowRight = posX + width / 2 + sp > document.body.clientWidth;
  if (overflowLeft) {
    tooltip.style.left = sp + 'px';
  } else if (overflowRight) {
    tooltip.style.left = document.body.clientWidth - sp - width / 2 + 'px';
  } else {
    tooltip.style.left = posX - width / 2 + 'px';
  }

  let height = tooltip.clientHeight;
  let overflowTop = posY - height / 2 - sp < 0;
  let overflowBottom = posY + height / 2 + sp > document.body.clientHeight;
  if (overflowTop) {
    tooltip.style.top = sp + 'px';
  } else if (overflowBottom) {
    tooltip.style.top = document.body.clientHeight - sp - height + 'px';
  } else {
    tooltip.style.top = posY - height / 2 + 'px';
  }
}

export default Tooltip;
