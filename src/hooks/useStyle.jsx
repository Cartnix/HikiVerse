import { createStyles } from 'antd-style';

export const useStyle = createStyles(({ prefixCls, css }) => ({
  gradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #ff6a00, #ff9900);
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
      background-color: #0d0d0d !important;
      border: 1px solid #ff6a00 !important;
      color: #ff6a00 !important;
      transition: all 0.3s ease;
    }

    &.${prefixCls}-btn:hover {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
      border-color: #ff9900 !important;
    }
  `,
}));
