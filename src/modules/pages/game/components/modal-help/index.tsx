import Modal from '@shared/components/modal';
import { IProps } from './modal-help.types';
import * as Styled from './modal-help.styles';

export const ModalHelpComponent: React.FC<IProps> = ({
  character,
  isVisible,
  onHide,
}) => {
  const {
    image,
    height,
    mass,
    skin_color: skinColor,
    eye_color: eyeColor,
    birth_year: birthYear,
    gender,
  } = character;
  return (
    <Modal isVisible={isVisible} onHide={onHide}>
      <Styled.Container>
        <Styled.Image src={image} alt="?" />
        <Styled.ListAttrs>
          <li>
            <b>Altura: </b>
            {height} cm
          </li>
          <li>
            <b>Massa: </b>
            {mass} kg
          </li>
          <li>
            <b>Cor da pele: </b>
            {skinColor}
          </li>
          <li>
            <b>Cor dos olhos: </b>
            {eyeColor}
          </li>
          <li>
            <b>Data de aniversário: </b>
            {birthYear}
          </li>
          <li>
            <b>Gênero: </b>
            {gender}
          </li>
        </Styled.ListAttrs>
      </Styled.Container>
    </Modal>
  );
};

export default ModalHelpComponent;
