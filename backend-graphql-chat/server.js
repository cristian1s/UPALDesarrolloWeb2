import { JSON_USER_LIST , JSON_CHAT_LIST } from "./src/jsonChats.js";
import { ApolloServer,gql } from "apollo-server";

const typeDefs = gql`
    type User {
        avatar: String!
        alt: String
        title: String!
        subtitle: String!
        date: String!
        unread: Int!
    }
    type ChatList {
        avatar: String!
        alt: String
        title: String!
        subtitle: String!
        date: String!
        unread: Int!
    }
    
    type Query {
        users: [User]
        user(title: String!): User
    }
`;

const resolvers = {
    Query: {
        users: () => {
            return Object.values(JSON_USER_LIST);
        },
        user: (parent, args) => {
            return JSON_USER_LIST[args.title];
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
 