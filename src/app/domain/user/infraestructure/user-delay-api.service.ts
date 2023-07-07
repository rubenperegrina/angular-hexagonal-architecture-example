import { Injectable, inject } from '@angular/core';
import { IUserApiService } from './user-api.interface';
import { Observable, delay, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApiResponseUser } from './models/user-api-model';
import { IDomainResponseUser } from '../domain/user.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class UserDelayApiService implements IUserApiService {

    private _httpClient = inject(HttpClient);
    private readonly URL_USERS = '/users';

    getUsers(): Observable<IDomainResponseUser[]> {
        return this._httpClient.get<IApiResponseUser[]>(environment.api + this.URL_USERS).pipe(
            delay(2000),
            map((response) =>
                response.map((userApi) => ({
                    ...userApi
                })))
        )
    }
}
