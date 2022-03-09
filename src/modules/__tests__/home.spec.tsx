import { shallow } from 'enzyme';
import Home from '@pages/home';

describe('testing Home page', () => {
  it('should page be render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
