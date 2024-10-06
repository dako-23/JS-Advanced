function ExternalArea() {
    return Math.abs(this.x * this.y);
};

function ExternalVol() {
    return Math.abs(this.x * this.y * this.z);
};



function solve(area, volume, boxesJson) {

    const boxes = JSON.parse(boxesJson);

    const result = boxes.map((box) => ({
        area: area.call(box),
        volume: volume.call(box)
    }))
    

    return result;


}
solve(ExternalArea, ExternalVol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)