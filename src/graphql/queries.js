import { gql } from "@apollo/react-hooks";

export const REPOSITORIES_QUERY = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER_QUERY = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`;