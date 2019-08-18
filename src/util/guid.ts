export type Guid = string
export namespace Guid {
    // From: http://guid.us/GUID/JavaScript
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    export function create(): Guid {
        // then to call it, plus stitch in '4' in the third group
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }
}