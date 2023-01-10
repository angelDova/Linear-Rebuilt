"use client";

import { Button, Highlight } from "./button";
import { KeyboardIllustration } from "./illustrations/keyboard";

const shortcuts = [
  { text: "Opens command line", keys: "⌘k" },
  { text: "Assign issue to me", keys: "i" },
  { text: "Assign issue to", keys: "a" },
  { text: "Change issue status", keys: "s" },
  { text: "Set issue priority", keys: "p" },
  { text: "Add issue labels", keys: "l" },
  { text: "Set due date", keys: "⇧d" },
  { text: "Set parent issue", keys: "⇧⌘p" },
  { text: "Add sub-issue", keys: "⇧⌘o" },
  { text: "Create new issue", keys: "c" },
  { text: "Create new issue from template", keys: "⌥c" },
  { text: "Move to project", keys: "⇧p" },
];

export const KeyboardShortcuts = () => {
  return (
    <>
      <div className="mask-keyboard h-full w-full">
        <KeyboardIllustration />;
      </div>
      <div className="">
        {shortcuts.map((shortcut) => (
          <Button key={shortcut.text} onClick={() => {}} variant="secondary">
            <Highlight>{shortcut.keys}</Highlight>
            {shortcut.text}
          </Button>
        ))}
      </div>
    </>
  );
};
