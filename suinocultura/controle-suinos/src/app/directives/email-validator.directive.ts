import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appEmailValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        }
    ],
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const IS_VALID = emailPattern.test(control.value);

        return IS_VALID ? null : { 'invalidEmail': true };
    }
}