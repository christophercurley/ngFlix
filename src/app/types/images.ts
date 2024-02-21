export type ImagesDTO = {
  backdrops: Image[];
};

export type Image = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
};
