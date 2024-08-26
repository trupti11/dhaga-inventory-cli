export class Saree {
    No: number;
    Name: string;
    Status: string;
    Type: string;
    AuraBanarasCostPrice: number;
    AuroPriceRupees: number;
    AuraPriceUSD: number;
    MyPriceWithDiscountPaidToAura: number;
    SellPriceUSD: number;
    SixYardsByKekaPrice: number;
    SellPriceRs: number;
    LaunchSpecial10DiscountFinal: number;
    MarkupPercent: number;

    constructor(data: {
        No: number,
        Name: string,
        Status: string,
        Type: string,
        AuraBanarasCostPrice: number,
        AuroPriceRupees: number,
        AuraPriceUSD: number,
        MyPriceWithDiscountPaidToAura: number,
        SixYardsByKekaPrice: number,
        LaunchSpecial10DiscountFinal: number,
        MarkupPercent: number
    }) {
        console.log("Data: " + data);
        const rupeesPerDollar = 83;
        this.No = data.No;
        this.Name = data.Name;
        this.Status = data.Status;
        this.Type = data.Type;
        this.MarkupPercent = data.MarkupPercent;
        this.AuraBanarasCostPrice = data.AuraBanarasCostPrice;
        this.AuroPriceRupees = data.AuroPriceRupees;
        this.AuraPriceUSD = data.AuraPriceUSD;
        this.MyPriceWithDiscountPaidToAura = data.MyPriceWithDiscountPaidToAura;
        console.log("Aura Banaras Cost Price: " + this.AuraBanarasCostPrice);
        console.log("Markup Percent: " + this.MarkupPercent);
        this.SellPriceRs = Number((data.AuraBanarasCostPrice + (data.AuraBanarasCostPrice * data.MarkupPercent / 100)));
        console.log("Sell Price Rs: " + this.SellPriceRs);
        this.SellPriceUSD =  Number((this.SellPriceRs / rupeesPerDollar));
        console.log("Sell Price USD: " + this.SellPriceUSD);
        this.SixYardsByKekaPrice = data.SixYardsByKekaPrice;
        this.LaunchSpecial10DiscountFinal = data.LaunchSpecial10DiscountFinal;
    }

    // Example method to display the details
    displayDetails(): void {
        console.log(`Saree No: ${this.No}`);
        console.log(`Name: ${this.Name}`);
        console.log(`Type: ${this.Type}`);
        console.log(`Status: ${this.Status}`);
        console.log(`Auro Banaras Website Price in Rupees: ₹${this.AuraBanarasCostPrice}`);
        console.log(`Auro Price in Rupees: ₹${this.AuroPriceRupees}`);
        console.log(`Aura Price in USD: $${this.AuraPriceUSD.toFixed(2)}`);
        console.log(`My Price with Discount Paid to Aura: ₹${this.MyPriceWithDiscountPaidToAura}`);
        console.log(`Sell Price in Rupees: ₹${this.SellPriceRs}`);
        console.log(`Markup Percent: ${this.MarkupPercent}%`);
        console.log(`Calculated Sell Price in USD: $${this.AuraPriceUSD}`);
    }
}