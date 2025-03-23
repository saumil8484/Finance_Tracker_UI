import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: any[] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.loadTransactions_list();
  }

  loadTransactions_list() {
    this.http.get("assets/transactions_list.json").subscribe((res:any)=>{
      this.transactions = res.data;
    })
  }

}