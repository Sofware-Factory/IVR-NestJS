import { Module } from '@nestjs/common';
import { TcpClientService } from './tcp-client.service';
import { TcpClientController } from './tcp-client.controller';

@Module({
  providers: [TcpClientService],
  controllers: [TcpClientController]
})
export class TcpClientModule {}
