/**
 * @param {string} text
 */
export function hightlightGameTitle(text) {
    return text.replaceAll("Plebis Online", "<span class='text-glowing'>Plebis Online</span>")
}

/**
 * @param {string} text
 * @param {string} keyWord
 * @param {string} link
 */
export function hightlightWord(keyWord, link = "", text) {
    return text.replaceAll(keyWord, `<a ${link === "" ? "" : `target="_blank" href = "${link}"`}} class='${link === "" ? "" : "hover:underline"} text-glowing'>${keyWord}</a>`);
}

/**
 * @param {string} text
 * @param {string} keyWord
 * @param {string} link
 */
export function linkWord(keyWord, link, text) {
    return text.replaceAll(keyWord, `<a target="_blank" href = "${link}"} class='hover:underline'>${keyWord}</a>`);
}