import { shallow } from 'enzyme';
import Custom404 from '@pages/404';

describe('testing 404 page', () => {
  it('should page be render', () => {
    const wrapper = shallow(<Custom404 />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
