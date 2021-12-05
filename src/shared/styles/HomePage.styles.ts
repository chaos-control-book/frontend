import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';
import { headingFont } from '~shared/styles/helpers/mixins';

export const container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Separator = styled.span`
  ${headingFont(rem(12))};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;
  color: var(--color-text-accent);
`;

const Area = styled.a<{
  backgroundColor: string;
}>`
  display: flex;
  align-items: center;
  height: 100%;
  flex-basis: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};

  span {
    position: relative;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const LeftArea = styled(Area)`
  justify-content: flex-end;
  padding-right: ${space(2)};

  span {
    &::before {
      content: '';
      position: absolute;
      top: 5px;
      display: block;
      width: 100%;
      height: 32px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU5IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTU5IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPG1hc2sgaWQ9Im1hc2swXzkyNjoxNDkyIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTU5IiBoZWlnaHQ9IjMyIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMTU5IiBoZWlnaHQ9IjMyIiBmaWxsPSIjQzRDNEM0Ii8+CiAgICA8L21hc2s+CiAgICA8ZyBtYXNrPSJ1cmwoI21hc2swXzkyNjoxNDkyKSI+CiAgICAgICAgPHJlY3QgeD0iOTAuMTYzMSIgeT0iLTEwOS4xMjgiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMzgiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDkwLjE2MzEgLTEwOS4xMjgpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTE5Ljg2MiIgeT0iLTc5LjQyOTkiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMzgiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDExOS44NjIgLTc5LjQyOTkpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTQ5LjU2IiB5PSItNDkuNzMxNCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzOCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTQ5LjU2IC00OS43MzE0KSIgZmlsbD0iIzk2NDZGQiIvPgogICAgICAgIDxyZWN0IHg9IjE3OS4yNTkiIHk9Ii0yMC4wMzMiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMzgiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE3OS4yNTkgLTIwLjAzMykiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSIxMDAuMDYyIiB5PSItOTkuMjI5IiB3aWR0aD0iMTAiIGhlaWdodD0iMjM4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMDAuMDYyIC05OS4yMjkpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTI5Ljc2MSIgeT0iLTY5LjUzMDUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMzgiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyOS43NjEgLTY5LjUzMDUpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTU5LjQ1OSIgeT0iLTM5LjgzMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzOCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTU5LjQ1OSAtMzkuODMyKSIgZmlsbD0iIzk2NDZGQiIvPgogICAgICAgIDxyZWN0IHg9IjE4OS4xNTgiIHk9Ii0xMC4xMzM1IiB3aWR0aD0iMTAiIGhlaWdodD0iMjM4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxODkuMTU4IC0xMC4xMzM1KSIgZmlsbD0iIzk2NDZGQiIvPgogICAgICAgIDxyZWN0IHg9IjEwOS45NjIiIHk9Ii04OS4zMjk1IiB3aWR0aD0iMTAiIGhlaWdodD0iMjM4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMDkuOTYyIC04OS4zMjk1KSIgZmlsbD0iIzk2NDZGQiIvPgogICAgICAgIDxyZWN0IHg9IjEzOS42NiIgeT0iLTU5LjYzMSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzOCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTM5LjY2IC01OS42MzEpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTY5LjM1OSIgeT0iLTI5LjkzMjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMzgiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2OS4zNTkgLTI5LjkzMjUpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTk5LjA1NyIgeT0iLTAuMjM0MDA5IiB3aWR0aD0iMTAiIGhlaWdodD0iMjM4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxOTkuMDU3IC0wLjIzNDAwOSkiIGZpbGw9IiM5NjQ2RkIiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
      background-position: right;
      background-repeat: no-repeat;
      transform: translateY(-100%);
    }

    &::after {
      content: '';
      position: absolute;
      right: -10px;
      bottom: -10px;
      display: block;
      width: 10px;
      height: 10px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDBINC41VjQuNUgwVjUuNUg0LjVWMTBINS41VjUuNUgxMFY0LjVINS41VjBaIiBmaWxsPSIjOTY0NkZCIi8+Cjwvc3ZnPgo=);
      background-position: right;
      background-repeat: no-repeat;
    }
  }
