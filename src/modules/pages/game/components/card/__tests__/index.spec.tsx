import { shallow } from 'enzyme';
import { characterMock } from '@mocks/character';
import { CardComponent } from '../index';

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
