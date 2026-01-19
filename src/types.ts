export interface BacklogItem {
  id: string;
  title: string;
  objective: string;
  status: 'To Do' | 'In Progress' | 'Completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface CommandHandler {
  execute(args: string[]): Promise<string>;
}