import { Observable } from 'rxjs';
import { IDomainRequestUser } from '../domain/user.model';

export interface IUserApiService {
	getUsers(): Observable<IDomainRequestUser[]>;
}
