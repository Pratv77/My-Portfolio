export const calculateAge = (birthDate) => {
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += lastMonth;
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    const yearText = `${years} year${years !== 1 ? 's' : ''}`;
    const monthText = `${months} month${months !== 1 ? 's' : ''}`;
    const dayText = `${days} day${days !== 1 ? 's' : ''}`;
  
    return `${yearText}, ${monthText}, and ${dayText}`;
  };