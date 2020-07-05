/**
* Sprite Wrapper for a codeplant.jesus lessons
*/
//% weight=100 color=#d2b48c 
//% groups='["Create Jesus", "Jesus Properties", "Jesus Animations"]'
namespace codeplant.jesus {

    //% block blockId=animationTypes
    export enum AnimationTypes {
        //% block='HealLeftWithStaff'
        HealLeftWithStaff = 1,
        //% block='IdleLeft'
        IdleLeft = 2,
        //% block='SmallExplosion'
        SmallExplosion = 3
    }



    let _jesus: Jesus = null
    export let _jesus_still: Image[] = [img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `]

    export let _jesus_right: Image[] = [img`
        . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . .
        . . . . . . . . 1 1 1 1 1 e e f e . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 1 e f f f e e e . . . . . . . . . . .
        . . . . . . 1 1 1 1 e e e e f e e f f e . . . . . . . . . .
        . . . . . 1 1 1 . e f f e e e e e e f e e . . . . . . . . .
        . . . . . 1 1 1 . f f e d d d e f e f f e . . . . . . . . .
        . . . . 1 1 1 . . e e d d d d d e e e f e e . . . . . . . .
        . . . . 1 1 . . . e d d d d d d d f f e e e . . . . . . . .
        . . . 1 1 . . . . . d f d d d f d f e e f e . . . . . . . .
        . . . 1 1 . . . . . d d d d d d d e d e e f . . . . . . . .
        . . 1 1 . . . . . . d d d d d d d e d e f f . . . . . . . .
        . 1 1 1 . . . . . . d e e e e e d e e e e e . . . . . . . .
        . 1 1 . . . . . . . . e d d d e d e f f e f . . . . . . . .
        . 1 1 . . . . . . . . e e e e e e e e f e . . . . . . . . .
        . 1 1 . . . . . . . . e e e e e e d e f . . . . . . . . . .
        . 1 1 . . . . . . . . . e e e e d d . . . . . . . . . . . .
        . 1 1 . 1 . . . . . 2 2 2 2 2 d d 1 1 1 . . . . . . . . . .
        . 1 1 . 1 1 . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
        . 1 . . 1 1 1 . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
        . 1 . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . . .
        . 1 . . . 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . . .
        . e . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 . . . . . . . . .
        . e . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . .
        . e . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . .
        . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . .
        . . . . . 1 1 1 1 1 1 e e e e e e e e 1 1 1 . . . . . . . .
        . . . . . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 . . . . . . . . .
        . . . . . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . . .
        . . . . . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . . .
        . . . . . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
        . . . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
        . . . . . . . . . e d d d . . . . . e d d d . . . . . . . .
        . . . . . . . . e e e e e . . . . e e e e e . . . . . . . .
        . . . . . . . . f f f f f . . . . f f f f f . . . . . . . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `]

    export let _jesus_left: Image[] = reflect(_jesus_right);

    //% blockId=jesusCreate block="sprite of kind %kind=spritekind || at x %x y %y"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=jesus
    //% weight=100
    //% group="Create Jesus"
    export function create(kind: number,
        x: number = 10,
        y: number = 70): Jesus {
        _jesus = new Jesus(kind, x, y);
        return _jesus

    }
    //% blockId=JesusAnimations block="Jesus Play %a Animation"
    //% weight=100
    //% group="Jesus Animations"
    //% a.shadow=animationTypes
    export function playAnimation(s: AnimationTypes) {
        switch (s) {
            case AnimationTypes.HealLeftWithStaff:
                _jesus.playAttackLeftAnimation();
                break
            case AnimationTypes.IdleLeft:
                _jesus.playIdleRightAnimation();
        }

    }

    function playAttackLeftAnimation() {
        _jesus.playAttackLeftAnimation()
    }
    function playAttackRightAnimation() {
        _jesus.animateAttack()
    }
    function playWalkLeftAnimation() {
        _jesus.playWalkLeftAnimation()
    }
    function playWalkRightAnimation() {
        _jesus.playWalkRightAnimation()
    }
    function playIdleFrontAnimation() {
        _jesus.playIdleRightAnimation()
    }
    function playWalkDownAnimation() {
        _jesus.playUpDownAnimation()
    }
    function playWalkUpAnimation() {
        _jesus.playIdleBackAnimation()
    }


    // Round input towards 0; 1.4 becomes 1.0, -0.4 becomes 0.0
    export function roundTowardsZero(input: number): number {
        return Math.floor(input) + input < 0 ? 1 : 0;
    }

    // Normalize input number to 0, 1, or -1
    export function normalize(input: number): number {
        return input ? input / Math.abs(input) : 0;
    }

    // Set the animation for looking right to be the opposite of looking left
    export function reflect(input: Image[]): Image[] {
        let output: Image[] = [];
        for (let i: number = 0; i < input.length; i++) {
            let nextImage = input[i].clone();
            nextImage.flipX();
            output.push(nextImage);
        }
        return output;
    }
}

/**
 * A jesus Platformer
 **/
//% blockNamespace=codeplant.jesus color="#d2b48c" blockGap=8
class Jesus {
    private player: Sprite;
    private stillAnimation: Image[];

    public constructor(kind: number, x: number, y: number) {


        this.stillAnimation = codeplant.jesus._jesus_still;

        this.player = sprites.create(this.stillAnimation[0], kind);
        this.player.setFlag(SpriteFlag.StayInScreen, true);
        // this.player.ay = this.gravity;
        this.player.x = x;
        this.player.y = y;

        this.playIdleRightAnimation();

    }

    /**
     * Get the Jesus's sprite
     */
    //% group="Jesus Properties"
    //% blockId=jesusSprite block="%Jesus(jesus) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.player;
    }

    playAttackLeftAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . . . . . . 1 1 1 1 1 e e f e . . . . . . . . . . . . .
                . . . . . . . 1 1 1 1 1 e f f f e e e . . . . . . . . . . .
                . . . . . . 1 1 1 1 e e e e f e e f f e . . . . . . . . . .
                . . . . . 1 1 1 . e f f e e e e e e f e e . . . . . . . . .
                . . . . . 1 1 1 . f f e d d d e f e f f e . . . . . . . . .
                . . . . 1 1 1 . . e e d d d d d e e e f e e . . . . . . . .
                . . . . 1 1 . . . e d d d d d d d f f e e e . . . . . . . .
                . . . 1 1 . . . . . d f d d d f d f e e f e . . . . . . . .
                . . . 1 1 . . . . . d d d d d d d e d e e f . . . . . . . .
                . . 1 1 . . . . . . d d d d d d d e d e f f . . . . . . . .
                . 1 1 1 . . . . . . d e e e e e d e e e e e . . . . . . . .
                . 1 1 . . . . . . . . e d d d e d e f f e f . . . . . . . .
                . 1 1 . . . . . . . . e e e e e e e e f e . . . . . . . . .
                . 1 1 . . . . . . . . e e e e e e d e f . . . . . . . . . .
                . 1 1 . . . . . . . . . e e e e d d . . . . . . . . . . . .
                . 1 1 . 1 . . . . . 2 2 2 2 2 d d 1 1 1 . . . . . . . . . .
                . 1 1 . 1 1 . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . 1 . . 1 1 1 . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . 1 . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . . .
                . 1 . . . 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . . .
                . e . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 . . . . . . . . .
                . e . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . .
                . e . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . .
                . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 . . . . . . . .
                . . . . . 1 1 1 1 1 1 e e e e e e e e 1 1 1 . . . . . . . .
                . . . . . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 . . . . . . . . .
                . . . . . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . . .
                . . . . . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . . .
                . . . . . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . . . . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . . . . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . e e e e e d d e e e e e e e d d e e e e e e e e e e e
                . . . e e e e e d d e e e e e e e d d e e e e e e e e . . e
                . . . . . . . . 1 1 1 . . . e e f e 1 1 1 . . . . . . . . e
                . . . . . . . . 1 1 1 . f e f f f e e 1 1 1 . . . . . . . e
                . . . . . . . 1 1 . . e e e e f e e f f 1 1 1 . . . . e e e
                . . . . . . . 1 1 . e f f e e e e e e f 1 1 1 . . . . . . .
                . . . . . . 1 1 1 . f f e d d d e f e f 1 1 1 . . . . . . .
                . . . . . . 1 1 1 . e e d d d d d e e e f 1 1 . . . . . . .
                . . . . . . 1 1 1 . e d d d d d d d f f e 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . d f d d d f d f e e 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . d d d d d d d e d e 1 1 1 1 . . . . .
                . . . . . . . 1 1 . . d d d d d d d e d e f 1 1 1 . . . . .
                . . . . . . . 1 1 . . d e e e e e d e e e e 1 1 1 . . . . .
                . . . . . . . 1 1 . . . e d d d e d e f f e 1 1 1 1 . . . .
                . . . . . . . 1 1 . . . e e e e e e e e f e 1 1 1 1 . . . .
                . . . . . . . 1 1 . . . e e e e e e d e f . 1 1 1 1 . . . .
                . . . . . . . 1 1 1 . . . e e e e d d . . . 1 1 1 . . . . .
                . . . . . . . 1 1 1 . 2 2 2 2 2 d d 1 1 1 1 1 1 1 . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . . . 1 1 1 e e e e e e e e 1 1 1 . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 1 1 . . . . . . . .
                . . . . . . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . . e d d d 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . e e e e e 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . f f f f f . . . . . e d d d . . . . . . .
                . . . . . . . . . . . . . . . . . . e e e e e . . . . . . .
                . . . . . . . . . . . . . . . . . . f f f f f . . . . . . .
            `, img`
                . . . e e e e e d d e e e e e e e d d e e e e e e e e e e e
                . . . e e e e e d d e e e e e e e d d e e e e e e e e . . e
                . . . . . . . . 1 1 1 . . . e e f e 1 1 1 . . . . . . . . e
                . . . . . . . . 1 1 1 . f e f f f e e 1 1 1 . . . . . . . e
                . . . . . . . 1 1 . . e e e e f e e f f 1 1 1 . . . . e e e
                . . . . . . . 1 1 . e f f e e e e e e f 1 1 1 . . . . . . .
                . . . . . . 1 1 1 . f f e d d d e f e f 1 1 1 . . . . . . .
                . . . . . . 1 1 1 . e e d d d d d e e e f 1 1 . . . . . . .
                . . . . . . 1 1 1 . e d d d d d d d f f e 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . d f d d d f d f e e 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . d d d d d d d e d e 1 1 1 1 . . . . .
                . . . . . . . 1 1 . . d d d d d d d e d e f 1 1 1 . . . . .
                . . . . . . . 1 1 . . d e e e e e d e e e e 1 1 1 . . . . .
                . . . . . . . 1 1 . . . e d d d e d e f f e 1 1 1 1 . . . .
                . . . . . . . 1 1 . . . e e e e e e e e f e 1 1 1 1 . . . .
                . . . . . . . 1 1 . . . e e e e e e d e f . 1 1 1 1 . . . .
                . . . . . . . 1 1 1 . . . e e e e d d . . . 1 1 1 . . . . .
                . . . . . . . 1 1 1 . 2 2 2 2 2 d d 1 1 1 1 1 1 1 . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . . . 1 1 1 e e e e e e e e 1 1 1 . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 1 1 . . . . . . . .
                . . . . . . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . . e d d d 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . e e e e e 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . f f f f f . . . . . e d d d . . . . . . .
                . . . . . . . . . . . . . . . . . . e e e e e . . . . . . .
                . . . . . . . . . . . . . . . . . . f f f f f . . . . . . .
            `, img`
                . . . e e e e e d d e e e e e e e d d e e e e e e e e e e e
                . . . e e e e e d d e e e e e e e d d e e e e e e e e . . e
                . . . . . . . . 1 1 1 . . . e e f e 1 1 1 . . . . . . . . e
                . . . . . . . . 1 1 1 . f e f f f e e 1 1 1 . . . . . . . e
                . . . . . . . 1 1 . . e e e e f e e f f 1 1 1 . . . . e e e
                . . . . . . . 1 1 . e f f e e e e e e f 1 1 1 . . . . . . .
                . . . . . . 1 1 1 . f f e d d d e f e f 1 1 1 . . . . . . .
                . . . . . . 1 1 1 . e e d d d d d e e e f 1 1 . . . . . . .
                . . . . . . 1 1 1 . e d d d d d d d f f e 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . d f d d d f d f e e 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . d d d d d d d e d e 1 1 1 1 . . . . .
                . . . . . . . 1 1 . . d d d d d d d e d e f 1 1 1 . . . . .
                . . . . . . . 1 1 . . d e e e e e d e e e e 1 1 1 . . . . .
                . . . . . . . 1 1 . . . e d d d e d e f f e 1 1 1 1 . . . .
                . . . . . . . 1 1 . . . e e e e e e e e f e 1 1 1 1 . . . .
                . . . . . . . 1 1 . . . e e e e e e d e f . 1 1 1 1 . . . .
                . . . . . . . 1 1 1 . . . e e e e d d . . . 1 1 1 . . . . .
                . . . . . . . 1 1 1 . 2 2 2 2 2 d d 1 1 1 1 1 1 1 . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . .
                . . . . . . . . . . 1 1 1 e e e e e e e e 1 1 1 . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 1 1 . . . . . . . .
                . . . . . . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . . e d d d 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . e e e e e 1 1 2 2 2 2 2 2 2 2 . . . . . .
                . . . . . . . . . f f f f f . . . . . e d d d . . . . . . .
                . . . . . . . . . . . . . . . . . . e e e e e . . . . . . .
                . . . . . . . . . . . . . . . . . . f f f f f . . . . . . .
            `, img`
                . . . . . . . . . . e e e f e 1 1 1 1 1 1 1 1 1 1 1 1 . . .
                . . . . . . . . . f e f f f e e e 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . e e e e f e e f f e 1 1 1 . . . . . . . . .
                . . . . . . . e f f e e e e e e f e 1 1 . . . . . . . . . .
                . . . . . . 1 f f e d d d e f e f f e 1 . . . . . . . . . .
                . . . . . 1 1 e e d d d d d e e e f e e . . . . . . . . . .
                . . . 1 1 1 1 e d d d d d d d f f e e e . . . . . . . . . .
                . . . 1 1 1 1 1 d f d d d f d f e e f e . . . . . . . . . .
                . . 1 1 1 1 1 1 d d d d d d d e d e e f . . . . . . . . . .
                . . 1 1 1 1 1 1 d d d d d d d e d e f f . . . . . . . . . .
                . 1 1 1 1 1 1 1 d e e e e e d e e e e e . . . . . . . . . .
                . 1 1 1 1 1 1 1 1 e d d d e d e f f e f . . . . . . . . . .
                1 1 1 1 1 1 1 1 1 e e e e e e e e f e . . . . . . . . . . .
                1 1 1 1 1 1 1 . . e e e e e e d e f . . . . . . . . . . . .
                1 1 1 1 . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                1 1 1 1 . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . .
                1 1 1 1 . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . .
                1 1 1 . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                1 1 . . d d . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                1 1 . . d d d . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                1 1 . . d d d 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                1 1 . . . d 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                1 1 . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                1 1 . . . . 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                1 1 . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                1 1 . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                1 1 . . . . . . 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                1 1 . . . . . . 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                1 1 . . . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                1 1 . . . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                1 1 . . . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . . . . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . . . . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . . . . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                f . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . f e e . f . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                f . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . f . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                f . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                f . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . f . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `],
            50,
            false
        )
    }


    animateAttack(): void {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . e f f e f e e . . . . . . . . . . . . . .
                . . . . . e f e e f e e f e . . . . . . . . . . . . .
                . . . . f f e f f f e f e f e . . . . . . . . . . . .
                . . . e f e e f e e f e e f e . . . . . . . . . . . .
                . . . f e e f f e e e 4 e e f e . . . . . . . . . . .
                . . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . .
                . 1 . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . .
                . 1 1 . . f f f f f 4 4 f f f f . . . . . . . . . . .
                . 1 1 . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . .
                . 1 1 . . 4 4 f f f 4 4 f f f . . . . . . . . . . . .
                . 1 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . 1 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . .
                . . 1 1 e e e 4 4 4 4 4 4 . . . . . . . . . . . . . .
                . . . 1 1 e e e 4 4 4 4 . . . . . . . . . . . . . . .
                . . . 1 1 1 e e e e e e e b b b 1 b b b b b b b . . .
                . . . . e 1 1 1 1 1 1 1 1 1 1 b b 1 b b b b b b 1 . .
                . . . . e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
                . . . . e e e e e e e . . . . . . . . . . . . . . . .
                . . . . c c e e e e e . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c . c c c . . . . . . . . . . . . . . . .
                . . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . .
                . . . e e b . . . b e e . . . . . . . . . . . . . . .
                . . . f f f . . . f f f . . . . . . . . . . . . . . .
            `, img`
                . . . . . . e f f e f e e . . . . . . . . . . . . . .
                . . . . . e f e e f e e f e . . . . . . . . . . . . .
                . . . . f f e f f f e f e f e . . . . . . . . . . . .
                . . . e f e e f e e f e e f e . . . . . . . . . . . .
                . . . f e e f f e e e 4 e e f e . . . . . . . . . . .
                . . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . .
                . . . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . .
                . . . . . f f f f f 4 4 f f f f . . . . . . . . . . .
                . . . . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . .
                . . . . . 4 4 f f f 4 4 f f f . . . . . . . . . . . .
                . . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . . . . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . .
                . . . . . e e 4 4 4 4 4 4 . . . . . . . . . . . . . .
                . . . . e e e e 4 4 4 4 . . . . . . . . . . . . . . .
                . . . . e e e e e e e e e b b b b b b b b b b 5 . 5 .
                . . . . e e e e e e e e e b b b b b b b b b 1 1 5 . .
                . . . . e e e e e e e . . 1 1 1 1 1 1 1 1 1 1 5 . 5 .
                . . . . e e e e e e e . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c . c c c . . . . . . . . . . . . . . . .
                . . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . .
                . . . e e b . . . b e e . . . . . . . . . . . . . . .
                . . . f f f . . . f f f . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f e . . . . . . . . . . . . . .
                . e f e e f e e f e e f e e . . . . . . . . . . . . .
                . f e e f f e e e 4 e e f e . . . . . . . . . . . . .
                . . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . .
                . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . . . .
                . 1 f f f f f f 4 4 f f f f . . . . . . . . . . . . .
                . . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 e 4 4 4 . . . . . . . 1 1 1 . . . . .
                . . . . . 4 4 4 4 4 4 . . . . . . . . 1 1 . . . . . .
                1 1 . e e e e 4 4 4 . . . . . . . . 1 1 . . . . . . .
                . 1 1 e e e e e e e . . . . . . 1 1 1 . . . . . . . .
                . 1 1 1 1 e e e e e . . . . . . 1 1 . . . . . . . . .
                . 1 1 1 1 1 e e e e . . . . 1 1 1 . . . . . . . . . .
                . . 1 1 1 1 1 1 1 1 . . 1 1 1 1 . . . . . . . . . . .
                . . . c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . .
                . . . c c 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
                . . . . 4 4 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . e e b . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `, img`
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f . . . . . . . . . . . . . . .
                . e f e e f e e f e e f . . . . . . . . . . . . . . .
                . f e e f f e e e 4 e e e . . . . . . . . . . . . . .
                . . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . .
                . . e e 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
                . 1 f f f f f f 4 4 f f f . . . . . . . . . . . . . .
                . . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . . . .
                1 1 1 . . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
                1 1 1 1 . 4 4 4 4 4 e e . . . . . . . . . . . . . . .
                1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                . 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                . . 1 1 1 e e e e e e . . . . . . . . . . . . . . . .
                . . . 1 1 1 e e e e . . . . . . . . . . . . . . . . .
                . . . c 1 1 1 c c c . 1 . . . . . . . . . . . . . . .
                . . . c c c 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . . 4 4 . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . e e b . . b e e . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `, img`
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f e . . . . . . . . . . . . . .
                . e f e e f e e f e e f e . . . . . . . . . . . . . .
                . f e e f f e e e 4 e e f e . . . . . . . . . . . . .
                . . f 1 e e 4 4 4 4 4 e e e . . . . . . . . . . . . .
                . . b b 1 4 4 4 4 4 4 4 e . . . . . . . . . . . . . .
                . . b b 1 f f f 4 4 f f f f . . . . . . . . . . . . .
                . . b b 1 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . b b 1 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . d b 1 4 4 4 e 4 4 4 . . . . . . . . . . . . . . .
                . . d b 1 4 4 4 4 4 4 . . . . . . . . . . . . . . . .
                . e b b 1 4 4 4 4 4 e . . . . . . . . . . . . . . . .
                . e b b 1 e e e e e e . . . . . . . . . . . . . . . .
                . e b b 1 e e e e e e . . . . . . . . . . . . . . . .
                . . e e e e e e e e e . . . . . . . . . . . . . . . .
                . . e 4 4 4 4 4 4 e . . . . . . . . . . . . . . . . .
                . . e e c c c c c c . . . . . . . . . . . . . . . . .
                . . e e c c c c c c . . . . . . . . . . . . . . . . .
                . . . c c c . c c c . . . . . . . . . . . . . . . . .
                . . . . 4 4 . . 4 4 . . . . . . . . . . . . . . . . .
                . . . e e b . . b e e . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `],
            100,
            false
        )
    }


    playUpDownAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . 4 4 . . .
                . . . e e . . . e e . . .
                . . . f f . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . e e . . . 4 4 . . .
                . . . f f . . . e e . . .
                . . . . . . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . e e . . .
                . . . e e . . . f f . . .
                . . . f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . e e . . . 4 4 . . .
                . . . f f . . . e e . . .
                . . . . . . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . e e . . .
                . . . e e . . . f f . . .
                . . . f f . . . . . . . .
            `],
            100,
            true
        )
    }


    playIdleRightAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . . . . . . . . . e e e e e e e e f e . . . . . . . . . . .
                . e e e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . e e . . . . . e e e e d d . . . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 d d 1 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . e e e e e . . . . . e d d d . . . . . . . .
                . . e e . . . . f f f f f . . . . e e e e e . . . . . . . .
                . . e e . . . . . . . . . . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e e e f e . . . . . . . . . . . . . . . .
                . . . . . . . . f e f f f e e e . . . . . . . . . . . . . .
                . . . . . . . e e e e f e e f f e . . . . . . . . . . . . .
                . . . . . . e f f e e e e e e f e e . . . . . . . . . . . .
                . . . . . . f f e d d d e f e f f e . . . . . . . . . . . .
                . . . . . . e e d d d d d e e e f e e . . . . . . . . . . .
                . . . . . . e d d d d d d d f f e e e . . . . . . . . . . .
                . . . . . . . d f d d d f d f e e f e . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e e f . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e f f . . . . . . . . . . .
                . . . . . . . d e e e e e d e e e e e . . . . . . . . . . .
                . e e e e . . . e d d d e d e f f e f . . . . . . . . . . .
                . e . e e . . . e e e e e e e e f e . . . . . . . . . . . .
                . e . . . . . . e e e e e e d e f . . . . . . . . . . . . .
                . e . . . . . . . e e e e d d 1 1 . . . . . . . . . . . . .
                . e e e . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . . e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . . . . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e e e f e . . . . . . . . . . . . . . . .
                . . . . . . . . f e f f f e e e . . . . . . . . . . . . . .
                . . . . . . . e e e e f e e f f e . . . . . . . . . . . . .
                . . . . . . e f f e e e e e e f e e . . . . . . . . . . . .
                . . . . . . f f e d d d e f e f f e . . . . . . . . . . . .
                . . . . . . e e d d d d d e e e f e e . . . . . . . . . . .
                . . . . . . e d d d d d d d f f e e e . . . . . . . . . . .
                . . . . . . . d f d d d f d f e e f e . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e e f . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e f f . . . . . . . . . . .
                . . . . . . . d e e e e e d e e e e e . . . . . . . . . . .
                . . . . . . . . e d d d e d e f f e f . . . . . . . . . . .
                . e e e e . . . e e e e e e e e f e . . . . . . . . . . . .
                . e . e e . . . e e e e e e d e f . . . . . . . . . . . . .
                . e . . . . . . . e e e e d d 1 1 . . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `],
            100,
            true
        )
    }

    playWalkRightAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 4
                . 4 . c c c c c c c . . .
                . 4 4 c c c . c c 4 4 . .
                . . . 4 4 . . . . b e e .
                . . . b e e . . . f f f .
                . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 4 c c c c c c c . 4 4
                . . . c c c . c c c . . .
                . . . . b e e . . 4 4 . .
                . . . . f f f . . b e e .
                . . . . . . . . . f f f .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 4 c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . c c c . 4 4
                . . . 4 4 . . . 4 4 . . .
                . . . b e e . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 4
                . 4 4 c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . . b e e . b e e . .
                . . . . f f f . f f f . .
            `],
            75,
            true
        )
    }
    playIdleBackAnimation(): void {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . . . . . . 4 4 4 . . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `],
            100,
            true
        )
    }


    playWalkLeftAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . . . . . . . . . e e e e e e e e f e . . . . . . . . . . .
                . e e e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . e e . . . . . e e e e d d . . . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 d d 1 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . e e e e e . . . . . e d d d . . . . . . . .
                . . e e . . . . f f f f f . . . . e e e e e . . . . . . . .
                . . e e . . . . . . . . . . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e e e f e . . . . . . . . . . . . . . .
                . . . . . . . . . f e f f f e e e . . . . . . . . . . . . .
                . . . . . . . . e e e e f e e f f e . . . . . . . . . . . .
                . . . . . . . e f f e e e e e e f e e . . . . . . . . . . .
                . . . . . . . f f e d d d e f e f f e . . . . . . . . . . .
                . . . . . . . e e d d d d d e e e f e e . . . . . . . . . .
                . . . . . . . e d d d d d d d f f e e e . . . . . . . . . .
                . . . . . . . . d f d d d f d f e e f e . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e e f . . . . . . . . . .
                . . . . . . . . d d d d d d d e d e f f . . . . . . . . . .
                . . . . . . . . d e e e e e d e e e e e . . . . . . . . . .
                . . . . . . . . . e d d d e d e f f e f . . . . . . . . . .
                . e e e e . . . . e e e e e e e e f e . . . . . . . . . . .
                . e . e e . . . . e e e e e e d e f . . . . . . . . . . . .
                . e . . . . . . . . e e e e d d 1 1 . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e e e f e . . . . . . . . . . . . . . . .
                . . . . . . . . f e f f f e e e . . . . . . . . . . . . . .
                . . . . . . . e e e e f e e f f e . . . . . . . . . . . . .
                . . . . . . e f f e e e e e e f e e . . . . . . . . . . . .
                . . . . . . f f e d d d e f e f f e . . . . . . . . . . . .
                . . . . . . e e d d d d d e e e f e e . . . . . . . . . . .
                . . . . . . e d d d d d d d f f e e e . . . . . . . . . . .
                . . . . . . . d f d d d f d f e e f e . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e e f . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e f f . . . . . . . . . . .
                . . . . . . . d e e e e e d e e e e e . . . . . . . . . . .
                . e e e e . . . e d d d e d e f f e f . . . . . . . . . . .
                . e . e e . . . e e e e e e e e f e . . . . . . . . . . . .
                . e . . . . . . e e e e e e d e f . . . . . . . . . . . . .
                . e . . . . . . . e e e e d d 1 1 . . . . . . . . . . . . .
                . e e e . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . . e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . . . . . . . f f f f f . . . . f f f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e e e f e . . . . . . . . . . . . . . . .
                . . . . . . . . f e f f f e e e . . . . . . . . . . . . . .
                . . . . . . . e e e e f e e f f e . . . . . . . . . . . . .
                . . . . . . e f f e e e e e e f e e . . . . . . . . . . . .
                . . . . . . f f e d d d e f e f f e . . . . . . . . . . . .
                . . . . . . e e d d d d d e e e f e e . . . . . . . . . . .
                . . . . . . e d d d d d d d f f e e e . . . . . . . . . . .
                . . . . . . . d f d d d f d f e e f e . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e e f . . . . . . . . . . .
                . . . . . . . d d d d d d d e d e f f . . . . . . . . . . .
                . . . . . . . d e e e e e d e e e e e . . . . . . . . . . .
                . . . . . . . . e d d d e d e f f e f . . . . . . . . . . .
                . e e e e . . . e e e e e e e e f e . . . . . . . . . . . .
                . e . e e . . . e e e e e e d e f . . . . . . . . . . . . .
                . e . . . . . . . e e e e d d 1 1 . . . . . . . . . . . . .
                . e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . . . . . . .
                . e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . . .
                . . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . . . . . . .
                . . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . . .
                . . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . . .
                . . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . . . . . .
                . . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . . . . . . .
                . . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . . . . . . .
                . . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . . . . . . .
                . . e e . . . . . e d d d . . . . . e d d d . . . . . . . .
                . . e e . . . . e e e e e . . . . e e e e e . . . . . . . .
                . . e e . . . . f f f f f . . . . f f f f f . . . . . . . .
            `],
            100,
            true
        )
    }



}


