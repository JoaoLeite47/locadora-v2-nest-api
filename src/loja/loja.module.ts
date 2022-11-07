import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { lojaController } from './loja.controller';
import { LojaService } from './loja.service';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [lojaController],
  providers: [LojaService],
})
export class LojaModule {}
