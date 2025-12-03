import { Injectable, signal } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  getUsers() {
    return this.usersSignal
  }

  addUser(name: string, phone: number) {
    this.usersSignal.update((list) => {
      const updatedList = [...list, {id: 1, name, phone, joke: "joke"}]
      return updatedList
    })
  }

  deleteUser(user: User) {
    this.usersSignal.update((list) => {
      const updatedList = list.filter((index) => {
        return index != user
      })
      return updatedList
    })
  }

  tempUsers = [
    {id: 0, name: "Joe", phone: 1231231231, joke: "Joke"},
    {id: 1, name: "Joe2", phone: 1231231231, joke: "Joke2"},
    {id: 2, name: "Joe3", phone: 1231231231, joke: "Joke3"},
  ]

  usersSignal = signal(this.tempUsers)
}
