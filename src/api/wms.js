import axios from 'axios';

export const getLayers = async () => {
    const response = await axios.get(
        "http://localhost:8082/geoserver/rest/layers.json",
        {
            headers: {
                admin: "geoserver",
            },
            // params: {
            //     applicationId: applicationId !== 'All' ? applicationId : null,
            //     limit: '500',
            // },
        }
    );

    return response.data;
};