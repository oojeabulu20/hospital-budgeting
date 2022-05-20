export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "ngn",
    style: "currency",
    minimumFractionDigits:0 //Ensures that no extra decimals are placed on the numbers
})