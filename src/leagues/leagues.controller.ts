import { Controller, Get, Inject, Param } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { SearchLeagueParams } from './decorators/search-league.decorator';
import { GetLeagueOptions } from './dto/get-league-options.dto';

@Controller('leagues')
export class LeaguesController {
  @Inject() private leaguesService: LeaguesService

  constructor() { }

  @Get(':id')
  getLeague(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeague(id, options);
  }
}
