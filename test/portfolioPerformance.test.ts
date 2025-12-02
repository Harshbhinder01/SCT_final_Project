
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

// A case with profit (currentValue > initialInvestment)

describe ("calculatePortfolioPerformance", () => {
    test("test profit case", () => {
        // initialinvestment , current value
        const result = calculatePortfolioPerformance(5000, 6000);

        expect(result.initialInvestment).toBe(5000);
        expect(result.currentValue).toBe(6000);
        // 6000 - 5000
        expect(result.profitOrLoss).toBe(1000);
        // 1000 / 5000 * 100
        expect(result.percentageChange).toBe(20)
        expect(result.performanceSummary).toBe("Gained moderately by $1000")

    });

    // a case with loss
    test("lost case", () => {
        const result = calculatePortfolioPerformance(5000, 4500);
        expect(result.initialInvestment).toBe(5000)
        expect(result.currentValue).toBe(4500)
        expect(result.profitOrLoss).toBe(-500);
        // -500 / 5000 * 1000
        expect(result.percentageChange).toBe(-10)
        expect(result.performanceSummary).toBe("lost slightly by $-500")
    });

    // no change
    test("no change", () => {
        const result = calculatePortfolioPerformance(2000, 2000);

        expect(result.initialInvestment).toBe(2000)
        expect(result.currentValue).toBe(2000)
        expect(result.profitOrLoss).toBe(0)
        expect(result.percentageChange).toBe(0)
        expect(result.performanceSummary).toBe("No change it $0")

    });
});