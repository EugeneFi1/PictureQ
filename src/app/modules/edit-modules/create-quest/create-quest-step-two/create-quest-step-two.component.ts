import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ValidationMessage} from "../../../../models/labels/validation.message";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";
import {AnswerOptionComponent} from "../../questions/answer-option/answer-option.component";
import {MatchMatchesComponent} from "../../questions/match-matches/match-matches.component";
import {ChoosePictureComponent} from "../../questions/choose-picture/choose-picture.component";
import {FindObjectOnPictureComponent} from "../../questions/find-object-on-picture/find-object-on-picture.component";
import {AnswerQuestionComponent} from "../../questions/answer-question/answer-question.component";
import {questions} from "../../../../util/quest-option";

@Component({
  selector: 'app-create-quest-step-two',
  templateUrl: './create-quest-step-two.component.html',
  styleUrls: ['./create-quest-step-two.component.less']
})
export class CreateQuestStepTwoComponent implements OnInit {

  @Output() addPageBtn = new EventEmitter();
  @Output() bool = new EventEmitter();
  @Input() secondStepForm!: FormGroup;
  requiredErrorMessage = ValidationMessage.required;
  questNameErrorMessage = ValidationMessage.questName;
  questionType?: string;
  createAnother: boolean = false;
  questions = questions;

  constructor(private cdr: ChangeDetectorRef,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public chooseQuestionType(data: MatOptionSelectionChange): void {
    if (data.isUserInput) {
      this.questionType = data.source.value;
      this.cdr.detectChanges();
    }
  }

  public openDialog() {
    const dialogSetting = {
      width: '100%',
      height: '75%',
    }
    if (this.questionType === 'answer-option') {
      let dialogRef = this.dialog.open(AnswerOptionComponent, dialogSetting);
      dialogRef.afterClosed().subscribe(result => {

      });
    } else if (this.questionType === 'match-matches') {
      let dialogRef = this.dialog.open(MatchMatchesComponent, dialogSetting);
      dialogRef.afterClosed().subscribe(result => {

      });
    } else if (this.questionType === 'choose-right-picture') {
      let dialogRef = this.dialog.open(ChoosePictureComponent, dialogSetting);
      dialogRef.afterClosed().subscribe(result => {

      });
    } else if (this.questionType === 'find-object-on-the-picture') {
      let dialogRef = this.dialog.open(FindObjectOnPictureComponent, dialogSetting);
      dialogRef.afterClosed().subscribe(result => {

      });
    } else if (this.questionType === 'answer-question') {
      let dialogRef = this.dialog.open(AnswerQuestionComponent, dialogSetting);
      dialogRef.afterClosed().subscribe(result => {

      });
    }
  }

  public addPage() {
    this.addPageBtn.emit();
  }
}
