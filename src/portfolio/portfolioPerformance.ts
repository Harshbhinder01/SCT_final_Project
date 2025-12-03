// this is the interface to represent the functions
interface portfolioPerformance {
    initialInvestment: number;
        currentValue: number;
        profitOrLoss: number;
        percentageChange: number;
        performanceSummary: string;
}

//  changed the hard coded values to accept any input
// i set the return to the portfolioPerformance interface so it keeps that shape
export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
):  portfolioPerformance {


    // changed the division the substration because its suppose the be the amount of dollars not a ratio.
    // and i changed it to current value - initial investment
    const profitOrLoss =  currentValue - initialInvestment;
    // have to change this to a switch true statment to avoid dividing initialInvestment by zero.
    let percentageChange: number;

    // if the initial investment is 0 then the percent change is set to 0 so that its not divided by 0.
    switch (true) {
        case initialInvestment === 0:
        percentageChange = 0;
        break;
        // if the starting money is not zero use this formula
        default:
        percentageChange = (profitOrLoss / initialInvestment) * 100

    }

    // deleted the if/else statements and made switch true statements
    let performanceSummary: string;

    switch(true) {
        // greater than 20
        case percentageChange > 20:
            performanceSummary = `Gained significalent with a profit of $${profitOrLoss}`
            break;

        // greater than or equal to 10 but under or equal to 20
        case percentageChange >= 10:
            performanceSummary = `Gained moderately by $${profitOrLoss}`
            break;

        // greater than or equal to 0.1 but under 10
        case percentageChange >= 0.1:
            performanceSummary = `Gained slightly by $${profitOrLoss}`
            break;

        // between -0.1 and 0.1 so no change 
        case percentageChange > -0.1 && percentageChange < 0.1:
            performanceSummary = `No change it $${profitOrLoss}`
            break;

        // if its at lest -10 and lower then -0.1 
        case percentageChange >= -10:
            performanceSummary = `lost slightly by $${profitOrLoss}`
            break;

        // at lest -20 but lower then -10 percent
        case percentageChange >= -20:
            performanceSummary = `Lost moderately by $${profitOrLoss}`
            break;

        // less then -20
        default:
            performanceSummary = `Lost significantly by $${profitOrLoss}`

    }

    
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

// this is function 1 
// this is the interface for the asset.
export interface Asset {
    name: string;
    value: number;
}

export function largestHolding(assets: Asset[]): Asset | null {

    // if it is empty it will stop and return null.
    switch (true) {
    case assets.length === 0:
        return null;
    default:
        break;

    }

    let holding = assets[0];

    // used a for loop to go through each asset one by one. if it is bigger update the holding if not keep same one.
    for (const asset of assets) {
        switch (true) {
            case asset.value > holding.value:
                holding = asset;
                break;
        }
    }

    return holding;
}

// this is function 2

export interface Allocation {
    name:string;
    percentage: number;
}

export function assetAllocation (assets: Asset[]): Allocation[]  {

    // when the list is empty it will stop and return null
    switch (true) {
        case assets.length === 0:
            return [];
        default:
            break;
        
    }

    // looped through each value to add up totoal assets 
    let total = 0;
    for (const asset of assets) {
        total += asset.value;
    }

    let allocations: Allocation[] = [];

    // this is to calculate the percentage of each asset
    // if the total assets are 0 every asset gets 0
    switch (true) {
        case total === 0:
            for (const asset of assets) {
                allocations.push({
                    name: asset.name,
                    percentage: 0
                });
            }
            break;
    
        // else use formula (value / total) * 100 to turn total money into percentage
        default:
            for (const asset of assets) {
                allocations.push({
                    name:asset.name,
                    percentage:(asset.value / total) * 100
                });
            }
            break;

        }

        return allocations;
}
