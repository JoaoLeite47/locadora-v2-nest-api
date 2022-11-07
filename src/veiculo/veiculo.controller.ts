import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('veículo')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um veículo',
  })
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculoService.create(createVeiculoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os veículos',
  })
  findAll() {
    return this.veiculoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um veículo pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.veiculoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um veículo pelo ID',
  })
  update(@Param('id') id: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculoService.update(id, updateVeiculoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um veículo pelo ID',
  })
  remove(@Param('id') id: string) {
    return this.veiculoService.remove(id);
  }
}
