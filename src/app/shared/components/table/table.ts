import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() showActions = true;

  @Output() edit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
}
