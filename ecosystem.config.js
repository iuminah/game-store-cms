// path: ./ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "minah-game-cms",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
