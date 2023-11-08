import { Controller, Post, Body } from '@nestjs/common';
import { TcpClientService } from './tcp-client.service';
import { firstMessage } from './messages'; // Importa el mensaje del primer envío

@Controller('tcp-client')
export class TcpClientController {
  constructor(private readonly tcpClientService: TcpClientService) {}

  @Post('send-first-message')
  async sendFirstMessage(): Promise<{ response: string }> {
    const response = await this.tcpClientService.sendMessage(
      firstMessage,
      false,
    );

    return { response };
  }

  @Post('send-second-message')
  async sendSecondMessage(): Promise<{ response: string }> {
    const responseId = this.tcpClientService.getResponseId();

    // Construye el mensaje directamente aquí en lugar de usar secondMessage
    const newMessage = `MessageID=1\nMessageType=BookingRequest\nPassword=2yQQC[<6KiXuMM\`];%R&lv>-1,)a/Cfheacbc~|wI+DE:19[w4$TAqb\`9GX(~r^.\nFromCliBooking=1469,2\nBookedForNow=true\nPhoneSystemID=7778\nDialledNumber=6600000\nBaseAddress=1`;

    const response = await this.tcpClientService.sendMessage(newMessage, true);

    return { response };
  }
}
