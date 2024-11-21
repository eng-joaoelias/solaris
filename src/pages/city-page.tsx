import { useParams, useSearchParams } from "react-router-dom";
import { useForecastQuery, useWeatherQuery } from "../hooks/use.weather";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import WeatherSkeleton from "../components/loading-skeleton";
import CurrentWeather from "../components/current-weather";
import HourlyTemperature from "../components/hourly-temperature";
import WeatherDetails from "../components/weather-details";
import WeatherForecast from "../components/weather-forecast";
import FavoriteButton from "../components/favorite-button";

const CityPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          Falha ao buscar dados do clima. Favor tentar novamente.
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4 ">
      {/*CIDADES FAVORITASs */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{params.cityName}, {weatherQuery.data.sys.country}</h1>
        <div>
            <FavoriteButton data={{...weatherQuery.data, name: params.cityName}}/>
        </div>
      </div>
      {/* Clima e Hora */}

      <div className="grid gap-6">
        <div className="flex flex-col gap-4">
          {/*clima atual*/}
          <CurrentWeather
            data={weatherQuery.data}
          />
          {/*temperatura de hora em hora */}
          <HourlyTemperature data={forecastQuery.data} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/*detalhes sobre o clima */}
          <WeatherDetails data={weatherQuery.data} />

          {/*previsao do tempo */}
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  );
};

export default CityPage;
