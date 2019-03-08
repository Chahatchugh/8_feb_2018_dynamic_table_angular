import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  data: object = [
    {
        id : 1 ,
        firstname : ' ayush ',
        lastname : 'sharma',
        email : 'ayush@gmail.com',
        phone_number : 9992738492,
        date_of_birth : ' 28/01/1997',
        designation : 'Project Manager'
    },
    {
      id : 2 ,
      firstname : ' ayushi ',
      lastname : 'singha',
      email : 'ayushi@gmail.com',
      phone_number : 9992738455,
      date_of_birth : ' 18/12/1997',
      designation : 'Senior Project Manager'
    },
    {
      id : 3 ,
      firstname : ' komal ',
      lastname : 'thukral',
      email : 'komal@gmail.com',
      phone_number : 892638472,
      date_of_birth : ' 20/01/1987',
      designation : 'Quality analyst'
    },
    {
      id : 4 ,
      firstname : ' vaibhav ',
      lastname : 'gupta',
      email : 'vaibhav@gmail.com',
      phone_number : 9662738492,
      date_of_birth : '8/11/1999',
      designation : 'Trainee'
    },
    {
      id : 5 ,
      firstname : ' Arun ',
      lastname : 'negi',
      email : 'aruh@gmail.com',
      phone_number : 9992734492,
      date_of_birth : ' 13/06/1995',
      designation : 'Software Engineer'
    },
] ;
setData( content){
  content = this.data ;
}
getData(){
  return this.data;
}
getColumns() {
  return Object.keys(this.data[0]);
}
}
