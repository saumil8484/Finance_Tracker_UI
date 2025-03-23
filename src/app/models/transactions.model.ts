export interface Transaction {
    account_number: number;
    transaction_id: number;
    date: string;
    description: string;
    credit: number;
    debit: number;
    category: string;
}