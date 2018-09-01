import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-password',
  templateUrl: 'ngx-password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxPasswordComponent),
      multi: true
    }
  ]
})

export class NgxPasswordComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() class: string;
  @Input() id: string;
  @Input() name: string;
  value: string = '';

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    console.log('passsword value', this.value);
    this.changeEmit.emit(ev);
    this.propChange(ev);
  }

  registerOnChange(fn: any): void {
    this.propChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  propChange = (_: any) => {

  }
}
