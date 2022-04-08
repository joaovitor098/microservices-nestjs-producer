import { Observable } from 'rxjs';
import { DTO } from './dto';

export interface IClientTransporter {
  sendMenssage(dto: DTO): Observable<any>;
}
