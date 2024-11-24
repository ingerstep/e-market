import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import clsx from 'clsx';

import { Button } from './ui/Button';
import { showCaseText } from './data/ShowCaseText';

interface ShowCaseProps {
  type: keyof typeof showCaseText;
  src: string;
  linkSrc?: string;
  divStyle?: string;
  imgStyle?: string;
  btnStyle?: string;
}

export const ShowCase: FC<ShowCaseProps> = ({
  type,
  src,
  linkSrc,
  btnStyle,
  divStyle,
  imgStyle,
}) => {
  const content = showCaseText[type];

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className={clsx('flex items-center text-black', divStyle)}>
      <Image
        width={234}
        height={245}
        className={imgStyle}
        src={src}
        alt={content.header}
      />
      <div className="flex flex-col ml-2">
        <h2 className="text-5xl mb-1">{content.header}</h2>
        <span className="opacity-40">{content.descr}</span>
        {linkSrc && (
          <Link href={linkSrc}>
            <Button
              variant="primary"
              className={clsx('text-black border-black mt-2', btnStyle)}
            >
              Shop Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
