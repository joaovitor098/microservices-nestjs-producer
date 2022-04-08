import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { DTO } from './interfaces/dto';
import { IClientTransporter } from './interfaces/transporter';

@Injectable()
export class KafkaService implements IClientTransporter {
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

  sendMenssage(dto: DTO) {
    return this.client.emit(dto.pattern, {
      message: dto.message,
    });
  }
}
