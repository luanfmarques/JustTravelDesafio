export function formatCurrency(number: number, hideSymbol?: boolean) {
  const formatedCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);

  if (hideSymbol) return formatedCurrency.replace("R$", "").trim();
  return formatedCurrency;
}

export function reformatDate(dateStr: string, reverse?: boolean) {
  let dArr = dateStr.split("-");
  if (reverse) return dArr[0] + "/" + dArr[1] + "/" + dArr[2];
  return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
}

export function isDateBeforeToday(date: Date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}

export function isDateAfterMaxDate(date: Date, maxDate: Date) {
  return new Date(date.toDateString()) > new Date(maxDate.toDateString());
}

export function dateIsValid(date: Date) {
  return !Number.isNaN(new Date(date).getTime());
}

export function addLeadingZeros(num: number, totalLength: number) {
  return String(num).padStart(totalLength, "0");
}
