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
  },
  // Skip expo-apple-authentication plugin installation in production,
  // so we will have the entitlements in our local ios directory but not
  // when we generate entitlements for EAS Build with the production profile.
  _internal: process.env.PRODUCTION ? {
    "pluginHistory": {
      "expo-apple-authentication": {
        "name": "expo-apple-authentication",
        "version": "UNVERSIONED"
      }
    }
  } : {}
});