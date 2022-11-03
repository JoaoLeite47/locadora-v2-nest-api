import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';

@Injectable()
export class VeiculoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Veiculo[]> {
    return this.prisma.veiculo.findMany();
  }

  async findById(id: string): Promise<Veiculo> {
    const record = await this.prisma.veiculo.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Veiculo com o ID '${id}' não encontrado!`);
    } // caso o registro não seja encontrado, ele retorna um 404 not found

    return record;
  } // metodo para funções que utilizam o id para tratamento de error 404

  async findOne(id: string): Promise<Veiculo> {
    return this.findById(id);
  }

  create(dto: CreateVeiculoDto): Promise<Veiculo> {
    const data: Veiculo = { ...dto };
    return this.prisma.veiculo.create({ data }).catch(this.handleError);
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n'); // vai pegar as queblas de linhas do erro e separar a parte que me interessa
    const lastErrorLine = errorLines[errorLines.length - 1]; // me tras a ultima linha do erro, na qual o erro está melhor descrito
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro aconteceu na operação',
    );
  } // function para satisfazer o erro de criação de veiculo com number duplicado

  async update(id: string, dto: UpdateVeiculoDto): Promise<Veiculo> {
    await this.findById(id);

    const data: Partial<Veiculo> = { ...dto };

    return this.prisma.veiculo
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.prisma.veiculo.delete({ where: { id } });
  } // como não tem retorno, é necessário por um async na função
}
