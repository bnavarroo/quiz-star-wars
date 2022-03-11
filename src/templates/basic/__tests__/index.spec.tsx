import { shallow } from 'enzyme';
import BasicTemplate from '../index';

describe('testing Basic template', () => {
  it('should template be render', () => {
    const wrapper = shallow(
      <BasicTemplate>
        <div>mock</div>
      </BasicTemplate>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
