import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUseCaseService } from 'src/app/domain/user/application/user-use-case.service';
import { IDomainRequestUser } from 'src/app/domain/user/domain/user.model';

@Component({
  selector: 'users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  private _userUseCaseService = inject(UserUseCaseService);
  listUsers: IDomainRequestUser[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this._userUseCaseService.getUsers().subscribe({
      next: (response) => {
        this.listUsers = response;
      }
    })
  }

  trackByFn(index: number, _item: unknown) {
    return index;
  }
}
