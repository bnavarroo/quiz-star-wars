import { useState, useEffect } from 'react';
import { ICharacter } from '@core/api/character/character.types';
import { IAnswer } from '@utilities/hooks/use-game/use-game.types';
import { IProps } from './use-card.types';
import {
  handleSetReply,
  actionButtonClick,
  helpButtonClick,
  hideModal,
  onReplyIsChanged,
} from './use-card.helpers';

const useCard = (
  character: ICharacter,
  callback: (arg: IAnswer) => void,
  endOfGame: boolean
): IProps => {
  const [registerReply, setRegisterReply] = useState<boolean>(false);
  const [reply, setSeply] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [usedHelp, setUsedHelp] = useState<boolean>(false);

  useEffect(hideModal(setOpenModal), [endOfGame]);

  useEffect(onReplyIsChanged(reply, callback, character?.name, usedHelp), [
    reply,
  ]);

  const { image } = character;

  const isDisabledInput =
    (!registerReply && reply.length > 0) ||
    (registerReply && reply.length === 0);

  const actionButtonText = !reply ? 'enviar' : 'editar resposta';

  return {
    image,
    isDisabledInput,
    actionButtonText,
    registerReply,
    reply,
    openModal,
    onSetReply: handleSetReply(setSeply, setRegisterReply),
    handleActionButtonClick: actionButtonClick(
      reply,
      setRegisterReply,
      setSeply
    ),
    handleHelpButtonClick: helpButtonClick(setUsedHelp, setOpenModal),
    onHideModal: hideModal(setOpenModal),
  };
};

export default useCard;
