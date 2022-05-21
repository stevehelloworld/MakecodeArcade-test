controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 太空船, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let 太空船: Sprite = null
太空船 = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(太空船, 200, 200)
太空船.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . c c c 6 6 6 . . . . 
        . . . . . . c c c 6 6 6 . . . . 
        . . . . c 4 4 4 4 4 b 4 4 6 . . 
        . . . b 4 4 5 4 4 4 b 4 4 4 4 . 
        . . b b 4 4 4 4 4 b 4 4 5 4 4 4 
        . e 6 4 4 4 4 4 4 4 4 4 4 4 5 4 
        e b 6 4 4 4 b 4 4 4 4 4 4 4 4 4 
        f b 6 b 4 b 4 4 4 4 4 b b 4 4 4 
        . f b 6 6 4 4 4 4 4 4 4 4 4 4 4 
        8 7 2 f c b b b b b b b b c c 2 
        f 8 6 2 2 2 2 2 2 2 2 2 2 2 7 6 
        f b f 7 7 8 8 7 7 7 7 6 7 6 f f 
        f 6 f f f e e e e e e e f e e b 
        . c 6 d 4 f f f e e e f f 4 d 4 
        . . f b 4 4 4 4 4 4 4 4 4 4 4 e 
        . . . . f b b b 4 4 4 4 4 e . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
