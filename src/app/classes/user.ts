import {UserAdress} from './user-adress';

export class User {
  public id: number;
  public firstname: String = '';
  public lastname: String = '';
  public email: String = '';
  public address: UserAdress = new UserAdress();
  public phone: String = '';
  public website: String = '';
}
