import { shallow } from 'enzyme';
import { characterMock } from '@mocks/character';
import { ModalHelpComponent } from '../index';

describe('testing ModalHelp component', () => {
  it('should ModalHelpComponent render whitout errors', () => {
    const wrapper = shallow(
      <ModalHelpComponent
        character={characterMock}
        onHide={jest.fn()}
        isVisible
      />
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
