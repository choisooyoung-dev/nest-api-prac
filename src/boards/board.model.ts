export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// 값이 정해져 있는 것은 enum 써서 따로 만들어준다.
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
