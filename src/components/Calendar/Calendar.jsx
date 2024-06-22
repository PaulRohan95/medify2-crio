import SelectDay from "./SelectDay/SelectDay";
import { Box } from '@mui/material';
import { useState } from 'react';
import { startOfDay } from 'date-fns';
import SelectTime from "./SelectTime/SelectTime";

function Calendar ({ availableSlots, details, handleBooking }) {
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots = 
        availableSlots.morning.length + availableSlots.afternoon.length + availableSlots.evening.length;

        return (
            <Box>
                <SelectDay
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    totalSlots={totalSlots} />
                <SelectTime
                    availableSlots={availableSlots}
                    selectedDate={selectedDate}
                    details={details}
                    handleBooking={handleBooking} />
            </Box>
        )
};

export default Calendar;