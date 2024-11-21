import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from './ui/Button';
import { showCaseText } from './data/ShowCaseText';

interface ShowCaseProps {
  type: string;
  src: string;
  linkSrc?: string;
  imgHeight: number;
  imgWidth: number;
}

export const ShowCase: FC<ShowCaseProps> = ({
  type,
  src,
  linkSrc,
  imgHeight,
  imgWidth,
}) => {
  const content = showCaseText[type];

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="flex">
      <Image
        width={imgWidth}
        height={imgHeight}
        src={src}
        alt={content.header}
      />
      <div className="flex flex-col">
        <h2>{content.header}</h2>
        <span>{content.descr}</span>
        {linkSrc && (
          <Link href={linkSrc}>
            <Button variant="primary" className="text-black border-black">
              Shop Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
