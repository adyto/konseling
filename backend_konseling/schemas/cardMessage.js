export default {
  name: 'cardMessage',
  title: 'Card Message',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'email',
      type: 'string',
    },
    {
      name: 'noPhone',
      title: 'noPhone',
      type: 'string',
    },
    {
      name: 'jenisLayanan',
      title: 'Jenis Layanan',
      type: 'string',
    },
    {
      name: 'topicLayanan',
      title: 'Topic Layanan',
      type: 'string',
    },
    {
      name: 'dosen',
      title: 'Dosen',
      type: 'string',
    },
    {
      title: 'Jam Start',
      name: 'jamStart',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
