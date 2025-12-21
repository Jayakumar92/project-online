import { z } from 'zod';

export const displayZodErrors = (errors: z.ZodIssue[]) => {
  return errors
    .map((err) => {
      const field = err.path.join('.');
      const message = err.message;
      return `${field}: ${message}`;
    })
    .join(', ');
};
