import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quest} from '../models/quest';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  public url = 'http://localhost:9003/';
  private createQuestUrl = this.url + 'quest/create';
  constructor(private http: HttpClient) { }

  createQuest(quest: Quest): void {
    this.http.post(this.createQuestUrl, quest);
  }
}
