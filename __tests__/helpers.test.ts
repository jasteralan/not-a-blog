import { format, subDays } from "date-fns";

import { daysAgoFmt } from "../helpers/helpers";

describe("daysAgoFmt", () => {
    it("Get '3 days ago'", () => {
        expect(daysAgoFmt(
            format(subDays(new Date(), 3), 'yyyy-MM-dd')
        )).toBe('3 days ago');
    });

    it("Get '🔥'", () => {
        expect(daysAgoFmt(
            format(new Date(), 'yyyy-MM-dd')
        )).toBe('🔥');
    });
});