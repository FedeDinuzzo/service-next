export async function getStaticProps() {
  return {
    props: {
      page: "hola",
    },
  };
};

const Page = ({ page }) => {
  return (
    <main>
      <h1>{page}</h1>
    </main>
  )
}

export default Page;