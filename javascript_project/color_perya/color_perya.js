const dice = ['red', 'blue', 'green', 'orange', 'yellow', 'blue'];

const shuffle = dice => dice.sort(() => Math.random() - 0.5);

const getAndLogResult = (dice, delay, occurrences) => {
    setTimeout(function () {
        const result = shuffle(dice)[0];
        console.log(result);
        occurrences[result] = (occurrences[result] || 0) + 1;
    }, delay);
};

const getMaxOccurrenceColor = occurrences => {
    let maxCount = 0;
    let maxColor = '';

    for (const color in occurrences) {
        if (occurrences[color] > maxCount) {
            maxCount = occurrences[color];
            maxColor = color;
        }
    }

    return { color: maxColor, count: maxCount };
};

const occurrences = {};

getAndLogResult(dice, 2000, occurrences);
getAndLogResult(dice, 4000, occurrences);
getAndLogResult(dice, 6000, occurrences);

setTimeout(function () {
    const { color: mostFrequentColor, count: occurrencesCount } = getMaxOccurrenceColor(occurrences);
    console.log(`Most frequent color: ${mostFrequentColor}, Occurrences: ${occurrencesCount}`);
}, 8000);
