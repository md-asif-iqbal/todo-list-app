import React from 'react';
import { useQuery } from 'react-query';

const CompleteTask = () => {
    const { data, isLoading,refetch } = useQuery('data', () => fetch('')
    .then(res => res.json()));
    return (
        <div>
            This is Complete Task
        </div>
    );
};

export default CompleteTask;