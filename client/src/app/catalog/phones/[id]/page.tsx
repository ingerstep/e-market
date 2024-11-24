import axios from 'axios';

const page = async ({ params }: { params: { id: string } }) => {
  const { data } = await axios.get(
    `http://localhost:3000/catalog/phones/${params.id}`,
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
