import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.viewregistereduser();
  }
  user:any;
  applicationId!:number; 
  viewregistereduser()
  {
    // console.log(this.applicationId);
    const url="http://localhost:9000/application/searchby?application_id="+this.applicationId;
    this.http.get(url,{responseType:'json'}).subscribe((res)=>{
      this.user= res;
      console.log(res);
      if(res==null){
        this.toastr.success("No records found.....");
      }
      else{
        this.toastr.success("The details of the applicants Are.....");
      }
      
    },err=>{ 
       console.log(err);
       
       this.toastr.error("Enter a valid id");
    }

    );
  }

}
      
      
      
      
      
      
      
      
      
      
    
