import { shallow } from 'enzyme';
import { getCharactersMock } from '@mocks/character';
import Game from '@pages/game';

describe('testing game page', () => {
  it('should page be render', () => {
    const wrapper = shallow(<Game data={getCharactersMock} fallback={null} />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
