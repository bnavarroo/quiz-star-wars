import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../header.styles';

describe('testing Header styles', () => {
  it('should Wrapper be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Wrapper />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should Title be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Title />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
