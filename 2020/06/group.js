const { Map } = global;

class Group {
    constructor() {
        this.answerCounts = new Map();
        this.size = 0;
    }

    /**
     * @param {Array<string>} answers
     */
    addPerson(answers) {
        this.size++;
        answers.forEach((letter) => {
            this.setAnswer(letter);
        });
    }

    /**
     * @param {string} letter
     */
    setAnswer(letter) {
        const count = this.answerCounts.get(letter) ?? 0;
        this.answerCounts.set(letter, count + 1);
    }

    getAnswers() {
        return Array.from(this.answerCounts.keys());
    }

    getCommonAnswers() {
        return Array.from(this.answerCounts.values()).filter(
            (count) => count === this.size,
        );
    }
}

export { Group };
