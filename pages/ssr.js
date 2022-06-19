function Page({ res }) {
  console.log(res.test);
  return <h1>First Post</h1>;
}

// This gets called on every request
export function getServerSideProps() {
  // Fetch data from external API
  const res = { test: "testing" };

  // Pass data to the page via props
  return { props: { res } };
}

export default Page;
