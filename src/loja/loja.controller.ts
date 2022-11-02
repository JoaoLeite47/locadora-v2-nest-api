import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { LojaService } from './loja.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

@ApiTags('Loja')
@Controller('loja')
export class lojaController {
  constructor(private lojaService: LojaService) {}

  @Get()
  findAll() {
    return this.lojaService.findAll();
  }
  @Post()
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojaService.create(createLojaDto);
  }
}
