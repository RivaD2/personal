import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv')
// Returning instance of Summary
const summary = Summary.winsAnalysisHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
