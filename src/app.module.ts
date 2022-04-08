import { Module } from '@nestjs/common';
import { TransporterController } from './transporter.controller';
import { KafkaService } from './kafka.service';

@Module({
  imports: [],
  controllers: [TransporterController],
  providers: [KafkaService],
})
export class AppModule {}
