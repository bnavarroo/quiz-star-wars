/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';

export const handleSetReply = (
  setSeply: Dispatch<SetStateAction<string>>,
  setRegisterReply: Dispatch<SetStateAction<boolean>>
) =>
  (replySent: string): void => {
    setSeply(replySent);
    setRegisterReply(false);
  };

export const handleActionButtonClick =
  (
    reply: string,
    setRegisterReply: Dispatch<SetStateAction<boolean>>,
    setSeply: Dispatch<SetStateAction<string>>
  ) =>
    (): void => {
      if (!reply) {
        setRegisterReply(true);
      } else {
        setSeply('');
      }
    };

export const handleHelpButtonClick = (
  setUsedHelp: Dispatch<SetStateAction<boolean>>,
  setOpenModal: Dispatch<SetStateAction<boolean>>
) =>
  (): void => {
    setUsedHelp(true);
    setOpenModal(true);
  };

export const onHideModal = (
  setOpenModal: Dispatch<SetStateAction<boolean>>
) =>
  (): void => {
    setOpenModal(false);
  };
