import { memo } from 'react';
import withCard from '@utilities/hocs/with-card';
import { IProps } from '@utilities/hocs/with-card/with-card.types';
import CardInput from '@modules/pages/game/components/card-input';
import ModalHelp from '@modules/pages/game/components/modal-help';
import {
  Container,
  ImageWrapper,
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
  reply,
  openModal,
  onSetReply,
  onActionButtonClick,
  onHelpButtonClick,
  onHideModal,
}) => (
  <Container>
    <ImageWrapper>
      <Image src={image} alt="?" />
    </ImageWrapper>
    <CardInput
      registerReply={registerReply}
      setReply={onSetReply}
      disabled={isDisabledInput}
    />
    <ButtonsWrapper>
      <ActionButton onClick={onActionButtonClick}>
        {actionButtonText}
      </ActionButton>
      {!reply && (
        <HelpButton type="button" onClick={onHelpButtonClick}>
          Ajuda
        </HelpButton>
      )}
      <ModalHelp
        character={character}
        isVisible={openModal}
        onHide={onHideModal}
      />
    </ButtonsWrapper>
  </Container>
);

export default memo(withCard(Card));
