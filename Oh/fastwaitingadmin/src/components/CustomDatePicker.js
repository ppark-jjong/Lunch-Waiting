import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import './CustomDatePicker.css'; 

const CustomDatePicker = ({ selectedDate, handleDateSelect, showDatePicker }) => {
    return (
        <div id='datePickerChoose'>
            {showDatePicker && (
                <DatePicker
                    selected={selectedDate}
                    minDate={new Date('2000-01-01')}
                    onChange={handleDateSelect}
                    locale={ko}
                    inline
                />
            )}
        </div>
    );
};

export default CustomDatePicker;
