import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  acct_number: any[] = [];
  category_list: any[] = [];

  constructor( private http: HttpClient ) { }

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

}
