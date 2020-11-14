export default {
  oidc: {
    clientId: 'XXX',
    redirectUri: 'com.okta.dev-XXX:/callback',
    endSessionRedirectUri: 'com.okta.dev-XXX:/callback',
    discoveryUri: 'https://dev-XXX.okta.com/oauth2/default',
    scopes: ['openid', 'profile', 'offline_access'],
    requireHardwareBackedKeyStore: false,
  },
};
