import { FC, ReactNode, useEffect, useRef, useState } from 'react';

export type TooltipType = {
  children: ReactNode | string;
  tooltip: ReactNode | string;
};

const Tooltip: FC<TooltipType> = (props) => {
  const { children, tooltip } = props;
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState('bottom-full');

  useEffect(() => {
    function enter() {
      const parentRect = parentRef.current?.getBoundingClientRect() as DOMRect;
      const positionTop =
        parentRect?.top + parentRect?.height / 2 > window.innerHeight / 4;

      setTooltipPosition(positionTop ? 'bottom-full' : 'top-full');
    }

    if (parentRef.current) {
      parentRef.current.addEventListener('mouseenter', enter);
    }
  }, []);

  return (
    <div ref={parentRef} className="relative group">
      <div
        className={`absolute bg-primary text-main px-2 py-1 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out transform -translate-x-1/2 left-1/2 ${tooltipPosition} mb-[10px]`}
      >
        <div className="relative">
          <div
            className={`absolute w-4 h-4 bg-primary rotate-45 -mt-2 left-1/2 transform -translate-x-1/2 ${tooltipPosition === 'bottom-full' ? 'top-full' : 'bottom-full'}`}
          ></div>
          <div className="p-2">{tooltip}</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;
