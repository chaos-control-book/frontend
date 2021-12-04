import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.li`
  display: inline-flex;
  align-items: center;

  a {
    width: 100%;
    display: inline-block;

    //&::before {
    //  content: counter(item, upper-roman) '.';
    //  display: inline-block;
    //  min-width: space(6.5);
    //  padding-right: space(1);
    //  text-align: start;
    //  color: currentColor;
    //  counter-increment: item;
    //}
  }
`;

export const Accessory = styled.span<{
  position: 'start' | 'end';
}>`
  display: inline-flex;

  ${({ position }) =>
    position === 'start' &&
    `
    margin-inline-end: ${space(1)};
  `};

  ${({ position }) =>
    position === 'end' &&
    `
    margin-inline-start: ${space(1)};
  `};
`;
