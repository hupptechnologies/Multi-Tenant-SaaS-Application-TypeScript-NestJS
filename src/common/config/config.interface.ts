export interface Config {
  nest: NestConfig;
  swagger: SwaggerConfig;
}
export interface NestConfig {
  port: number;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}
