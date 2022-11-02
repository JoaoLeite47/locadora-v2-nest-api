import { Controller, Get, Post } from '@nestjs/common';
import { LojaService } from './loja.service';

@Controller('loja')
export class lojaController {
  constructor(private lojaService: LojaService) {}

  @Get()
  findAll() {
    return this.lojaService.findAll();
  }
  @Post()
  create() {
    return this.lojaService.create();
  }
}
