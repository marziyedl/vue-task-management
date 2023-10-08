import { type BadgePropsModel }  from "@/models/badge.model";

export const BadgeOptions: { value: BadgePropsModel ,label:string}[] = [
  {
    value: 'toDo',
    label: "To do",
  },
  {
    value: 'rejected',
    label: "Rejected",
  },
  {
    value: 'done',
    label: "Done",
  },
];
