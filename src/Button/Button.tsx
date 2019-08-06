import React from 'react';

import * as T from './Button.types';
import * as S from './Button.styles';

function Button(props: T.ButtonProps) {
  const { children, ...other } = props;

  return <S.Button {...other}>{children}</S.Button>;
}

Button.defaultProps = {
  scale: 'normal',
  kind: 'primary',
  outline: false
};

Button.displayName = 'Button';

export default Button;
