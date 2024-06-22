import React, { useState, useEffect } from 'react';
import MedicationList from '../components/MedicationList';
import fetchPrescriptions from "../helpers/fetchPrescription";


const Medication = () => {
    function getItemsByCategory(dictionary, attribute) {
        return Object.entries(dictionary).filter(([key, item]) => item.hasOwnProperty(attribute));
    }

    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const fetchMedicationData = async () => {
            try {
                const data = await fetchPrescriptions();
                const meds = getItemsByCategory(data, 'name' );
                setMedications(meds); // Update state with fetched medications
            } catch (error) {
                // Handle error
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchMedicationData();
    }, [])
    return (
        <div>
            <MedicationList/>
        </div>
    );
};

export default Medication;
