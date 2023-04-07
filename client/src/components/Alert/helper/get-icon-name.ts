export const getIconName = (icon: string) => {
  switch (icon) {
    case 'warning':
      return 'warning'
    case 'error':
      return 'error'
    case 'success':
      return 'success'
    case 'info':
      return 'info'
    case 'question':
      return 'question'
    default:
      return 'warning'
  }
}
export const getIconColor = (icon: string) => {
  switch (icon) {
    case 'warning':
      return '#ffa503'
    case 'error':
      return '#ff4858'
    case 'success':
      return '#2fd573'
    case 'info':
      return '#bababa'
    case 'question':
      return '#71c9ff'
    default:
      return '#ffa503'
  }
}
