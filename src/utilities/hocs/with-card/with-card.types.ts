import { Dispatch, SetStateAction } from 'react';
import { IProps as IComponentProps } from '@pages/game/components/card/card.types';

export interface IProps extends IComponentProps {
  image?: string;
  isDisabledInput?: boolean;
  actionButtonText?: string;
  registerReply?: boolean;
  setRegisterReply?: Dispatch<SetStateAction<boolean>>;
  reply?: string;
  setSeply?: Dispatch<SetStateAction<string>>;
  setUsedHelp?: Dispatch<SetStateAction<boolean>>;
  openModal?: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
}
