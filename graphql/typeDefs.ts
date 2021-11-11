import { gql } from "apollo-server-micro"

const typeDefs = gql`
    type Query {
        greet: Greet! 
    }
    type Greet {
        message: String
    }
`

export default typeDefs