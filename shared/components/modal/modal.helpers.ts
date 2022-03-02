/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';

const closeModal =
  (setOpen: Dispatch<SetStateAction<boolean>>, onHide: () => void) =>
    (): void => {
      setOpen(false);
      if (typeof onHide === 'function') {
        onHide();
      }
    };
export default closeModal;
