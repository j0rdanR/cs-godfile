const errors = {
  404: 'Not Found',
  500: 'Server issue',
}

export const statusToError = (status: number) => {
  if (errors[status]) return errors[status]+` (${status})`;
  else return 'Unknown error: '+status;
}