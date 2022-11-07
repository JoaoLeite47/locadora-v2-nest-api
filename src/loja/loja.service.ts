import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle.error.utils';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Loja } from './entities/loja.entity';

@Injectable()
export class LojaService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Loja[]> {
    return this.prisma.loja.findMany();
  }

  async findById(id: string): Promise<Loja> {
    const record = await this.prisma.loja.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Loja com o ID '${id}' não encontrado!`);
    } // caso o registro não seja encontrado, ele retorna um 404 not found

    return record;
  } // metodo para funções que utilizam o id para tratamento de error 404

  async findOne(id: string): Promise<Loja> {
    return this.findById(id);
  }

  create(dto: CreateLojaDto): Promise<Loja> {
    const data: Loja = { ...dto };
    return this.prisma.loja.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateLojaDto): Promise<Loja> {
    await this.findById(id);

    const data: Partial<Loja> = { ...dto };

    return this.prisma.loja
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.loja.delete({ where: { id } });
  } // como não tem retorno, é necessário por um async na função
}
