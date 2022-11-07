import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOrdemVeiculoDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do veículo',
    example: '04f66779-bcfa-4c5c-a140-f234138890f3',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de itens no pedido',
    example: 1,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Cor azul',
  })
  description: string;
}
