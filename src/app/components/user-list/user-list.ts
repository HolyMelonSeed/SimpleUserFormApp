import { Component, inject, Input, signal } from '@angular/core';
import { UserListItem } from './user-list-item/user-list-item';
import { UserStorageService } from '../../services/user-storage-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem, NgClass],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  checkFibonacci(id: number) {
    if (id < 0) return false;

    let a = 0;
    let b = 1;

    while (a < id) {
      const next = a + b;
      a = b;
      b = next;
    }

    return a == id;
  }

  userStorageService = inject(UserStorageService)

  usersSignal = this.userStorageService.getUsers()
}
