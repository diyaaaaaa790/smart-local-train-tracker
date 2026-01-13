interface Props {
  title: string;
  description: string;
}

export default function AlternativeCard({ title, description }: Props) {
  return (
    <div className="alt-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <span className="available">Available</span>
    </div>
  );
}
