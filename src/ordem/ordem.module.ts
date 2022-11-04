import { Module } from '@nestjs/common';
import { OrdemService } from './ordem.service';
import { OrdemController } from './ordem.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrdemController],
  providers: [OrdemService],
})
export class OrdemModule {}
