import * as React from 'react';

const SvgIcLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18 10.5a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3v-6a3 3 0 013-3v-3a6 6 0 1112 0v3zm-6-7a4 4 0 014 4v3H8v-3a4 4 0 014-4zm6 9H6a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1z'
      fill='currentColor'
    />
  </svg>
);

export default SvgIcLock;
