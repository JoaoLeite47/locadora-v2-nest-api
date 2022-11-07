import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { OrdemService } from './ordem.service';
import { CreateOrdemDto } from './dto/create-ordem.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@ApiTags('order')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('ordem')
export class OrdemController {
  constructor(private readonly ordemService: OrdemService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar uma ordem',
  })
  create(@LoggedUser() user: Usuario, @Body() createOrdemDto: CreateOrdemDto) {
    return this.ordemService.create(user.id, createOrdemDto);
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
