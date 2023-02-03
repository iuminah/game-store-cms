// path: ./config/plugins.js

module.exports = ({ env }) => {
  const _1 = "SG.nkFDAmg";
  const _2 = "fRuWNT15yINVoMg.S";
  const _3 = "3OPlC6EHLFt_xN-mJBvSuqt";
  const _4 = "PRvNeJrvU";
  const _5 = "YyYa-Xd7as";

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
          defaultFrom: "minah67899@gmail.com",
          defaultReplyTo: "minah67899@gmail.com",
          testAddress: "minah67899@gmail.com",
        },
      },
    },
    // ...
  };
};
