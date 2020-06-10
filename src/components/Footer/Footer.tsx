import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Link from 'elements/Link/';
import Grid from 'components/Grid';
import Container from 'components/Container';
import SocialLink from 'elements/SocialLink';
import { LinkType } from 'models';

type FooterProps = {
  siteLinks?: LinkType[];
  /**
   * Determines the name of the social title
   */
  socialTitle?: string;
  socialLinks?: LinkType[];
  /**
   * Display the text of the copyright
   * e.g.
   * Determines copyright as string 'BP Oil Ltd. Copyright@ 2019'
   */
  copyright?: string;
  /**
   * Displays footnote on the right with logo
   * e.g.
   * Determines footnote as string 'Everyday, Brighter'
   */
  footnote?: string;
  /**
   * Displays logo on the right.
   * e.g.
   * Pass <IcBrandlogo /> as icon
   */
  brandIcon?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Use `Footer` to highlight key info with a predefined status.
 */
const Footer: FC<FooterProps> = (props: FooterProps) => {
  const {
    socialLinks,
    socialTitle,
    siteLinks,
    copyright,
    footnote,
    brandIcon,
    className
  } = props;
  const classes = makeClass(['d-footer', className]);

  return (
    <div className={classes}>
      {/* Footer First Block with two column-.
          Newsletter,
          SocialLinks with litle
      */}
      {socialLinks && (
        <div className='d-footer__first-block'>
          <Container layout='maxWidth' pad='Horizontal'>
            <Grid
              template='3fr 1fr'
              templateTablet='2fr 1fr'
              templateMobile='1fr'
            >
              <div className='d-footer__social'>
                <h5 className='d-footer__social-title'>{socialTitle}</h5>
                <div className='d-footer__social-links'>
                  {socialLinks?.map((item, i) => (
                    <SocialLink
                      key={item.to + i}
                      platform={item.title || ''}
                      url={item.to}
                      aria-label={item.title}
                    />
                  ))}
                </div>
              </div>
            </Grid>
          </Container>
        </div>
      )}
      {/* Footer Middle Block with two columns-.
            SiteLinks,
            Applinks with title
        */}
      {siteLinks && (
        <div className='d-footer__mid-block'>
          <Container layout='maxWidth' pad='Horizontal'>
            <Grid
              template='3fr 1fr'
              templateTablet='2fr 1fr'
              templateMobile='1fr'
            >
              <ul className='d-footer__sitemap'>
                {siteLinks &&
                  siteLinks.map((item) => (
                    <li key={item.title} className='d-footer__sitemap-item'>
                      <Link to={item.to} aria-label={item.title}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Grid>
          </Container>
        </div>
      )}
      {/* Footer Last Block with two columns-.
            Copyright,
            Brand title with logo
        */}
      <div className='d-footer__last-block'>
        <Container layout='maxWidth' pad='Horizontal'>
          <Grid
            template='3fr 1fr'
            templateTablet='2fr 1fr'
            templateMobile='2fr 1fr'
          >
            {copyright && (
              <span className='d-footer__copyright'>{copyright}</span>
            )}
            {(footnote || brandIcon) && (
              <div className='d-footer__brand'>
                <span className='d-footer__brand-title'>{footnote}</span>
                <span className='d-footer__brand-logo'>{brandIcon}</span>
              </div>
            )}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default Footer;
