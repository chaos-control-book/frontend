import styled from '@emotion/styled';
import styledMap from 'styled-map';

import { space } from '~shared/styles/helpers/functions';
import {
  animation,
  buttonReset,
  headingFont,
} from '~shared/styles/helpers/mixins';

import { ButtonProps } from './props';

export const Container = styled.button<ButtonProps & { onlyIcon: boolean }>`
  ${buttonReset};
  ${animation()};
  ${headingFont()};

  min-width: ${space(5)};
  min-height: ${space(5)};
  padding: ${space(1, 1.5)};
  border: 0;

  color: ${styledMap('variant', {
    text: 'var(--color-text-tertiary)',
    filled: 'var(--color-text-base)',
  })};

  background-color: ${styledMap('variant', {
    text: 'transparent',
    filled: 'var(--color-root-complement)',
  })};

  border-color: ${styledMap('variant', {
    text: 'transparent',
    filled: 'var(--color-root-complement)',
  })};

  &:hover {
    color: var(--color-text-faint);
  }

  &:active {
    transition-duration: 0ms;
    color: var(--color-text-accent);
  }

  ${({ onlyIcon }) =>
    onlyIcon &&
    `
    padding: ${space(1)};
  `};
`;

export const Text = styled.span`
  display: inline-flex;
  align-items: center;
  pointer-events: none;
`;

export const Accessory = styled.span<{
  position: 'start' | 'end';
  onlyIcon?: boolean;
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

  ${({ onlyIcon }) =>
    onlyIcon &&
    `
    margin: 0;
  `};
`;
