const axios = require('axios');

// 1. Define our Hubs (Region IDs)
const HUBS = [
    { name: 'Jita', region: 10000002 },
    { name: 'Amarr', region: 10000043 },
    { name: 'Dodixie', region: 10000032 },
    { name: 'Rens', region: 10000030 },
    { name: 'Hek', region: 10000042 }
];

/**
 * Step A: Resolve the Item Name to a Type ID
 */
async function getTypeId(itemName) {
    console.log(`Searching for ID for: ${itemName}...`);
    try {
        // We use the ESI universe/ids endpoint
        const response = await axios.post('https://esi.evetech.net/latest/universe/ids/', [itemName]);
        
        // ESI returns an object. We look inside 'inventory_types'
        if (response.data.inventory_types && response.data.inventory_types.length > 0) {
            return response.data.inventory_types[0].id;
        }
        return null;
    } catch (error) {
        console.error("ID Search Error:", error.message);
        return null;
    }
}

/**
 * Step B: Fetch Market Data for a specific Hub
 */
async function fetchSingleHub(hub, typeId) {
    const url = `https://esi.evetech.net/latest/markets/${hub.region}/orders/`;
    try {
        const response = await axios.get(url, { params: { type_id: typeId } });
        const orders = response.data;

        // Separate Buy and Sell orders
        const sellOrders = orders.filter(o => !o.is_buy_order);
        const buyOrders = orders.filter(o => o.is_buy_order);

        return {
            hub: hub.name,
            lowestSell: sellOrders.length ? Math.min(...sellOrders.map(o => o.price)) : "None",
            highestBuy: buyOrders.length ? Math.max(...buyOrders.map(o => o.price)) : "None"
        };
    } catch (error) {
        return { hub: hub.name, error: "API Timeout" };
    }
}

/**
 * Step C: The "Main" function to run the logic
 */
async function fetchHubPrice(hub, typeId) {
    const url = `https://esi.evetech.net/latest/markets/${hub.region}/orders/`;
    try {
        const response = await axios.get(url, { params: { type_id: typeId } });
        const orders = response.data;

        // Separate orders
        const sellOrders = orders.filter(o => !o.is_buy_order);
        const buyOrders = orders.filter(o => o.is_buy_order);

        // If no orders exist, return "N/A" instead of breaking
        return {
            hub: hub.name,
            lowestSell: sellOrders.length ? Math.min(...sellOrders.map(o => o.price)) : "N/A",
            highestBuy: buyOrders.length ? Math.max(...buyOrders.map(o => o.price)) : "N/A"
        };
    } catch (error) {
        // Return a safe object if the API times out or fails
        return { hub: hub.name, lowestSell: "Err", highestBuy: "Err" };
    }
}

// At the bottom of market.js
module.exports = {
    HUBS,
    getTypeId,
    fetchHubPrice
};