import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-custom',
  templateUrl: './modal-custom.component.html',
  styleUrls: ['./modal-custom.component.scss']
})
export class ModalCustomComponent implements OnInit {

  dataUser: any = {}
  response: boolean = false
  constructor(
    private dialogRef: MatDialogRef<ModalCustomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService: ModalService
  ) {
  
  }
  
  ngOnInit(): void {
    this.dataUser = this.data
    console.log(this.dataUser)
  }

  onCloseModal(){
    this.dialogRef.close();
  }

  async openModalConfirmation(){
    this.response = await this.modalService.showAlert("confirmacion desde la modal", "Title");
    
  }
}
