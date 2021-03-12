import {ScheduleType} from "../../models/entities/ScheduleType"
export const schedule_types= [
    {
        title: "Розклад за спеціальністю",
        value: ScheduleType.SPECIALITY
    },
    {
        title: "Розклад сесії",
        value: ScheduleType.SESSION
    },
    {
        title: "Довільний розклад",
        value: ScheduleType.SUBFACULTY
    }
];