type TFlexAlign = 'flex-start' | 'flex-end' | 'center';

type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type TFlexJustify =
  | TFlexAlign
  | 'space-between'
  | 'space-around'
  | 'space evenly';

type TFlexAlignItems = TFlexAlign | 'baseline' | 'stretch';

type TFlexAlignContent =
  | 'baseline'
  | 'stretch'
  | 'space-between'
  | 'space-around';

export interface IFlexContainerProps {
  $direction?: TFlexDirection;
  $flexWrap?: TFlexWrap;
  $justifyContent?: TFlexJustify;
  $alignItems?: TFlexAlignItems;
  $alignContent?: TFlexAlignContent;
}

export interface IFlexItemProps {
  $order?: number;
  $grow?: number;
  $basis?: number | 'auto';
  $shrink?: number | string;
}
