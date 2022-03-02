import { Dispatch, SetStateAction } from 'react';

const showPageLoader =
  (setLoading: Dispatch<SetStateAction<boolean>>) => (): void => {
    setLoading(true);
  };

export default showPageLoader;
