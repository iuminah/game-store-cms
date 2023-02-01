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
        defaultFrom: "minahgamestore@gmail.com",
        defaultReplyTo: "minahgamestore@gmail.com",
        testAddress: "minahgamestore@gmail.com",
      },
    },
  },
  // ...
});
