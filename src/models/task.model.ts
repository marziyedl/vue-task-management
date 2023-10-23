import type { BadgeModel } from "./badge.model";

export default interface TaskProps {
  id: string;
  title: string;
  content: string;
  status: BadgeModel;
}
