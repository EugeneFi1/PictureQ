import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Quest} from '../models/api/quest';


@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private apiServerUrl = environment.backURL;

  constructor(private http: HttpClient) { }


  public getListOfQuests(): Observable<Quest[]>{
    return this.http.get<Quest[]>(`${this.apiServerUrl}/quest/get-all`);
  }

  public deleteQuest(questId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/quest/delete/${questId}`)
  }

  public updateQuest(questId: string, questUpdateModel: Quest): Observable<Quest>{
    return this.http.put<Quest>(`${this.apiServerUrl}/quest/${questId}/update`, questUpdateModel)
  }



}
