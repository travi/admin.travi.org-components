export function storiesOf() {
  const api = {};
  api.add = (name, func) => {
    func();
    return api;
  };
  api.addWithInfo = (name, desc, func) => {
    func();
    return api;
  };
  api.addDecorator = func => {
    func(() => undefined);
    return api;
  };
  return api;
}

export function specs(spec) {
  spec();
}
