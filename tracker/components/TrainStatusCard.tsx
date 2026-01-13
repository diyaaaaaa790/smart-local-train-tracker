interface Props {
  name: string;
  route: string;
  status: "on-time" | "delayed";
  scheduled: string;
  expected: string;
  station: string;
}

export default function TrainStatusCard({
  name,
  route,
  status,
  scheduled,
  expected,
  station,
}: Props) {
  return (
    <div className={`train-card ${status}`}>
      <h3>{name}</h3>
      <p className="route">{route}</p>

      <div className="times">
        <div>
          <span>Scheduled</span>
          <strong>{scheduled}</strong>
        </div>
        <div>
          <span>Expected</span>
          <strong>{expected}</strong>
        </div>
      </div>

      <p className="station">Current Station: {station}</p>

      <span className={`badge ${status}`}>
        {status === "on-time" ? "On Time" : "Delayed"}
      </span>
    </div>
  );
}
