import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static cannotContainSpace(e: AbstractControl): ValidationErrors | null {
    if ((e.value as string).indexOf(' ') > 0)
      return { cannotContainSpace: true };
    return null;
  }

  static shouldBeUnique(e: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (e.value === 'mosh') resolve({ shouldBeUnique: true });
        else resolve(null);
      });
    });
  }
}
