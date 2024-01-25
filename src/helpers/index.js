export const getId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
}

export const formatDate = date => {
    return new Date(date).toLocaleDateString('en-UK')
}