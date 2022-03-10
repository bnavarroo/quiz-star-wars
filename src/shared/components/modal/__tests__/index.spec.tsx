import { mount } from 'enzyme';
import Modal from '../index';

describe('testing Modal component', () => {
  it('should Modal render whitout errors', () => {
    const wrapper = mount(
      <Modal onHide={jest.fn()} isVisible={false}>
        <div>mock</div>
      </Modal>
    );
    wrapper.setProps({ isVisible: true });
    wrapper.update();
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
