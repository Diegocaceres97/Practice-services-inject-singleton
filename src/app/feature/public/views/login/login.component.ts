import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/shared/service/shared.service';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup; 
  users!: Users;
  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedService,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    
  }
  do(){
    let usuario= this.form.value.user;
    let password= this.form.value.password;
    let user!:any;
    this.shared.getAllUsers().subscribe(data =>{
      user = data;
      for (const iterator of user) {
        this.users = iterator;
        if(this.users.name == usuario && this.users.name == password){
          localStorage.setItem('login',this.users.id.toString());
          return this.router.navigate(['main']);
        }else{
          return alert("Usuario no encontrado")
        }
      }
    })
  }

}
