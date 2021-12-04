import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  accessoryEnd?: ReactNode;
  accessoryStart?: ReactNode;
  variant?: 'text' | 'filled';
  href?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
