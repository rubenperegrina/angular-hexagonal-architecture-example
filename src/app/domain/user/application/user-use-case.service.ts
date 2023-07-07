import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomainRequestUser } from '../domain/user.model';
import { HTTP_USER_SERVICE } from '../infraestructure/providers/user-api.provider';
import { IUserApiService } from '../infraestructure/user-api.interface';

@Injectable({
  providedIn: 'root'
})
export class UserUseCaseService {

  constructor(@Inject(HTTP_USER_SERVICE) private _userApiService: IUserApiService) { }

  getUsers(): Observable<IDomainRequestUser[]> {
    return this._userApiService.getUsers();
  }
}
