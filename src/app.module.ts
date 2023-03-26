import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DataModule } from './data/data.module';
import { GuildModule } from './guild/guild.module';

@Module({
  imports: [UserModule, DataModule, GuildModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
