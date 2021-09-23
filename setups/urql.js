import { createClient } from "urql";

export default new createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  requestPolicy: "cache-first",
});


export const urqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  requestPolicy: 'cache-and-network'
  
})

