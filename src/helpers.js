function getRandomColor(colors) {
    let randIdx = Math.floor(Math.random() * colors.length);
    return colors[randIdx];
}

export { getRandomColor };