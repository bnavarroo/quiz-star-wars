import { useEffect } from 'react';
import { mount } from 'enzyme';
import { characterMock } from '@mocks/character';
import useCard from '../index';

const DummyComponent: React.FC<{ end: boolean; changeReply: boolean }> = ({
  end,
  changeReply,
}) => {
  const { onSetReply } = useCard(characterMock, jest.fn(), end);
  useEffect(() => {
    onSetReply('mock');
  }, [changeReply]);
  return <>mock</>;
};

describe('testing useCard hook', () => {
  it('should useCard hook be called', () => {
    const wrapper = mount(<DummyComponent end={false} changeReply={false} />);
    wrapper.setProps({ changeReply: true });
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
