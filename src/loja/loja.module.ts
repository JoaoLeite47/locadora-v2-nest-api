import { Module } from '@nestjs/common';
import { lojaController } from './loja.controller';
import { LojaService } from './loja.service';

@Module({
  controllers: [lojaController],
  providers: [LojaService],
})
export class LojaModule {}
