import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async findById(id: string): Promise<Usuario> {
    const record = await this.prisma.usuario.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Usuario com o ID '${id}' não encontrado!`);
    } // caso o registro não seja encontrado, ele retorna um 404 not found

    return record;
  } // metodo para funções que utilizam o id para tratamento de error 404

  async findOne(id: string): Promise<Usuario> {
    return this.findById(id);
  }

  create(dto: CreateUsuarioDto): Promise<Usuario> {
    delete dto.confirmPassword;
    const data: Usuario = { ...dto };
    return this.prisma.usuario.create({ data }).catch(this.handleError);
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n'); // vai pegar as queblas de linhas do erro e separar a parte que me interessa
    const lastErrorLine = errorLines[errorLines.length - 1]; // me tras a ultima linha do erro, na qual o erro está melhor descrito
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro aconteceu na operação',
    );
  } // function para satisfazer o erro de criação de usuario com number duplicado

  async update(id: string, dto: UpdateUsuarioDto): Promise<Usuario> {
    await this.findById(id);

    delete dto.confirmPassword;

    const data: Partial<Usuario> = { ...dto };

    return this.prisma.usuario
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.prisma.usuario.delete({ where: { id } });
  } // como não tem retorno, é necessário por um async na função
}
