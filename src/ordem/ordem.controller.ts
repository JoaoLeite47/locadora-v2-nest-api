import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdemService } from './ordem.service';
import { CreateOrdemDto } from './dto/create-ordem.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('order')
@Controller('ordem')
export class OrdemController {
  constructor(private readonly ordemService: OrdemService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar uma ordem',
  })
  create(@Body() createOrdemDto: CreateOrdemDto) {
    return this.ordemService.create(createOrdemDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as ordens',
  })
  findAll() {
    return this.ordemService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma ordem pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.ordemService.findOne(id);
  }
}
