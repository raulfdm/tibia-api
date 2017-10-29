const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { getCharacterByName } = require('../services/character-services')

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  description: '...',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: character => character.name,
    },
    sex: {
      type: GraphQLString,
      resolve: character => character.sex,
    },
    vocation: {
      type: GraphQLString,
      resolve: character => character.vocation,
    },
    level: {
      type: GraphQLString,
      resolve: character => character.level,
    },
    achievmentPoint: {
      type: GraphQLString,
      resolve: character => character.achievmentPoint,
    },
    world: {
      type: GraphQLString,
      resolve: character => character.world,
    },
    residence: {
      type: GraphQLString,
      resolve: character => character.residence,
    },
    lastLogin: {
      type: GraphQLString,
      resolve: character => character.lastLogin,
    },
    accountStatus: {
      type: GraphQLString,
      resolve: character => character.accountStatus,
    },
  }),
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'player',
    description: 'This query will provide basic Tibia player informations. You must pass a character name',

    fields: () => ({
      character: {
        type: CharacterType,
        args: {
          characterName: {
            type: GraphQLString,
          },
        },
        resolve: async (root, args) => getCharacterByName(args.characterName),
      },
    }),
  }),
})
