import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import * as Styled from '../modal-result.styles';

describe('testing ModalResult styles', () => {
  it('should Container be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Styled.Container />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
