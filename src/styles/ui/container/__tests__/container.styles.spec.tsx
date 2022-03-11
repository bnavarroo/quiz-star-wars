import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import Container from '../container.styles';

describe('testing Container styles', () => {
  it('should Container be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should Container be render when $full is true', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Container $full />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
