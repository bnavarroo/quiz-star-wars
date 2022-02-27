import { memo, useState, useEffect } from 'react';
import CardInput from '@pages/game/components/card-input';
import { IProps } from './card.types';
import { Container, Image } from './card.styles';

const Card: React.FC<IProps> = ({ character, callback }) => {
  const [registerReply, setRegisterReply] = useState<boolean>(false);
  const [reply, setSeply] = useState<string>('');
  const [usedHelp, setUsedHelp] = useState<boolean>(false);

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
      <button
        type="button"
        onClick={() => {
          if (!reply) {
            setRegisterReply(true);
          } else {
            setSeply('');
          }
        }}
      >
        {!reply ? 'Enviar' : 'Editar'}
      </button>
    </Container>
  );
};

export default memo(Card);
