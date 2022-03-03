import { IProps as IComponentProps } from '@modules/pages/game/components/card/card.types';

export interface IProps extends IComponentProps {
  image?: string;
  isDisabledInput?: boolean;
  actionButtonText?: string;
  registerReply?: boolean;
  reply?: string;
  openModal?: boolean;
  onSetReply?: (replySent: string) => void;
  onActionButtonClick?: () => void;
  onHelpButtonClick?: () => void;
  onHideModal?: () => void;
}
