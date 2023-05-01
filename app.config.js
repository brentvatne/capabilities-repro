export default (config) => ({
  ...config,
  owner: "brents",
  ios: {
    bundleIdentifier: process.env.PRODUCTION ? 'xyz.bront.capabilities' : 'xyz.bront.capabilities.dev',
  },
  extra: {
    eas: {
      projectId: "1243b0e0-f74e-4c55-8a98-4acb3f9633dd"
    }
  }
});