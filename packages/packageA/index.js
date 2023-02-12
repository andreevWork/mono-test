import _ from "lodash";

const aa = {
    ..._({ a: 4 })
}

console.log(_.now());

export function test() {
    console.log('PackageA is here!!!');
}