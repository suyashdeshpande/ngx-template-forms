import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {logger} from 'codelyzer/util/logger';
import {log} from 'util';

@Component({
  selector: 'ngx-radio',
  templateUrl: 'ngx-radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgxRadioComponent)
    }
  ]
})

export class NgxRadioComponent implements OnInit, ControlValueAccessor {

  @Input() name: string;
  @Input() class: string;
  @Input() id: string;
  @Input() options: any;

  @Input() value: string;


  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    this.changeEmit.emit(ev);
    console.log('radio event', ev);
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
