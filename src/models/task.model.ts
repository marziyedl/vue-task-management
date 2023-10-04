import type { BadgePropsModel } from "./badge.model";

export default interface TaskProps {
  id: string;
  title: string;
  content: string;
  status: BadgePropsModel;
}
