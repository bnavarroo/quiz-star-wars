import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../404.styles';

describe('testing 404 styles', () => {
  it('should Container be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Container />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should LinkContent be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.LinkContent />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
