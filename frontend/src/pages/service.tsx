import { CardGrid } from "@/components/Card/CardGrid";
import { GroupFilter } from "@/components/GroupFilter";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { CurrencyModal } from "@/components/CurrencyModal";
import { convertPrice, isValidCurrency } from "@/utils/currency";

ReactModal.setAppElement("#servicePage");
export interface ServiceProps {
  id: number;
  flag: string | null;
  service_name: string;
  description: string;
  validity_days: number | null;
  ready_date: string;
  price: number;
  service_type: string;
  currency: string;
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:8000/service/?format=json");
    const data = await res.json();

    return {
      props: { data },
      revalidate: 60 * 60,
    };
  } catch (error) {
    return { props: { error: "Failed to fetch data" } };
  }
}

export default function Page({ data }: { data: ServiceProps[] }) {
  console.log(data);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (router.isReady) {
      const { group, currency } = router.query;
      const newQuery: { group?: string; currency?: string } = {};
      
      if (!group || typeof group !== 'string') {
        newQuery.group = "visa";
      }
      
      if (!currency || !isValidCurrency(currency as string)) {
        newQuery.currency = "IDR";
      }

      if (Object.keys(newQuery).length > 0) {
        router.push(
          {
            pathname: router.pathname,
            query: { ...router.query, ...newQuery },
          },
          undefined,
          { shallow: true }
        );
      }
    }
  }, [router.isReady, router.query]);

  const currency = searchParams.get("currency");
  const group = searchParams.get("group");

  const validCurrency = isValidCurrency(currency)
    ? (currency as string)
    : "IDR";

  const handleCurrencySelect = (selectedCurrency: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, currency: selectedCurrency },
      },
      undefined,
      { shallow: true }
    );
    closeModal();
  };

  const displayedServices: ServiceProps[] = data
  .filter((service) => service.service_type === group)
  .map((service) => ({
    ...service,
    price: convertPrice(service.price, validCurrency),
    currency: validCurrency,
  }));

  console.log(displayedServices);

  return (
    <div className="" id="servicePage">
      <CurrencyModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        title={"Select Currency"}
        selectedCurrency={validCurrency} 
        onSelect={handleCurrencySelect} 
      />
      <Navbar openModal={openModal} currCode={validCurrency} />
      <Main>
        <GroupFilter />
        <CardGrid
          services={displayedServices}
        />
      </Main>
    </div>
  );
}
