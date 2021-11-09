import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public RegisterForm ! : FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.RegisterForm=this.formBuilder.group({
      Username:[''],
      Email:[''],
      Password:['']
    })
  }
  Register(){
    this.http.post<any>("http://localhost:3000/comments",this.RegisterForm.value)
    .subscribe(res=>{
      alert("Registered Successfully!!");
      this.RegisterForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    }
    )
  }

}
