import { Injectable } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { Loja } from './entities/loja.entity';

@Injectable()
export class LojaService {
  lojas: Loja[] = [];

  findAll() {
    return this.lojas;
  }
  create(createLojaDto: CreateLojaDto) {
    const loja: Loja = { id: 'random_id', ...createLojaDto };
    this.lojas.push(loja);
    return loja;
  }
}
