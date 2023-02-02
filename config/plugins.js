// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey:
          "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",
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
