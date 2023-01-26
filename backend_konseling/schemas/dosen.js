export default {
  name: 'dosen',
  title: 'Dosen',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama',
      type: 'string',
    },
    {
      name: 'nid',
      title: 'NID',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nama',
        maxLength: 90,
      },
    },
    {
      name: 'jadwal',
      title: 'Jadwal',
      type: 'array',
      of: [
        {
          name: 'hari',
          title: 'Hari',
          type: 'string',
        },
      ],
    },
  ],
}
