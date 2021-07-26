import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { VisitorsService } from '../../../services/visitors.service'

@Component({
  selector: 'app-form-input-visitors',
  templateUrl: './form-input-visitors.component.html',
  styleUrls: ['./form-input-visitors.component.css'],
})
export class FormInputVisitorsComponent implements OnInit {

  showSucessMessage: boolean | undefined;
  serverErrorMessages: string | undefined;

  constructor(public visitorsService: VisitorsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this. visitorsService.postVisitor(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this. visitorsService.selectedUser = {
  queueNumber: '',
  visitorName: '',
  email: '',
  phoneNumber: '',
  Address: '',
  patientComplaints: '',
  doctorName: '',
  scheduleDate: '',
  scheduleTime: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
