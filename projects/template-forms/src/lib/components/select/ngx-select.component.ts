import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormField} from '../../interface/interface';

@Component({
  selector: 'ngx-select',
  templateUrl: 'ngx-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSelectComponent),
      multi: true
    }
  ]
})

export class NgxSelectComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() name: string;
  @Input() id: string;
  @Input() options: any[];
  @Input() canAdd: boolean;
  @Input() closeOnSelect: boolean;

  value: string;


  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectEvent(ev: any) {
    this.propChange(this.value);
    // console.log('select value', this.value);
    this.selectChange.emit(ev);
    // console.log('on select event select', ev);
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
