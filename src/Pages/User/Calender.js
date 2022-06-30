import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [date,setDate]= useState(new Date());
    return (
        <div className='bg-white py-6'>
            <span className='text-xl font-bold'>This is Calender</span>
            <div className='bg-gray-200 rounded-xl mx-auto items-center w-80'> 
            <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
            />
            </div>
        </div>
    );
};

export default Calender;