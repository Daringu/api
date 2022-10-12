import './style.css'
import { render, del } from './tools'
import { blocks, user } from './module'
render(blocks, document.querySelector('.main'))
document.querySelector('.btn').addEventListener('click', (e) => {
    del(blocks);
    render(user, document.querySelector('.main'))
})