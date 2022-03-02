import { useState, useEffect } from 'react';
import { IProps } from './with-card.types';

// eslint-disable-next-line prettier/prettier
const withCard = (Component: React.ComponentType<IProps>): React.FC<IProps> =>
  (props) => {
    const { character, endOfGame, callback } = props;
    const [registerReply, setRegisterReply] = useState<boolean>(false);
    const [reply, setSeply] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [usedHelp, setUsedHelp] = useState<boolean>(false);

    useEffect(() => {
      setOpenModal(false);
    }, [endOfGame]);

    useEffect(() => {
      if (reply.length > 0) {
        callback({
          name: character.name,
          answer: reply,
          usedHelp,
        });
      }
    }, [reply]);

    const { image } = character;

    const isDisabledInput =
      (!registerReply && reply.length > 0) ||
      (registerReply && reply.length === 0);

    const actionButtonText = !reply ? 'enviar' : 'editar resposta';

    const hocProps = {
      image,
      isDisabledInput,
      actionButtonText,
      registerReply,
      setRegisterReply,
      reply,
      setSeply,
      setUsedHelp,
      openModal,
      setOpenModal,
    };

    return <Component {...props} {...hocProps} />;
  };

export default withCard;
