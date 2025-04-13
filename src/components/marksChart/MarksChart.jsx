import React, { use } from 'react';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);

    const markData = marksDataRes.data; 

    // data processing for the chart 
    
    return (
        <div>
            
        </div>
    );
};

export default MarksChart;