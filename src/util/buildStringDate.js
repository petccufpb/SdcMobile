const weekday = [
  "Domingo", 
  "Segunda", 
  "Terça", 
  "Quarta", 
  "Quinta", 
  "Sexta", 
  "Sábado"
];

/**
 * Recebe a data no formato yyyy-mm-dd e 
 * retorna a string.
 * Ex: Segunda - 05/02, às 9:30h
 */
export const buildStringDate = (date, time) => {
  const d = new Date(date.replace(/-/gi, "/"));
  const dateString = weekday[d.getDay()] + 
                     " - " + addZero(d.getDate()) + 
                     "/" + addZero(d.getMonth()+1) +
                     ", às " + time + "h";
  return dateString;                    
}

const addZero = number => {
  return (number+"").length === 1 ? "0"+number : number;
};