import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appUrlValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidationDirective, multi: true }]
})
export class UrlValidationDirective implements Validator {


  constructor() {

  }
  validate(c: FormControl): ValidationErrors | null {
    return UrlValidationDirective.validateUrl(c)
  }
  static validateUrl(control: FormControl): ValidationErrors | null {
    const pattern = "(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+"
    if (control.value?.match(pattern)) {
      return null;
    } else if (!(control.value?.match(pattern))) {
      console.log(control.value)

      return { err: 'Please enter Corrct URL (Ex:https://www.youtube.com/watch?v=k5E2AVpwsko)' };
    }
    // If no error, return null  
    return null;
  }
}





