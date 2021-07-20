import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read():void {
  this.data = fs.readFileSync(this.filename, {
    // I expect to find text content encoded with utf-8
    // Returning string, not a buffer
    encoding: 'utf-8',
    })
    .split('\n')
    .map((row: string): string[]  => {
      return row.split(',');
    })
    // Row in array from csv data
    .map(this.mapRow);
  }
}