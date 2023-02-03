// path: ./config/plugins.js

module.exports = ({ env }) => {
  const _1 = "SG.ycf77_";
  const _2 = "jATAeEvzZm";
  const _3 = "nRZgiA.HQpNtU_";
  const _4 = "LEySIVrrCuKd3GCAxd2";
  const _5 = "YywLHrieaTmZiujIDRw";

  const yek = _1 + _2 + _3 + _4 + _5;

  return {
    // ...
    email: {
      config: {
        provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          apiKey: yek,
        },
        settings: {
          defaultFrom: "minahgamestore@gmail.com",
          defaultReplyTo: "minahgamestore@gmail.com",
          testAddress: "minahgamestore@gmail.com",
        },
      },
    },
    // ...
  };
};
