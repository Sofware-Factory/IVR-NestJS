import { Controller, Post, Body } from '@nestjs/common';
import { TcpClientService } from './tcp-client.service';

@Controller('tcp-client')
export class TcpClientController {
  constructor(private readonly tcpClientService: TcpClientService) {}

  @Post('send-message')
  async sendMessage(
    @Body() body: { message: string; responseId: string },
  ): Promise<{ response: string; newResponseId: string }> {
    const { message, responseId } = body;
    const result = await this.tcpClientService.sendMessage(message, false); // No incluir el valor de ResponseID en esta llamada

    const newMessage = `MessageID=1\nMessageType=BookingRequest\nPassword=2yQQC[<6KiXuMM\`];%R&lv>-1,)a/Cfheacbc~|wI+DE:19[w4$TAqb\`9GX(~r^.\nFromCliBooking=4029,1\nBookedForNow=false\nPickupDate=11082023\nPickutTime=0930\nPhoneSystemID=7778\nDialledNumber=6600000\nBaseAddress=1`;
    const resultWithResponseId = await this.tcpClientService.sendMessage(
      newMessage,
    );

    return resultWithResponseId;
  }
}
