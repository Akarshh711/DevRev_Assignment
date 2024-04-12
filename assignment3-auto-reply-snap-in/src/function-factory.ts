import auto_reply_handler from './functions/auto_reply_handler';

export const functionFactory = {
  // Add your functions here
  auto_reply_handler,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
