import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: '70bs30dg',
  dataset: 'production',
  apiVersion: '2023-01-26',
  token:
    'skxynFyJUpw8atfe2oxhGbQ8KVtl2wlp87EmBHMGRCNC15OPMx6AJbsiT4AtinQo2mpho8L2ngPXFCAdzx8qwKmFxgqzkSqOpAZH7UFyuU7aF4HOUbfdm0eI5OF8abQJNBqO3qA87iWfkdew82YATSYmlYTwaTyNjnC9xd2yUFzf50BwSNNQ',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
