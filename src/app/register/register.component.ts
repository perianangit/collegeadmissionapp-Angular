import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  role!: string;
  mobileNumber!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;


  constructor(private http:HttpClient) {}
   

  ngOnInit(): void {
  }
  register() {
     const userObj={
      
        "firstname":"dube",
        "lastname":"A",
        "role":"Student",
        "mobilenumber":"0986766621",
        "email":"dube@gmail.com",
        "password":"duberstudent@123",
        "confirmpassword":"duberstudent@123"
    
     };
     const url="http://localhost:9000/userregister/register";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       alert("successfully Registered");
     },(err)=>{
       console.log(err);
       alert("Please re-enter your Details");
     })
  }
}
