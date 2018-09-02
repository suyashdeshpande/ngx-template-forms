import {NgModule} from '@angular/core';
import {NgxFormsComponent} from './ngx-forms.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  NgxCheckboxComponent,
  NgxDateComponent,
  NgxInputComponent,
  NgxMultipleSelectComponent,
  NgxPasswordComponent, NgxRadioComponent,
  NgxSelectComponent, NgxTextAreaComponent,
  NgxTimeComponent
} from './components';
import {HttpClientModule} from '@angular/common/http';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgxFlatpickrModule} from '@harryy/ngx-flatpickr';
import {NgxTimepickerModule} from '@harryy/ngx-timepicker';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPasswordToggleModule} from 'ngx-password-toggle';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    NgxFlatpickrModule.forRoot(),
    NgxTimepickerModule.forRoot(),
    NgSelectModule,
    NgxPasswordToggleModule
  ],
  declarations: [
    NgxFormsComponent,
    NgxFormsComponent,
    NgxCheckboxComponent,
    NgxDateComponent,
    NgxInputComponent,
    NgxMultipleSelectComponent,
    NgxPasswordComponent,
    NgxRadioComponent,
    NgxSelectComponent,
    NgxTextAreaComponent,
    NgxTimeComponent
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    CustomFormsModule,

    // Components
    NgxFormsComponent,
    NgxCheckboxComponent,
    NgxDateComponent,
    NgxInputComponent,
    NgxMultipleSelectComponent,
    NgxPasswordComponent,
    NgxRadioComponent,
    NgxSelectComponent,
    NgxTextAreaComponent,
    NgxTimeComponent
  ]
})
export class NgxFormsModule {
}
