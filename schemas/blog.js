// schemas/pet.js
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }]
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author',
            to: [{ type: 'string' }]
        },
        {
            name: 'date',
            type: "datetime",
            title: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }

        }
    ]
}