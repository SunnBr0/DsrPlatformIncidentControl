import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import { useState } from 'react';
import calendar from '../../../assets/main/userProfile/calendar.svg';
export const ButtonCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs().startOf('day'));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <figure className='profile__figure-calendar' onClick={handleOpen}>
          <img src={calendar} alt="" />
        </figure>
        <DatePicker
          open={open}
          onClose={handleClose}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            handleClose();
          }}
          maxDate={dayjs().startOf('day')}
          minDate={dayjs('2025-06-01')}
          slotProps={{
            textField: {
              sx: {
                position: 'absolute',
                left:155,
                top:200,
                width: 0,
                height: 0,
                opacity: 0,
                pointerEvents: 'none',
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};
