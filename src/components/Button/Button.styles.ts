import styled from '@emotion/styled';

import * as T from './Button.types';

const scales = {
  small: `
    padding: 5px 10px;
    font-size: 14px;
  `,
  normal: `
    padding: 10px 20px;
    font-size: 16px;
  `,
  big: `
    padding: 20px 30px;
    font-size: 18px;
  `
};

function kind(outline: boolean) {
  return function kindStyle(bg: string, color: string) {
    const boxShadowColor = outline ? bg : 'transparent';
    const backgroundColor = outline ? 'transparent' : bg;

    return `
    background: ${backgroundColor};
    box-shadow: inset 0 0 0 1px ${boxShadowColor};
    color: ${outline ? bg : color};
    transition: all .3s;
    &:hover {
      box-shadow: inset 0 0 0 1000px ${boxShadowColor};
      color: ${color};
    }
  `;
  };
}

function kinds(outline: boolean): T.Kinds {
  const get = kind(outline);

  return {
    primary: get('#1FB6FF', 'white'),
    secondary: get('#5352ED', 'white'),
    cancel: get('#FF4949', 'white'),
    dark: get('#273444', 'white'),
    gray: get('#8492A6', 'white')
  };
}

function getScale({ scale = 'normal' }: T.ButtonProps) {
  return scales[scale];
}

function getKind({
  kind: kindType = 'primary',
  outline = false
}: T.ButtonProps) {
  return kinds(outline)[kindType];
}

export const Button = styled('button')<T.ButtonProps>`
  ${getKind};
  ${getScale};
  cursor: pointer;
  margin: 3px 5px;
  border: none;
  border-radius: 3px;
`;
