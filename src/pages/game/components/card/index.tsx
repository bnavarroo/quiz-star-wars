import { memo, useState, useEffect } from 'react';
import CardInput from '@pages/game/components/card-input';
import ModalHelp from '@pages/game/components/modal-help';
import { IProps } from './card.types';
import {
  Container,
  Image,
  ButtonsWrapper,
  ActionButton,
  HelpButton,
} from './card.styles';

const Card: React.FC<IProps> = ({ character, callback, endOfGame }) => {
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

  return (
    <Container>
      <Image src={image} alt="?" />
      <CardInput
        registerReply={registerReply}
        setReply={(replySent) => {
          setSeply(replySent);
          setRegisterReply(false);
        }}
        disabled={isDisabledInput}
      />
      <ButtonsWrapper>
        <ActionButton
          onClick={() => {
            if (!reply) {
              setRegisterReply(true);
            } else {
              setSeply('');
            }
          }}
        >
          {actionButtonText}
        </ActionButton>
        {!reply && (
          <HelpButton
            type="button"
            onClick={() => {
              setUsedHelp(true);
              setOpenModal(true);
            }}
          >
            Ajuda
          </HelpButton>
        )}
        <ModalHelp
          character={character}
          isVisible={openModal}
          onHide={() => setOpenModal(false)}
        />
      </ButtonsWrapper>
    </Container>
  );
};

export default memo(Card);
