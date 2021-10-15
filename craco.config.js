/** @format */
/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAntDesignPlugin = require('craco-antd')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#000',
          '@link-color': '#15DAD1',
          '@text-color': '#333',
          '@text-color-secondary': '#666',
          '@heading-color': '#000',
          '@border-radius-base': '0px',
          // modal
          '@modal-content-bg': '#fff',
          '@modal-header-bg': '#fff',
          '@modal-footer-border-color-split': '#fff',
          '@modal-header-border-color-split': '#fff',
          '@modal-close-color': '#333333',
          // btn
          '@component-background': '#fff',
          '@border-color-base': '#000000',
          '@btn-default-borde': '#00B7AF',
          '@background-color-base': '#fff',
          '@body-background': '#F5F7FB',
          '@input-back': 'rgba(255, 255, 255, 0.8)',
          '@form-back': '#F3F3F3',
        },
      },
    },
  ],
}
