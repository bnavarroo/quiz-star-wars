import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../basic.styles';

describe('testing Basic template styles', () => {
  it('should Wrapper be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Wrapper />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
