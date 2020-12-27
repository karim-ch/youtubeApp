import client from 'services/youtube';
import { toNumber } from 'lodash';

async function search(request, response) {
  try {
    const {
      query: { keyword, count },
    } = request;

    const {
      data: { items },
    } = await client.search.list({
      part: 'snippet',
      type: 'video',
      q: keyword,
      maxResults: count ? toNumber(count) : 10,
      order: 'viewCount',
    });

    const videos = items.map(item => ({
      kind: item.kind,
      etag: item.etag,
      id: item.id,
      ...item.snippet,
    }));

    return response.status(200).json(videos);
  } catch (error) {
    console.log(error);
    const { message } = error;
    return response.status(500).send(message);
  }
}

export default {
  method: 'get',
  path: '/search',
  handler: search,
};
