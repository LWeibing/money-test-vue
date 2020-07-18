const localStorageName = 'tagList';
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  creat: (name: string) => '成功' | '重复'
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  creat(name: string) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return '重复';}
    this.data.push({id: name, name: name});
    this.save();
    return '成功';
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  }
};
export default tagListModel;