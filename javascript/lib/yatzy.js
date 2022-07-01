var Yatzy = function(d1, d2, d3, d4, d5) {
    this.dice = [];
    this.dice[0] = d1;
    this.dice[1] = d2;
    this.dice[2] = d3;
    this.dice[3] = d4;
    this.dice[4] = d5;

    this.ones_through_sixes = function(category) {
        var sum = 0;
        for (at = 0; at != 5; at++) {
            if (this.dice[at] == category) {
                sum += category;
            }
        }
        return sum;
    }

    this.countTallies = function() {
        var tallies = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var index = 0

        for (at = 0; at != 5; at++) {
            index = this.dice[at] - 1;
            tallies[index] ++;
        }
        return tallies
    }

    this.score_pair = function() {
        var tallies = this.countTallies()

        for (at = 0; at != 6; at++)
            if (tallies[6-at-1] >= 2)
                return (6-at)*2;
        return 0;
    }

    this.two_pair = function() {
        var tallies = this.countTallies()

        var pairs = 0;
        var score = 0;
        for (i = 0; i < 6; i += 1)
            if (tallies[6-i-1] >= 2) {
                pairs++;
                score += (6-i);
            }
        if (pairs == 2)
            return score * 2;
        else
            return 0;
    }

    this.three_of_a_kind = function() {
        var tallies = this.countTallies()

        for (i = 0; i < 6; i++)
            if (tallies[i] >= 3)
                return (i+1) * 3;
        return 0;
    }
    
    this.four_of_a_kind = function() {
        var tallies = this.countTallies()

        for (i = 0; i < 6; i++)
            if (tallies[i] >= 4)
                return (i+1) * 4;
        return 0;
    }
    
    this.smallStraight = function() {
        var tallies = this.countTallies()

        if (tallies[0] == 1 &&
            tallies[1] == 1 &&
            tallies[2] == 1 &&
            tallies[3] == 1 &&
            tallies[4] == 1)
            return 15;
        return 0;
    }

    this.largeStraight = function() {
        var tallies = this.countTallies()

        if (tallies[1] == 1 &&
            tallies[2] == 1 &&
            tallies[3] == 1 &&
            tallies[4] == 1
            && tallies[5] == 1)
            return 20;
        return 0;
    }

    this.chance = function() {
        var total = 0;
        total += d1;
        total += d2;
        total += d3;
        total += d4;
        total += d5;
        return total;
    }
    
    this.yatzy = function() {
        var tallies = [0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i != this.dice.length; ++i) {
            var die = this.dice[i];
            tallies[die-1]++; 
        }
        for (i = 0; i != 6; i++)
            if (tallies[i] == 5)
                return 50;
        return 0;
    }
}

Yatzy.fullHouse = function(d1, d2, d3, d4, d5)
{
    var tallies;
    var  _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;




    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 2) {
            _2 = true;
            _2_at = i+1;
        }

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 3) {
            _3 = true;
            _3_at = i+1;
        }

    if (_2 && _3)
        return _2_at * 2 + _3_at * 3;
    else
        return 0;
}

module.exports = Yatzy;


