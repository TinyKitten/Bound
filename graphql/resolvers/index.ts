import greetQueryResolver from "./queries/greet"

const resolvers = {
    Query: {
        greet() {
            return greetQueryResolver()
        }
    }
}

export default resolvers