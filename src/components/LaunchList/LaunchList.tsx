import { useQuery } from "@apollo/client";
import React from "react";
import { LaunchListQuery } from "../../gql/graphql";
import { LAUNCH_LIST_QUERY } from "./launchList.query";

interface LaunchListProps {
  setLaunchId: (id?: string) => void;
}

const LaunchList: React.FC<LaunchListProps> = ({ setLaunchId }) => {
  const { loading, error, data } = useQuery<LaunchListQuery>(LAUNCH_LIST_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  if (!data?.launches?.length) return <p>No data found</p>;

  return (
    <div>
      {data.launches.map((launch) => (
        <button
          key={launch?.id}
          onClick={() => setLaunchId(launch?.id!)}
          className="block w-full truncate text-left border my-2 p-2 bg-blue-600 text-white rounded-md"
        >
          {launch?.mission_name}
        </button>
      ))}
    </div>
  );
};

export default LaunchList;
