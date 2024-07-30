import { Card } from "@/components/Card";
import { ServiceProps } from "@/pages/service";

export function CardGrid({ services }: { services: ServiceProps[] }) {
  console.log(services);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
      {services.map((service) => (
        <Card
          flag={service.flag}
          service_name={service.service_name}
          description={service.description}
          validity_days={service.validity_days}
          ready_date={service.ready_date}
          price={service.price}
        />
      ))}
    </div>
  );
}
