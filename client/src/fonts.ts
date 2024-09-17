import localFont from 'next/font/local';

export const boldRoboto = localFont({
  src: '../public/fonts/Roboto-Bold.ttf',
  variable: '--font-roboto-bold',
  weight: '700',
});

export const lightRoboto = localFont({
  src: '../public/fonts/Roboto-Light.ttf',
  variable: '--font-roboto-light',
  weight: '300',
});

export const mediumRoboto = localFont({
  src: '../public/fonts/Roboto-Medium.ttf',
  variable: '--font-roboto-medium',
  weight: '500',
});

export const regularRoboto = localFont({
  src: '../public/fonts/Roboto-Regular.ttf',
  variable: '--font-roboto-regular',
  weight: '400',
});
