import {
  handleSetReply,
  actionButtonClick,
  helpButtonClick,
  hideModal,
  onReplyIsChanged,
} from '../use-card.helpers';

describe('testing useCard helpers', () => {
  it('should handleSetReply function be called', () => {
    const fnMock = jest.fn(() => handleSetReply(jest.fn(), jest.fn())('mock'));
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });

  it('should actionButtonClick function be called with reply', () => {
    const fnMock = jest.fn(() =>
      actionButtonClick('mock', jest.fn(), jest.fn())()
    );
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });

  it('should actionButtonClick function be called without reply', () => {
    const fnMock = jest.fn(() =>
      actionButtonClick(null, jest.fn(), jest.fn())()
    );
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });

  it('should helpButtonClick function be called', () => {
    const fnMock = jest.fn(() => helpButtonClick(jest.fn(), jest.fn())());
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });

  it('should hideModal function be called', () => {
    const fnMock = jest.fn(() => hideModal(jest.fn())());
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });

  it('should onReplyIsChanged function be called when has reply', () => {
    const fnMock = jest.fn(() =>
      onReplyIsChanged('mock', jest.fn(), 'mock', true)()
    );
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });

  it('should onReplyIsChanged function be called when not has reply', () => {
    const fnMock = jest.fn(() =>
      onReplyIsChanged('', jest.fn(), 'mock', true)()
    );
    const result = fnMock();
    expect(fnMock).toBeCalled();
    expect(result).toBe(undefined);
  });
});
