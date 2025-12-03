import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  getUsers() {
    return this.tempUsers
  }

  addUser() {
    
  }

  deleteUser() {
    
  }

  tempUsers = [
    {id: 0, name: "Joe", phone: 1231231231, joke: "Joke"},
    {id: 1, name: "Joe2", phone: 1231231231, joke: "Joke2"},
    {id: 2, name: "Joe3", phone: 1231231231, joke: "Joke3"},
  ]
}
