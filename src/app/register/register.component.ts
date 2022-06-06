import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private http:HttpClient,private toastr: ToastrService) {}
   

  ngOnInit(): void {
  }
  register() {
     const userObj={
      
        "firstname":this.firstName,
        "lastname":this.lastName,
        "role":this.role,
        "mobilenumber":this.mobileNumber,
        "email":this.email,
        "password":this.password,
        "confirmpassword":this.confirmPassword
    
     };
     const url="http://localhost:9000/userregister/register";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       this.toastr.success("successfully Registered");
     },(err)=>{
       console.log(err);
       this.toastr.error("Please re-enter your Details");
     })
  }
}
