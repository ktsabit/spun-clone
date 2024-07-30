export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/service',
      permanent: false,
    },
  }
}

export default function Home() {
  return null
}