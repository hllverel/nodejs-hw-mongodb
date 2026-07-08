export const env = (key, defaultValue) => {
  const value = process.env[key];

  if (value) {
    return value;
  }

  if (defaultValue) {
    return defaultValue;
  }

  throw new Error(`Missing: process.env['${key}']`);
};

export const ENV_VARS = {
  GOOGLE_AUTH_CLIENT_ID: 'GOOGLE_AUTH_CLIENT_ID',
  GOOGLE_AUTH_CLIENT_SECRET: 'GOOGLE_AUTH_CLIENT_SECRET',
};
