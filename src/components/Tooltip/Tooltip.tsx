import { ReactNode } from 'react';

import './Tooltip.scss';

type Props = {
  content: string;
  trigger: ReactNode;
};

function Tooltip({ content, trigger }: Props) {
  return (
    <span className="tooltip fade" data-title={content}>
      {trigger}
    </span>
  );
}

export default Tooltip;
