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
            name: 'metaDescription',
            type: 'text',
            title: 'Meta Description',
            description: 'This is the description that will show up in search engines and social media. It should be 50-160 characters long.'

        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Description',
                            description: 'Some of these images are decorative and do not need alt text (e.g. background images). Others are informative and should have alt text . Please be descriptive.',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ],
                }
            ]
        },
        {
            name: 'author',
            type: 'object',
            fields: [
                {
                    title: 'Author',
                    name: 'author',
                    type: 'reference',
                    to: [{ type: 'author' }]
                }
            ]
        },
        {
            title: 'blog image',
            name: 'blogImage',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true
                    }
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        },
        {
            name: 'publishedAt',
            type: "datetime",
            title: 'published At',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
            }

        }
    ]
}