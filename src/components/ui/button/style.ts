import React from 'react';
import { ButtonProps } from '../../../types';

const initialStyle =
  'pro-ui-button border px-[15px] py-[4px] rounded-[6px] transition-all duration-300 ring-1 ring-opacity-10 flex items-center gap-[10px] disabled:pointer-events-none disabled:opacity-[0.5] active:scale-[0.9] shadow-md ';

export function styleConfig(
  type: ButtonProps['typeEl']
): React.ComponentProps<'button'>['className'] {
  switch (type) {
    case 'default':
      return initialStyle + 'border-primary text-primary hover:border-main hover:text-main disabled:border-main disabled:text-main  text-[14px] ring-primary';
    case 'dashed':
      return initialStyle + 'border-dashed border-primary text-primary hover:border-main hover:text-main disabled:border-main disabled:text-main  text-[14px]   ring-primary';
    case 'primary':
      return initialStyle + 'border-main bg-main text-background hover:opacity-[0.8] text-[14px]   ring-main';
    default:
      return;
  }
}
