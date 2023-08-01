export const appConfig = {
  apiUrl: {
    dev: 'http://localhost:8000',
    prod: import.meta.env.REACT_APP_API_URL, // this var require on server
  },
  tokenStorageKey: '_projectNameAccessToken', // _[projectName]AccessToken
  siteName: 'Start Template',
  sentrySettings: {
    dsn: 'project_dsn_link',
  },
  projectName: 'projectName',
};
