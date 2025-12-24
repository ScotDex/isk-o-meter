const { Client, GatewayIntentBits } = require(`discord.js`);
const { HUBS, getTypeId, fetchHubPrice } = require(`./market.js`);
const { createMarketEmbed } = require('./embedFactory.js'); 
require('dotenv').config();

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds] 
});

client.on(`interactionCreate`, async (interaction)  => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === `price`) {
        const itemName = interaction.options.getString(`item`);

        await interaction.deferReply();
        try {
            const typeId = await getTypeId(itemName);
            if (!typeId) {
                return interaction.editReply(`❌ Could not find an item named: **${itemName}**`);
            }
            const results = await Promise.all(HUBS.map(hub => fetchHubPrice(hub, typeId)));
            const embed = createMarketEmbed(itemName, typeId, results);
            await interaction.editReply({ embeds: [embed]});
            

        } catch (error) {
            console.error(error);
            await interaction.editReply("⚠️ An error occurred while fetching EVE market data.");
            
        }
    }

    else if (commandName === `help`) {
        const { createHelpEmbed } = require('./embedFactory.js');
        const embed = createHelpEmbed();
        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
});

client.login(process.env.DISCORD_TOKEN)