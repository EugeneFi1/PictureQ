import {Injectable} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegExp} from "../../../../models/reg-exp/reg-exp";

@Injectable({
  providedIn:'root'
})
export class CreateQuestFormService {

  constructor(
    private formBuilder:FormBuilder
  ) {
  }

  public firstStepForm(): FormGroup{
    return this.formBuilder.group({
      name: new FormControl(null,[
        Validators.required,
        Validators.pattern(RegExp.nameRegExp)
      ]),
      description: new FormControl(null),
      explanation: new FormControl(null),
      replyStrategy: new FormControl([Validators.required]),
      // showStrategy: new FormControl([Validators.required]),
      fileForm: this.formBuilder.group({
        file: new FormControl(null,[Validators.required])
      })
    })
  }

  public secondStepForm(): FormGroup{
  return this.formBuilder.group({
  title: new FormControl(null,[
    Validators.required,
    Validators.pattern(RegExp.nameRegExp)
  ]),
  description: new FormControl(null),
  explanation: new FormControl(null)
})
}
}
