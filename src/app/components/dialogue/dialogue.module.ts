import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { DialogComponent } from './dialog/dialog.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    DialogComponent,
    DialogBodyComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogueModule { }
