import type { BadgeModel } from "@/models/badge.model";

export const BadgeOptions: { [key: string]: { value: BadgeModel, label: string, color: string } } = {
  toDo: {
    value: 'toDo',
    label: "To do",
    color: "bg-blue-900",
  },
  rejected: {
    value: 'rejected',
    label: "Rejected",
    color: "bg-red-900"
  },
  done: {
    value: 'done',
    label: "Done",
    color: "bg-green-900",
  },
}
