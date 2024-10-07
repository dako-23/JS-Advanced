function solve(obj) {

    if (!obj.dizziness) {
        return obj;
    }

    obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
    obj.dizziness = false

    return obj


}
let result = solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});

console.log(result);
