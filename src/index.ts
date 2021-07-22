
/**
 * @class
 */
export class ParentClass {
    /**
     * Concat two strings
     * @param a - First
     * @param b - Second
     * @returns Value
     */
    add(a:string, b:string):string;

    /**
     * Add two numbers
     * @param a - First
     * @param b - Second
     * @returns Value
     */
    add(a:number, b:number): number;

    /**
     * @ignore
     */
    add(a: any, b:any): any {
        return a + b;
    }
}

/**
 * @class
 */
export class ChildClass extends ParentClass {}
