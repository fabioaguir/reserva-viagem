import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SearchComponent } from '../../../../shared/components/search/search.component';

export interface Destiny {
  name: string;
}

const ELEMENT_DATA: Destiny[] = [
  { name: 'Porto de Galinhas' },
  { name: 'Maragogi' },
  { name: 'Maragogi' },
  { name: 'Praia Bela' },
  { name: 'Maragogi' },
  { name: 'Maragogi' },
  { name: 'Maragogi' },
  { name: 'Maragogi' },
];

@Component({
  selector: 'app-destiny-list',
  imports: [MatTableModule, SearchComponent, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule],
  templateUrl: './destiny-list.component.html',
  styleUrl: './destiny-list.component.scss',
})
export class DestinyListComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = signal<string[]>(['select', 'name'])
  dataSource = signal(new MatTableDataSource(ELEMENT_DATA))

  searchedDestiny = signal<string>('');

  ngAfterViewInit() {
    this.dataSource().paginator = this.paginator;
    this.dataSource().sort = this.sort;
  }

}
