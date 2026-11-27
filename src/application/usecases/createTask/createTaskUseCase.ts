import { v4 as uuidv4 } from "uuid";
import { Task } from "../../../domain/task.js";
import type { TaskRepositoryInterface } from "../../../domain/taskRepositoryInterface.js";
import type { CreateTaskRequestDto } from "../../dto/createTaskRequestDto.js";
import { toTaskResponseDto, type TaskResponseDto } from "../../dto/taskResponseDto.js";
import type { CreateTaskUseCaseInterface } from "./createTaskUseCaseInterface.js";

export class CreateTaskUseCase implements CreateTaskUseCaseInterface {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(request: CreateTaskRequestDto): Promise<TaskResponseDto> {
    if (request.title.trim() === "") throw new Error("タイトルは必須です");

    const task = Task.create(uuidv4(), request.title);
    await this.taskRepository.save(task);
    return toTaskResponseDto(task);
  }
}
