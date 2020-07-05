controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleLeft)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealRightWithStaff)
    pause(400)
    explosions.sendHealingBolt(tes.sprite, 2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealLeftWithStaff)
    pause(400)
    explosions.sendHealingBolt(tes.sprite,1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleRight)
})
let tes: Jesus = null
scene.setBackgroundColor(15)
tes = codeplant.jesus.create(SpriteKind.Player)
tes.sprite.setPosition(8, 9)
codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleRight)
controller.moveSprite(tes.sprite)
