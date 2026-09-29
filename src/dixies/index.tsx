import Dexie from 'dexie';

class BaseDixie extends Dexie {
    constructor(schema: { [tableName: string]: string }) {
        super(Object.keys(schema)[0]);
        this.version(1).stores(schema);
    }
}

export default BaseDixie;