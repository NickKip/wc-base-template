// tslint:disable

export class TouchTracker {

    // Tracks the X position of the very first touch on the screen (for this movement) and gets reset ontouchend
    static LastTouchStartX: number;

    // Tracks the X position of the very first touch on the screen (for this movement) and gets reset ontouchend
    static LastTouchStartY: number;

    // Tracks the time of the first touch - used when calculating velocity
    static LastTouchStartTime: number;

    // Tracks the last X position of the previous touchmove (i.e. updates as the user moves their finger across the screen)
    static LastTouchMoveX: number;

    // Tracks the last Y position of the previous touchmove (i.e. updates as the user moves their finger across the screen)
    static LastTouchMoveY: number;

    // This determines the movement speed of the element being dragged. Increase this number to make it faster or lower to make slower
    static Accelerator: number = 2.5;

    // Resets current state
    static Reset: () => void = () => {

        delete TouchTracker.LastTouchStartX;
        delete TouchTracker.LastTouchStartY;
        delete TouchTracker.LastTouchStartTime;
        delete TouchTracker.LastTouchMoveX;
        delete TouchTracker.LastTouchMoveY;
    }

    static NumMatch: RegExp = /-?\d+/;

    static X: string[] = ["clientX"];
    static Y: string[] = ["clientY"];

    static GetNumberValue: (str: string) => number = (str: string): number => {

        const res: RegExpMatchArray = str.match(TouchTracker.NumMatch);

        if (res) {

            return parseInt(res[0]);
        }
        else return null;
    }

    static CheckIfFirstTouch: (x: number, y: number) => void = (x: number, y: number) => {

        if (!TouchTracker.LastTouchStartX) {

            console.log("First X detected");
            TouchTracker.LastTouchStartX = x;
        }

        if (!TouchTracker.LastTouchStartY) {

            console.log("First Y detected");
            TouchTracker.LastTouchStartY = y;
        }

        TouchTracker.LastTouchStartTime = new Date().getTime();
    }
}

export function slideToReveal(e: TouchEvent, offset: number, tracking: string = "x"): void {

    e.stopPropagation();
    e.stopImmediatePropagation();

    const maxOffset: number = 0 - (offset + 1);

    const target: HTMLElement = <HTMLElement>e.currentTarget;

    const currPos: string = target.style.transform;
    let newPos: number = 0;

    if (currPos) {

        newPos = TouchTracker.GetNumberValue(currPos);
    }

    // if (newPos > maxOffset) {

        TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

        const diffX: number = (TouchTracker.LastTouchMoveX || TouchTracker.LastTouchStartX) - e.changedTouches[0].clientX;
        const diffY: number = (TouchTracker.LastTouchMoveY || TouchTracker.LastTouchStartY) - e.changedTouches[0].clientY;
        TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
        TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;

        if (tracking === "x") {

            // Moving left
            if (diffX > 0) {

                newPos--;

                if (newPos > maxOffset) {

                    target.style.transform = `translateX(${newPos}vw)`;
                }
            }
            // Moving right
            else {

                newPos++;

                if (newPos < 1) {

                    target.style.transform = `translateX(${newPos}vw)`;
                }
            }
        }
        else if (tracking === "y") {

            // Moving down
            if (diffY > 1) {

                newPos = newPos - (1 * TouchTracker.Accelerator);

                //--newPos;

                target.style.transform = `translateY(${newPos}vh)`;
            }
            // Moving up
            else if (diffY < -0.5) {

                newPos = newPos + (1 * TouchTracker.Accelerator);

                // ++newPos;

                if (newPos > 0.5) newPos = 0;

                target.style.transform = `translateY(${newPos}vh)`;
            }
        }

        // tslint:disable
        // console.log(`CurrPos: ${currPos}, DiffX: ${diffX}, DiffY: ${diffY}, New Pos: ${newPos}`);
    // }
}

export function slideToRevealEnd(e: TouchEvent, maxOffset: number, axis: string = "x"): void {

    e.stopPropagation();
    e.stopImmediatePropagation();

    const target: HTMLElement = <HTMLElement>e.currentTarget;

    const currLeft: string = target.style.transform;
    let newLeft: number;

    if (currLeft) {

        newLeft = TouchTracker.GetNumberValue(target.style.transform);
    }

    if (axis === "x") {

        const velocity: number = calculateVelocityOfCurrentTouch();

        if (velocity > 1.2) {

            target.style.transform = `translateX(0vw)`;
        }
        else if (velocity < -1.2) {

            target.style.transform = `translateX(-${maxOffset}vw)`;
        }
        else {

            const halfWay: number = Math.round(maxOffset / 2);

            if (newLeft < -halfWay) {

                // Snap to reveal

                target.style.transform = `translateX(-${maxOffset}vw)`;
            }
            else {

                // Snap to reset

                target.style.transform = "translateX(0vw)";
            }
        }
    }

    TouchTracker.Reset();
}

function calculateVelocityOfCurrentTouch(): number {

    const finalPos: number = TouchTracker.LastTouchMoveX;
    const initialPos: number = TouchTracker.LastTouchStartX;

    const finalTime: number = new Date().getTime();
    const initialTime: number = TouchTracker.LastTouchStartTime;

    const pos: number = finalPos - initialPos;
    const time: number = finalTime - initialTime;

    return pos / time;
}

export function slideAwayMotion(e: TouchEvent, tracking: string = "x"): void {

    e.stopPropagation();
    e.stopImmediatePropagation();

    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
}

export function slideAwayEnd(e: TouchEvent, leftAction?: () => void, rightAction?: () => void, axis: string = "x", threshold: number = 5): void {

    e.stopPropagation();
    e.stopImmediatePropagation();

    if (axis === "x") {

        const velocity: number = calculateVelocityOfCurrentTouch();

        // tslint:disable-next-line no-console
        console.log("Vel:", velocity);

        if (velocity > threshold && rightAction) {

            rightAction();
        }
        else if (velocity < -threshold && leftAction) {

            leftAction();
        }
    }

    TouchTracker.Reset();
}