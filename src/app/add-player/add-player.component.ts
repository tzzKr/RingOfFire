import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {

  constructor(private dialogRef: MatDialogRef<AddPlayerComponent>) {
    
  }

  name: string = '';

   onNoClick(): void {
    this.dialogRef.close();
  }

}
