import type { Config } from './config.interface';
const config = (): Config => ({
  nest: {
    port: parseInt(process.env.PORT as string, 10) || 3000,
  },
  swagger: {
    enabled: true,
    title: 'Multi Tenant Saas Application',
    description: 'The Multi Tenant Saas Application API Documentation',
    version: '1.0',
    path: 'api',
  },
});

export default config;
