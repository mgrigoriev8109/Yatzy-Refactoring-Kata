var assert = require("assert");
var Yatzy = require("../lib/yatzy");


describe('Chance', function() {
    it('scores sum of all dice', function(){
        assert.equal(15, Yatzy.chance(2, 3, 4, 5, 1));
        assert.equal(16, Yatzy.chance(3, 3, 4, 5, 1));
    });
});

describe("Yatzy", function() {
    it("scores 50", function() {
        assert.equal(50, Yatzy.yatzy(4,4,4,4,4));
        assert.equal(50, Yatzy.yatzy(6,6,6,6,6));
        assert.equal(0, Yatzy.yatzy(6,6,6,6,3));
    });
});

describe("Ones", function() {
    it("score the sum of 1s", function() {
        assert.equal(1, new Yatzy(1,2,3,4,5).ones_through_sixes(1));
        assert.equal(2, new Yatzy(1,2,1,4,5).ones_through_sixes(1));
        assert.equal(0, new Yatzy(6,2,2,4,5).ones_through_sixes(1));
        assert.equal(4, new Yatzy(1,2,1,1,1).ones_through_sixes(1));
    });
});

describe("Twos", function() {
    it("score the sum of 2s", function() {
        assert.equal(4, new Yatzy(1,2,3,2,6).ones_through_sixes(2));
        assert.equal(10, new Yatzy(2,2,2,2,2).ones_through_sixes(2));
    });
});

describe("Threes", function() {
    it("score the sum of 3s", function() {
        assert.equal(6, new Yatzy(1,2,3,2,3).ones_through_sixes(3));
        assert.equal(12, new Yatzy(2,3,3,3,3).ones_through_sixes(3));
    });
});

describe("Fours", function() {
    it("score the sum of 4s", function() {
        assert.equal(12, new Yatzy(4,4,4,5,5).ones_through_sixes(4));
        assert.equal(8, new Yatzy(4,4,5,5,5).ones_through_sixes(4));
        assert.equal(4, new Yatzy(4,5,5,5,5).ones_through_sixes(4));
    });
});

describe("Fives", function() {
    it("score the sum of fives", function() {
        assert.equal(10, new Yatzy(4,4,4,5,5).ones_through_sixes(5));
        assert.equal(15, new Yatzy(4,4,5,5,5).ones_through_sixes(5));
        assert.equal(20, new Yatzy(4,5,5,5,5).ones_through_sixes(5));
    });
});

describe("Sixes", function() {
    it("score the sum of sixes", function() {
        assert.equal(0, new Yatzy(4,4,4,5,5).ones_through_sixes(6));
        assert.equal(6, new Yatzy(4,4,6,5,5).ones_through_sixes(6));
        assert.equal(18, new Yatzy(6,5,6,6,5).ones_through_sixes(6));
    });
});

describe("One pair", function() {
    it("scores the sum of the highest pair", function() {
        assert.equal(6, new Yatzy(3,4,3,5,6).score_pair());
        assert.equal(10, new Yatzy(5,3,3,3,5).score_pair());
        assert.equal(12, new Yatzy(5,3,6,6,5).score_pair());
    });
});

describe("Two pair", function() {
    it("scores the sum of the two pairs", function() {
        assert.equal(16, new Yatzy(3,3,5,4,5).two_pair());
        assert.equal(16, new Yatzy(3,3,5,5,5).two_pair());
    });
});

describe("Three of a kind", function() {
    it("scores the sum of the three of the kind", function() {
        assert.equal(9, new Yatzy(3,3,3,4,5).three_of_a_kind());
        assert.equal(15, new Yatzy(5,3,5,4,5).three_of_a_kind());
        assert.equal(9, new Yatzy(3,3,3,3,5).three_of_a_kind());
    });
});

describe("Four of a kind", function() {
    it("scores the sum of the four of the kind", function() {
        assert.equal(12, new Yatzy(3,3,3,3,5).four_of_a_kind());
        assert.equal(20, new Yatzy(5,5,5,4,5).four_of_a_kind());
        assert.equal(9, new Yatzy(3,3,3,3,3).three_of_a_kind());
    });
});

describe("Small straight", function() {
    it("scores 15", function() {
        assert.equal(15, new Yatzy(1,2,3,4,5).smallStraight());
        assert.equal(15, new Yatzy(2,3,4,5,1).smallStraight());
        assert.equal(0, new Yatzy(1,2,2,4,5).smallStraight());
    });
});

describe("Large straight", function() {
    it("scores 20", function() {
        assert.equal(20, new Yatzy(6,2,3,4,5).largeStraight());
        assert.equal(20, new Yatzy(2,3,4,5,6).largeStraight());
        assert.equal(0, new Yatzy(1,2,2,4,5).largeStraight());
    });
});

describe("Full house", function() {
    it("scores the sum of the full house", function() {
        assert.equal(18, Yatzy.fullHouse(6,2,2,2,6));
        assert.equal(0, Yatzy.fullHouse(2,3,4,5,6));
    });
});
