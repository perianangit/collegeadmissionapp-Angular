import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string;
  password!:string;


  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login()
  {
    const userObj={
      "email":"muthu@gmail.com",
      "password":"muthustudent@123"

    };
    const url="http://localhost:9000/userregister/login";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       this.toastr.success("successfully Logged In...");
     },(err)=>{
       console.log(err);
       this.toastr.error("You are not a registered user...... Please Register....");
     })

  }
  

}
