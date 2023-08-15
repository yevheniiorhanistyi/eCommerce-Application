/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REACT_APP_PROJECT_KEY: string;
  readonly VITE_REACT_APP_CLIENT_SECRET: string;
  readonly VITE_REACT_APP_CLIENT_ID: string;
  readonly VITE_REACT_APP_AUTH_URL: string;
  readonly VITE_REACT_APP_API_URL: string;
  readonly VITE_REACT_APP_SCOPES: string[];
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
