export const GlobalComponent = {
  headerToken: { Authorization: `Bearer ${localStorage.getItem('token')}` },

  AUTH_API: 'http://localhost:9056/auth/',

  API_URL: 'http://localhost:9056/',
  API_URL2: 'http://localhost:1922/',

  models: 'modelSTT/',

  user: 'user/',
  RECLAMATION: 'reclamation/',
  POST: 'posts/',
  COMMENT: 'comments/',
  TRANSPORT: 'transport',
};
