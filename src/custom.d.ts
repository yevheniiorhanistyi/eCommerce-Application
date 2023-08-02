declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_PROJECT_KEY: string;
    REACT_APP_CLIENT_SECRET: string;
    REACT_APP_CLIENT_ID: string;
    REACT_APP_AUTH_URL: string;
    REACT_APP_API_URL: string;
    REACT_APP_SCOPES: string;
  }
}
