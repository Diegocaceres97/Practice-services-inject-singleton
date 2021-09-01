import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/shared/models/users.model';
@Injectable({
  providedIn: SharedService
})
export class SharedService {

  constructor(
    private http: HttpClient
  ) { }

getAllUsers() {
  return this.http.get<Users>(environment.api + 'users');
}
}
