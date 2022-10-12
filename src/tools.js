function css(styles = '') {
    const toString = i => `${i}:${styles[i]}`
    return Object.keys(styles).map(toString).join(';')
}

function render(blocks, place) {
    const create = e => e.createHtml()
    place.insertAdjacentHTML('beforeend', blocks.map(create).join(''))
}

function del(blocks) {
    console.log(blocks);
    blocks.forEach(element => {
        element.deleteHtml()
    });
}
export { css, render, del }