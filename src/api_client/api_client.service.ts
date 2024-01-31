import { Injectable } from '@nestjs/common';
import { ConfigService } from '@app_config/config.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { GetHttpAction, PatchHttpAction, PostHttpAction } from './types';
import { AvailableAPIs } from './available-apis.enum';

@Injectable()
export class ApiClientService {
  private readonly baseUrl: string;
  constructor(
    route: string,
    private httpService: HttpService,
    apiLink: string,
  ) {
    this.baseUrl = `${apiLink}/${route}`
  }

  get<T = any>(opts?: GetHttpAction): Observable<any> {
    const { url, config } = opts ?? {};
    return this.httpService.get<any>(`${this.baseUrl}/${url ?? ''}`, config).pipe(
      map(res => {
        return res.data
      })
    )
  }

  post<T = any>(opts?: PostHttpAction): Observable<AxiosResponse<T, any>> {
    const { url, data, config } = opts ?? {};
    return this.httpService.post<AxiosResponse<T, any>>(`${this.baseUrl}/${url ?? ''}`, data, config).pipe(
      map(res => {
        return res.data
      })
    )
  }

  patch<T = any>(opts?: PatchHttpAction): Observable<AxiosResponse<T, any>> {
    const { url, data, config } = opts ?? {};
    return this.httpService.patch<AxiosResponse<T, any>>(`${this.baseUrl}/${url ?? ''}`, data, config).pipe(
      map(res => {
        return res.data
      })
    )
  }
}
