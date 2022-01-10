export type Example = {
  name: string;
  error: string;
  status: number;
  success?: boolean;
};
export type Data = {
  value: string;
};
export type User = {
  name: string;
  email: string;
  photoURL: string;
  validator: {
    error: string;
    success: string;
  };
};
