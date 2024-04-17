export interface BBSData {
  id: number;
  username: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface Question {
  id: number;
  title: string;
  extracts: string;
}
