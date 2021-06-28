import { BiLoaderCircle } from 'react-icons/bi';
import classNames from 'classnames';

import './Loading.scss';

type Props = {
  fullscreen?: boolean;
};

function Loading({ fullscreen }: Props) {
  const cls = classNames('loading', {
    fullscreen,
  });

  return (
    <div className={cls}>
      <div>
        <BiLoaderCircle />
      </div>
    </div>
  );
}

export default Loading;
