import type { TaskRepositoryInterface } from "../../../domain/taskRepositoryInterface.js";
import { toTaskResponseDto, type TaskResponseDto } from "../../dto/taskResponseDto.js";
import type { GetTasksUseCaseInterface } from "./getTasksUseCaseInterface.js";

export class GetTasksUseCase implements GetTasksUseCaseInterface {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(): Promise<TaskResponseDto[]> {
    const tasks = await this.taskRepository.findAll();
    return tasks.map(toTaskResponseDto);
  }
}
