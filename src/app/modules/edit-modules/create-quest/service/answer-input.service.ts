import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment"
import {Observable} from "rxjs";
@Injectable()
export class AnswerInputService{
  constructor(private http: HttpClient) {
  }
  backUrl = environment.backURL;

  createAnswerInputQuestion(questionModel: any): Observable<any>{
    return this.http.post(`${this.backUrl}/quest-answer-input/create`, questionModel)
  }
}
