import { useFormContext } from 'react-hook-form';
import { Container, StyledDatePicker } from './styles';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Datepicker({ name = '', label = '', formatString = 'DD MMM YYYY' }) {
    const { register, watch, setValue } = useFormContext();

    return (
        <Container>
            <p style={{ minWidth: 'auto', flex: '1 1 25%' }}>{label}</p>
            <StyledDatePicker
                label={label}
                {...register(name)}
                views={['year', 'month', 'date']}
                format={formatString}
                value={watch(name) ? moment(watch(name)) : null}
                onChange={(newValue) => {
                    setValue(name, newValue);
                }}
                slots={{
                    openPickerIcon: CalendarMonthIcon
                }}
            />
        </Container>
    );
}