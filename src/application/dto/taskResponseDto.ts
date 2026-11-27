import type { Task } from "../../domain/task.js";
import type { TaskStatus } from "../../domain/taskStatus.js";

// ユースケースが外側の層に返すタスクの形
export type TaskResponseDto = {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};

// domain の Task を TaskResponseDto に詰め替える
export const toTaskResponseDto = (task: Task): TaskResponseDto => ({
  id: task.id,
  title: task.title,
  status: task.status,
  createdAt: task.createdAt,
  updatedAt: task.updatedAt,
});
