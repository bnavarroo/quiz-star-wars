type FlexAlign = 'flex-start' | 'flex-end' | 'center';

export type FlexContainerProps = {
  $direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  $flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  $justifyContent?:
    | FlexAlign
    | 'space-between'
    | 'space-around'
    | 'space evenly';
  $alignItems?: FlexAlign | 'baseline' | 'stretch';
  $alignContent?:
    | FlexAlign
    | 'baseline'
    | 'stretch'
    | 'space-between'
    | 'space-around';
};

export type FlexItemProps = {
  $order?: number;
  $grow?: number;
  $basis?: number | 'auto';
  $shrink?: number | string;
};
