import { Clock, CalendarBlank } from "@phosphor-icons/react";

interface CardProps {
  service_name: string;
  description: string;
  validity_days: number | null;
  ready_date: string;
  price: number;
  flag: string | null;
  currency: string;
}

export function Card({
  service_name,
  description,
  validity_days,
  ready_date,
  price,
  flag,
  currency,
}: CardProps) {

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  const priceFmt = (number:number) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number)
  }

  
  
  return (
    <div className="w-full cursor-pointer flex flex-col rounded-lg h-48 justify-between p-4 bg-white mx-auto shadow-card">
      <div className="flex flex-col gap-1">
        <h2 className="font-medium line-clamp-2">
         {flag &&  <span className="pr-1.5">{flag}</span>}
          {service_name}
        </h2>
        <p className="text-xs line-clamp-2">{description}</p>
        {validity_days && (
          <div className="flex items-center gap-2 text-xs">
            <Clock size={16} />
            <p>Valid up to {validity_days} days</p>
          </div>
        )}
        <div className="flex items-center gap-2 text-xs">
          <CalendarBlank size={16} />
          <p>Ready by {formatDate(ready_date)}</p>
        </div>
      </div>
      <p className="text-sm">Starting from {currency} {priceFmt(price)}</p>
    </div>
  );
}
