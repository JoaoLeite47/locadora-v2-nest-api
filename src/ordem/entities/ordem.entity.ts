import { Loja } from 'src/loja/entities/loja.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Veiculo } from 'src/veiculo/entities/veiculo.entity';

export class Ordem {
  id?: string;
  user?: Usuario;
  table?: Loja;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Veiculo[];
}
