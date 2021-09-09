import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {ValidFile} from "../../../../components/file-uploader/file-uploader.component";
import {AnswerInputQuestion} from "../../../../models/api/answer-input-question";

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.less']
})
export class AnswerQuestionComponent implements OnInit {

  answerQuestionForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  minLengthErrorMessage = ValidationMessage.minLength;

  checked: boolean = false;

  constructor(private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.answerQuestionForm = this.createForm()

  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      commonForm: this.formBuilder.group({
        question: new FormControl('', [Validators.required, Validators.minLength(10)]),
        description: new FormControl(),
        explanation: new FormControl()
      }),
      fileForm: this.formBuilder.group({
        file: new FormControl()
      }),
      answer: new FormControl('', [Validators.required])
    });
  }


  submit() {

    const answerInputQuestion: AnswerInputQuestion = {
      id: 1,
      question: this.answerQuestionForm.value.commonForm.question,
      description: this.answerQuestionForm.value.commonForm.description,
      explanation: this.answerQuestionForm.value.commonForm.explanation,
      rightAnswer: this.answerQuestionForm.value.answer
    }
    console.log(answerInputQuestion)
    // this.answerInputService.createAnswerInputQuestion(answerInputQuestion)
    // console.log(this.answerQuestionForm.value);
  }

}
