import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    var(--sidebar-width)
    minmax(400px, 860px)
    minmax(5rem, 1fr);
  grid-template-areas: 'sidebar content .';
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-root-base);
`;

export const Main = styled.main`
  position: relative;
  grid-area: content;
  background-color: var(--color-root-faint);
`;