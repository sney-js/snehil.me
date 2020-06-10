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
    className
  } = props;
  const classes = makeClass(['d-footer', className]);

  return (
    <div className={classes}>
      {/* Footer First Block with two column-.
          Newsletter,
          SocialLinks with litle
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
          </Grid>
        </Container>
      </div>
    </div>
  );
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default Footer;
