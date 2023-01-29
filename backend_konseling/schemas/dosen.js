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
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'Image Url',
      type: 'image',
      options: {
        hotspot: true,
      },
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
    {
      name: 'schedules',
      title: 'Schedules',
      type: 'array',
      of: [
        {
          name: 'listDate',
          title: 'List Date',
          type: 'document',
          fields: [
            {
              name: 'jadwalabsen',
              title: 'Jadwal Absen',
              type: 'string',
            },
            {
              name: 'clock',
              title: 'Clock',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
}
