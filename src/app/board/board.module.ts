import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatExpansionModule} from "@angular/material/expansion";
import { BoardItemComponent } from './board-item/board-item.component';
import {FormsModule} from "@angular/forms";
import { CommentItemComponent } from './comment-item/comment-item.component';
import {DialogueModule} from "../components/dialogue/dialogue.module";
import { ColorPanelComponent } from './color-panel/color-panel.component';



@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    CommentItemComponent,
    ColorPanelComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    DialogueModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
