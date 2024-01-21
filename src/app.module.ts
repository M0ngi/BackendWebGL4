import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorldnewsModule } from './worldnews/worldnews.module';
import { TransfersModule } from './transfers/transfers.module';
import { MatchesModule } from './matches/matches.module';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import { AppConfigModule } from '@app_config/config.module';
import { ApiClientModule } from './api_client/api_client.module';
import { AllLeaguesModule } from './all-leagues/all-leagues.module';

@Module({
  imports: [
    AppConfigModule,
    TeamsModule,
    WorldnewsModule,
    TransfersModule,
    MatchesModule,
    LeaguesModule,
    ApiClientModule,
    AllLeaguesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
