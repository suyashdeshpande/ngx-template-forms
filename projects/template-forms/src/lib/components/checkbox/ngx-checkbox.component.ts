import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: 'ngx-checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgxCheckboxComponent)
    }
  ]
})

export class NgxCheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() name: string;
  @Input() checked: boolean;
  @Input() value: string;
  @Input() id: string;
  @Input() class: string;
  @Input() label: string;
  @Input() labelClass: string;
  @Input() options: any;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    console.log('checkbox changed', ev);
    this.changeEmit.emit(ev);
    this.propChange(this.value);
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
      this.value = obj;
    }
  }

  propChange = (_: any) => {
  };
}
