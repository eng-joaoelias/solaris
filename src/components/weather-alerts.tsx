import { AlertTriangle, Info, CheckCircle } from "lucide-react";

interface WeatherAlertProps {
  alerts: Array<{
    event: string;
    description: string;
    severity: "yellow" | "orange" | "red";
  }>;
}

const WeatherAlert = ({ alerts }: WeatherAlertProps) => {
  const severityIcon = (severity: string) => {
    switch (severity) {
      case "yellow":
        return <Info className="text-yellow-500" />;
      case "orange":
        return <AlertTriangle className="text-orange-500" />;
      case "red":
        return <AlertTriangle className="text-red-500" />;
      default:
        return <CheckCircle className="text-green-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`p-4 border-l-4 ${
            alert.severity === "red"
              ? "border-red-500 bg-red-100"
              : alert.severity === "orange"
              ? "border-orange-500 bg-orange-100"
              : "border-yellow-500 bg-yellow-100"
          }`}
        >
          <div className="flex items-center gap-2">
            {severityIcon(alert.severity)}
            <h4 className="text-lg font-bold">{alert.event}</h4>
          </div>
          <p className="text-sm">{alert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherAlert;
