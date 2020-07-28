import calculateDamage from './calculateDamage';

function test(damageStat, targetStat, expectedOutput) {
    calculateDamage(damageStat, targetStat) == expectedOutput;
}