import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AllLeaguesService {
  @Inject()
  private readonly apiService: ApiClientService;

  getAll() {
    return this.apiService.get()
  }
}
