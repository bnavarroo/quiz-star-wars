import { ICharacter } from '@core/api/character/character.types';
import { IForwardCardProps } from '@modules/pages/game/components/card-list/card-list.types';

export interface IProps extends IForwardCardProps {
  character: ICharacter;
}
