import { createClient } from "urql";

export default new createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  requestPolicy: "cache-first",
});

