import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsPositive } from 'class-validator';

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

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos veículos que estão no pedido',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  veiculos: string[];
}
