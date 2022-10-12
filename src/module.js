import { Title, Button, Unordered, ListItem } from './blocks'

const blocks = [
    new Title({
        content: [
            new Title({
                content: ['doajsdiokajs;kdjaskd;'],
                options: {
                    tag: 'h2',
                    selector: 'ff'
                }
            }), new Button({
                content: ['click'],
                options: { styles: { height: '50xp', width: '200px' }, selector: 'btn' }
            }),
            new Button({
                content: ['kkkk'],
                options: { styles: { height: '100xp', width: '100px' }, selector: 'btn2' }
            })
        ],
        options: {
            tag: 'div',
            selector: 'inner'
        }
    }),
    new Title({
        content: ['asdasdasd'],
        options: {
            tag: 'div',
            selector: 'under',
            styles: {
                'font-size': '100px'
            },
        }
    }),
    new Title({
        content: ['dasdasdas'],
        options: {
            tag: 'div',
            selector: 'ddd',
            styles: {
                'font-size': '100px'
            },
        }
    }),
    new Unordered({
        content: [
            new ListItem({
                content: [
                    'asdasda', 'adsdasd', 'sadasda'
                ],
                options: {
                    selector: 'listItem'
                }
            }),
        ],
        options: { selector: 'unordered' }
    }),
]
const user = [
    new Title({
        content: [
            new Unordered({
                content: [
                    new ListItem({
                        content: [
                            'user', 'user3', 'user2'
                        ],
                        options: {
                            selector: 'listitemUser',
                            styles: {
                                'font-size': '30px'
                            }
                        }
                    })
                ],
                options: {
                    selector: 'unordered'
                }
            }),
        ],
        options: {
            selector: 'user'
        }
    })
]
export { blocks, user }