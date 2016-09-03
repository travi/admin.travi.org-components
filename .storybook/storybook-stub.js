export function storiesOf() {
    var api = {};
    api.add = (name, func)=> {
        func();
        return api;
    };
    api.addWithInfo = (name, desc, func)=> {
        func();
        return api;
    };
    api.addDecorator = (func)=> {
        func(() => undefined);
        return api;
    };
    return api;
}

export const action = () => {};
export const linkTo = () => {};
export const specs = (spec) => spec();
