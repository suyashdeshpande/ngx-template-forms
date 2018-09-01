import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-multiple-select',
  templateUrl: 'ngx-multiple-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMultipleSelectComponent),
      multi: true
    }
  ]
})

export class NgxMultipleSelectComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() name: string;
  @Input() id: string;
  @Input() hint: string;
  @Input() options: any[];
  @Input() canAdd: boolean;
  @Input() closeOnSelect: boolean;
  @Input() multiple: boolean;

  value: any;


  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectEvent(ev: any) {
    console.log('on select event multiple select', ev);
    this.selectChange.emit(ev);
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
    if (obj !== undefined) {
      this.value = obj;
    }
  }

  propChange = (_: any) => {
  };
}
