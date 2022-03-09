import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from '@shared/components/modal';
import { IProps } from './modal-result.type';
import finishGame from './modal-result.helpers';
import * as Styled from './modal-result.styles';

export const ModalResultComponent: React.FC<IProps> = ({ answers }) => {
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
      <Styled.Container>
        <Styled.Title>Quiz Finalizado!</Styled.Title>
        <Styled.Subtitle>Sua pontuação foi de</Styled.Subtitle>
        <Styled.PointsWrapper>
          <Styled.Points>{points}</Styled.Points> pontos
        </Styled.PointsWrapper>
        <Styled.Message>Feche o modal para reiniciar o quiz!</Styled.Message>
      </Styled.Container>
    </Modal>
  );
};

export default ModalResultComponent;
