import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {FormField} from './interface/interface';
import {ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-forms',
  templateUrl: 'ngx-forms.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgxFormsComponent)
    }
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class NgxFormsComponent implements OnInit, ControlValueAccessor {
  fields: FormField[];
  @Input() formId = Math.random().toString(36).substring(7);
  @Input() group: string;
  @Input() form: any;
  validatorKeys: any;
  Object = Object;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(i: number, item: any) {
    return i;
  }

  valueChanged() {
    console.log('form in ngx form component is ', this.form);
    // console.log('form is ', this.form);
    this.propChange(this.fields);
    this.change.emit();
    // console.log('ngx forms component fields are', this.fields);
  }

  registerOnChange(fn: any): void {
    this.propChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.fields = obj;
    }
  }

  propChange = (_: any) => {
  };

}
