import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../flex.styles';

describe('testing Flex styles', () => {
  it('should FlexContainer be render with props', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.FlexContainer
          $direction="row"
          $flexWrap="wrap"
          $justifyContent="center"
          $alignItems="center"
          $alignContent="baseline"
        />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should FlexContainer be render without props', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.FlexContainer />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should FlexItem be render with props', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.FlexItem $order={1} $grow={0} $basis="auto" $shrink="auto" />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should FlexItem be render without props', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.FlexItem />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
