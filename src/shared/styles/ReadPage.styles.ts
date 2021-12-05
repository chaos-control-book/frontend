import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';
import {
  animation,
  letterSpacing,
  textFont,
} from '~shared/styles/helpers/mixins';

export const Container = styled.section`
  position: relative;
`;

export const Header = styled.header<{
  isMini: boolean;
}>`
  ${animation('padding', 300)};

  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${space(10)};
  padding-top: ${space(16)};
  padding-bottom: ${space(6)};
  background-color: var(--color-root-base);
  will-change: padding-top, padding-bottom;

  ${({ isMini }) =>
    isMini &&
    `
    padding-top: ${space(3.5)};
    padding-bottom: ${space(3.5)};
  `};
`;

export const HeaderActions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: ${space(1.5)};
  padding: ${space(2.5, 3)};
`;

export const HeaderTitle = styled.h1`
  ${textFont('1rem', 500)};
  ${letterSpacing};
  text-align: center;
`;

export const coverImage = css`
  object-fit: cover;
`;

export const ChapterNumber = styled.span`
  color: var(--color-text-accent);
`;

export const Body = styled.div`
  padding: ${space(6)};
`;

export const Location = styled.p`
  ${textFont()};
  display: flex;
  align-items: center;
  margin-bottom: ${space(2)};
`;

export const LocationIcons = styled.span`
  display: flex;
  align-items: center;
  gap: calc(${space(1)} / 2);
  margin-right: ${space(2)};
  color: var(--color-icon-accent);
`;

export const LocationText = styled.span`
  color: var(--color-text-faint);
`;

export const Footer = styled.footer`
  padding: ${space(9, 6)};
`;

export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterCopyright = styled.div`
  ${textFont(rem(10))};
  margin-top: ${space(2.5)};
  color: var(--color-text-tertiary);
`;
