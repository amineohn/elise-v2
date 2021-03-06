export type Example = {
  name: string;
};
export type Data = {
  value: string;
  dumpster?: string;
  date?: string;
  user?: string;
  matter?: string;
};
export type User = {
  firstname: string;
  lastname: string;
};
export type Matter = {
  name: string;
  link: string;
};
export type Users = {
  name: string;
  email: string;
  photoURL: string;
  validator: {
    error: string;
    success: string;
  };
};
