import { format, formatDistance } from "date-fns";

export function daysAgoFmt(date: string) {
    const d = new Date();
    if(format(d, 'yyyy-MM-dd') === date) {
        return '🔥';
    }

    return formatDistance(new Date(date), d, { addSuffix: true });
}