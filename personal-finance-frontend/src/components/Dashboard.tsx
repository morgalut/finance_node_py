import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
    const [summary, setSummary] = useState<any>(null);

    useEffect(() => {
        axios.get('/api/summary')
            .then(response => setSummary(response.data))
            .catch(error => console.error('Error fetching summary:', error));
    }, []);

    if (!summary) return <div>Loading...</div>;

    return (
        <div>
            <h1>Financial Summary</h1>
            {/* Render summary data here */}
        </div>
    );
};

export default Dashboard;
