import axios from 'axios';

const API_URL = ''; 

const fetchPrescriptions = async () => {
    try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
            console.log(response.data)
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
