import { shallow } from 'enzyme';
import { getCharactersMock } from '@mocks/character';
import Game, { getServerSideProps } from '@pages/game';

jest.mock('@modules/pages/game/game.helpers', () =>
  jest.fn().mockReturnValue({ data: 'mock' })
);

jest.mock('@utilities/hooks/use-game', () =>
  jest.fn().mockReturnValue({
    hasTime: false,
    answers: [],
    onFinishTime: jest.fn(),
    handleUpdateAnswers: jest.fn(),
  })
);

describe('testing game page', () => {
  it('should page be render', () => {
    const wrapper = shallow(<Game data={getCharactersMock} fallback={null} />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should getServerSideProps function be called', async () => {
    const fnMock = jest.fn(() => getServerSideProps());
    const result = await fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toHaveProperty('data', 'mock');
  });
});
