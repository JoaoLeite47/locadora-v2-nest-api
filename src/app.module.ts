import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojaModule } from './loja/loja.module';

@Module({
  imports: [LojaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
