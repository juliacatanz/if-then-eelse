input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    enemy.move(1)
})
let player: game.LedSprite = null
let enemy: game.LedSprite = null
basic.showIcon(IconNames.Heart)
enemy = game.createSprite(0, 2)
player = game.createSprite(2, 2)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Happy)
        enemy.delete()
        music.playMelody("- D F F E - C C ", 120)
        enemy = game.createSprite(randint(0, 3), 2)
    }
})
