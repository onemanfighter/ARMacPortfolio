import { TopAppMenuTreeStructure } from '../types';

export const VS_CODE: TopAppMenuTreeStructure = {
  id: 'vsCode',
  menuTree: [
    {
      title: 'Code',
      type: 'main',
      items: {
        aboutVisualStudioCode: {
          hasDivider: false,
          title: 'About Visual Studio Code',
          action: () => {},
        },
        checkForUpdates: {
          hasDivider: true,
          title: 'Check for Updates...',
          action: () => {},
        },
        settings: {
          hasDivider: true,
          title: 'Settings',
          action: () => {},
          command: '>',
          subSubtree: [
            {
              title: 'settings',
              action: () => {},
              hasDivider: false,
            },
            {
              title: 'Profiles',
              action: () => {},
              hasDivider: false,
            },
            {
              title: 'extensions',
              action: () => {},
              hasDivider: false,
            },
          ],
        },
        hideVisualStudioCode: {
          hasDivider: false,
          title: 'Hide Visual Studio Code',
          action: () => {},
        },
        hideOthers: {
          hasDivider: false,
          title: 'Hide Others',
          action: () => {},
        },
        showAll: {
          hasDivider: true,
          title: 'Show All',
          action: () => {},
        },
        quit: {
          hasDivider: false,
          title: 'Quit Visual Studio Code',
          action: () => {},
        },
      },
    },
    {
      title: 'File',
      type: 'normal',
      items: {
        newFile: {
          hasDivider: false,
          title: 'New File',
          command: '⌘N',
          action: () => {},
        },
        newWindow: {
          hasDivider: true,
          title: 'New Window',
          command: '⇧⌘N',
          action: () => {},
        },
        openFile: {
          hasDivider: false,
          title: 'Open File...',
          command: '⌘O',
          action: () => {},
        },
        openFolder: {
          hasDivider: false,
          title: 'Open Folder...',
          action: () => {},
        },
        openWorkspace: {
          hasDivider: false,
          title: 'Open Workspace from file...',
          action: () => {},
        },
        openRecent: {
          hasDivider: true,
          title: 'Open Recent',
          action: () => {},
        },
        save: {
          hasDivider: false,
          title: 'Save',
          command: '⌘S',
          action: () => {},
        },
        saveAs: {
          hasDivider: false,
          title: 'Save As...',
          action: () => {},
        },
        saveAll: {
          hasDivider: false,
          title: 'Save All',
          action: () => {},
        },
        autoSave: {
          hasDivider: true,
          title: 'Auto Save',
          action: () => {},
        },
        closeWindow: {
          hasDivider: false,
          title: 'Close Window',
          action: () => {},
        },
        closeFolder: {
          hasDivider: false,
          title: 'Close Folder',
          action: () => {},
        },
        closeWorkspace: {
          hasDivider: false,
          title: 'Close Workspace',
          action: () => {},
        },
        closeEditor: {
          hasDivider: true,
          title: 'Close Editor',
          action: () => {},
        },
        exit: {
          hasDivider: false,
          title: 'Exit',
          action: () => {},
        },
      },
    },
    {
      title: 'Edit',
      type: 'normal',
      items: {
        undo: {
          hasDivider: false,
          title: 'Undo',
          command: '⌘ Z',
          action: () => {},
        },
        redo: {
          hasDivider: true,
          title: 'Redo',
          command: '⇧ ⌘ Z',
          action: () => {},
        },
        cut: {
          hasDivider: false,
          title: 'Cut',
          command: '⌘ X',
          action: () => {},
        },
        copy: {
          hasDivider: false,
          title: 'Copy',
          command: '⌘ C',
          action: () => {},
        },
        paste: {
          hasDivider: true,
          title: 'Paste',
          command: '⌘ V',
          action: () => {},
        },
        findInFiles: {
          hasDivider: false,
          title: 'Find in Files',
          command: '⇧ ⌘ H',
          action: () => {},
        },
        placeInFiles: {
          hasDivider: true,
          title: 'Replace in Files',
          action: () => {},
        },
        toggleLineComment: {
          hasDivider: false,
          title: 'Toggle Line Comment',
          command: '⌘ /',
          action: () => {},
        },
        toggleBlockComment: {
          hasDivider: false,
          title: 'Toggle Block Comment',
          command: '⇧ ⌥ A',
          action: () => {},
        },
        emmetExpandAbbreviation: {
          hasDivider: true,
          title: 'Emmet: Expand Abbreviation',
          command: '⇥',
          action: () => {},
        },
        autoFill: {
          hasDivider: false,
          title: 'Auto Fill',
          action: () => {},
          command: '>',
          subSubtree: [
            {
              title: 'Contact...',
              action: () => {},
              hasDivider: false,
            },
            {
              title: 'Passwords...',
              action: () => {},
              hasDivider: false,
            },
          ],
        },
        startDictation: {
          hasDivider: false,
          title: 'Start Dictation',
          action: () => {},
          command: '🎤',
        },
        emojiSymbols: {
          hasDivider: false,
          title: 'Emoji & Symbols',
          action: () => {},
          command: '🙂',
        },
      },
    },
    {
      title: 'Selection',
      type: 'normal',
      items: {
        selectAll: {
          hasDivider: false,
          title: 'Select All',
          command: '⌘ A',
          action: () => {},
        },
        expandSelection: {
          hasDivider: false,
          title: 'Expand Selection',
          command: '⌃ ⇧ ⌘ →',
          action: () => {},
        },
        shrinkSelection: {
          hasDivider: true,
          title: 'Shrink Selection',
          command: '⌃ ⇧ ⌘ ←',
          action: () => {},
        },
        copyLineUp: {
          hasDivider: false,
          title: 'Copy Line Up',
          command: '⇧ ⌥ ↑',
          action: () => {},
        },
        copyLineDown: {
          hasDivider: false,
          title: 'Copy Line Down',
          command: '⇧ ⌥ ↓',
          action: () => {},
        },
        moveLineUp: {
          hasDivider: false,
          title: 'Move Line Up',
          command: '⌥ ↑',
          action: () => {},
        },
        moveLineDown: {
          hasDivider: false,
          title: 'Move Line Down',
          command: '⌥ ↓',
          action: () => {},
        },
        duplicateSelection: {
          hasDivider: true,
          title: 'Duplicate Selection',
          command: '',
          action: () => {},
        },
        addCursorAbove: {
          hasDivider: false,
          title: 'Add Cursor Above',
          command: '⌥ ⌘ ↑',
          action: () => {},
        },
        addCursorBelow: {
          hasDivider: false,
          title: 'Add Cursor Below',
          command: '⌥ ⌘ ↓',
          action: () => {},
        },
        addCursorToLineEnd: {
          hasDivider: false,
          title: 'Add Cursor to Line End',
          command: '⌃ ⇧ →',
          action: () => {},
        },
        addNextOccurrence: {
          hasDivider: false,
          title: 'Add Next Occurrence',
          command: '⌘ D',
          action: () => {},
        },
        addPrevOccurrence: {
          hasDivider: false,
          title: 'Add Previous Occurrence',
          command: '⇧ ⌘ D',
          action: () => {},
        },
        selectAllOccurrence: {
          hasDivider: true,
          title: 'Select All Occurrences',
          command: '⌘ F2',
          action: () => {},
        },
        switchToCmdPlusClick: {
          hasDivider: false,
          title: 'Switch to Cmd+Click for Multi-Cursor',
          action: () => {},
        },
      },
    },
    {
      title: 'View',
      type: 'normal',
      items: {
        commandPalette: {
          hasDivider: false,
          title: 'Command Palette...',
          command: '⇧⌘P',
          action: () => {},
        },
        openView: {
          hasDivider: true,
          title: 'Open View...',
          action: () => {},
          command: '',
        },
        appearance: {
          hasDivider: false,
          title: 'Appearance',
          action: () => {},
          command: '>',
        },
        editorLayout: {
          hasDivider: true,
          title: 'Editor Layout',
          action: () => {},
          command: '>',
        },
        explorer: {
          hasDivider: false,
          title: 'Explorer',
          action: () => {},
          command: '⇧ ⌘ E',
        },
        search: {
          hasDivider: false,
          title: 'Search',
          action: () => {},
          command: '⇧ ⌘ F',
        },
        sourceControl: {
          hasDivider: false,
          title: 'Source Control',
          action: () => {},
          command: '⌃ ⇧ G',
        },
        run: {
          hasDivider: false,
          title: 'Run',
          action: () => {},
          command: '⇧ ⌘ D',
        },
        extensions: {
          hasDivider: true,
          title: 'Extensions',
          action: () => {},
          command: '⇧ ⌘ X',
        },
        problems: {
          hasDivider: false,
          title: 'Problems',
          action: () => {},
          command: '⇧ ⌘ M',
        },
        output: {
          hasDivider: false,
          title: 'Output',
          action: () => {},
          command: '⇧ ⌘ U',
        },
        debugConsole: {
          hasDivider: false,
          title: 'Debug Console',
          action: () => {},
          command: '⇧ ⌘ D',
        },
        terminal: {
          hasDivider: true,
          title: 'Terminal',
          action: () => {},
          command: '⌃ `',
        },
        wordWrap: {
          hasDivider: false,
          title: 'Word Wrap',
          action: () => {},
          command: '⌥ Z',
        },
      },
    },
    {
      title: 'Go',
      type: 'normal',
      items: {
        back: {
          hasDivider: false,
          title: 'Back',
          command: '⌃ -',
          action: () => {},
        },
        forward: {
          hasDivider: false,
          title: 'Forward',
          command: '⌃ ⇧ -',
          action: () => {},
        },
        lastEditLocation: {
          hasDivider: true,
          title: 'Last Edit Location',
          command: '⌃ ⇧ -',
          action: () => {},
        },
        switchEditor: {
          hasDivider: false,
          title: 'Switch Editor',
          action: () => {},
          command: '>',
        },
        switchGroup: {
          hasDivider: true,
          title: 'Switch Group',
          command: '>',
          action: () => {},
        },
        goToFile: {
          hasDivider: false,
          title: 'Go to File...',
          action: () => {},
          command: '⌘ P',
        },
        goToSymbol: {
          hasDivider: true,
          title: 'Go to Symbol in workspace...',
          action: () => {},
          command: '⇧ ⌘ O',
        },
        goToSymbolInEditor: {
          hasDivider: false,
          title: 'Go to Symbol in Editor...',
          action: () => {},
          command: '⌘ T',
        },
        goToDefinition: {
          hasDivider: false,
          title: 'Go to Definition',
          action: () => {},
          command: 'F12',
        },
        goToDeclaration: {
          hasDivider: false,
          title: 'Go to Declaration',
          action: () => {},
          command: '',
        },
        goToTypeDefinition: {
          hasDivider: false,
          title: 'Go to Type Definition',
          action: () => {},
          command: '',
        },
        goToImplementation: {
          hasDivider: false,
          title: 'Go to Implementation',
          action: () => {},
          command: '⌘ F12',
        },
        goToReferences: {
          hasDivider: true,
          title: 'Go to References',
          action: () => {},
          command: '⇧ F12',
        },
        goToLineColumn: {
          hasDivider: false,
          title: 'Go to Line...',
          action: () => {},
          command: '⌃ G',
        },
        goToBracket: {
          hasDivider: true,
          title: 'Go to Bracket',
          action: () => {},
          command: '⇧ ⌘ \\',
        },
        nextProblem: {
          hasDivider: false,
          title: 'Next Problem',
          action: () => {},
          command: 'F8',
        },
        prevProblem: {
          hasDivider: true,
          title: 'Previous Problem',
          action: () => {},
          command: '⇧ F8',
        },
        nextChanges: {
          hasDivider: false,
          title: 'Next Change',
          action: () => {},
          command: '⌃ ⇧ M',
        },
        prevChange: {
          hasDivider: false,
          title: 'Previous Change',
          action: () => {},
          command: '⌃ ⇧ M',
        },
      },
    },
    {
      title: 'Run',
      type: 'normal',
      items: {
        runStartDebugging: {
          hasDivider: false,
          title: 'Start Debugging',
          command: 'F5',
          action: () => {},
        },
        runRunWithoutDebugging: {
          hasDivider: false,
          title: 'Run Without Debugging',
          command: '⌃F5',
          action: () => {},
        },
        runStopDebugging: {
          hasDivider: false,
          title: 'Stop Debugging',
          command: '⇧F5',
          action: () => {},
        },
        openConfigurations: {
          hasDivider: true,
          title: 'Open Configurations',
          action: () => {},
        },
        addConfiguration: {
          hasDivider: true,
          title: 'Add Configuration...',
          action: () => {},
        },
        stepOver: {
          hasDivider: false,
          title: 'Step Over',
          command: 'F10',
          action: () => {},
        },
        stepInto: {
          hasDivider: false,
          title: 'Step Into',
          command: 'F11',
          action: () => {},
        },
        runStepOut: {
          hasDivider: false,
          title: 'Step Out',
          command: '⇧F11',
          action: () => {},
        },
        runContinue: {
          hasDivider: true,
          title: 'Continue',
          command: 'F5',
          action: () => {},
        },
        runToggleBreakpoint: {
          hasDivider: false,
          title: 'Toggle Breakpoint',
          command: 'F9',
          action: () => {},
        },
        addBreakpoint: {
          hasDivider: true,
          title: 'Add Breakpoint...',
          action: () => {},
        },
        enableAllBreakpoints: {
          hasDivider: false,
          title: 'Enable All Breakpoints',
          action: () => {},
        },
        disableAllBreakpoints: {
          hasDivider: false,
          title: 'Disable All Breakpoints',
          action: () => {},
        },
        removeAllBreakpoints: {
          hasDivider: true,
          title: 'Remove All Breakpoints',
          action: () => {},
        },
        installAdditionalDebuggers: {
          hasDivider: false,
          title: 'Install Additional Debuggers...',
          action: () => {},
        },
      },
    },
    {
      title: 'Terminal',
      type: 'normal',
      items: {
        terminalNewTerminal: {
          hasDivider: false,
          title: 'New Terminal',
          command: '⌃ `',
          action: () => {},
        },
        splitTerminal: {
          hasDivider: true,
          title: 'Split Terminal',
          action: () => {},
          command: '⌘ /',
        },
        runTask: {
          hasDivider: false,
          title: 'Run Task...',
          action: () => {},
          command: '⇧ ⌘ B',
        },
        runBuildTask: {
          hasDivider: false,
          title: 'Run Build Task...',
          action: () => {},
        },
        runActiveFile: {
          hasDivider: false,
          title: 'Run Active File',
          action: () => {},
        },
        runSelectedText: {
          hasDivider: true,
          title: 'Run Selected Text',
          action: () => {},
        },
        showRunningTasks: {
          hasDivider: false,
          title: 'Show Running Tasks',
          action: () => {},
        },
        restartRunningTask: {
          hasDivider: false,
          title: 'Restart Running Task',
          action: () => {},
        },
        terminateTask: {
          hasDivider: true,
          title: 'Terminate Task',
          action: () => {},
        },
        configureTasks: {
          hasDivider: false,
          title: 'Configure Tasks...',
          action: () => {},
        },
        configureDefaultBuildTask: {
          hasDivider: false,
          title: 'Configure Default Build Task...',
          action: () => {},
        },
      },
    },
    {
      title: 'Help',
      type: 'normal',
      items: {
        welcome: {
          hasDivider: false,
          title: 'Welcome',
          action: () => {},
        },
        showAllCommands: {
          hasDivider: false,
          title: 'Show All Commands',
          action: () => {},
        },
        documentation: {
          hasDivider: false,
          title: 'Documentation',
          action: () => {},
        },
        editorPlayground: {
          hasDivider: false,
          title: 'Editor Playground',
          action: () => {},
        },
        showReleaseNotes: {
          hasDivider: true,
          title: 'Show Release Notes',
          action: () => {},
        },
        keyboardShortcutsReference: {
          hasDivider: false,
          title: 'Keyboard Shortcuts Reference',
          action: () => {},
          command: '⌘K ⌘S',
        },
        videoAndTutorials: {
          hasDivider: false,
          title: 'Video and Tutorials',
          action: () => {},
        },
        tipsAndTricks: {
          hasDivider: true,
          title: 'Tips and Tricks',
          action: () => {},
        },
        joinUsOnYoutube: {
          hasDivider: false,
          title: 'Join us on Youtube',
          action: () => {},
        },
        searchFeatureRequests: {
          hasDivider: false,
          title: 'Search Feature Requests',
          action: () => {},
        },
        reportIssue: {
          hasDivider: true,
          title: 'Report Issue',
          action: () => {},
        },
        viewLicense: {
          hasDivider: false,
          title: 'View License',
          action: () => {},
        },
        privacyStatement: {
          hasDivider: true,
          title: 'Privacy Statement',
          action: () => {},
        },
        toggleDevTools: {
          hasDivider: false,
          title: 'Toggle Developer Tools',
          action: () => {},
        },
        openProcessExplorer: {
          hasDivider: false,
          title: 'Open Process Explorer',
          action: () => {},
        },
      },
    },
  ],
};
