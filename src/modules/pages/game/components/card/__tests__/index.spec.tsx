import { shallow } from 'enzyme';
import { characterMock } from '@mocks/character';
import { CardComponent } from '../index';

jest.mock('@utilities/hooks/use-card', () =>
  jest.fn().mockReturnValue({
    image: 'mock',
    isDisabledInput: false,
    actionButtonText: 'mock',
    registerReply: jest.fn(),
    reply: null,
    openModal: false,
    onSetReply: jest.fn(),
    handleActionButtonClick: jest.fn(),
    handleHelpButtonClick: jest.fn(),
    onHideModal: jest.fn(),
  })
);

describe('testing Card component', () => {
  it('should CardComponent render whitout errors', () => {
    const wrapper = shallow(
      <CardComponent
        character={characterMock}
        callback={jest.fn()}
        endOfGame={false}
      />
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
