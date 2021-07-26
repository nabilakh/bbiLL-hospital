import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IVisitor } from '../interfases/visitors';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  selectedUser: IVisitor = {
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

  constructor(private http: HttpClient) { }

  postVisitor(user: IVisitor){
    return this.http.post(environment.API_URL+'/visitor/create',user);
  }


}
