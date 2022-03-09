import * as CharacterApiHelpers from '@core/api/character/character.helpers';
import getCharactersOnServer from '../game.helpers';

jest.mock('@core/api/character/character.helpers');

const mockCharacterApiHelpers = CharacterApiHelpers as { default: jest.Mock };

describe('testing Game helpers', () => {
  it('should showPageLoader function be called and execute try instruction', async () => {
    const fnMock = jest.fn(() => getCharactersOnServer());
    const result = await fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toHaveProperty('props', { data: undefined });
  });

  it('should showPageLoader function be called and execute catch instruction', async () => {
    mockCharacterApiHelpers.default.mockImplementation(
      jest.fn(() => {
        throw new Error();
      })
    );
    const fnMock = jest.fn(() => getCharactersOnServer());
    const result = await fnMock();
    expect(fnMock).toBeCalled();
    expect(result.props.data).toHaveProperty('status', 500);
  });
});
