import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormField} from './interface/interface';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-forms',
  templateUrl: 'ngx-forms.component.html',
  styles: [],
  viewProviders : [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class NgxFormsComponent implements OnInit {
  @Input() fields: FormField[];
  @Input() formId = Math.random().toString(36).substring(7);
  @Input() group: string;
  @Input() form: any;
  validatorKeys: any;
  Object = Object;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(i: number, item: any) {
    return i;
  }

  valueChanged() {
    console.log('form in ngx form component is ', this.form);
    // console.log('form is ', this.form);

    this.change.emit();
    // console.log('ngx forms component fields are', this.fields);
  }

}
