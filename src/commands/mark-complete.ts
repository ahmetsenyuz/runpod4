import { CommandHandler } from '../types';
import { StorageManager } from '../storage';

export class MarkCompleteCommand implements CommandHandler {
  private storage: StorageManager;

  constructor(storage: StorageManager) {
    this.storage = storage;
  }

  async execute(args: string[]): Promise<string> {
    if (args.length === 0) {
      return 'Error: Please provide a backlog item ID to mark as complete.';
    }

    const itemId = args[0];
    const item = this.storage.getItemById(itemId);

    if (!item) {
      return `Error: Backlog item with ID '${itemId}' not found.`;
    }

    if (item.status === 'Completed') {
      return `Error: Backlog item '${itemId}' is already marked as completed.`;
    }

    const success = this.storage.updateItemStatus(itemId, 'Completed');
    
    if (success) {
      return `Successfully marked backlog item '${itemId}' as completed.`;
    } else {
      return `Error: Failed to mark backlog item '${itemId}' as completed.`;
    }
  }
}