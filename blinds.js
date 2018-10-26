
const {
    performance
} = require('perf_hooks');

class BlindController {
    constructor() {
        this.currentPosition = 0;
        this.fullDuration = 10000;

        this.motorStarted = 0;
        this.motorStopped = 0;

        this.motorInterval;
    }

    startOpen() {
        if (this.currentPosition >= this.fullDuration) {
            console.log("Blinds already fully open");
            return;
        }

        console.log("Starting Open");
        this.motorStopped = 0;
        this.motorStarted = performance.now();

        this.motorInterval = setInterval(() => {
            if (this.currentPosition >= this.fullDuration) {
                console.log("Blinds fully open");
                clearInterval(this.motorInterval);
                return;
            }

            this.currentPosition += 100;
        }, 100);
    }

    stopOpen() {
        console.log("Stopped Open");
        this.motorStopped = performance.now();

        clearInterval(this.motorInterval);

        console.log("Current position: " + this.currentPosition);
    }

    startClose() {
        if (this.currentPosition <= 0) {
            console.log("Blinds already fully closed");
            return;
        }

        console.log("Starting Close");
        this.motorStopped = 0;
        this.motorStarted = performance.now();

        this.motorInterval = setInterval(() => {
            if (this.currentPosition <= 0) {
                console.log("Blinds fully closed");
                clearInterval(this.motorInterval);
                return;
            }

            this.currentPosition -= 100;
        }, 100);
    }

    stopClose() {
        console.log("Stopped Close");
        this.motorStopped = performance.now();

        clearInterval(this.motorInterval);

        console.log("Current position: " + this.currentPosition);
    }

    openFully() {
        console.log("Blinds opening fully");
        if (this.currentPosition >= this.fullDuration) {
            console.log("Blinds already fully open");
            return;
        }

        this.motorInterval = setInterval(() => {
            if (this.currentPosition >= this.fullDuration) {
                console.log("Blinds fully open");
                clearInterval(this.motorInterval);
                return;
            }

            this.currentPosition += 100;
        }, 100);
    }

    closeFully() {
        console.log("Blinds closing fully");
        if (this.currentPosition <= 0) {
            console.log("Blinds already fully closed");
            return;
        }

        this.motorInterval = setInterval(() => {
            if (this.currentPosition <= 0) {
                console.log("Blinds fully closed");
                clearInterval(this.motorInterval);
                return;
            }

            this.currentPosition -= 100;
        }, 100);
    }
}

module.exports = BlindController;