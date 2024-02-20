import { Tvshow } from '../types/tvshows';

export function mapTvshowToMedia(tvshow: Tvshow) {
  return {
    ...tvshow,
    mediaType: 'tv',
    title: tvshow.name,
    original_title: tvshow.original_name,
    release_date: tvshow.first_air_date,
    video: false,
  };
}
