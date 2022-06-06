import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-application-approval',
  templateUrl: './application-approval.component.html',
  styleUrls: ['./application-approval.component.css']
})
export class ApplicationApprovalComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.applicationapproval();
  }
  user:any;
  applicationId!:number; 
  
  applicationapproval()
  {
    console.log(this.applicationId);
    const url="http://localhost:9000/application/applicationstatus?application_id="+this.applicationId;
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
