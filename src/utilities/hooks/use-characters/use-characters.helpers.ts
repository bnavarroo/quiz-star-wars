import { Dispatch, SetStateAction } from 'react';

export const pageChange =
  (page: number, setPage: Dispatch<SetStateAction<number>>) => (): void => {
    setPage(page + 1);
  };

export default {};
