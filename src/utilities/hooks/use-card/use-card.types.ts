export interface IProps {
  image: string;
  isDisabledInput: boolean;
  actionButtonText: string;
  registerReply: boolean;
  reply: string;
  openModal: boolean;
  onSetReply: (replySent: string) => void;
  handleActionButtonClick: () => void;
  handleHelpButtonClick: () => void;
  onHideModal: () => void;
}
