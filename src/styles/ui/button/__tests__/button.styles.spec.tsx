import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import Button from '../button.styles';

describe('testing Button styles', () => {
  it('should StyledButton primary outline be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Button $type="primary" $size="small" $outline />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should StyledButton secondary default no outline be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Button $type="secondary" $outline={false} />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
