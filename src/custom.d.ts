type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}

type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  creat: (name: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: Tag[]
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: TagListModel['update']
  findTag: (id: string) => Tag
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void
}