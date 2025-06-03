import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  icon?: ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
      {icon}
      <span>{name}</span>
    </Badge>
  );
}
