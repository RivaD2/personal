import { MatchData } from "./MatchData";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// Instance class Summary will get analysis object/reported object(is configured)
// This has references to other objects here, but Summary is not responsible for much
// Summary is an great example of true Composition!
export class Summary  {
  static winsAnalysisHtmlReport(team: string): Summary {
   return new Summary(
     new WinsAnalysis(team),
     new HtmlReport()
   );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){};

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
