import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageClientService {

  baseURL : string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  envoieMessageClient(message: any) {
    return this.http.post(this.baseURL + "/ws/message-client/add", message);
  }

}
