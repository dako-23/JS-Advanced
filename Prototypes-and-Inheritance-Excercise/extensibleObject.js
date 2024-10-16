function extensibleObject() {
    const obj = {

        extend: function (targetObject) {
            for (const key in targetObject) {
                if (typeof targetObject[key] == 'function') {
                    Object.getPrototypeOf(obj)[key] = targetObject[key];
                } else {
                    obj[key] = targetObject[key];
                }
            }
        }
    }
    return obj
}