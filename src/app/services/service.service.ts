import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const api= "http://localhost/eyecare/"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 

  constructor(private http:HttpClient) { }

  saveData(data)
  {
    return this.http.post(api + 'adduser.php',data);
  }

getData()
{
   return this.http.get(api+'getuser.php')
}
 
}
