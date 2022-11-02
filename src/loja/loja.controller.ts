import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { LojaService } from './loja.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { Loja } from './entities/loja.entity';

@ApiTags('Loja')
@Controller('loja')
export class lojaController {
  constructor(private lojaService: LojaService) {}

  @Get()
  findAll() {
    return this.lojaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma loja',
  })
  findOne(@Param('id') id: string): Promise<Loja> {
    return this.lojaService.findOne(id);
  }

  @Post()
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojaService.create(createLojaDto);
  }
}
