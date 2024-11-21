import clsx from 'clsx';

export const ComputersSvg = ({
  fill,
  width,
}: {
  width?: string;
  fill?: string;
}) => (
  <svg
    width={clsx(width ? width : '24px')}
    height={clsx(width ? width : '24px')}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M7 20H17M9 16V20M15 16V20M3.42857 13.7143H20.5714M4 4H20C20.5523 4 21 4.44772 21 5V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4Z"
        stroke={clsx(fill ? fill : 'white')}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
