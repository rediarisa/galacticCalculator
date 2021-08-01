export default class AgeExpectancy {
    constructor(age, region, gender, exercise, alcohol) {
        this.age = age;
        this.region = region;
        this.gender = gender;
        this.exercise = exercise;
        this.alcohol = alcohol;
        this.ageExpectancy = 0;
    }
    regionCalculator() {
        if (this.region === "Americas") {
            this.ageExpectancy = 79;
        } else if (this.region === "Africa") {
            this.ageExpectancy = 63;
        } else if (this.region === "Eastern Mediterranean") {
            this.ageExpectancy = 69;
        } else if (this.region === "Europe") {
            this.ageExpectancy = 81;
        } else if (this.region === "Western Pacific") {
            this.ageExpectancy = 74;
        } else {
            this.ageExpectancy = 71;
        }
        return this.ageExpectancy;
    }

    genderCalculator() {
        if (this.gender === "female") {
            this.ageExpectancy += 5;
            return this.ageExpectancy;
        } else {
            return this.ageExpectancy;
        }
    }
}