import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  acct_number: any[] = [];
  transactions: any[] = [];

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.loadAccountNumber_list();
    this.loadTransactions_list();
  }

  loadAccountNumber_list() {
    this.http.get("assets/account_number.json").subscribe((res:any)=>{
      this.acct_number = res.data;
    })
  }

  loadTransactions_list() {
    this.http.get("http://localhost:3000/data").subscribe((res:any)=>{
      this.transactions = res;
    })
  }

  selectedAcc = 0;
  onChangeAcc(changedAcc: any){
    this.selectedAcc = changedAcc.target.value;
  }

  ClearSearch(){
    this.ngOnInit();
    this.selectedAcc = 0;
  }

  onAdd(){
    this.router.navigate(['addTransactions']);
  }
}