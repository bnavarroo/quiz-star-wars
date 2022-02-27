import { useState, useEffect } from 'react';
import Modal from '@shared/components/modal';
import { IProps } from './modal-result.type';

const ModalResult: React.FC<IProps> = ({ answers }) => {
  const [points, setPoints] = useState<number>(0);

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

  return <Modal isVisible>{`Você fez ${points} pontos`}</Modal>;
};

export default ModalResult;
