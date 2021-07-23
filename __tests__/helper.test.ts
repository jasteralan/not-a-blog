import { format, subDays } from "date-fns";
import { fetchPostSlugs } from "../helpers/mdx";
import { daysAgoFmt } from "../helpers/helpers";

describe("fetchPostSlugs", () => {
    it('read file names from posts folder', async () => {
        const filenames = await fetchPostSlugs();
        expect(filenames.length).toBeGreaterThan(0);
    });
});

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