export interface Transaction {
    account_number: number;
    date: string;
    description: string;
    credit: number;
    debit: number;
    category: string;
}