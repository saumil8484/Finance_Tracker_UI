import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  acct_number: any[] = [];
  category_list: any[] = [];
  transaction_id: any;
  transactions: any[] = [];
  selected_transaction: any[] = [];
  transactionObject: any = {
    "account_number": '',
    "date": "",
    "description": "",
    "credit": '',
    "debit": '',
    "category": ""
  };
  
  constructor( private route: ActivatedRoute, private http: HttpClient, private router: Router ) { }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        this.transaction_id = id;
        console.log(this.transaction_id);
      }
    })
    this.loadTransactions_list();
    this.loadAccountNumber_list();
    this.loadCategory_list();
    this.selected_transactions();
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

  loadTransactions_list() {
    this.http.get("http://localhost:3000/data").subscribe((res:any)=>{
      this.transactions = res;
    })
  }

  selected_transactions() {
    console.log(this.transactions)
    for(let element of this.transactions)
      {
        /*if(this.transaction_id == element.id)
        {
          this.selected_transaction = element.id;
          console.log(element.credit)
        }*/
      }
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
