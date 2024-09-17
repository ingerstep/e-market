import { CamerasSvg } from '@/components/icons/Cameras';
import { ComputersSvg } from '@/components/icons/Computers';
import { GamingSvg } from '@/components/icons/Gaming';
import { HeadphonesSvg } from '@/components/icons/Headphones';
import { PhonesSvg } from '@/components/icons/Phones';
import { SmartWatchesSvg } from '@/components/icons/SmartWatches';

export const headerSubnavLinks = [
  { href: '/catalog/phones', text: 'Phones', svg: <PhonesSvg /> },
  { href: '/catalog/computers', text: 'Computers', svg: <ComputersSvg /> },
  {
    href: '/catalog/smart-watches',
    text: 'Smart Watches',
    svg: <SmartWatchesSvg />,
  },
  { href: '/catalog/cameras', text: 'Cameras', svg: <CamerasSvg /> },
  { href: '/catalog/headphones', text: 'Headphones', svg: <HeadphonesSvg /> },
  { href: '/catalog/gaming', text: 'Gaming', svg: <GamingSvg /> },
];
