import type { TaskStatus } from "../../domain/taskStatus.js";

export type MoveTaskRequestDto = {
  id: string;
  status: TaskStatus;
};
