import mockedRouter from '@mocks/next-router';
import finishGame from '../modal-result.helpers';

describe('testing ModalResult helpers', () => {
  it('should finishGame function be called', () => {
    const fnMock = jest.fn(() => finishGame(mockedRouter));
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result()).toBe(undefined);
  });
});
