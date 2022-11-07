import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateVeiculoDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do veículo',
    example: 'Onix',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'Descrição do veículo',
    example: 'Veículo de cor azul ',
  })
  description: string;
  @IsNumber({
    maxDecimalPlaces: 6,
  })
  @ApiProperty({
    description: 'Valor do veículo',
    example: 140000,
  })
  price: number;
  @IsUrl()
  @ApiProperty({
    description: 'Imagem do veículo',
    example:
      'https://orca.com.br/uploads/products/versions/branco-summit-novo-onix.png',
  })
  image: string;
}
