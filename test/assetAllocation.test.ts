import { executionAsyncId } from "async_hooks";
import { assetAllocation, Asset, Allocation } from "../src/portfolio/portfolioPerformance";

describe ("assetAllocation", () => {
    test("works normally", () => {
    const assets: Asset[] = [
        {name: "stocks", value: 5000},
        {name: "bonds", value:5000},
    ];

    const result: Allocation[] = assetAllocation(assets);

    expect(result.length).toBe(2);
    expect(result[0].name).toBe("stocks");
    // 5000 / 10000 * 100 = 50 percent
    expect(result[0].percentage).toBe(50);
    expect(result[1].name).toBe("bonds");
    // // 5000 / 10000 * 100 = 50 percent
    expect(result[0].percentage).toBe(50);
        
    });

    test("when the array is empty",  () => {
        const asset: Asset[] = [];

        const result: Allocation[] = assetAllocation(asset);

        // it will return a empty array
        expect(result.length).toBe(0);
    })
});
