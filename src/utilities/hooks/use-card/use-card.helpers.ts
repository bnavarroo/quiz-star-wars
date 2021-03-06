/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';
import { IAnswer } from '@utilities/hooks/use-game/use-game.types';

export const handleSetReply = (
  setSeply: Dispatch<SetStateAction<string>>,
  setRegisterReply: Dispatch<SetStateAction<boolean>>
) =>
  (replySent: string): void => {
    setSeply(replySent);
    setRegisterReply(false);
  };

export const actionButtonClick =
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

export const helpButtonClick = (
  setUsedHelp: Dispatch<SetStateAction<boolean>>,
  setOpenModal: Dispatch<SetStateAction<boolean>>
) =>
  (): void => {
    setUsedHelp(true);
    setOpenModal(true);
  };

export const hideModal = (
  setOpenModal: Dispatch<SetStateAction<boolean>>
) =>
  (): void => {
    setOpenModal(false);
  };


export const onReplyIsChanged = (
  reply: string,
  callback: (arg: IAnswer) => void,
  name: string,
  usedHelp: boolean,
) =>
  (): void => {
    if (reply.length > 0) {
      callback({
        name,
        answer: reply,
        usedHelp,
      });
    }
  };
