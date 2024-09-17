function solve(arr, start, end) {

    const startIdx = arr.indexOf(start)
    const endIdx = arr.indexOf(end)

    if (startIdx !== -1 && endIdx !== -1) {
        const result = arr.slice(startIdx, endIdx + 1)
        return result
    }

    

}
// solve(['Pumpkin Pie',
//     'Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie',
//     'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie');
solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
   'Pot Pie',
   'Smoked Fish Pie')