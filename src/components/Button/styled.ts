import styled from 'styled-components';
import { COLORS } from '@src/utils/colors';

export const Wrapper = styled.button`
  border: none;
  background: none;
  padding: 9px;
  font-weight: 500;
  margin: 0;
  font-size: 15px;
  line-height: inherit;
  font-family: inherit;
  font-style: inherit;
  text-align: center;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  transition: opacity 0.2s;
  position: relative;
  text-decoration: none;
  &.disabled, &:disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
  &:focus-visible {
    outline: 3px solid ${COLORS.blue40};
  }
  width: 100%;

  &.filled {
    color: ${COLORS.lightGray10};
    background-color: ${COLORS.blue60};
    .icon {
      color: ${COLORS.white};
    }
    &.isLoading {
      background-color: ${COLORS.blue20};
    }
    &:not(.isLoading) {
      &:hover {
        background-color: ${COLORS.blue70};
      }

      &:active,
      &.active {
        background-color: ${COLORS.blue80};
      }
    }

    .count {
      color: ${COLORS.blue60};
      background-color: ${COLORS.blue30};
    }
  }

  &.outline {
    background-color: transparent;
    border-color: ${COLORS.lightGray40};
    &.isLoading {
      border-color: ${COLORS.lightGray20};
    }

    &:not(.isLoading) {
      &:hover {
        background-color: ${COLORS.lightGray10};
      }

      &:active,
      &.active {
        background-color: ${COLORS.lightGray30};
      }
    }
  }
`;
