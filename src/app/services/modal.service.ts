import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { ModalAlertComponent } from '../components/modal-alert/modal-alert.component';
import { ModalProps } from '../models/modal-props';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openAlert(data: ModalProps): any {

    return this.dialog.open(ModalAlertComponent, {
      data,
      disableClose: true,
      width: "600px",
      height: 'auto'
    });
  }

  async showAlert(msg: string, title?: string): Promise<boolean> {

    const props: ModalProps = {
      title,
      content: msg,
      btnAction1: "save",
      btnAction2: "cancel",
    }

    return firstValueFrom(this.openAlert(props).afterClosed());
  }
}
