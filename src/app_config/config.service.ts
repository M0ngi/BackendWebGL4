import { Injectable } from '@nestjs/common';
import { ConfigService as ConfigurationService } from '@nestjs/config';
import { IMiscConfig } from './configs/misc.config';

@Injectable()
export class ConfigService extends ConfigurationService {
  getMiscConfig(): IMiscConfig {
    return this.getOrThrow<IMiscConfig>('miscConfig');
  }
}
