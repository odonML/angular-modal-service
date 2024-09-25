import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {
  icon: any
  title: any
  content: any
  btnAction1: any
  btnAction2: any

 constructor(
    private dialogRef: MatDialogRef<ModalAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.icon = this.data.icon;
    this.title = this.data.title;
    this.content = this.data.content;
    this.btnAction1 = this.data.btnAction1;
    this.btnAction2 = this.data.btnAction2;
  }

}
