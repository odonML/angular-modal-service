import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCustomComponent } from './components/modal-custom/modal-custom.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modal-service';
  response: boolean = false;
  constructor(
    private dialog: MatDialog,
    private modalService: ModalService
  ){

  }
  openModalCustom(){
    const data = {
      name: "Oscar",
      isAdmin: false,
    }
    this.dialog.open(ModalCustomComponent, {
      data,
      disableClose: true // para poder cerrar la modal cuando den click fuera de ella
    })
  }
  async openModalConfirmation(){
    this.response = await this.modalService.showAlert("Estas seguro de eliminar esto?", "Eliminar");
  }
}
