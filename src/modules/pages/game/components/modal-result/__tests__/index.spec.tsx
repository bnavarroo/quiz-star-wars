import { mount } from 'enzyme';
import ThemeProvider from '@mocks/theme';
import { ModalResultComponent } from '../index';

describe('testing ModalResult component', () => {
  const mockAnswers = [
    {
      name: 'mock',
      answer: 'mock',
      usedHelp: false,
    },
    {
      name: 'mock',
      answer: 'mock',
      usedHelp: true,
    },
  ];

  it('should ModalResultComponent render whitout errors', () => {
    const wrapper = mount(
      <ThemeProvider>
        <ModalResultComponent answers={mockAnswers} />
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
