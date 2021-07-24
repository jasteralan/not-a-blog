import { fetchPostSlugs } from "../helpers/mdx";

describe("fetchPostSlugs", () => {
    it('read file names from posts folder', async () => {
        const filenames = await fetchPostSlugs();
        expect(filenames.length).toBeGreaterThan(0);
    });
});
