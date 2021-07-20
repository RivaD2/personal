import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
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
    })
    // Row in array from csv data
    .map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        // Type assertion, tell TS to consider row[5] as possible value out of enum
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
}