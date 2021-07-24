import { format, formatDistance } from "date-fns";

export function svgIcon(icon: string) {
    return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
}

export function daysAgoFmt(date: string) {
    const d = new Date();
    if(format(d, 'yyyy-MM-dd') === date) {
        return '🔥';
    }

    return formatDistance(new Date(date), d, { addSuffix: true });
}