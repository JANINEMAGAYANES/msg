import axios from 'axios';

const API_URL = 'http://localhost:8000/drug_overview/1'; 

const fetchPrescriptions = async () => {
    try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch prescriptions');
        }
    } catch (error) {
        console.error('Error fetching prescriptions:', error);
        throw error;
    }
};

export default fetchPrescriptions;
