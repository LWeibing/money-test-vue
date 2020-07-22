import clone from '@/lib/clone';

const localStorageName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.data;
  },
  create(record: RecordItem) {
    const record2 = clone(record);
    this.data.push(record2);
    this.save()
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  }

};
export default recordListModel;