# Report: **Design and Implementation of the Undo Feature**

## Introduction

The **Todo App** allows users to add, remove, and mark tasks as completed. The undo feature enables users to revert the last action (removal or completion) within 5 seconds, enhancing the user experience by allowing a quick way to fix mistakes.

## Design

The app is built using **React** for the frontend, with state management handled by the `useState` hook.

- The `lastAction` state stores the most recent action (remove or toggle) along with the task involved.
- A `setTimeout` is used to clear the `lastAction` state after 5 seconds, making the undo option unavailable after that time.

## Implementation

- When a task is removed or toggled, the action is stored in the `lastAction` state.
- The `undoLastAction` function checks the type of the last action and reverts it by either:
  - Adding the task back to the list (if it was removed).
  - Toggling its completion status (if it was completed).

The **undo button** is displayed only when there is a `lastAction` in the state, providing a clean and intuitive interface.

## Conclusion

The undo feature is implemented without the use of any external libraries, adhering to the assignment constraints. The solution offers a simple and intuitive user interface that enhances the overall user experience with minimal complexity.
