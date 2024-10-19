"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethod = logMethod;
function logMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    console.log('--originalMethod--');
    console.log(originalMethod);
    descriptor.value = function (...params) {
        console.log('--params--');
        console.log(...params);
        console.log('--this--');
        console.log(this);
        const result = originalMethod.apply(this, params);
        (result)
            ? console.log(`A művelet sikeresen végrehajtva: ${propertyKey}`)
            : console.log(`A művelet sikertelen: ${propertyKey}`);
        return result;
    };
    return descriptor;
}
