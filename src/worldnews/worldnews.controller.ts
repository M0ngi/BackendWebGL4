import { Controller, Inject } from '@nestjs/common';
import { WorldnewsService } from './worldnews.service';
import { SearchNewsParams } from './decorators/search-team.decorator';
import { GetNewsOptions } from './dto/get-news-options.dto';

@Controller('worldnews')
export class WorldnewsController {
  @Inject() private leaguesService: WorldnewsService

  getNews(@SearchNewsParams() options: GetNewsOptions) {
    return this.leaguesService.getNews(options);
  }
}
