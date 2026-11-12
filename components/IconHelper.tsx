import React from "react";
import {
  Compass,
  Leaf,
  Maximize2,
  Home,
  Building2,
  Building,
  Layers,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  Star,
  Users,
  CheckCircle2,
  Sofa,
  Armchair,
  DraftingCompass,
  type LucideProps,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Compass,
  Leaf,
  Maximize2,
  Home,
  Building2,
  Building,
  Layers,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  Star,
  Users,
  CheckCircle2,
  Sofa,
  Armchair,
  DraftingCompass,
};

export function DynamicIcon({
  name,
  className = "",
  size = 20,
  strokeWidth = 2,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const IconComponent = iconMap[name] || Compass;
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
