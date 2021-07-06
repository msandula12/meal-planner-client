import { ReactNode } from 'react';

import './Tooltip.scss';

type Props = {
  content: ReactNode;
  title: string;
};

function Tooltip({ content, title }: Props) {
  return (
    <span className="tooltip fade" data-title={title}>
      {content}
    </span>
  );
}

export default Tooltip;
