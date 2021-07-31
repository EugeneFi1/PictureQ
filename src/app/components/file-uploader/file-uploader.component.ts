import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormGroupName} from '@angular/forms';
import {ValidationMessage} from '../../models/labels/validation.message';

export class ValidFile {
  selectedFile?: File;
  isHeavier?: boolean;
  imgUrl?: string | null | ArrayBuffer;
  name?: string;
  weight?: string;
  isRightExpansion?: boolean = true;
}

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.less']
})
export class FileUploaderComponent {

  @ViewChild('inp') input!: ElementRef;
  @Input() parentForm!: FormGroup;
  @Output() correctFile = new EventEmitter<ValidFile>();

  updatedFile: ValidFile = new ValidFile();
  fileWeightErrorMessage = ValidationMessage.weight;
  fileExpansionErrorMessage = ValidationMessage.expansion;

  constructor() {
  }

  public onFileSelected($event: any): void {
    this.updatedFile.selectedFile = $event.target.files[0];
    if (this.updatedFile.selectedFile) {
      this.updatedFile.weight = this.bytesToSize(this.updatedFile.selectedFile.size);
      this.updatedFile.name = this.updatedFile.selectedFile.name;
      this.updatedFile.isHeavier = this.updatedFile.selectedFile.size >= 1e6;
      this.updatedFile.isRightExpansion =
        this.updatedFile.selectedFile.type === 'image/png' ||
        this.updatedFile.selectedFile.type === 'image/jpeg' ||
        this.updatedFile.selectedFile.type === 'image/jpg';
      const reader = new FileReader();
      reader.readAsDataURL(this.updatedFile.selectedFile);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          if (this.updatedFile.isHeavier || !this.updatedFile.isRightExpansion) {
            this.updatedFile.imgUrl = null;
            this.correctFile.emit(this.updatedFile);
          } else {
            this.updatedFile.imgUrl = reader.result;
            this.correctFile.emit(this.updatedFile);
          }
        };
      };
    } else {
      this.updatedFile.selectedFile = undefined;
      this.updatedFile.imgUrl = null;
      this.updatedFile.isHeavier = false;
      this.updatedFile.weight = undefined;
      this.updatedFile.name = undefined;
      this.updatedFile.isRightExpansion = true;
      this.input.nativeElement.value = '';
      this.correctFile.emit(this.updatedFile);
    }
  }

  public resetImg(): void {
    this.updatedFile.selectedFile = undefined;
    this.updatedFile.imgUrl = undefined;
    this.updatedFile.weight = undefined;
    this.updatedFile.name = undefined;
    this.updatedFile.isHeavier = false;
    this.updatedFile.isRightExpansion = true;
    this.input.nativeElement.value = '';
    this.correctFile.emit(this.updatedFile);
  }

  public bytesToSize(bytes: any): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (!bytes) {
      return '0 Byte';
    }
    // tslint:disable-next-line:radix
    const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  }
}

