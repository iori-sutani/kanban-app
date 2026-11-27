import type { Task } from "./task.js";

export interface TaskRepositoryInterface {
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  save(task: Task): Promise<void>; // 追加と更新の両方に使う
}
