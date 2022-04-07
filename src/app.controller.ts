import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9093'],
      },
      consumer: {
        groupId: 'test-consumer',
      },
    },
  })
  client: ClientKafka;

  @Get()
  sendToStorage() {
    return this.client.emit('storage-test', {
      message: 'remove ice cream from storage',
    });
  }
}
