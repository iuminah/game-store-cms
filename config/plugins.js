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
