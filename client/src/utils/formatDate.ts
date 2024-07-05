const formatDate = (dateString:string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;

const currentDate = new Date();
export const maxDate = currentDate.toISOString().split('T')[0];