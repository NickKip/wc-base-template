// tslint:disable-next-line no-any
export function buildStyles(definitions: any): CSSStyleDeclaration {

    const element: HTMLElement = document.createElement("div");
    return Object.assign({}, element.style, definitions);
}
