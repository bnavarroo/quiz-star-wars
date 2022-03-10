import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../footer.styles';

describe('testing Footer styles', () => {
  it('should Wrapper be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Wrapper />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should ImagesWrapper be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.ImagesWrapper />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should ImageContent be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.ImageContent />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
