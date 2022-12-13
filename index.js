function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    const part1 = "You are";
    return function (adj = 'special') {
        return(`${part1} ${flair}${adj}${flair}!`)
    }
}
