import { createStyles } from 'antd-style';

export const useStyle = createStyles(({ prefixCls, css }) => ({
  gradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, var(--color-accent), var(--color-accent2));
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
        z-index: -1;
      }

      &:hover::before {
        opacity: 0.8;
      }

      background-color: transparent !important;
      border: none;
    }
  `,

  outlineButton: css`
    &.${prefixCls}-btn {
      background-color: var(--color-header) !important;
      border: 1px solid var(--color-accent) !important;
      color: var(--color-accent) !important;
      transition: all 0.3s ease;
    }

    &.${prefixCls}-btn:hover {
      background-color: var(--color-bg2) !important;
      color: var(--color-text) !important;
      border-color: var(--color-accent2) !important;
    }
  `,
}));
