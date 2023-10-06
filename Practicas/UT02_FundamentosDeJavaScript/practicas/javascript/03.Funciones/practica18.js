function isTriangle (a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

let isTriangle = (a, b, c) => (a + b > c) && (a + c > b) && (b + c > a);