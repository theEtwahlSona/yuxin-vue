const isArray = function (obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Array]'
}

const typeColor = (type: string): string => {
    let color = ''
    switch (type) {
        case 'primary':
            color = '#2d8cf0'
            break
        case 'success':
            color = '#19be6b'
            break
        case 'info':
            color = '#909399'
            break
        case 'warn':
            color = '#ff9900'
            break
        case 'error':
            color = '#f03f14'
            break
        default:
            color = '#35495E'
            break
    }
    return color
}

const print = (type: string = 'default', text: any, back: boolean = false): void => {
    if (typeof text === 'object') {
        // 如果是对象则调用打印对象方式
        isArray(text) ? console.table(text) : console.dir(text)
        return
    }
    if (back) {
        // 如果是打印带背景图的
        console.log(
            `%c ${text} `,
            `background:${typeColor(type)}; 
             padding: 2px; 
             border-radius: 4px; 
             color: #fff;`
        )
    } else {
        console.log(
            `%c ${text} `,
            `border: 1px solid ${typeColor(type)};
             padding: 2px; 
             border-radius: 4px;
             color: ${typeColor(type)};`
        )
    }
}

const printBack = (type: string = 'primary', text: any): void => {
    print(type, text, true)
}

const pretty = (type: string = 'primary', title: string, text: any): void => {
    if (typeof text === 'object') {
        console.group('Console Group', title)
        console.log(
            `%c ${title}`,
            `background:${typeColor(type)};
             border:1px solid ${typeColor(type)};
             padding: 1px; 
             border-radius: 4px; 
             color: #fff;`
        )
        isArray(text) ? console.table(text) : console.dir(text)
        console.groupEnd()
        return
    }

    console.log(
        `%c ${title} %c ${text} %c`,
        `background:${typeColor(type)};
        border:1px solid ${typeColor(type)};
        padding: 1px; 
        border-radius: 4px 0 0 4px; 
        color: #fff;`,
        `border:1px solid ${typeColor(type)};
         padding: 1px; 
         border-radius: 0 4px 4px 0;
         color: ${typeColor(type)};`,
        'background:transparent'
    )
}

const prettyPrimary = (title: string, ...text: any): void => {
    text.forEach((t) => pretty('primary', title, t))
}

const prettySuccess = (title: string, ...text: any[]): void => {
    text.forEach((t) => pretty('success', title, t))
}

const prettyWarn = (title: string, ...text: any[]): void => {
    text.forEach((t) => pretty('warn', title, t))
}

const prettyError = (title: string, ...text: any[]): void => {
    text.forEach((t) => pretty('error', title, t))
}

const prettyInfo = (title: string, ...text: any[]): void => {
    text.forEach((t) => pretty('info', title, t))
}

const logger = {
    typeColor,
    printBack,
    pretty,
    prettyPrimary,
    prettySuccess,
    prettyWarn,
    prettyError,
    prettyInfo
}

export default logger
