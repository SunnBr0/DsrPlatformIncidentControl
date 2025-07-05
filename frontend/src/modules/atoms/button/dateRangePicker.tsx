import { useState } from 'react';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import CalendarIcon from '../../../assets/main/analiticsWorkSpace/IconCalendar.svg';
import CloseIcon from '../../../assets/main/analiticsWorkSpace/IconClose.svg';

export const CustomDateRangePicker = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2025-01-01'));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs('2025-07-05'));

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const styleFont = {
    width: '120px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '12px',
    lineHeight: '18px',
    color: 'rgba(255, 255, 255, 0.8)',
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display="flex"
        gap={1}
        sx={{
          width: '244px',
          border: '1px solid rgba(246, 251, 253, 0.28)',
          borderRadius: '4px',
          alignItems: 'center',
          display: 'flex',
          margin: 0,
          paddingY: 0,
          paddingX: 0,
          paddingLeft: '7px',
          height: '22px',
        }}
      >
        <DatePicker
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
            setOpenStart(false);
          }}
          sx={{
            input: {
              fontSize: '10px',
            },
          }}
          format="DD.MM.YYYY"
          open={openStart}
          onClose={() => setOpenStart(false)}
          slotProps={{
            textField: {
              variant: 'standard',
              placeholder: 'C',
              InputProps: {
                disableUnderline: true,
                sx: styleFont,
                endAdornment: (
                  <InputAdornment position="end">
                    {startDate && (
                      <IconButton onClick={() => setStartDate(null)} size="small">
                        <img src={CloseIcon} alt="Clear" style={{ width: 12, height: 12 }} />
                      </IconButton>
                    )}
                    <IconButton
                      onClick={() => setOpenStart(true)}
                      size="small"
                      sx={{
                        height: '22px',
                        borderRight: '1px solid rgba(246, 251, 253, 0.28)',
                        borderRadius: '0px',
                      }}
                    >
                      <img src={CalendarIcon} alt="Calendar" style={{ width: 12, height: 12 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            },
          }}
        />
        <DatePicker
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
            setOpenEnd(false);
          }}
          format="DD.MM.YYYY"
          open={openEnd}
          onClose={() => setOpenEnd(false)}
          slotProps={{
            textField: {
              variant: 'standard',
              placeholder: 'По',
              InputProps: {
                disableUnderline: true,
                sx: styleFont,

                endAdornment: (
                  <InputAdornment position="end">
                    {endDate && (
                      <IconButton onClick={() => setEndDate(null)} size="small">
                        <img src={CloseIcon} alt="Clear" style={{ width: 12, height: 12 }} />
                      </IconButton>
                    )}
                    <IconButton onClick={() => setOpenEnd(true)} size="small">
                      <img src={CalendarIcon} alt="Calendar" style={{ width: 12, height: 12 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};
