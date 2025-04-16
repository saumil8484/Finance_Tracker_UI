import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  },
  {
    path: 'transactions/add',
    component: AddTransactionComponent
  },
  {
    path: 'transactions/edit/:id',
    component: EditTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
