import { ButtonProps } from '../Button/Button';

export type LinkTypeLocal = {
  /**
   * Determines the title if provided
   */
  title?: string;
  /**
   * Determines the href of link
   */
  to: string;
  /**
   * Determines the internal/external of link
   */
  newTab?: boolean;
  /**
   * useful if you want to use React Router's or React-static `Link` library.
   * e.g.
   * ```
   * import { Link as RouterLink} from "react-router-dom";
   * ...
   * <Link provider={<RouterLink/>} to='/about' />
   * ```
   */
  provider?: JSX.Element;
} & ButtonProps;
