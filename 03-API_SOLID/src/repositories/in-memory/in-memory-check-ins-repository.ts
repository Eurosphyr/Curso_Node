import { randomUUID } from "node:crypto";
import { CheckInsRepository } from "../check-ins-repository";
import { CheckIn, Prisma } from "@prisma/client";

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: CheckIn[] = [];

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn: CheckIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      createdAt: new Date(),
    };

    this.items.push(checkIn);

    return checkIn;
  }
}
