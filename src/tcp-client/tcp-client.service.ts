import { Injectable } from '@nestjs/common';
import * as net from 'net';
import * as base64 from 'base64-js';

@Injectable()
export class TcpClientService {
  private responseId = '';

  async sendMessage(
    message: string,
    includeResponseId: boolean,
  ): Promise<string> {
    const ip =
      'ghost-main-static-cb9b8d8c4905430683721b19adeba6cc.ghostapi.app';
    const port = 60013;
    const timeout = 3000;

    if (includeResponseId && this.responseId) {
      message = message.replace(
        'FromCliBooking=',
        `FromCliBooking=${this.responseId},`,
      );
    }

    const encodedMessage =
      base64.fromByteArray(Buffer.from(message, 'utf-8')) + '\n\n';

    return new Promise((resolve, reject) => {
      const client = net.createConnection({ host: ip, port }, () => {
        client.write(encodedMessage);
      });

      client.setTimeout(timeout);

      client.on('data', (data) => {
        const response = data.toString('utf-8');

        if (response.includes('ResponseID=')) {
          this.responseId = response.split('ResponseID=')[1].trim();
        }

        const decodedResponse = Buffer.from(response, 'base64').toString(
          'utf-8',
        );
        console.log('Respuesta decodificada:', decodedResponse);

        client.end();
        resolve(decodedResponse);
      });

      client.on('timeout', () => {
        client.end();
        reject(new Error('Tiempo de espera agotado. No se recibió respuesta.'));
      });

      client.on('error', (err) => {
        client.end();
        reject(err);
      });
    });
  }

  getResponseId(): string {
    return this.responseId;
  }
}
