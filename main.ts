controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealLeftWithStaff)
    pause(400)
    explosions.sendHealingBolt(tes.sprite)
})
let tes: Jesus = null
scene.setBackgroundColor(9)
tes = codeplant.jesus.create(SpriteKind.Player)
tes.sprite.setPosition(141, 13)
controller.moveSprite(tes.sprite)
