import { characterMock } from '@mocks/character';
import * as HttpHelpers from '@utilities/http/http.helpers';
import getCharacters from '../character.helpers';

jest.mock('@utilities/http/http.helpers');

const mockHttpHelpers = HttpHelpers as unknown as {
  get: jest.Mock;
};

describe('testing Characters api', () => {
  const mockResponseApi = {
    status: 200,
    statusText: 'success',
    error: false,
    result: {
      results: [characterMock],
    },
  };

  it('should getCharacters function be called and return an TGetCharacters value when not has error', async () => {
    mockHttpHelpers.get.mockReturnValue(
      new Promise((resolve) => {
        resolve(mockResponseApi);
      })
    );
    const fnMock = jest.fn(() => getCharacters());
    const result = await fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toHaveProperty('status', 200);
  });

  it('should getCharacters function be called and return an TGetCharacters value when has error', async () => {
    mockHttpHelpers.get.mockReturnValue(
      new Promise((resolve) => {
        resolve({
          ...mockResponseApi,
          error: true,
          status: 500,
        });
      })
    );
    const fnMock = jest.fn(() => getCharacters(1));
    const result = await fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toHaveProperty('status', 500);
  });
});
