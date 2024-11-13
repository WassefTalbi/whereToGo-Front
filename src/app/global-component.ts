export const GlobalComponent = {
  headerToken: { Authorization: `Bearer ${localStorage.getItem('token')}` },

  API_URL2: 'http://localhost:1922/',
  AUTH_API : 'http://localhost:9056/auth/',
  API_URL : 'http://localhost:9056/',
  EVENEMENT:'evenement/',
  models: 'modelSTT/',
  ETABLISSEMENT:'etablissement/',
  user: 'user/',
  RECLAMATION: 'reclamation/',
  POST: 'posts/',
  COMMENT: 'comments/',
  TRANSPORT: 'transport',
};
