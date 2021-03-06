import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: 'ngx-checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgxCheckboxComponent)
    }
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
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
  @Input() form: any;
  @Input() validatorConfig: any;
  @Input() options: any;

  Object = Object;

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
