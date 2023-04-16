import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  myUser!: User | any
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let login = params.userlogin
      this.myUser = await this.userService.getUserByLogin(login)
    })
  }
}
