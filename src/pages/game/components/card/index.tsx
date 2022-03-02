import { memo } from 'react';
import withCard from '@utilities/hocs/with-card';
import { IProps } from '@utilities/hocs/with-card/with-card.types';
import CardInput from '@pages/game/components/card-input';
import ModalHelp from '@pages/game/components/modal-help';
import {
  handleSetReply,
  handleActionButtonClick,
  handleHelpButtonClick,
  onHideModal,
} from './card.helpers';
import {
  Container,
  Image,
  ButtonsWrapper,
  ActionButton,
  HelpButton,
} from './card.styles';

const Card: React.FC<IProps> = ({
  character,
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
}) => (
  <Container>
    <Image src={image} alt="?" />
    <CardInput
      registerReply={registerReply}
      setReply={handleSetReply(setSeply, setRegisterReply)}
      disabled={isDisabledInput}
    />
    <ButtonsWrapper>
      <ActionButton
        onClick={handleActionButtonClick(reply, setRegisterReply, setSeply)}
      >
        {actionButtonText}
      </ActionButton>
      {!reply && (
        <HelpButton
          type="button"
          onClick={handleHelpButtonClick(setUsedHelp, setOpenModal)}
        >
          Ajuda
        </HelpButton>
      )}
      <ModalHelp
        character={character}
        isVisible={openModal}
        onHide={onHideModal(setOpenModal)}
      />
    </ButtonsWrapper>
  </Container>
);

export default memo(withCard(Card));
