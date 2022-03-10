import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../countdown.styles';

describe('testing Countdown styles', () => {
  it('should Icon be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Icon />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
