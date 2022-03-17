import { shallow } from 'enzyme';
import { characterMock } from '@mocks/character';
import { CardListComponent } from '../index';

describe('testing Card component', () => {
  it('should CardListComponent render whitout errors', () => {
    const wrapper = shallow(
      <CardListComponent
        listCharacters={[characterMock]}
        callback={jest.fn()}
        endOfGame={false}
      />
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
