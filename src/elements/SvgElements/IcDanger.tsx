import * as React from 'react';

const SvgIcDanger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path
      d='M12 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zM12 16a1 1 0 100 2 1 1 0 000-2z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1016 0 8 8 0 00-16 0z'
      fill='currentColor'
    />
  </svg>
);

export default SvgIcDanger;
