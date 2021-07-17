import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {QuestInter} from '../models/questInter';

import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private apiServerUrl = environment.backURL;

  constructor(private http: HttpClient) { }


  public getListOfQuests(): Observable<QuestInter[]>{
    return this.http.get<QuestInter[]>(`${this.apiServerUrl}/quest/get-all`);
  }

  public deleteQuest(questId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/quest/delete/${questId}`)
  }

  public updateQuest(questId: string, questUpdateModel: QuestInter): Observable<QuestInter>{
    return this.http.put<QuestInter>(`${this.apiServerUrl}/quest/${questId}/update`, questUpdateModel)
  }



}
