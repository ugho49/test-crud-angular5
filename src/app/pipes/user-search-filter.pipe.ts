import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../classes/user';

@Pipe({
  name: 'userSearchFilter'
})
export class UserSearchFilterPipe implements PipeTransform {

  static removeAccents(value: String): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  static escapeString(value: String): string {
    return UserSearchFilterPipe.removeAccents(value.toLowerCase());
  }

  transform(items: User[], filter: String): any {
    if (!items) {
      return [];
    }

    if (!filter) {
      return items;
    }

    return items.filter(u => {
      const escapeFilter = UserSearchFilterPipe.escapeString(filter);
      const escapeFirstname = UserSearchFilterPipe.escapeString(u.firstname);
      const escapeLastname = UserSearchFilterPipe.escapeString(u.lastname);

      return escapeFirstname.includes(escapeFilter) || escapeLastname.includes(escapeFilter);
    });
  }

}
