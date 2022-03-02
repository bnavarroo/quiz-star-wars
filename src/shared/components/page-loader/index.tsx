import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IProps } from './page-loader.types';
import Loader from './page-loader.styles';

const PageLoader: React.FunctionComponent<IProps> = ({ isVisible }) => {
  const [show, setShow] = useState<boolean>(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  const loaderComponent = <Loader />;

  return show ? ReactDOM.createPortal(loaderComponent, document.body) : null;
};

export default PageLoader;
