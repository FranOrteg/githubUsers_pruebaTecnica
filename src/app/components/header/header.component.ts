import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchForm: FormGroup;
  @Output() nombreEmitido: EventEmitter<string>

  constructor(private usersService: UsersService) {
    this.nombreEmitido = new EventEmitter
    this.searchForm = new FormGroup({
      name: new FormControl('', null)
    }, [])
  }

  getData(): void {
    this.nombreEmitido.emit(this.searchForm.value.name)
  }

}
