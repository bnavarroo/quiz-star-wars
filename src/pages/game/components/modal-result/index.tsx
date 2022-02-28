import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from '@shared/components/modal';
import { IProps } from './modal-result.type';
import finishGame from './modal-result.helpers';
import {
  Container,
  Title,
  Subtitle,
  PointsWrapper,
  Points,
  Message,
} from './modal-result.styles';

const ModalResult: React.FC<IProps> = ({ answers }) => {
  const [points, setPoints] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let score = 0;
    answers.forEach((answer) => {
      const answerValue = answer.usedHelp ? 5 : 10;
      if (answer.name.toLowerCase() === answer.answer.toLowerCase()) {
        score += answerValue;
      }
    });
    setPoints(score);
  }, []);

  return (
    <Modal isVisible onHide={finishGame(router)}>
      <Container>
        <Title>Quiz Finalizado!</Title>
        <Subtitle>Sua pontuação foi de</Subtitle>
        <PointsWrapper>
          <Points>{points}</Points> pontos
        </PointsWrapper>
        <Message>Feche o modal para reiniciar o quiz!</Message>
      </Container>
    </Modal>
  );
};

export default ModalResult;
