import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import classNames from 'classnames';

import './Tooltip.scss';

type Props = {
  children: ReactElement;
  content: string;
  wrapped?: boolean;
};

function Tooltip({ children, content, wrapped }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const childrenRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const { attributes, forceUpdate, styles } = usePopper(
    childrenRef.current,
    tooltipRef.current,
    {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      placement: 'bottom',
    }
  );

  useEffect(() => {
    const node = childrenRef.current;

    const showTooltip = () => {
      if (forceUpdate) {
        forceUpdate();
      }
      setIsVisible(true);
    };

    const hideTooltip = () => {
      setIsVisible(false);
      if (forceUpdate) {
        forceUpdate();
      }
    };

    if (node) {
      document.addEventListener('scroll', hideTooltip);
      node.addEventListener('mouseover', showTooltip);
      node.addEventListener('mouseout', hideTooltip);
    }

    return () => {
      if (node) {
        document.removeEventListener('scroll', hideTooltip);
        node.removeEventListener('mouseover', showTooltip);
        node.removeEventListener('mouseout', hideTooltip);
      }
    };
  }, [forceUpdate]);

  const tooltipCls = classNames('tooltip', {
    fade: isVisible,
    hidden: !isVisible,
  });

  return (
    <>
      {/* Get a reference to the trigger element */}
      {wrapped
        ? cloneElement(
            // SVG elements need a wrapper for the ref to work correctly
            <span style={{ display: 'inline-flex' }}>{children}</span>,
            {
              ref: (element: HTMLElement) => (childrenRef.current = element),
            }
          )
        : cloneElement(children, {
            ref: (element: HTMLElement) => (childrenRef.current = element),
          })}
      {/* The actual tooltip element */}
      <div
        ref={tooltipRef}
        className={tooltipCls}
        role="tooltip"
        style={styles.popper}
        {...attributes.popper}
      >
        {content}
      </div>
    </>
  );
}

export default Tooltip;
