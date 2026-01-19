import { StorageManager } from '../src/storage';
import { MarkCompleteCommand } from '../src/commands/mark-complete';

// End-to-end test scenarios for the application
describe('End-to-End Tests', () => {
  let storage: StorageManager;
  let markCompleteCommand: MarkCompleteCommand;

  beforeEach(() => {
    storage = new StorageManager();
    markCompleteCommand = new MarkCompleteCommand(storage);
  });

  test('should add a new task and mark it as complete', async () => {
    // Add a new task
    const addResult = await markCompleteCommand.execute(['BI-0001']);
    expect(addResult).toContain('Successfully marked backlog item');
    
    // Verify the task status is updated
    const item = storage.getItemById('BI-0001');
    expect(item?.status).toBe('Completed');
  });

  test('should handle invalid task ID gracefully', async () => {
    const result = await markCompleteCommand.execute(['INVALID-ID']);
    expect(result).toContain('Error: Backlog item with ID \'INVALID-ID\' not found.');
  });

  test('should handle already completed task', async () => {
    // First mark as complete
    await markCompleteCommand.execute(['BI-0003']);
    
    // Try to mark again
    const result = await markCompleteCommand.execute(['BI-0003']);
    expect(result).toContain('Error: Backlog item \'BI-0003\' is already marked as completed.');
  });
});