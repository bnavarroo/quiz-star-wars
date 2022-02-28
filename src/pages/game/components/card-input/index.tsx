import { useRef, useEffect } from 'react';
import { IProps } from './card-input.types';
import Input from './card-input.styles';

const CardInput: React.FC<IProps> = ({ setReply, registerReply, disabled }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (registerReply) {
      const value = ref?.current?.value;
      setReply(value);
    }
  }, [registerReply]);

  return (
    <Input
      ref={ref}
      type="text"
      placeholder="E aí, sabe meu nome?"
      disabled={disabled}
    />
  );
};

export default CardInput;
