import { Sorter } from './Sorter';
import { NumbersCollection} from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characters = new CharactersCollection('Xaayb');
characters.sort();
console.log(characters.data);
''
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-3);
linkedList.sort();
linkedList.print();
