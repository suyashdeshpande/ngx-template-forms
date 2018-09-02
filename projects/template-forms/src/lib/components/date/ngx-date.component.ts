import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-date',
  templateUrl: 'ngx-date.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxDateComponent),
      multi: true
    }
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})

export class NgxDateComponent implements OnInit, ControlValueAccessor {

  @Input() name: string;
  @Input() dateFormat: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() validatorConfig: any;
  @Input() form: any;
  value: any = '';

  Object = Object;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    // console.log('date value', this.value._i);
    // console.log('date changed event', ev);
    this.propChange(this.value._i);
    this.changeEmit.emit(ev);
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
