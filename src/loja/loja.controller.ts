import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { LojaService } from './loja.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist/decorators';
import { Loja } from './entities/loja.entity';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Loja')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('loja')
export class lojaController {
  constructor(private lojaService: LojaService) {}

  @Get()
  @ApiOperation({
    summary: 'Visualisar todas as lojas ',
  })
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
  @ApiOperation({
    summary: 'Cadastrar uma loja ',
  })
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojaService.create(createLojaDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar uma loja pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateLojaDto): Promise<Loja> {
    return this.lojaService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) //quando não se retorna nada em uma req, por padrão ela pode retornar 204
  @ApiOperation({
    summary: 'Remover uma loja pelo ID',
  })
  delete(@Param('id') id: string) {
    this.lojaService.delete(id);
  }
}
