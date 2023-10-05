import { FC, ReactNode, useEffect, useRef } from 'react';

export type TooltipType = {
  children: ReactNode | string;
  tooltip: ReactNode | string;
};

const Tooltip: FC<TooltipType> = (props) => {
  const { children, tooltip } = props;
  const parentRef = useRef<HTMLDivElement | null>(null);

  function enter() {
    console.log('Enter');
  }

  function leave() {
    console.log('Leave');
  }

  useEffect(() => {
    if (parentRef?.current) {
      parentRef?.current?.addEventListener('mouseenter', enter);
      parentRef?.current?.addEventListener('mouseleave', leave);
    }

    return () => {
      parentRef?.current?.removeEventListener('mouseenter', enter);
      parentRef?.current?.removeEventListener('mouseleave', leave);
    };
  }, [parentRef]);

  return (
    <div ref={parentRef}>
      <div>{tooltip}</div>
      <div>{children}</div>
    </div>
  );
};
export default Tooltip;
