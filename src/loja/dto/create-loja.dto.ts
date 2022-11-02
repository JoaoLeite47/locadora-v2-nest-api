import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateLojaDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O numero da loja',
    example: 1,
  })
  number: number;
}
// class validator e swagger para documentação nessa interface de interação
