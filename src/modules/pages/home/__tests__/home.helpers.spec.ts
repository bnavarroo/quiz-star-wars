import showPageLoader from '../home.helpers';

describe('testing Home helpers', () => {
  it('should showPageLoader function be called', () => {
    const fnMock = jest.fn(() => showPageLoader(jest.fn())());
    const fnInternal = fnMock();
    expect(fnMock).toBeCalled();
    expect(fnInternal).toBe(undefined);
  });
});
