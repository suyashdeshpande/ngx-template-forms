import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-time',
  templateUrl: 'ngx-time.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxTimeComponent),
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

export class NgxTimeComponent implements OnInit, ControlValueAccessor {

  @Input() name: string;
  @Input() timeFormat: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() form: any;
  @Input() validatorConfig: any;

  Object = Object;
  value: any = '';

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    this.changeEmit.emit(ev);
    // console.log('time change event', ev);
    this.propChange(ev._i);
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
