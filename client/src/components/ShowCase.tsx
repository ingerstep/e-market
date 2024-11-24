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
  imgHeight: number;
  imgWidth: number;
}

export const ShowCase: FC<ShowCaseProps> = ({
  type,
  src,
  linkSrc,
  imgHeight,
  imgWidth,
  divStyle,
}) => {
  const content = showCaseText[type];

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className={clsx('flex items-center text-black', `${divStyle}`)}>
      <Image
        width={imgWidth}
        height={imgHeight}
        src={src}
        alt={content.header}
      />
      <div className="flex flex-col ml-2">
        <h2 className="text-5xl mb-1">{content.header}</h2>
        <span className="opacity-40">{content.descr}</span>
        {linkSrc && (
          <Link href={linkSrc}>
            <Button variant="primary" className="text-black border-black mt-2">
              Shop Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
