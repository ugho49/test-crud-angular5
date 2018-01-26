import {UserAdress} from './user-adress';
import {UserCompagny} from './user-compagny';

export class User {
  public id: number;
  public name: String;
  public username: String;
  public email: String;
  public address: UserAdress;
  public phone: String;
  public website: String;
  public company: UserCompagny;
}
