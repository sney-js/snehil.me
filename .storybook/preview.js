import { withTests } from '@storybook/addon-jest';
import { addDecorator, addParameters } from '@storybook/react';
import '../src/styles/main.scss';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  mobileLarge: {
    name: 'Large Mobile',
    styles: {
      width: '414px',
      height: '896px'
    }
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  TabletLarge: {
    name: 'Large Tablet',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1200px',
      height: '720px'
    }
  },
  Widescreen: {
    name: 'Widescreen',
    styles: {
      width: '1440px',
      height: '900px'
    }
  },
  HD: {
    name: 'HD',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
};

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    // showRoots: true
  }
});

/**
 * Order described here is used to order the storybook.
 * @type {{level1: [string, string, string], level2: [string]}}
 */
const STORY_ORDER = {
  level1: ['intro', 'elements', 'components'],
  level2: [
    'getting started',
    'colors',
    'spacing',
    'theming',
    'typography',
    'contributing'
  ]
};

addParameters({
  options: {
    storySort: (a, b) => {
      const kindH = (x, level = 0) =>
        x[1].kind.split('/')[level] &&
        x[1].kind.split('/')[level].toLowerCase();

      const compareOrder = (a, b, array) => {
        let indexA = array.indexOf(a);
        let indexB = array.indexOf(b);
        indexA = indexA === -1 ? 10000 : indexA;
        indexB = indexB === -1 ? 10000 : indexB;

        if (indexA < indexB) {
          return -1;
        } else if (indexA > indexB) {
          return 1;
        }
        return 0;
      };

      const chapterA = kindH(a);
      const chapterB = kindH(b);

      if (chapterA === chapterB) {
        const level1A = kindH(a, 1) || a[1].name.toLowerCase();
        const level1B = kindH(b, 1) || b[1].name.toLowerCase();
        return compareOrder(level1A, level1B, STORY_ORDER.level2);
      }

      let chapterCompare = compareOrder(chapterA, chapterB, STORY_ORDER.level1);
      if (chapterCompare === 0) {
        return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      }
      return chapterCompare;
    }
  }
});
