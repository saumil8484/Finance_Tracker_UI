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
    this.visibleTransactions;
    this.totalVisibleCredits;
    this.totalVisibleDebits;
    this.visibleTotal;
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
    this.visibleTransactions;
    this.totalVisibleCredits;
    this.totalVisibleDebits;
    this.visibleTotal;
  }

  ClearSearch(){
    this.ngOnInit();
    this.selectedAcc = 0;
  }

  onAdd(){
    this.router.navigate(['addTransactions']);
  }

  get visibleTransactions() {
    if (this.selectedAcc == 0) {
      return this.transactions.filter( transactions => transactions.account_number );
    } else {
      return this.transactions.filter( transactions => transactions.account_number == this.selectedAcc ); 
    }
  }

  get totalVisibleCredits() {
    return this.visibleTransactions.reduce((sum, transactions) => sum + Number(transactions.credit), 0);
  }

  get totalVisibleDebits() {
    return this.visibleTransactions.reduce((sum, transactions) => sum + Number(transactions.debit), 0);
  }

  get visibleTotal(){
    return this.totalVisibleCredits-this.totalVisibleDebits
  }
}