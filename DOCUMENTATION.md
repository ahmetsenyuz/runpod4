# To-Do Application Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Architecture](#architecture)
6. [Commands](#commands)
7. [Testing](#testing)
8. [License](#license)

## Introduction
This is a simple to-do application built with TypeScript and Node.js. It allows users to manage their backlog items through a command-line interface. The application provides functionality to add, mark as complete, delete, and view backlog items.

## Features
- Add new backlog items
- Mark backlog items as complete
- Delete backlog items
- View all backlog items
- Persistent storage of backlog items
- Type-safe implementation

## Installation
To install and run the application, follow these steps:

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd runpod4
```

3. Install dependencies:
```bash
npm install
```

4. Build the project:
```bash
npm run build
```

5. Run the application:
```bash
npm start
```

## Usage
The application is controlled through command-line arguments. Here are the available commands:

### Adding Items
To add a new backlog item:
```bash
npm start add "Your item description"
```

### Marking Items as Complete
To mark an item as complete, you need its ID:
```bash
npm start complete "item-id"
```

### Deleting Items
To delete an item, you need its ID:
```bash
npm start delete "item-id"
```

### Listing Items
To list all items:
```bash
npm start list
```

## Architecture
The application follows a modular architecture:

1. **Main Entry Point** (`src/index.ts`) - Initializes the application
2. **Storage Manager** (`src/storage.ts`) - Handles persistence of backlog items
3. **Type Definitions** (`src/types.ts`) - Defines interfaces for backlog items and command handlers
4. **Command Handlers** (`src/commands/`) - Implements the logic for each command

## Commands
The application supports the following commands:

### add
Adds a new backlog item to the system.

### complete
Marks a backlog item as complete by its ID.

### delete
Deletes a backlog item by its ID.

### list
Displays all backlog items.

## Testing
The application includes comprehensive tests covering all functionality. Tests are located in the `test/` directory.

To run tests:
```bash
npm test
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.