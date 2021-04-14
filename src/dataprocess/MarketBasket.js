export const processMarketData = (jsonMarketData) => {
    const result = {
        name: "Market",
        types: {
            "Market": {
                multiselect: false,
                parent: null
            }
        },
        "filterDefaults": {
            "Market": {
                "name": "MarketBasket1",
                "default": false,
                "title": "Select a Market",
                "type": "Market"
            }
        },
        sections: {
            "Market": {
                name: "Market",
                filters: [],
            }
        }
    };

    if (jsonMarketData) {
        result.sections['Market'].filters = jsonMarketData.map(item => {
            const { MarketName, MarketID } = item;
            return { 
                id: MarketID, 
                name: MarketName, 
                title: `Market: ${MarketName}`, 
                default: false, 
                type: 'Market'
            };
        });
    }

    return result;
}