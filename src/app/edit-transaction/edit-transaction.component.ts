import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  acct_number: any[] = [];
  category_list: any[] = [];
  transactionObject: any = {
    "account_number": '',
    "date": "",
    "description": "",
    "credit": '',
    "debit": '',
    "category": ""
  };
  
  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.loadAccountNumber_list();
    this.loadCategory_list();
  }

  loadAccountNumber_list() {
    this.http.get("assets/account_number.json").subscribe((res:any)=>{
      this.acct_number = res.data;
    })
  }

  loadCategory_list() {
    this.http.get("assets/category.json").subscribe((res:any)=>{
      this.category_list = res.data;
    })
  }

  selectedType = 'Temp';
  
  onChangeCategory(changedCategory:any) {
    this.selectedType = changedCategory.target.value;
  }

  onAddTrans() {
    this.http.post("http://localhost:3000/data", this.transactionObject).subscribe((res:any)=>{
      alert("Transaction details added successfully !");
      this.router.navigate(['transactions']);
    })
  }
  onBack(){
    this.router.navigate(['transactions']);
  }

}
