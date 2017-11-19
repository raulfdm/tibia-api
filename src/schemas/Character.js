const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const { getCharacterInfos } = require('../services/character.service')

const CharacterType = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: character => character.name,
    },
    formerNames: {
      type: GraphQLString,
      resolve: character => character.formerNames,
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
    achievementPoints: {
      type: GraphQLString,
      resolve: character => character.achievementPoints,
    },
    world: {
      type: GraphQLString,
      resolve: character => character.world,
    },
    formerWorld: {
      type: GraphQLString,
      resolve: character => character.formerWorld,
    },
    residence: {
      type: GraphQLString,
      resolve: character => character.residence,
    },
    house: {
      type: GraphQLString,
      resolve: character => character.house,
    },
    guildMembership: {
      type: GraphQLString,
      resolve: character => character.guildMembership,
    },
    lastLogin: {
      type: GraphQLString,
      resolve: character => character.lastLogin,
    },
    comment: {
      type: GraphQLString,
      resolve: character => character.comment,
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
    description: "This is my schema which will inform all player's informations",

    fields: () => ({
      player: {
        type: CharacterType,
        args: {
          nickname: {
            type: GraphQLString,
          },
        },
        resolve: (root, args) => getCharacterInfos(args.nickname),
      },
    }),
  }),
})
