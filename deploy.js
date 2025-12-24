require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

const commands = [
    new SlashCommandBuilder()
        .setName('price')
        .setDescription('Check EVE Online market prices')
        .addStringOption(opt => opt.setName('item').setDescription('Item Name').setRequired(true)),
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get info on how to use ISK-O-Meter')


    ].map(c => c.toJSON());

(async () => {
    // This pushes the command ONLY to your test server instantly
    await rest.put(
        Routes.applicationCommands(clientId), 
        { body: commands }
    );
    console.log('Command registered locally!');
})();