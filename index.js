#!/usr/bin/env node
// -*- coding: utf-8 -*-

console.clear();
console.debug(`Booting up…`);

const Discord = require('discord.js');
const { Client, Collection, GatewayIntentBits } = Discord;
const handler = require("./src/handlers/index");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
  ]
});
const dotenv = require('dotenv').config();

// Global Variables
client.discord = Discord;
client.commands = new Collection();
client.slash = new Collection();
client.config = require('./config');
client.cwd = require('process').cwd(); // require('path').resolve(``);

module.exports = client;

// Records commands and events
handler.loadEvents(client);
// handler.loadCommands(client);
handler.loadSlashCommands(client);

// Error Handling
process.on("uncaughtException", (err) => {
  console.error('Uncaught Exception:', err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("[FATAL] Possibly Unhandled Rejection at: Promise", promise, "\nreason:", reason.message);
});

client.login(process.env.TOKEN);