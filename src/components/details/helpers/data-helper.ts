export function formatDate(date: Date | string) {
    if(typeof date == "string") date = new Date(date)
    return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}

export function calculateAge(date: Date | string) {
    if(typeof date == "string") date = new Date(date)
    const today = new Date()
    
    let age = today.getFullYear() - date.getFullYear()
    const monthDifference = today.getMonth() - date.getMonth()
    
    if (monthDifference < 0 || 
        (monthDifference === 0 && today.getDate() < date.getDate())
    ) age--

    if (age % 10 === 1 && age % 100 !== 11) {
        return `${age} год`
    } else if ((age % 10 >= 2 && age % 10 <= 4) && !(age % 100 >= 12 && age % 100 <= 14)) {
        return `${age} года`
    } else {
        return `${age} лет`
    }
  }

export const formatPhoneNumber = (phone: string): string =>
  phone.replace(/^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2 $3 $4');