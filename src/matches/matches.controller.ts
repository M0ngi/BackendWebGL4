import { Controller, Get, Inject } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { SearchMatchesParams } from './decorators/search-matches.decorator';
import { GetMatchesOptions } from './dto/get-matches-options.dto';

@Controller('matches')
export class MatchesController {
  @Inject() private leaguesService: MatchesService

  @Get('')
  getNews(@SearchMatchesParams() options: GetMatchesOptions) {
    return this.leaguesService.getMatches(options);
  }
}
