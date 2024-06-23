import React, { useState, useEffect } from 'react';
import MedicationList from '../components/MedicationList';
import fetchPrescriptions from "../helpers/fetchPrescription";


const Medication = () => {
    const extractProperty = (data, propertyName) => {
        return data.map(item => item[propertyName]);
    };

    const [drugs, setDrugs] = useState([]);
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const fetchMedicationData = async () => {
            try {
                const data = await fetchPrescriptions();
                const meds = extractProperty(data, 'name');
                const pills = extractProperty(data, 'drug_id');
                setMedications(meds); // Update state with fetched medications
                setDrugs(pills);
            } catch (error) {
                // Handle error
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchMedicationData();
    }, [])
    return (
        <div>
            {<MedicationList medications={medications} drugIDs={drugs}/>}

        </div>
    );
};

export default Medication;