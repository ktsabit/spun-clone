import React, { createContext, useState, useEffect, useContext } from "react";
export interface ExchangeRates {
  [key: string]: number;
}

export interface CurrencyContextType {
  currency: string;
  exchangeRates: ExchangeRates;
  setCurrency: (currency: string) => void;
  updateExchangeRates: (data: ExchangeRates) => void;
  convertPrice: (
    price: number,
    fromCurrency: string,
    toCurrency: string
  ) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider: React.FC<any> = ({ children }) => {
  const [currency, setCurrency] = useState<string>("IDR");
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});

  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency");
    const storedExchangeRates = localStorage.getItem("exchangeRates");

    if (storedCurrency) {
      setCurrency(storedCurrency);
    }

    if (storedExchangeRates) {
      setExchangeRates(JSON.parse(storedExchangeRates));
    }
  }, []);

  const updateCurrency = (newCurrency: string) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  const updateExchangeRates = (data: ExchangeRates) => {
    setExchangeRates(data);
    localStorage.setItem("exchangeRates", JSON.stringify(data));
  };

  const convertPrice = (
    price: number,
    fromCurrency: string,
    toCurrency: string
  ): number => {
    if (fromCurrency === toCurrency) return price;
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    if (!fromRate || !toRate) return price;
    return (price / fromRate) * toRate;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        exchangeRates,
        setCurrency: updateCurrency,
        updateExchangeRates,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  return context;
};
