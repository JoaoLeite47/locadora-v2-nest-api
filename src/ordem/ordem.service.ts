import { Injectable } from '@nestjs/common';
import { CreateOrdemDto } from './dto/create-ordem.dto';
import { UpdateOrdemDto } from './dto/update-ordem.dto';

@Injectable()
export class OrdemService {
  create(createOrdemDto: CreateOrdemDto) {
    return 'This action adds a new ordem';
  }

  findAll() {
    return `This action returns all ordem`;
  }

  findOne(id: string) {
    return `This action returns a #${id} ordem`;
  }

  update(id: string, updateOrdemDto: UpdateOrdemDto) {
    return `This action updates a #${id} ordem`;
  }

  remove(id: string) {
    return `This action removes a #${id} ordem`;
  }
}
