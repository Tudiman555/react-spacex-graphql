import { useQuery } from "@apollo/client";
import React from "react";
import {
  LaunchDetailsQuery,
  LaunchDetailsQueryVariables,
} from "../../gql/graphql";
import { LAUNCH_DETAILS_QUERY } from "./launchDetails.query";
interface LaunchDetailsProps {
  launchId: string;
}
const LaunchDetails: React.FC<LaunchDetailsProps> = ({ launchId }) => {
  const { loading, error, data } = useQuery<
    LaunchDetailsQuery,
    LaunchDetailsQueryVariables
  >(LAUNCH_DETAILS_QUERY, { variables: { id: launchId } });

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  if (error) return <p>Error : {error.message}</p>;

  if (!data?.launch) return <p>No data found</p>;
  
  return (
    <div className="p-4">
      <div>
        <span className="text-4xl">Flight {data.launch.mission_id} </span>
      </div>
      <div className="mt-2">
        <span className="text-2xl">Status : </span>
        {data.launch.launch_success ? (
          <span className="text-green-500 text-2xl">Success</span>
        ) : (
          <span className="text-red-600 text-2xl">Failed</span>
        )}
      </div>
      <h1 className="text-2xl mt-2">
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </h1>
      <div className="mt-2">
        <span className="text-2xl">Details</span>
        <p>{data.launch.details}</p>
      </div>
      <h1 className="text-2xl mt-2">Images</h1>
      <div className="flex flex-wrap">
        {!!data.launch.links?.flickr_images?.length ? (
          data.launch.links?.flickr_images?.map((image, i) =>
            image ? (
              <img
                className="w-56 h-56 my-2 mr-2"
                src={image}
                key={image}
                alt={`${data.launch?.mission_name} ${i}`}
              />
            ) : null
          )
        ) : (
          <p className="text-gray-500">No images found</p>
        )}
      </div>
    </div>
  );
};

export default LaunchDetails;
