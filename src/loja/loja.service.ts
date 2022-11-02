import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { Loja } from './entities/loja.entity';

@Injectable()
export class LojaService {
  lojas: Loja[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.loja.findMany();
  }
  create(dto: CreateLojaDto) {
    const data: Loja = { ...dto };
    return this.prisma.loja.create({ data });
  }
}
