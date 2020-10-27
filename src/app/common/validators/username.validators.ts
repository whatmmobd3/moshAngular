import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static cannotContainSpace(e: AbstractControl): ValidationErrors | null {
    if ((e.value as string).indexOf(' ') > 0)
      return { cannotContainSpace: true };
    return null;
  }

  static shouldBeUnique(e: AbstractControl): ValidationErrors | null {
    if (e.value === 'mosh') return { shouldBeUnique: true };

    return null;
  }
}
