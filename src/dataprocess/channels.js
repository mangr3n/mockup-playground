export const processChannelData = (jsonChannelData, jsonSubChannelData) => {
    const result = {
        name: "Channels",
        types: {
            "Channel": {
                multiselect: false,
                parent: null
            },
            "Sub-Channel": {
                multiselect: false,
                parent: "Channel"
            }
        },
        "filterDefaults": {
            "Channel": {
                "name": "All Channels",
                "default": true,
                "title": "Select a Channel to filter Channels",
                "type": "Channel"
            },
            "Sub-Channel": {
                "name": "All Sub-Channels",
                "default": true,
                "title": "Select a Sub-Channel to filter Sub-Channels",
                "type": "Sub-Channel"
            }
        },
        sections: {
            Channel: {
                name: "Channel",
                filters: [],
            },
            "Sub-Channel": {
                name: "Sub-Channel",
                filters: []
            }
        }
    };

    if (jsonChannelData) {
        result.sections['Channel'].filters = jsonChannelData.map(item => {
            const { Channel, ChannelID } = item;
            return { id: ChannelID, name: Channel, title: `Channel: ${Channel}`, default: false, type: 'Channel'};
        });
    }
    if (jsonSubChannelData) {
        result.sections['Sub-Channel'].filters = jsonSubChannelData.map((item) => {
            const { SubChannel, Channel, ChannelID, SubChannelID } = item;
            return {
                id: SubChannelID,
                name: SubChannel,
                title: `Sub-Channel: ${SubChannel}`,
                parent: ChannelID,
                type: "Sub-Channel",
                default: false
            }
        })
    }
    return result;
}