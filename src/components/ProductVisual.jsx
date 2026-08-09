import { Bug, Leaf, FlaskConical, Sprout, HeartPulse } from "lucide-react";

const map = {
  insecticide: Bug,
  herbicide: Sprout,
  fungicide: FlaskConical,
  fertilizer: Leaf,
  planthealth: HeartPulse,
};

export default function ProductVisual({ category, name, large = false }) {
  const Icon = map[category] || Leaf;
  return (
    <div className={`product-visual ${large ? "product-visual-large" : ""}`}>
      <div className="product-ring">
        <Icon size={large ? 72 : 44} strokeWidth={1.5} />
      </div>
      <span>{name}</span>
    </div>
  );
}
