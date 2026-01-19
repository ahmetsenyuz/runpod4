import { BacklogItem } from './types';

export class StorageManager {
  private items: BacklogItem[] = [];
  
  constructor() {
    // Initialize with some sample data
    this.items = [
      {
        id: 'BI-0001',
        title: 'Repository Setup',
        objective: 'Set up the initial repository structure',
        status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'BI-0003',
        title: 'Create Command Interface',
        objective: 'Implement basic command interface for backlog management',
        status: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'BI-0004',
        title: 'Add Backlog Item Command',
        objective: 'Enable adding new backlog items via console',
        status: 'To Do',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }

  getAllItems(): BacklogItem[] {
    return this.items;
  }

  getItemById(id: string): BacklogItem | undefined {
    return this.items.find(item => item.id === id);
  }

  updateItemStatus(id: string, status: 'Completed'): boolean {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
      return false;
    }
    
    this.items[itemIndex].status = status;
    this.items[itemIndex].updatedAt = new Date();
    return true;
  }
}