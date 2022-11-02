import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Loja } from './entities/loja.entity';

@Injectable()
export class LojaService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Loja[]> {
    return this.prisma.loja.findMany();
  }

  findOne(id: string): Promise<Loja> {
    return this.prisma.loja.findUnique({ where: { id } });
  }

  create(dto: CreateLojaDto): Promise<Loja> {
    const data: Loja = { ...dto };
    return this.prisma.loja.create({ data });
  }

  update(id: string, dto: UpdateLojaDto): Promise<Loja> {
    const data: Partial<Loja> = { ...dto };

    return this.prisma.loja.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.loja.delete({ where: { id } });
  } // como não tem retorno, é necessário por um async na função
}
