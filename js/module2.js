// this is my lodash module 

var _ = require('lodash');

var people = [{
    "id": 1,
    "first_name": "Walton",
    "last_name": "Wolton",
    "email": "wwolton0@census.gov",
    "gender": "Male",
    "ip_address": "236.134.166.59"
  }, {
    "id": 2,
    "first_name": "Swen",
    "last_name": "Gentzsch",
    "email": "sgentzsch1@unblog.fr",
    "gender": "Male",
    "ip_address": "91.239.101.227"
  }, {
    "id": 3,
    "first_name": "Laetitia",
    "last_name": "Banke",
    "email": "lbanke2@plala.or.jp",
    "gender": "Female",
    "ip_address": "107.130.99.106"
  }, {
    "id": 4,
    "first_name": "Freeland",
    "last_name": "Shorto",
    "email": "fshorto3@google.co.uk",
    "gender": "Male",
    "ip_address": "245.217.201.10"
  }, {
    "id": 5,
    "first_name": "Barbabas",
    "last_name": "Bennetts",
    "email": "bbennetts4@technorati.com",
    "gender": "Male",
    "ip_address": "138.96.184.43"
  }]

  var femaleCount = _.filter(people, {gender: "Female"}).length;

  alert(femaleCount + "hot women!");


