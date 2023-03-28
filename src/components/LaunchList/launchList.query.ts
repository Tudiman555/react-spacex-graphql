import { gql } from "@apollo/client";

export const LAUNCH_LIST_QUERY = gql`
  query LaunchList {
    launches {
      id
      mission_name
      launch_date_utc
    }
  }
`;
