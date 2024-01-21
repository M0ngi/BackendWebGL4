import { Global, Module } from '@nestjs/common';
import { ApiClientService } from './api_client.service';
import { AppConfigModule } from '@app_config/config.module';
import { ConfigService } from '@app_config/config.service';
import { HttpService } from '@nestjs/axios';

@Global()
@Module({
  imports: [AppConfigModule]
})
export class ApiClientModule {
  static ServiceProvider(route: string) {
    return {
      useFactory: (configService: ConfigService, httpService: HttpService) => {
        return new ApiClientService(route, configService, httpService);
      },
      provide: ApiClientService,
      inject: [ConfigService, HttpService]
    }
  }
}
