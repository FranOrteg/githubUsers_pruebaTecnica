import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) { }

  getUsersByName(pName: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`))
  }

  getUserByLogin(pLogin: string): Promise<any> {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}users/${pLogin}`)
    )
  }
}
