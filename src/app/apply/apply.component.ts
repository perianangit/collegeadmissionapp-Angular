import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  userId!:string;
  fatherName!:string;
  motherName!:string;
  dob!:any;
  nationality!:string;
  gender!:string;
  sslcBoard!:string;
  sslcMark!:any;
  sslcYear!:number;
  hscBoard!:string;
  hscStream!:string;
  hscPercentage!:any;
  hscYear!:number;
  department!:string;
  applicationStatus!:string;
  address!:string;
  district!:string;
  state!:string;

  years: number[] = []; 

  constructor(private http:HttpClient,private toastr: ToastrService) {
    
    for (let year = 2050; year >= 2000; year--) {
      this.years.push(year);


    }
   }

  ngOnInit(): void {
  }

  apply(){
    const userObj={
      "userId":"1",
      "fathername":this.fatherName,
      "mothername":this.motherName,
      "dob":this.dob,
      "nationality":this.nationality,
      "gender":this.gender,
      "sslcboard":this.sslcBoard,
      "sslcmark":this.sslcMark,
      "sslcyearofpassing":this.sslcYear,
      "hscboard":this.hscBoard,
      "hscstream":this.hscStream,
      "hscpercentage":this.hscPercentage,
      "hscyearofpassing":this.hscYear,
      "department":"yet to select",
      "appliactionstatus":"pending",
      "address":this.address,
      "district":this.district,
      "state":this.state
    }
    console.log(userObj);
    console.log(this.sslcBoard);

    const url="http://localhost:9000/application/apply";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      console.log(userObj);
      this.toastr.success("successfully applied");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter your Details");
    })
  }

}
