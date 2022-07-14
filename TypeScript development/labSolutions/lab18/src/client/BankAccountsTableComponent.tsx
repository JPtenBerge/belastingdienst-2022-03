import * as typedHtml from '../../node_modules/typed-html/dist/elements.js';
import { BankAccount } from '../shared/BankAccount.js';

export class BankAccountsTableComponent extends HTMLElement {
  private _accounts: BankAccount[] = [];

  public get accounts(): BankAccount[] {
    return this._accounts;
  }

  public set accounts(value: BankAccount[]) {
    this._accounts = value;
    this.updateTable();
  }

  public updateTable() {
    this.innerHTML = <table class="table">
        <thead>
            <tr>
                <th>Account</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
        {this.accounts
          .map(
            (account) =>
              <tr>
               <td>{account.iban.format()}</td>
               <td>{account.customer.format()}</td>
               </tr>
          )}
        </tbody>
        </table>;
  }
}
