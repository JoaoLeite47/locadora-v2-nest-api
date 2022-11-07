import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsUUID, IsInt, IsPositive, ValidateNested } from 'class-validator';
import { CreateOrdemVeiculoDto } from './create-order-veiculo.dto';

export class CreateOrdemDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: 'e1bc0c89-a319-44df-a6e9-db66fe7b956b',
  })
  usarioId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da loja que está realizando o pedido',
    example: 1,
  })
  lojaNumber: number;

  @ValidateNested({
    each: true,
  })
  @Type(() => CreateOrdemVeiculoDto)
  @ApiProperty({
    description: 'Lista com os IDs dos veículos que estão no pedido',
    type: [CreateOrdemVeiculoDto],
  })
  veiculos: CreateOrdemVeiculoDto[];
}
