module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array([
      "8lUJ9tFwN3ZMcjdi2LDEvw==",
      "l1nFUVxIUCvEvJRf1PDhGQ==",
      "1seBrLTw5GdXwHtk2Jl1pA==",
      "E3I9ft0odNpOefkboN+QYQ==",
    ]),
  },
});
