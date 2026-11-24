import type { TaskStatus } from "./taskStatus.js";

export class Task {
  constructor(
    private readonly _id: string,
    private _title: string,
    private _status: TaskStatus,
    private readonly _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  // 新しくタスクを作るときはこちらを使う
  static create(id: string, title: string, now = new Date()): Task {
    return new Task(id, title, "todo", now, now);
  }

  get id() { return this._id; }
  get title() { return this._title; }
  get status() { return this._status; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }

  changeStatus(status: TaskStatus, now = new Date()): void {
    this._status = status;
    this._updatedAt = now;
  }

  rename(title: string, now = new Date()): void {
    this._title = title;
    this._updatedAt = now;
  }
}
