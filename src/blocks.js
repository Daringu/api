import { css } from './tools'
class Block {
    constructor({ content, options = { tag: 'p', class: '""' } } = {}) {
        this.options = options
        this.content = content
        this.sel = options.selector ? `class="${options.selector}"` : '';
        this.s = options.styles ? `style="${css(options.styles)}"` : '';
    }
    deleteHtml() {
        const el = document.querySelector(`.${this.options.selector}`)
        el.parentNode.removeChild(el)
    }
    createHtml() {
        throw new Error('Error')
    }
}
class Title extends Block {
    constructor({ content, options = {} } = {}) {
        super({ content, options })
    }
    createHtml() {
        this.content = this.content.map(e =>
            typeof e === 'object' ? e.createHtml() : e
        );
        const { tag } = this.options
        return `<${tag} ${this.sel} ${this.s}>${this.content.join('')}</${tag}>`
    }
}
class Button extends Block {
    constructor({ content, options = {} } = {}) {
        super({ content, options })
    }
    createHtml() {
        this.content = this.content.map(e =>
            typeof e === 'object' ? e.createHtml() : e
        );
        const { tag = 'button' } = this.options
        return `<${tag} ${this.sel} ${this.s}>${this.content.join('')}</${tag}>`
    }
}
class Unordered extends Block {
    constructor({ content, options } = {}) {
        super({ content, options })
    }
    createHtml() {
        this.content = this.content.map(e =>
            typeof e === 'object' ? e.createHtml() : e
        );
        const { tag = 'ul' } = this.options
        return `<${tag} ${this.sel} ${this.s}>${this.content.join('')}</${tag}>`
    }
}
class ListItem extends Block {
    constructor({ content, options } = {}) {
        super({ content, options })
    }
    createHtml() {
            this.content = this.content.map(e =>
                typeof e === 'object' ? e.createHtml() : e
            );
            const { tag = 'li', } = this.options
            return `${this.content.map(e=>`<${tag} ${this.sel} ${this.s}>${e}</${tag}>`).join('')}`
    }
}
export { Block, Title, Button,Unordered,ListItem }