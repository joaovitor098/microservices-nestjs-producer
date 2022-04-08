import { Body, Controller, Post } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { DTO } from './interfaces/dto';
@Controller()
export class TransporterController {
  constructor(private readonly TransportService: KafkaService) {}
  @Post('/menssage/send')
  send(@Body() dto: DTO) {
    return this.TransportService.sendMenssage(dto);
  }
}
