import fs from 'fs';

export class CsvFileReader {
  // Data will be two-dimensional array
  data: string[][] = [];
  constructor(public filename: string) {}

  read():void {
    this.data = fs.readFileSync(this.filename, {
      // I expect to find text content encoded with utf-8
      // Returning string, not a buffer
      encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[]  => {
        return row.split(',');
      });
  }
}