/**
* Sprite Wrapper for codeplant.explosions
*/
//% weight=100 color=#d2b48c 
//% groups='["Small Explosions", "Med Explosions", "Large Explosions", "Misc"]'
namespace explosions {

    //% blockId=MedExplosionOne block="Med Explosion 1 on Sprite %s"
    //% weight=100
    //% group="Med Explosions"
    export function MedExplosionOne(s: Sprite) {
        animation.runImageAnimation(
            s,
            [img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . f f f f . . . . . .
                . . . . . . . f f . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                f f f . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . f . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . 2 . . . . . f 1 2 . . f
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . f
                . . . . . . . . . . . . . . . f
                . . . . . . . . . f . . . . . .
                f f . . . . . . . f . . . . . .
                . f f . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . f
            `, img`
                . . . . . . . . c c . . . . . .
                . c c c . . . . c . . . . . . .
                . c 5 5 . . . . c . . . . 5 c .
                c c 5 5 . . . . . . . 5 5 5 5 c
                c 5 5 . . . . . . . . . . . 5 c
                . 5 . . . . 2 5 2 . . . . . 5 c
                . . . . . 2 5 c 1 2 . . . 5 5 c
                . . . . . 2 1 c 5 2 . . . . . .
                . . . . . . 2 5 2 . . . . c . .
                . . . . . . . . . . . . . c c .
                . c c . . . . . . . . . . . c .
                . . c c . . . . . . . . . . . .
                . . c . . . c 5 . . . . . . . .
                . . . . . . c c . . . 5 c . . .
                . . . . . . c c 5 5 5 5 c . . .
                . . . . . . . c c c c c c . . .
            `, img`
                . . . . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . . . . . . . f 1 2 . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . f . . . . . . . . . . . . . .
                . f . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . f
            `, img`
                5 . . . . . . . . . . . . . . 5
                5 5 . . . . . . . . . . . 5 5 .
                5 5 5 . . . . . . . . . 5 5 . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . 5 1 5 5 . 5 5 5 5 5 5 . . . .
                . 5 1 1 5 5 5 5 5 1 5 . . . . .
                . . 5 1 1 1 5 1 1 1 5 . . . . .
                . . 5 5 5 1 1 1 1 1 5 5 . . . .
                . . . . 5 5 1 1 1 1 5 5 . . . .
                . . . . . 5 1 1 1 1 1 5 . . . .
                . . . . 5 5 1 5 5 5 5 5 . . . .
                . . . . 5 1 1 5 5 5 5 5 5 . . .
                . . . 5 5 5 5 5 5 . . 5 5 5 . .
                . . 5 5 5 5 . . . . . . . . . .
                . 5 5 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 . . . . . 5 5 . . . . . 5 5 5
                5 5 . . . . 5 5 . . . 5 5 5 5 .
                5 5 5 . . . 5 5 5 . 5 5 5 5 . .
                . 5 5 5 5 5 5 5 5 5 5 5 5 . . .
                . 5 5 5 5 5 5 1 5 5 5 5 5 . . .
                . 5 5 5 1 1 1 1 1 1 1 5 5 5 . .
                . 5 5 5 5 1 1 1 1 5 5 5 5 5 . .
                . . 5 5 5 1 1 1 1 1 5 5 5 5 . .
                . 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5
                . 5 5 5 1 1 1 1 1 1 5 5 5 . . .
                5 5 5 5 1 5 1 1 1 1 5 5 5 . . .
                5 5 5 5 5 5 5 5 5 1 1 5 5 . . .
                . . . 5 5 5 5 5 5 5 5 5 5 5 . .
                . . 5 5 5 5 . 5 5 5 5 5 5 5 . .
                . 5 5 5 . . . 5 5 5 5 5 . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 5 . . . . . . . . . . . . 5 5
                5 5 5 . . . . . . . . . . 5 5 5
                . 5 5 . . . . . . . . . . 5 . .
                . . 5 . c c c . . . . c c c . .
                . . . c c 4 c c . . c c 4 c . .
                . . c c 4 5 . . . . 5 5 4 4 c .
                . . c 4 5 5 5 . 1 . . 5 5 4 c .
                . . c 4 5 . . 1 1 1 . . 5 4 c .
                . . c c . . . 1 1 1 . c 5 4 c .
                . . . . c . . . 1 . . c c c c .
                . . . . c 5 5 5 . c c . . . . .
                . . 5 . c 4 4 5 5 4 c . . . . .
                . 5 5 . c c 4 4 5 4 c . . 5 . .
                . 5 . . . c c 4 4 4 c . . 5 5 .
                5 . . . . . c c c c c . . . 5 5
                5 . . . . . . . . . . . . . 5 5
            `, img`
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 . . . . .
                . . . . 2 . . . . . . . . . . .
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . 2 . . . . . . . . . .
                . . . . . . . 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `],
            75,
            false
        )
    }

    //% blockId=MedExplosionTwo block="Med Explosion 2 on Sprite %s"
    //% weight=100
    //% group="Med Explosions"
    export function MedExplosionTwo(s: Sprite) {
        animation.runImageAnimation(
            s,
            [img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . f f f f . . . . . .
                . . . . . . . f f . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                f f f . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . f . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . 2 . . . . . f 1 2 . . f
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . f
                . . . . . . . . . . . . . . . f
                . . . . . . . . . f . . . . . .
                f f . . . . . . . f . . . . . .
                . f f . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . f
            `, img`
                . . . . . . . . c c . . . . . .
                . c c c . . . . c . . . . . . .
                . c 5 5 . . . . c . . . . 5 c .
                c c 5 5 . . . . . . . 5 5 5 5 c
                c 5 5 . . . . . . . . . . . 5 c
                . 5 . . . . 2 5 2 . . . . . 5 c
                . . . . . 2 5 c 1 2 . . . 5 5 c
                . . . . . 2 1 c 5 2 . . . . . .
                . . . . . . 2 5 2 . . . . c . .
                . . . . . . . . . . . . . c c .
                . c c . . . . . . . . . . . c .
                . . c c . . . . . . . . . . . .
                . . c . . . c 5 . . . . . . . .
                . . . . . . c c . . . 5 c . . .
                . . . . . . c c 5 5 5 5 c . . .
                . . . . . . . c c c c c c . . .
            `, img`
                . . . . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . . . . . . . f 1 2 . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . f . . . . . . . . . . . . . .
                . f . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . f
            `, img`
                5 . . . . . . . . . . . . . . 5
                5 5 . . . . . . . . . . . 5 5 .
                5 5 5 . . . . . . . . . 5 5 . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . 5 1 5 5 . 5 5 5 5 5 5 . . . .
                . 5 1 1 5 5 5 5 5 1 5 . . . . .
                . . 5 1 1 1 5 1 1 1 5 . . . . .
                . . 5 5 5 1 1 1 1 1 5 5 . . . .
                . . . . 5 5 1 1 1 1 5 5 . . . .
                . . . . . 5 1 1 1 1 1 5 . . . .
                . . . . 5 5 1 5 5 5 5 5 . . . .
                . . . . 5 1 1 5 5 5 5 5 5 . . .
                . . . 5 5 5 5 5 5 . . 5 5 5 . .
                . . 5 5 5 5 . . . . . . . . . .
                . 5 5 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 . . . . . 5 5 . . . . . 5 5 5
                5 5 . . . . 5 5 . . . 5 5 5 5 .
                5 5 5 . . . 5 5 5 . 5 5 5 5 . .
                . 5 5 5 5 5 5 5 5 5 5 5 5 . . .
                . 5 5 5 5 5 5 1 5 5 5 5 5 . . .
                . 5 5 5 1 1 1 1 1 1 1 5 5 5 . .
                . 5 5 5 5 1 1 1 1 5 5 5 5 5 . .
                . . 5 5 5 1 1 1 1 1 5 5 5 5 . .
                . 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5
                . 5 5 5 1 1 1 1 1 1 5 5 5 . . .
                5 5 5 5 1 5 1 1 1 1 5 5 5 . . .
                5 5 5 5 5 5 5 5 5 1 1 5 5 . . .
                . . . 5 5 5 5 5 5 5 5 5 5 5 . .
                . . 5 5 5 5 . 5 5 5 5 5 5 5 . .
                . 5 5 5 . . . 5 5 5 5 5 . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 5 . . . . . . . . . . . . 5 5
                5 5 5 . . . . . . . . . . 5 5 5
                . 5 5 . . . . . . . . . . 5 . .
                . . 5 . c c c . . . . c c c . .
                . . . c c 4 c c . . c c 4 c . .
                . . c c 4 5 . . . . 5 5 4 4 c .
                . . c 4 5 5 5 . 1 . . 5 5 4 c .
                . . c 4 5 . . 1 1 1 . . 5 4 c .
                . . c c . . . 1 1 1 . c 5 4 c .
                . . . . c . . . 1 . . c c c c .
                . . . . c 5 5 5 . c c . . . . .
                . . 5 . c 4 4 5 5 4 c . . . . .
                . 5 5 . c c 4 4 5 4 c . . 5 . .
                . 5 . . . c c 4 4 4 c . . 5 5 .
                5 . . . . . c c c c c . . . 5 5
                5 . . . . . . . . . . . . . 5 5
            `, img`
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 . . . . .
                . . . . 2 . . . . . . . . . . .
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . 2 . . . . . . . . . .
                . . . . . . . 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `],
            75,
            false
        )
    }

