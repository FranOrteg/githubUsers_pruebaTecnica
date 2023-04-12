import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchForm: FormGroup

  constructor(private usersService: UsersService) {
    this.searchForm = new FormGroup({
      name: new FormControl('', null)
    }, [])
  }

  async getData(): Promise<void> {
    try {
      let name = this.searchForm.value.name;
      let response = await this.usersService.getUsersByName(name)
      console.log(response)
    } catch (error) {
      console.log(error);


    }
  }

}
