import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestConfig, SwaggerConfig } from './common/config/config.interface';
import { setupSwagger } from './common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const NestConfig = configService.get<NestConfig>('nest');
  const SwaggerConfig = configService.get<SwaggerConfig>('swagger');
  const port = NestConfig?.port ?? 3000;

  if (SwaggerConfig?.enabled) {
    setupSwagger(app);
  }

  console.info(`Server running on http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
