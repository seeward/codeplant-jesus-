controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    explosions.smallExplosionOne(jesus.sprite)
})
let jesus: Jesus = null
scene.setBackgroundColor(9)
jesus = codeplant.jesus.create(SpriteKind.Player)
jesus.sprite.setPosition(141, 13)
controller.moveSprite(jesus.sprite)
