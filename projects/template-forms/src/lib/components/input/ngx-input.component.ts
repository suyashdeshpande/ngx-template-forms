import {ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-input',
  templateUrl: 'ngx-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputComponent),
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

export class NgxInputComponent implements OnChanges, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() type: string;
  @Input() name: string;
  @Input() id: string;
  value: string;
  @Input() hint: string;
  @Input() validatorConfig: any;
  @Input() form: any;

  Object = Object;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _ref: ChangeDetectorRef) {
  }

  ngOnChanges() {
  }

  change(ev: any) {
    this.changeEmit.emit(ev);
    this.valueChanged(ev);
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
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

  valueChanged = (_: any) => {
  };
}
