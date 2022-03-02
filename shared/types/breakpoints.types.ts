interface IBreakpointsMinMax {
  min: string;
  max: string;
}

export interface IBreakpoints {
  desktop: IBreakpointsMinMax;
  desktopSmall: IBreakpointsMinMax;
  tablet: IBreakpointsMinMax;
  mobile: IBreakpointsMinMax;
  mobileSmall: IBreakpointsMinMax;
}
