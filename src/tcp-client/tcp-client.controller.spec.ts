import { Test, TestingModule } from '@nestjs/testing';
import { TcpClientController } from './tcp-client.controller';

describe('TcpClientController', () => {
  let controller: TcpClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TcpClientController],
    }).compile();

    controller = module.get<TcpClientController>(TcpClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
