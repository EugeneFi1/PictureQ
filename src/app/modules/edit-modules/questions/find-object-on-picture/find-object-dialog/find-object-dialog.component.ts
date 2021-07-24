import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-choose-picture-dialog',
  templateUrl: './find-object-dialog.component.html',
  styleUrls: ['./find-object-dialog.component.less']
})
export class FindObjectDialogComponent {

  points: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  removePoint(idx: number) {
    this.points.splice(idx, 1)
  }

  getPoint(e: MouseEvent) {
    if (this.points.length < 5) {
      this.points.push({a: e.offsetX, b: e.offsetY});
    }
  }

}
