import { cloneElement, ReactElement } from 'react';

import './Tooltip.scss';

type Props = {
  children: ReactElement;
  content: string;
};

function Tooltip({ children, content }: Props) {
  return cloneElement(children, {
    'data-title': content,
    className: `${children.props.className} tooltip fade`,
  });
}

export default Tooltip;
