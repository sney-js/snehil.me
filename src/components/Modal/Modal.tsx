import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Button from 'elements/Button/';
import { IcClose } from 'elements/SvgElements';
import Grid from 'components/Grid';
import { LinkType } from '../../models';
import Link from '../../elements/Link';

export type ModalProps = {
  /**
   * The main title that appears on the top
   */
  title?: string;
  /**
   * Determines the state of modal
   * e.g.
   * `true | false`
   */
  open?: boolean;
  /**
   * Determines the content of modal
   * e.g.
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Should be provided to have main CTA. `to` can be left undefined for a button onClick
   */
  primaryLink?: LinkType;
  /**
   * Should be provided to have secondary CTA. `to` can be left undefined for a button onClick
   */
  secondaryLink?: LinkType;
  /**
   * Event when closeButton is clicked
   */
  onClickClose?: () => void | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Use `Modal` to highlight key info with a predefined status.
 */
const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    open,
    children,
    className,
    onClickClose,
    title,
    primaryLink,
    secondaryLink
  } = props;
  const classes = makeClass(['d-modal', open && 'active', className]);

  return (
    <div className={classes}>
      <div className='d-modal__dialog'>
        <Button
          className='d-modal__close'
          onClick={() => onClickClose && onClickClose()}
          aria-label='Menu'
          appearance='secondary'
          icon={<IcClose />}
        />
        <div className='d-modal__body'>
          <h4 className='d-modal__title'>{title}</h4>
          <div className='d-modal__content'>{children}</div>
          <Grid
            className='d-modal__buttonGroup'
            template='auto auto'
            templateMobile='1fr'
          >
            {secondaryLink && (
              <Link
                {...secondaryLink}
                appearance={secondaryLink.appearance || 'secondary'}
              />
            )}
            {primaryLink && (
              <Link
                {...primaryLink}
                appearance={primaryLink.appearance || 'primary'}
              />
            )}
          </Grid>
        </div>
      </div>
      <div
        className='d-modal__underlay'
        onClick={() => onClickClose && onClickClose()}
      />
    </div>
  );
};

Modal.displayName = 'Modal';
Modal.defaultProps = {
  open: false
};

export default Modal;
