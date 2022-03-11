import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import Logo from '../logo.styles';

describe('testing Logo styles', () => {
  it('should DarthLogo be render', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Logo $maxWidth="125px" $maxWidthOnMobile="125px" />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
