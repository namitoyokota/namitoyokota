/**
 * Object to represent a frame in bowling
 * (Null indicates that the value has not been entered/calculated)
 */
export class Frame {
    /** Number of the frame */
    index: number;

    /** First roll score */
    first: number | null;

    /** Second roll score */
    second: number | null;

    /** Third roll score (only on 10th frame with strike/spare) */
    third: number | null;

    /** Total at this frame */
    total: number | null;

    constructor(
        index: number,
        first: number | null,
        second: number | null,
        third: number | null,
        total: number | null
    ) {
        this.index = index;
        this.first = first;
        this.second = second;
        this.third = third;
        this.total = total;
    }
}