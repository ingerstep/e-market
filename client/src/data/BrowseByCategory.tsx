import { CamerasSvg } from '@/components/icons/Cameras';
import { ComputersSvg } from '@/components/icons/Computers';
import { GamingSvg } from '@/components/icons/Gaming';
import { HeadphonesSvg } from '@/components/icons/Headphones';
import { PhonesSvg } from '@/components/icons/Phones';
import { SmartWatchesSvg } from '@/components/icons/SmartWatches';

export const browseByCategory = [
  {
    href: '/catalog/phones',
    text: 'Phones',
    svg: <PhonesSvg width="48px" fill="black" />,
  },
  {
    href: '/catalog/smart-watches',
    text: 'Smart Watches',
    svg: <SmartWatchesSvg width="48px" fill="black" />,
  },
  {
    href: '/catalog/cameras',
    text: 'Cameras',
    svg: <CamerasSvg width="48px" fill="black" />,
  },
  {
    href: '/catalog/headphones',
    text: 'Headphones',
    svg: <HeadphonesSvg width="48px" fill="black" />,
  },
  {
    href: '/catalog/computers',
    text: 'Computers',
    svg: <ComputersSvg width="48px" fill="black" />,
  },
  {
    href: '/catalog/gaming',
    text: 'Gaming',
    svg: <GamingSvg width="48px" fill="black" />,
  },
];
