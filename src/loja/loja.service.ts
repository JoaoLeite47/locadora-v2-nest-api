import { Injectable } from '@nestjs/common';

@Injectable()
export class LojaService {
  findAll() {
    return 'buscar todas as lojas';
  }
  create() {
    return 'Cadastrar uma loja';
  }
}
