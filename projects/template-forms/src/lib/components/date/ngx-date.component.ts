import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-date',
  templateUrl: 'ngx-date.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxDateComponent),
      multi: true
    }
  ]
})

export class NgxDateComponent implements OnInit, ControlValueAccessor {

  @Input() name: string;
  @Input() dateFormat: string;
  @Input() id: string;
  @Input() placeholder: string;
  value: any = '';

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
  }
}
