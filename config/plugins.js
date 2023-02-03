// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "minah67899@gmail.com",
        defaultReplyTo: "minah67899@gmail.com",
        testAddress: "minah67899@gmail.com",
      },
    },
  },
  // ...
});
