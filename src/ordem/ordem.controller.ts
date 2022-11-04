import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdemService } from './ordem.service';
import { CreateOrdemDto } from './dto/create-ordem.dto';
import { UpdateOrdemDto } from './dto/update-ordem.dto';

@Controller('ordem')
export class OrdemController {
  constructor(private readonly ordemService: OrdemService) {}

  @Post()
  create(@Body() createOrdemDto: CreateOrdemDto) {
    return this.ordemService.create(createOrdemDto);
  }

  @Get()
  findAll() {
    return this.ordemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdemDto: UpdateOrdemDto) {
    return this.ordemService.update(id, updateOrdemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordemService.remove(id);
  }
}
