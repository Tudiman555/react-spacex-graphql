import { useQuery, gql } from "@apollo/client";

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_ROCKERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div>
      {data.rockets.map(({ id, name }: any) => (
        <div key={id}>
          <h3>{name}</h3>
          <h3>{id}</h3>
        </div>
      ))}
    </div>
  );
}

const GET_ROCKERS = gql`
  query getRockets($limit) {
    rockets(limit:) {
      id
      name
    }
    dragons {
    name
    first_flight
    diameter {
      feet
    }
    launch_payload_mass {
      lb
    }
  }
  }
`;

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayLocations></DisplayLocations>
    </div>
  );
}