    //% blockId=smallExplosionOne block="Small Explosion 1 on Sprite %s"
    //% weight=100
    //% group="Small Explosions"
    export function smallExplosionOne(s: Sprite) {
        animation.runImageAnimation(
            s,
            [

                img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . f f f . . . . . . .
                    . . . . . f f f f f . . . . . .
                    . . . . . f f f f f f . . . . .
                    . . . . f f f f f f f . . . . .
                    . . . . f f f f f f f . . . . .
                    . . . . . . f f f f . . . . . .
                    . . . . . . . f f . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . 1 1 1 . . . . . . .
                    . . . . . 1 1 1 1 1 . . . . . .
                    . . . . 1 1 1 1 1 1 1 . . . . .
                    . . . 1 1 1 1 1 1 1 1 1 . . . .
                    . . . 1 1 1 1 1 1 1 1 1 . . . .
                    . . . 1 1 1 1 1 1 1 1 1 . . . .
                    . . . . 1 1 1 1 1 1 1 . . . . .
                    . . . . . 1 1 1 1 1 . . . . . .
                    . . . . . . 1 1 1 . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `, img`
                    f f f . . . . . f f . . . . . .
                    f . . . . . . . f . . . . . . .
                    f . . . . . . . f . . . . . f .
                    . . . . . . . . . . 5 2 . . . f
                    . . . . 2 . . . . . f 1 2 . . f
                    . . . 2 5 . . . . . . . . . . f
                    . . . . . . . . . . . . . . . .
                    f f . . . . . . . . . . . . . .
                    . . . . . . . . . . 5 2 . . . .
                    . . . . . 2 1 . . . 2 . . . . .
                    . . . . . . 2 5 . f . . . . . f
                    . . . . . . . . . . . . . . . f
                    . . . . . . . . . f . . . . . .
                    f f . . . . . . . f . . . . . .
                    . f f . . . . . . . . . . . . f
                    . f . . . . . . . . . . . . . f
                `, img`
                    . . . . . . . . c c . . . . . .
                    . c c c . . . . c . . . . . . .
                    . c 5 5 . . . . c . . . . 5 c .
                    c c 5 5 . . . . . . . 5 5 5 5 c
                    c 5 5 . . . . . . . . . . . 5 c
                    . 5 . . . . 2 5 2 . . . . . 5 c
                    . . . . . 2 5 c 1 2 . . . 5 5 c
                    . . . . . 2 1 c 5 2 . . . . . .
                    . . . . . . 2 5 2 . . . . c . .
                    . . . . . . . . . . . . . c c .
                    . c c . . . . . . . . . . . c .
                    . . c c . . . . . . . . . . . .
                    . . c . . . c 5 . . . . . . . .
                    . . . . . . c c . . . 5 c . . .
                    . . . . . . c c 5 5 5 5 c . . .
                    . . . . . . . c c c c c c . . .
                `, img`
                    . . . . . . . . f f . . . . . .
                    f . . . . . . . f . . . . . . .
                    f . . . . . . . . . . . . . f .
                    . . . . . . . . . . 5 2 . . . f
                    . . . . . . . . . . f 1 2 . . .
                    . . . . . . . . . . . . . . . f
                    . . . . . . . . . . . . . . . .
                    f f . . . . . . . . . . . . . .
                    . . . . . . . . . . 5 2 . . . .
                    . . . . . 2 1 . . . 2 . . . . .
                    . . . . . . 2 5 . f . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . f . . . . . .
                    . f . . . . . . . . . . . . . .
                    . f . . . . . . . . . . . . . f
                    . . . . . . . . . . . . . . . f
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . f
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . f . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . f . . . . . .
                    . . . . . . . . . . . . . . . f
                    . f . . . . . . . . . . . . . .
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `],
            75,
            false
        )
    }

    //% blockId=sendHealingBolt block="Send Bolt from Sprite %s"
    //% weight=100
    //% group="Misc"
    export function sendHealingBolt(s: Sprite) {

        let healingBolt = sprites.create(img`
            . . 1 1 1 1 . .
            . 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1
            1 1 1 2 5 1 1 1
            1 1 1 5 2 1 1 1
            1 1 1 1 1 1 1 1
            . 1 1 1 1 1 1 .
            . . 1 1 1 1 . .
        `, SpriteKind.Projectile)
        animation.runImageAnimation(
            healingBolt,
            [img`
                . . 5 . . 5 . .
                5 . . 5 4 . . 5
                . f 5 f f 5 f .
                f f f 2 4 f f f
                f f f 4 2 f f f
                . f 5 f f 5 f .
                5 . f f f f . 5
                . . . 5 4 . . .
            `, img`
                . . 1 1 1 1 . .
                . 1 1 1 1 1 1 .
                1 1 1 1 1 1 1 1
                1 1 1 5 2 1 1 1
                1 1 1 2 5 1 1 1
                1 1 1 1 1 1 1 1
                . 1 1 1 1 1 1 .
                . . 1 1 1 1 . .
            `, img`
                . 5 . 5 4 . 5 .
                5 . f f f f . 5
                . f 5 f f 5 f .
                4 f f 2 5 f f 4
                4 f f 5 2 f f 4
                . f 5 f f 5 f .
                5 . f f f f . 5
                . 5 . 4 5 . 5 .
            `, img`
                . . 1 1 1 1 . .
                . 1 1 1 1 1 1 .
                1 1 1 1 1 1 1 1
                1 1 1 5 2 1 1 1
                1 1 1 2 5 1 1 1
                1 1 1 1 1 1 1 1
                . 1 1 1 1 1 1 .
                . . 1 1 1 1 . .
            `],
            100,
            true
        )
        healingBolt.setPosition(s.x - 10, s.y)
        healingBolt.setVelocity(-200, 0)
    }

    //% blockId=playSmallHealing block="Play Small Healing on Sprite %s"
    //% weight=100
    //% group="Misc"
    function playSmallHealingAnimation(s: Sprite) {
        animation.runImageAnimation(
            s,
            [img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f f . . . . .
                . . . f f f f f f f f f . . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . . f f f f f f f f f . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . 5 5 1 1 1 1 1 5 5 . . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . 5 5 1 1 1 1 1 1 1 5 5 . . .
                . . 5 5 1 1 1 . 1 1 1 5 5 . . .
                . . 5 5 1 1 1 . 1 1 1 5 5 . . .
                . . 5 5 1 1 1 . 1 1 1 5 5 . . .
                . . 5 5 1 1 1 1 1 1 1 5 5 . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . . 5 5 1 1 1 1 1 5 5 . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . 5 5 5 1 1 1 5 5 5 . . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . . 5 5 5 1 1 1 5 5 5 . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . 5 5 5 . . . . . 5 5 5 . . .
                . 5 5 5 5 . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . . 5 5 5 . . . . . 5 5 5 . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . 5 5 5 . . . . . 5 5 5 . . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 . . . . . . . . . 5 5 . .
                . 5 5 5 . . 5 . . . . 5 5 5 . .
                . . 5 5 5 . . 5 . . 5 5 5 . . .
                . . . 5 5 . 5 . . . . 5 5 5 . .
                . . . 5 5 . . 5 . . . . 5 5 . .
                . . 5 5 5 . 5 . . . . 5 5 5 . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . . . . . . . . . . . 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . 5 5 . . . . . . . 5 5 . . .
                . 5 5 . . . . . . . . . 5 5 . .
                . 5 . . . . . . . . . . . 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . . . 5 5 . . 5 . . 5 5 . . . .
                . . . . 5 . 5 . . . . 5 5 5 . .
                . . . 5 5 . . 5 . . . . . 5 . .
                . . . 5 . . 5 . . . . . 5 5 . .
                . 5 . 5 . . . . . . 5 . 5 . . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . . . . . . . . . . . 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . 5 . . . . . . . . . 5 . . .
                . 5 . . . . . . . . . . . 5 . .
                . . . . . . . . . . . . . . . .
                . . 5 . . . . . . . . 5 . 5 . .
                . . . 5 5 . . . . . . . . . . .
                . . . . . . 5 . . . . 5 . 5 . .
                . . . . 5 . . . . . . . . . . .
                . . . 5 . . 5 . . . . . . 5 . .
                . . . . . . . . . . . . . . . .
                . . 5 5 . . . . . . 5 . 5 . . .
                . . . . . . . . . . . 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . 5 . . . . . . . . . . . . . .
                . . 5 . . . . . . . . 5 . 5 . .
                . . . . 5 . . . . . 5 . . . . .
                . . . . 5 . . . . . . 5 . 5 . .
                . . . . . . . 5 . . . . . . . .
                . . . 5 . . 5 . . . . . . 5 . .
                . . . . . . . . . . . . . . . .
                . . . 5 . . . . . . . . 5 . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . 5 . 5 . .
                . . . . . . . . . . . . . . . .
                . . . 5 . . 5 . . . . . . 5 . .
                . . . . . . . . . . . . 5 . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . 5 . . . . .
                . . . . . . . . . . . . . 5 . .
                . . . . 5 . . . . . . . . . . .
                . . . 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `],
            100,
            false
        )
    }

}
