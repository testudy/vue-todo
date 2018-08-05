/*
 * 利用random随机数生成伪GUID
 * https://zh.wikipedia.org/wiki/全局唯一标识符
 * https://baike.baidu.com/view/185358.htm
 */
export function guid() {
    const raw = [
        Math.random().toString(31).substr(2),
        Math.random().toString(31).substr(2),
        Math.random().toString(31).substr(2),
    ].join('').substr(0, 32);
    return raw.replace(/(\S{8})(\S{4})(\S{4})(\S{4})(\S{12})/, '$1-$2-$3-$4-$5');
}

export default {
    guid,
};
