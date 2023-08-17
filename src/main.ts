import { NestFactory } from '@nestjs/core';
import { TcpClientModule } from './tcp-client/tcp-client.module'; // Cambia la ruta según tu estructura

async function bootstrap() {
  const app = await NestFactory.create(TcpClientModule);
  await app.listen(3000); // Puedes cambiar el puerto si lo deseas
}
bootstrap();
