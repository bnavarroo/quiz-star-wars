import { shallow } from 'enzyme';
import Countdown from '../index';

jest.mock('@utilities/hooks/use-countdown', () =>
  jest.fn().mockReturnValue({
    timeLeft: '02:00',
  })
);

describe('testing countdown component', () => {
  it('should component be render', () => {
    const wrapper = shallow(
      <Countdown initialTime={120} callbackEndOfTime={jest.fn()} />
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
