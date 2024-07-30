import { CardGrid } from "@/components/Card/CardGrid";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


export interface ServiceProps {
  id: number;
  flag: string | null;
  service_name: string;
  description: string ;
  validity_days: number | null;
  ready_date: string; 
  price: number;
  service_type: string;
}


export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:8000/service/?format=json')
    const data = await res.json()

    return {
      props: { data },
      revalidate: 60 * 60, 
    }
  } catch (error) {
    return { props: { error: 'Failed to fetch data' } }
  }
}

export default function Page({data}: {data: ServiceProps[]}) {
  console.log(data);
  const searchParams = useSearchParams();

  const currency = searchParams.get("currency");
  const group = searchParams.get("group");
  console.log(currency);
  console.log(group);

  return (
    <div>
      <Navbar />
      {/* <CardGrid/> */}
      <Main>
        <CardGrid services={data}/>
      </Main>
    </div>
  );
}
