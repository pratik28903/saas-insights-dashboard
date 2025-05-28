export const success = (message: string, data: any = {}) => ({
  status: 'success',
  message,
  data,
});

export const error = (message: string, code = 500) => ({
  status: 'error',
  code,
  message,
});
