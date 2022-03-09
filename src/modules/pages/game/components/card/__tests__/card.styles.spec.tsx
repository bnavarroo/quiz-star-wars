import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../card.styles';

describe('testing Card styles', () => {
  it('should Container be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Container />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should ImageWrapper be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.ImageWrapper />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
