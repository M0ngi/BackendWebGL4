import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { GetLeagueOptions } from './dto/get-league-options.dto';
// import Fotmob from 'fotmob';

@Injectable()
export class LeaguesService {
  @Inject()
  private readonly apiService: ApiClientService;

  async getLeague(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    })
  }
}
