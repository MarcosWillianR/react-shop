import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'normal' | 'medium';
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container size="normal" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
