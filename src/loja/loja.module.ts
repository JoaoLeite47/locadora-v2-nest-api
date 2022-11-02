import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { lojaController } from './loja.controller';
import { LojaService } from './loja.service';

@Module({
  imports: [PrismaModule],
  controllers: [lojaController],
  providers: [LojaService],
})
export class LojaModule {}
