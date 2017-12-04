// tslint:disable-next-line no-any
export function buildStyles(definitions: any): CSSStyleDeclaration {

    const element: HTMLElement = document.createElement("div");
    return Object.assign({}, element.style, definitions);
}

export function getCSSVariable(cssVar: string): string {

    const value: string = getComputedStyle(document.firstElementChild).getPropertyValue(cssVar);

    return value ? value.trim() : value;
}
