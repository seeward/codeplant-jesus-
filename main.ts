controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleLeft)
    effects.sendHealingBolt(tes.sprite, effects.Direction.Left)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealRightWithStaff)
    pause(400)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealLeftWithStaff)
    pause(400)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleRight)
})
let tes: Jesus = null
scene.setBackgroundColor(15)
tes = codeplant.jesus.create(SpriteKind.Player)
tes.sprite.setPosition(139, 8)
codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleLeft)
controller.moveSprite(tes.sprite)
let mySprite = characters.Leper()
mySprite.setPosition(11, 13)
