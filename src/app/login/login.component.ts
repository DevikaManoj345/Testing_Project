import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { find } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm ! : FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.LoginForm=this.formBuilder.group({
      Email:[''],
      Password:['']
    })
  }
  Login(){
    this.http.get<any>("http://localhost:3000/comments")
   
 
     .subscribe(res=>{
      const user =res.find((a:any)=>{
         return a.Email===this.LoginForm.value.Email && a.Password===this.LoginForm.value.Password
       });
       if(user){
         alert("Login  Success!!");
         this.LoginForm.reset();
         this.router.navigate(['dash']);
       }else{
         alert("user not found");
       }
      
     },err=>{
       alert("Something went wrong")
    }
     )
  }

}
