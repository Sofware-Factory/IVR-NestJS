import { Controller, Post, Body } from '@nestjs/common';
import { TcpClientService } from './tcp-client.service';

@Controller('tcp-client')
export class TcpClientController {
  constructor(private readonly tcpClientService: TcpClientService) {}

  @Post('send-message')
  async sendMessage(@Body('message') message: string): Promise<string> {
    return this.tcpClientService.sendMessage(message);
  }
}
