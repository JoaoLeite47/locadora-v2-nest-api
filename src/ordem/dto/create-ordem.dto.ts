import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsPositive, ValidateNested } from 'class-validator';
import { CreateOrdemVeiculoDto } from './create-order-veiculo.dto';

export class CreateOrdemDto {
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
