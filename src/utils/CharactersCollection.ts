import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
    static sortAndPrint(data: string) {
        return new CharactersCollection(data).sort().print();
    }

    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const chars = this.data.split('');
        [chars[leftIndex], chars[rightIndex]] = [chars[rightIndex], chars[leftIndex]]; // swap
        this.data = chars.join('');
    }

    print(): void {
        console.log(this.data);
    }
}
