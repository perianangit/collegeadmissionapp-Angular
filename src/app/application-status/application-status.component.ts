import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.applicationstatus();
  }
  user:any;
  userId!:number;

  applicationstatus()
  {
    console.log(this.userId);
    const url="http://localhost:9000/application/userstatus?user_id="+this.userId;
    this.http.get(url,{responseType:'json'}).subscribe((res)=>{
      this.user= res;
      console.log("res is",res);
       
      this.toastr.success("Application Status Approved...")
    },err=>{ 
      
         this.user=err.error.text;
      
      console.log(err.error.text);
    }

    );
  }

}
