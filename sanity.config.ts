import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas';

const config = defineConfig({
   projectId: '9dq0fe83',
   dataset: 'production',
   title: 'my sanity next website',
   apiVersion: '2024-06-28',
   basePath: '/admin', // important that basepath matches the route you are mounting to your studio
   plugins: [structureTool(),],
   schema: { types: schemas }
});

export default config;