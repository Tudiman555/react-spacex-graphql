import { gql } from "@apollo/client";

export const LAUNCH_DETAILS_QUERY = gql`
  query LaunchDetails($id: ID!) {
    launch(id: $id) {
      mission_id
      mission_name
      launch_date_utc
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;
