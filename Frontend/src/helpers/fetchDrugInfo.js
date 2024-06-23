import axios from 'axios';



const fetchDrugInfo = async (drugID) => {
    const relativeAPI = `http://localhost:8000/drug/${drugID}`
    try {
        const response = await axios.get(relativeAPI);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch drug information');
        }
    } catch (error) {
        console.error('Error fetching drug informations:', error);
        throw error;
    }
};

export default fetchDrugInfo;