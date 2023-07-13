import { useQuery } from 'react-query';
import axios from 'axios';

const ExampleComponent = () => {
  const { data, isLoading, error } = useQuery('example', async () => {
    const response = await axios.get('http://localhost:5000/api/v1/news');
    return response.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.Title}</h2>
          <p>{item.Headlines}</p>
          {/* Render additional data as needed */}
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
