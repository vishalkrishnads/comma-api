import * as request from './request';

export async function clipsCreate(route, title, start_time, end_time, video_type, is_public) {
  return await request.post('v1/clips/create', {
    route,
    title,
    start_time,
    end_time,
    video_type,
    is_public,
  });
}

export async function clipsList(dongle_id) {
  return await request.get('v1/clips/list', { dongle_id });
}

export async function clipsDetails(dongle_id, clip_id) {
  return await request.get('v1/clips/details', { dongle_id, clip_id });
}

export async function clipsUpdate(dongle_id, clip_id, is_public) {
  return await request.patch('v1/clips/update', { dongle_id, clip_id, is_public });
}

export async function clipsDelete(dongle_id, clip_id) {
  return await request.del('v1/clips/update', { dongle_id, clip_id });
}
