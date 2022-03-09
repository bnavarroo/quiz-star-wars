import { memo } from 'react';
import useCard from '@utilities/hooks/use-card';
import CardInput from '@modules/pages/game/components/card-input';
import ModalHelp from '@modules/pages/game/components/modal-help';
import { IProps } from './card.types';
import * as Styled from './card.styles';

export const CardComponent: React.FC<IProps> = ({
  character,
  callback,
  endOfGame,
}) => {
  const {
    image,
    isDisabledInput,
    actionButtonText,
    registerReply,
    reply,
    openModal,
    onSetReply,
    handleActionButtonClick,
    handleHelpButtonClick,
    onHideModal,
  } = useCard(character, callback, endOfGame);

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Styled.Image src={image} alt="?" />
      </Styled.ImageWrapper>
      <CardInput
        registerReply={registerReply}
        setReply={onSetReply}
        disabled={isDisabledInput}
      />
      <Styled.ButtonsWrapper>
        <Styled.ActionButton onClick={handleActionButtonClick}>
          {actionButtonText}
        </Styled.ActionButton>
        {!reply && (
          <Styled.HelpButton type="button" onClick={handleHelpButtonClick}>
            Ajuda
          </Styled.HelpButton>
        )}
        <ModalHelp
          character={character}
          isVisible={openModal}
          onHide={onHideModal}
        />
      </Styled.ButtonsWrapper>
    </Styled.Container>
  );
};

export default memo(CardComponent);
