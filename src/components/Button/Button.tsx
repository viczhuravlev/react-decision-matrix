import React from 'react';

import * as T from './Button.types';
import * as S from './Button.styles';

function Button(props: T.ButtonProps) {
  const { children, kind, outline, scale } = props;

  return (
    <S.Button kind={kind} outline={outline} scale={scale}>
      {children}
    </S.Button>
  );
}

Button.defaultProps = {
  scale: 'normal',
  kind: 'primary',
  outline: false
};

Button.displayName = 'Button';

export default Button;
