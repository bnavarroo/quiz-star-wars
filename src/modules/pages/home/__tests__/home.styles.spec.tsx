import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../home.styles';

describe('testing Home styles', () => {
  it('should Container be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Container />
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

  it('should Subtitle be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Subtitle />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
