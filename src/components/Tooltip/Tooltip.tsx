import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { getDocumentOffsetPosition } from 'utils/helpers';

import './Tooltip.scss';

type Props = {
  children: ReactElement;
  content: string;
  wrapped?: boolean;
};

function Tooltip({ children, content, wrapped }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const [tooltipPosition, setTooltipPosition] = useState({
    left: '0px',
    top: '0px',
  });

  useEffect(() => {
    const node = ref.current;
    document.addEventListener('scroll', hideTooltip);
    if (node) {
      const { left, top } = getDocumentOffsetPosition(node);
      setTooltipPosition({
        left: `${left}px`,
        top: `calc(2.5rem + ${top}px)`,
      });
      node.addEventListener('mouseover', showTooltip);
      node.addEventListener('mouseout', hideTooltip);
    }

    return () => {
      document.removeEventListener('scroll', hideTooltip);
      if (node) {
        node.removeEventListener('mouseover', showTooltip);
        node.removeEventListener('mouseout', hideTooltip);
      }
    };
  }, []);

  const showTooltip = () => {
    setIsVisible(true);
    if (ref.current) {
      const { left, top } = getDocumentOffsetPosition(ref.current);
      setTooltipPosition({
        left: `${left}px`,
        top: `calc(2.5rem + ${top}px)`,
      });
    }
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const cls = classNames('tooltip', {
    fade: isVisible,
  });

  return (
    <>
      {/* Get a reference to the trigger element */}
      {wrapped
        ? cloneElement(
            // SVG elements need a wrapper for the ref to work correctly
            <span style={{ display: 'inline-flex' }}>{children}</span>,
            {
              ref: (element: HTMLElement) => (ref.current = element),
            }
          )
        : cloneElement(children, {
            ref: (element: HTMLElement) => (ref.current = element),
          })}
      {/* The actual tooltip element */}
      <span className={cls} style={tooltipPosition}>
        {content}
      </span>
    </>
  );
}

export default Tooltip;
