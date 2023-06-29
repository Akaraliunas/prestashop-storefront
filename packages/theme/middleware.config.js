module.exports = {
  integrations: {
    prestashop: {
      location: '@vue-storefront/prestashop-api/server',
      configuration: {
        api: {
          url: 'http://prestashop-vue-backend.test'
        }
      }
    }
  }
};
