import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        this.miValidador
      ])
    }, [])
  }

  miValidador(control: AbstractControl) {
    if (control.value === 'mariogiron') {
      return { 'miValidador': true }
    };
    return null

  }

  getData(): void {
    this.nombreEmitido.emit(this.searchForm.value.name)
  }

}
