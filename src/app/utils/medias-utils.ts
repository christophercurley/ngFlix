import { WEBSITE_NAME } from '../constants/website-name';

export function computeRoute(id: number, mediaType: string): string {
  return `${WEBSITE_NAME + mediaType[0] + '/details/' + id}`;
}
