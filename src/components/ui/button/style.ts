import React from 'react';
import { ButtonType } from '../../../types';

export function styleConfig(
  type: ButtonType['typeEl']
): React.ComponentProps<'button'>['className'] {
  switch (type) {
    case 'default':
      return 'border border-primary text-primary hover:border-main hover:text-main px-[15px] py-[4px] text-[14px] rounded-[6px] transition-all duration-300 shadow-md ring-1 ring-primary ring-opacity-10 active:scale-[0.9] flex items-center gap-[10px] disabled:pointer-events-none';
    case 'primary':
      return 'border border-main bg-main text-background hover:opacity-[0.8]  px-[15px] py-[4px] text-[14px] rounded-[6px] transition-all duration-300 shadow-md ring-1 ring-main ring-opacity-10 active:scale-[0.9] flex items-center gap-[10px] disabled:pointer-events-none';
    default:
      return;
  }
}
