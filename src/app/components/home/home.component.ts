import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrUsers: User[]

  constructor(private usersService: UsersService) {
    this.arrUsers = []
  }

  async getUsers($event: string) {
    let name = $event
    try {
      let response = await this.usersService.getUsersByName(name);
      this.arrUsers = response.items.slice(1, 11);
      console.log(this.arrUsers);

    } catch (error) {
      console.log(error);
    }
  }
}