`;

export const RightArea = styled(Area)`
  justify-content: flex-start;
  padding-left: ${space(4)};

  span {
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: -15px;
      display: block;
      width: 10px;
      height: 10px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDBINC41VjQuNUgwVjUuNUg0LjVWMTBINS41VjUuNUgxMFY0LjVINS41VjBaIiBmaWxsPSIjOTY0NkZCIi8+Cjwvc3ZnPgo=);
      background-position: right;
      background-repeat: no-repeat;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 3px;
      display: block;
      width: 100%;
      height: 19px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTQiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCA5NCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxtYXNrIGlkPSJtYXNrMF85MjY6MTQ5OSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9Ijk0IiBoZWlnaHQ9IjE5Ij4KICAgICAgICA8cmVjdCB3aWR0aD0iOTQiIGhlaWdodD0iMTguOTE4MiIgZmlsbD0iI0M0QzRDNCIvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMF85MjY6MTQ5OSkiPgogICAgICAgIDxyZWN0IHg9IjUzLjMwMzciIHk9Ii02NC41MTYyIiB3aWR0aD0iNS45MTE5NSIgaGVpZ2h0PSIxNDAuNzA0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA1My4zMDM3IC02NC41MTYyKSIgZmlsbD0iIzk2NDZGQiIvPgogICAgICAgIDxyZWN0IHg9IjcwLjg2MTMiIHk9Ii00Ni45NTg2IiB3aWR0aD0iNS45MTE5NSIgaGVpZ2h0PSIxNDAuNzA0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA3MC44NjEzIC00Ni45NTg2KSIgZmlsbD0iIzk2NDZGQiIvPgogICAgICAgIDxyZWN0IHg9Ijg4LjQxODkiIHk9Ii0yOS40MDEiIHdpZHRoPSI1LjkxMTk1IiBoZWlnaHQ9IjE0MC43MDQiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDg4LjQxODkgLTI5LjQwMSkiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSIxMDUuOTc3IiB5PSItMTEuODQzNCIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTA1Ljk3NyAtMTEuODQzNCkiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSI1OS4xNTYyIiB5PSItNTguNjYzOCIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNTkuMTU2MiAtNTguNjYzOCkiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSI3Ni43MTM5IiB5PSItNDEuMTA2MSIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNzYuNzEzOSAtNDEuMTA2MSkiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSI5NC4yNzE1IiB5PSItMjMuNTQ4NiIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgOTQuMjcxNSAtMjMuNTQ4NikiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSIxMTEuODI5IiB5PSItNS45OTA5NyIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTExLjgyOSAtNS45OTA5NykiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSI2NS4wMDg4IiB5PSItNTIuODExMiIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNjUuMDA4OCAtNTIuODExMikiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSI4Mi41NjY0IiB5PSItMzUuMjUzNiIgd2lkdGg9IjUuOTExOTUiIGhlaWdodD0iMTQwLjcwNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgODIuNTY2NCAtMzUuMjUzNikiIGZpbGw9IiM5NjQ2RkIiLz4KICAgICAgICA8cmVjdCB4PSIxMDAuMTI0IiB5PSItMTcuNjk2IiB3aWR0aD0iNS45MTE5NSIgaGVpZ2h0PSIxNDAuNzA0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMDAuMTI0IC0xNy42OTYpIiBmaWxsPSIjOTY0NkZCIi8+CiAgICAgICAgPHJlY3QgeD0iMTE3LjY4MiIgeT0iLTAuMTM4Mzk3IiB3aWR0aD0iNS45MTE5NSIgaGVpZ2h0PSIxNDAuNzA0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMTcuNjgyIC0wLjEzODM5NykiIGZpbGw9IiM5NjQ2RkIiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
      background-position: left;
      background-repeat: no-repeat;
      transform: translateY(100%);
    }
  }
`;
