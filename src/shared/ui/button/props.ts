import { CSSProperties, HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface ButtonProps {
  accessoryEnd?: ReactNode;
  accessoryStart?: ReactNode;
  variant?: 'text' | 'filled';
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
