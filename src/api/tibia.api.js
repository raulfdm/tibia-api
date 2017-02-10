"use strict"

const request = require('request-promise');

class TibiaAPI {

    createCharacterObject(htmlResponse) {

        let regexName = /<td width=20%>Name:<\/td><td>\w*\s?(\w*)?/;
        let regexSex = /<td>Sex:<\/td><td>\w*/;
        let regexVocation = /<td>Vocation:<\/td><td>\w*\s?(\w*)?/;
        let regexAchievementPoint = /<nobr>Achievement Points:<\/nobr><\/td><td>\w*/;
        let regexWorld = /<td>World:<\/td><td>\w*\s?(\w*)?/;
        let regexResidence = /<td>Residence:<\/td><td>\w*\s?(\w*)?/;

        return new Promise((resolve, reject) => {
            try {
                let character = {
                    name: regexName
                        .exec(htmlResponse)[0]
                        .replace(/<td width=20%>Name:<\/td><td>/, ''),
                    sex: regexSex
                        .exec(htmlResponse)[0]
                        .replace(/<td>Sex:<\/td><td>/, ''),
                    vocation: regexVocation
                        .exec(htmlResponse)[0]
                        .replace(/<td>Vocation:<\/td><td>/, ''),
                    achievementPoint: regexAchievementPoint
                        .exec(htmlResponse)[0]
                        .replace(/<nobr>Achievement Points:<\/nobr><\/td><td>/, ''),
                    world: regexWorld
                        .exec(htmlResponse)[0]
                        .replace(/<td>World:<\/td><td>/, ''),
                    residence: regexResidence
                        .exec(htmlResponse)[0]
                        .replace(/<td>Residence:<\/td><td>/, '')
                };
                resolve(character)
            } catch (error) {
                reject(error)
            }
        })
    }

    validateParameter(reqQuery) {
        return new Promise((resolve, reject) => {
            if (reqQuery) 
                resolve(reqQuery)
            else 
                reject(new Error("name is required"))
        })
    }

    getCharacterName(reqQuery) {
        return new Promise((resolve, reject) => {
            try {
                let characterName = reqQuery
                    .name
                    .replace(/\s/, "+");

                resolve(characterName)
            } catch (error) {
                reject(error)
            }
        })
    }

    consultSite(app, characterName) {
        let url = `https://secure.tibia.com/community/?subtopic=characters&name=${characterName}`;
        return request(url);
    }
}

module.exports = new TibiaAPI();