
import { largestHolding , Asset } from "../src/portfolio/portfolioPerformance";
describe("largestHolding", () => {

    // this is just a test to see if it works normally
    test(" normal test", () => {
        const asset: Asset[] = [
            {name:"house", value: 40000},
            {name:"stock", value: 5000},
            {name:"bonds", value: 20000},
        ];
        const result = largestHolding(asset);

        // the house is the biggest asset
        expect(result).not.toBeNull();
        expect(result!.name).toBe("house");
        expect(result!.value).toBe(40000);
    });

    // this test if its empty array
    test("empty list", () => {
        const asset: Asset[] = [];

        const result = largestHolding(asset);
        
        expect(result).toBeNull();
    });
});