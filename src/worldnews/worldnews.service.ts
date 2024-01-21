import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { GetNewsOptions } from './dto/get-news-options.dto';

@Injectable()
export class WorldnewsService {
  @Inject()
  private readonly apiService: ApiClientService;

  async getNews(options: GetNewsOptions) {
    return this.apiService.get({
      config: {
        params: {
          ...options,
        }
      }
    })
  }
}
