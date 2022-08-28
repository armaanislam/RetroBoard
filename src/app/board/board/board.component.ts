import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {BoardService} from "../../service/board.service";
import {T} from "@angular/cdk/keycodes";
import {Card} from "../../models/column.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(
    public boardService: BoardService
  ) {
  }

  ngOnInit(): void {
    console.log('BOARD - INIT')
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId);
  }

  onChangeLike(event: {card: any, increase: boolean}, columnId: number ) {
    const { card: { id }, increase } = event
    this.boardService.changeLike(id, columnId, increase)
  }

  onAddComment(event: { id: number, text: string }, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment({comment, columnId, item}: { comment: any, columnId: any, item: any }) {
    this.boardService.deleteComment(columnId, item.id, comment.id)
  }

  drop(event: CdkDragDrop<Card[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onAddCard(text: string, columnId: number) {
    if(text) {
      this.boardService.addCard(text, columnId)
    }
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId);
  }

  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId)
  }
}
