import closeModal from '../modal.helpers';

describe('testing Modal helpers', () => {
  it('should closeModal function be called', () => {
    const fnMock = jest.fn(() => closeModal(jest.fn(), jest.fn())());
    const fnInternal = fnMock();
    expect(fnMock).toBeCalled();
    expect(fnInternal).toBe(undefined);
  });
});
