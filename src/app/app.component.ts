import {Component} from '@angular/core';

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
      id: 'name'
    },
    {
      name: 'date',
      type: 'date',
      placeholder: 'Enter Date',
      label: 'Date',
      value: '',
      id: 'date'
    },
    {
      name: 'time',
      type: 'time',
      placeholder: 'Enter Time',
      label: 'Time',
      value: '',
      id: 'time'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      label: 'Password',
      value: '',
      id: 'password'
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
      ]
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
      ]
    },
    {
      name: 'description',
      type: 'textarea',
      placeholder: 'Write here',
      label: 'Description',
      value: '',
      id: 'description'
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
  ];

  log(f: any) {
    console.log('form is ', f);
  }

  fieldsChanged() {
    console.log('app component fields changed', this.fields);
  }
}
