/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';

export const loadMore =
  (page: number, setPage: Dispatch<SetStateAction<number>>, setLoading: Dispatch<SetStateAction<boolean>>) => (): void => {
    setPage(page + 1);
    setLoading(true);
  };

export default {};
