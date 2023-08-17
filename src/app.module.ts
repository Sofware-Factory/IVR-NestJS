import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TcpClientModule } from './tcp-client/tcp-client.module';

@Module({
  imports: [TcpClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
