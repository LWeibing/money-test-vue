import clone from '@/lib/clone';

const localStorageName = 'recordList';
const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecord() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem){
    const record2 = clone(record);
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecord();
  },
};
recordStore.fetchRecord();

export default recordStore;