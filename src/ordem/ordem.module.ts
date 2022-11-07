import { Module } from '@nestjs/common';
import { OrdemService } from './ordem.service';
import { OrdemController } from './ordem.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [OrdemController],
  providers: [OrdemService],
})
export class OrdemModule {}
