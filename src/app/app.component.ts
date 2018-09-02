import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formId = 'formId';
  fields: any[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'enter name',
      label: 'Name',
      value: '',
      id: 'name',
      validators: {
        gt: {
          value: 10,
          message: 'Should be greater than 10'
        },
        required: {
          value: true,
          message: 'It is required  '
        }
      }
    },
    {
      name: 'date',
      type: 'date',
      placeholder: 'Enter Date',
      label: 'Date',
      value: '',
      id: 'date',
      validators: {
        minDate: {
          value: 'Sep 05, 2018',
          message: 'Min date is 5 Sept 2018'
        }
      }
    },
    {
      name: 'time',
      type: 'time',
      placeholder: 'Enter Time',
      label: 'Time',
      value: '',
      id: 'time',
      validators: {
        minTime: {
          value: '01:30 am',
          message: 'Min time is 1:30 am'
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      label: 'Password',
      value: '',
      id: 'password',
      validators: {
        required: {
          value: true,
          message: 'Password required'
        }
      }
    },
    {
      name: 'location',
      type: 'select',
      placeholder: 'Enter Location',
      label: 'Location',
      value: '',
      id: 'location',
      options: [
        {
          id: 1,
          label: 'Bhopal',
          value: 'bhopal'
        },
        {
          id: 2,
          label: 'Indore',
          value: 'indore'
        }
      ],
      validators: {
        required: {
          value: true,
          message: 'Single Location Required'
        }
      }
    },
    {
      name: 'multipleLocation',
      type: 'multiple-select',
      placeholder: 'Enter multiple Location',
      label: 'Multiple Location',
      value: '',
      id: 'multipleLocation',
      options: [
        {
          id: 3,
          label: 'Bhopal',
          value: 'bhopal'
        },
        {
          id: 4,
          label: 'Indore',
          value: 'indore'
        }
      ],
      validators: {
        required: {
          value: true,
          message: 'Single Location Required'
        }
      }
    },
    {
      name: 'description',
      type: 'textarea',
      placeholder: 'Write here',
      label: 'Description',
      value: '',
      id: 'description',
      validators: {
        maxLength: {
          value: 10,
          message: 'Max length is 10'
        }
      }
    },
    {
      name: 'gender',
      type: 'radio',
      label: 'Gender',
      value: '',
      id: 'gender',
      options: [
        {
          id: 5,
          label: 'M',
          value: 'm'
        },
        {
          id: 6,
          label: 'F',
          value: 'f'
        }
      ]
    },
    {
      name: 'alphabets',
      type: 'checkbox',
      label: 'Alphabets',
      value: '',
      id: 'alpha',
      options: [
        {
          id: 9,
          label: 'A',
          value: 'a',
          name: 'A'
        },
        {
          id: 10,
          label: 'B',
          value: 'b',
          name: 'B'
        }
      ]
    },
  ];

  submit(f: any) {
    Object.keys(f.form.controls).forEach(field => {
      const control = f.form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if (f.form.valid) {
      console.log('form is ', f);
    }
  }

  fieldsChanged() {
    console.log('app component fields changed', this.fields);
  }
}
