export type CreditsDTO = {
  id: string;
  cast: Credit[];
};

export type Credit = {
  id: string;
  name: string;
  character: string;
  profile_path: string;
  credit_id: string;
};
