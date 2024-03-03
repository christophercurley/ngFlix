import { environment } from '../../environments/environment';

export function computeRoute(id: number, mediaType: string): string {
  return `${environment.WEBSITE_NAME + mediaType[0] + '/details/' + id}`;
}
