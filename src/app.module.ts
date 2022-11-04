import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojaModule } from './loja/loja.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { VeiculoModule } from './veiculo/veiculo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { OrdemModule } from './ordem/ordem.module';

@Module({
  imports: [LojaModule, PrismaModule, VeiculoModule, UsuarioModule, OrdemModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
