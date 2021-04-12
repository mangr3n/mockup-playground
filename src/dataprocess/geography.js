export const processGeographyData = (jsonGeographyData, jsonStateData) => {
    const result = {
        name: "Geography",
        types: {
            "Geography-Type": {
                multiselect: false,
                parent: null
            },
            "State": {
                multiselect: false,
                parent: "Geography-Type"
            }
        },
        "filterDefaults": {
            "Geography-Type": {
                "name": "National",
                "default": true,
                "title": "Select a Geography Type to filter geographies",
                "type": "Geography-Type"
            },
            "State": {
                "name": "All States",
                "default": true,
                "title": "Select a State to filter by State",
                "type": "State"
            }
        },
        sections: {
            "Geography-Type": {
                name: "Geography Type",
                filters: [],
            },
            "State": {
                name: "State",
                filters: []
            }
        }
    };

    if (jsonGeographyData) {
        result.sections['Geography-Type'].filters = jsonGeographyData.map(item => {
            const { GeoTypeName } = item;
            return { 
                id: `Geography:${GeoTypeName}`,
                name: GeoTypeName,
                title: `Geography Type: ${GeoTypeName}`,
                default: false,
                type: 'Geography-Type'
            };
        });
    }
    if (jsonStateData) {
        result.sections['State'].filters = jsonStateData.map((item) => {
            const { StateFullName, StateID} = item;
            return {
                id: StateID,
                name: StateFullName,
                title: `State:${StateFullName}`,
                parent: "Geography:State / CBSA",
                type: "State"
            }
        })
    }
    return result;
}