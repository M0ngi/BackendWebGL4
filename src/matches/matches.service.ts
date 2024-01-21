import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { GetMatchesOptions } from './dto/get-matches-options.dto';

@Injectable()
export class MatchesService {
  @Inject()
  private readonly apiService: ApiClientService;

  async getMatches(options: GetMatchesOptions) {
    return this.apiService.get({
      config: {
        params: {
          ...options,
        }
      }
    })
  }
}
