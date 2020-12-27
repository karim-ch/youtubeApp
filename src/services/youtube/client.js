import { google } from 'googleapis';
import { getEnvVariables } from 'utils/env';

const { KEY } = getEnvVariables('KEY');

export default google.youtube({
  version: 'v3',
  auth: KEY,
});
