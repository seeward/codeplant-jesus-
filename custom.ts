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
        //% block='HealRightWithStaff'
        HealRightWithStaff = 2,
        //% block='IdleLeft'
        IdleLeft = 3,
        //% block='IdleRight'
        IdleRight = 4
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
            case AnimationTypes.HealRightWithStaff:
                _jesus.playAttackRightAnimation();
                break
            case AnimationTypes.IdleLeft:
                _jesus.playIdleLeftAnimation();
                break
            case AnimationTypes.IdleRight:
                _jesus.playIdleRightAnimation();
                break

        }

    }

    function playAttackLeftAnimation() {
        _jesus.playAttackLeftAnimation()
    }
    function playAttackRightAnimation() {
        _jesus.playAttackRightAnimation()
    }
    function playWalkLeftAnimation() {
        _jesus.playWalkLeftAnimation()
    }
    function playWalkRightAnimation() {
        _jesus.playWalkRightAnimation()
    }
    function playIdleLeftAnimation() {
        _jesus.playIdleLeftAnimation()
    }
    function playIdleRightAnimation() {
        _jesus.playIdleRightAnimation()
    }

    function playWalkDownAnimation() {
       
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

        this.playIdleLeftAnimation();

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

    playAttackRightAnimation() {
        animation.runImageAnimation(
            this.player,
            codeplant.jesus.reflect([img`
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
                . . . . . . . . 1 1 . . . . e e f e 1 1 1 . . . . . . . . e
                . . . . . . . . . 1 1 . f e f f f e e 1 1 1 . . . . . . . e
                . . . . . . . . . 1 1 e e e e f e e f f 1 1 1 . . . . e e e
                . . . . . . . . . 1 e f f e e e e e e f 1 1 1 . . . . . . .
                . . . . . . . . . 1 f f e d d d e f e f 1 1 1 . . . . . . .
                . . . . . . . . . 1 e e d d d d d e e e f 1 1 . . . . . . .
                . . . . . . . . . 1 e d d d d d d d f f e 1 1 1 . . . . . .
                . . . . . . . . . 1 1 d f d d d f d f e e 1 1 1 . . . . . .
                . . . . . . . . . . 1 d d d d d d d e d e 1 1 1 1 . . . . .
                . . . . . . . . . . 1 d d d d d d d e d e f 1 1 1 . . . . .
                . . . . . . . . . . 1 d e e e e e d e e e e 1 1 1 . . . . .
                . . . . . . . . . . 1 1 e d d d e d e f f e 1 1 1 1 . . . .
                . . . . . . . . . . 1 1 e e e e e e e e f e 1 1 1 1 . . . .
                . . . . . . . . . . 1 1 e e e e e e d e f . 1 1 1 1 . . . .
                . . . . . . . . . . 1 1 1 e e e e d d . . . 1 1 1 . . . . .
                . . . . . . . . . 1 1 2 2 2 2 2 d d 1 1 1 1 1 1 1 . . . . .
                . . . . . . . . . 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . . 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . . 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
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
            `]),
            50,
            false
        )
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
                . . . . . . . . 1 1 . . . . e e f e 1 1 1 . . . . . . . . e
                . . . . . . . . . 1 1 . f e f f f e e 1 1 1 . . . . . . . e
                . . . . . . . . . 1 1 e e e e f e e f f 1 1 1 . . . . e e e
                . . . . . . . . . 1 e f f e e e e e e f 1 1 1 . . . . . . .
                . . . . . . . . . 1 f f e d d d e f e f 1 1 1 . . . . . . .
                . . . . . . . . . 1 e e d d d d d e e e f 1 1 . . . . . . .
                . . . . . . . . . 1 e d d d d d d d f f e 1 1 1 . . . . . .
                . . . . . . . . . 1 1 d f d d d f d f e e 1 1 1 . . . . . .
                . . . . . . . . . . 1 d d d d d d d e d e 1 1 1 1 . . . . .
                . . . . . . . . . . 1 d d d d d d d e d e f 1 1 1 . . . . .
                . . . . . . . . . . 1 d e e e e e d e e e e 1 1 1 . . . . .
                . . . . . . . . . . 1 1 e d d d e d e f f e 1 1 1 1 . . . .
                . . . . . . . . . . 1 1 e e e e e e e e f e 1 1 1 1 . . . .
                . . . . . . . . . . 1 1 e e e e e e d e f . 1 1 1 1 . . . .
                . . . . . . . . . . 1 1 1 e e e e d d . . . 1 1 1 . . . . .
                . . . . . . . . . 1 1 2 2 2 2 2 d d 1 1 1 1 1 1 1 . . . . .
                . . . . . . . . . 1 2 2 2 2 2 1 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . . 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . . 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 1 . . . . . .
                . . . . . . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . . . . . .
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





    playIdleLeftAnimation() {
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

    playIdleRightAnimation() {
        animation.runImageAnimation(
            this.player,
            codeplant.jesus.reflect([img`
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
            `]),
            100,
            true
        )
    }

    playWalkRightAnimation() {
        
    }
    playIdleBackAnimation(): void {
        
    }


    playWalkLeftAnimation() {
        
    }



}

/**
 * Spriate wrapper for characters
 */
//% weight=100
//% groups'["Leper"]'
namespace characters {

//% blockId=leper block="Leper"
//%group="Leper"
export function Leper(){
    return sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 9 9 . . . 9 . . . . . . . .
        . . . . . . . . . 9 9 9 9 9 9 9 9 9 . . . . . . .
        . . . . . . . . . 9 9 2 9 9 . 9 2 9 . . . . . . .
        . . . . . . . . 9 9 9 9 9 9 . 9 9 9 . . . . . . .
        . . . . . . . . . 9 . . 9 9 9 9 9 9 . . . . . . .
        . . . . . . . . . 9 . 9 9 2 2 2 9 9 . . . . . . .
        . . . . . . . e e 9 9 9 9 9 9 9 9 9 . . . . . . .
        . . e e e e e e e e e 9 9 9 9 9 e e e e e e e . .
        . . e e e e e e e e e c c c e e e e e e e e e . .
        . . . 6 6 . . 6 6 e 6 6 6 6 6 . 6 6 . . 6 6 . . .
        . . . . 6 . . 6 6 6 e 6 6 6 6 6 6 6 . . 6 6 . . .
        . . . 6 6 . . 6 6 6 6 e 6 6 6 6 6 6 . . 6 6 . . .
        . . . 6 6 . . 6 . 6 6 6 e 6 6 6 6 6 . . 6 . . . .
        . . . 6 6 . . 6 6 6 6 6 6 e 6 6 6 6 . . 6 6 . . .
        . . . c c . . 6 6 6 6 6 . . . . 6 6 . . c c . . .
        . . . c c . . c c c c . . c c e c c . . c c . . .
        . . . e e . . c c c . . c c c c e c . . e e . . .
        . . . 9 9 9 . e e e e e e e e e e e . 9 9 9 . . .
        . . . 9 9 9 . b b b b b b b b b b b . 9 9 9 . . .
        . . . . . . . b b b b b b b b b b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . . b . . . . . . . . b . . . . . . .
        . . . . . . . . b . . . . . . . . b . . . . . . .
        . . . . . . . . b . . . . . . . . b . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . e e . . . . . . . e e . . . . . . .
        . . . . . . . e e . . . . . . . e e . . . . . . .
        . . . . . e e e e . . . . . . . e e e e . . . . .
        . . . . . e e e e . . . . . . . e e e e . . . . .
    `, SpriteKind.Player)
}
//% blockId=leper block="Leper"
//%group="Leper"
export function LeperHealed() {
    return sprites.create(img`
        . . . . . . . f f f f f f f f f f f . . . . . . .
        . . . . . . f f f f f f f f f f f f f . . . . . .
        . . . . . . f f f f e e e e e e f f f . . . . . .
        . . . . . . f f e e e e e e e e e f f . . . . . .
        . . . . . . f e e e 8 e e e e 8 e . . . . . . . .
        . . . . . . . e e e e e e e e e e . . . . . . . .
        . . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . . e e e e 1 1 1 e e . . . . . . . .
        . . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . . . . e e e e e . . . . . . . . . .
        . . . . . . . e e e 6 6 6 6 6 e e e . . . . . . .
        . . e e e e e e e e e c c c e e e e e e e e e . .
        . . e e e e e e e e e c c c e e e e e e e e e . .
        . . . 6 6 . . 6 6 e 6 6 6 6 6 6 6 6 . . 6 6 . . .
        . . . 6 6 . . 6 6 6 e 6 6 6 6 6 6 6 . . 6 6 . . .
        . . . 6 6 . . 6 6 6 6 e 6 6 6 6 6 6 . . 6 6 . . .
        . . . 6 6 . . 6 6 6 6 6 e 6 6 6 6 6 . . 6 6 . . .
        . . . 6 6 . . 6 6 6 6 6 6 e 6 6 6 6 . . 6 6 . . .
        . . . c c . . 6 6 6 6 6 6 6 e 6 6 6 . . c c . . .
        . . . c c . . c c c c c c c c e c c . . c c . . .
        . . . e e . . c c c c c c c c c e c . . e e . . .
        . . . e e e . e e e e e e e e e e e . e e e . . .
        . . . e e e . b b b b b b b b b b b . e e e . . .
        . . . . . . . b b b b b b b b b b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . . b b . . . . . . .
        . . . . . . . e e . . . . . . . e e . . . . . . .
        . . . . . . . e e . . . . . . . e e . . . . . . .
        . . . . . e e e e . . . . . . . e e e e . . . . .
        . . . . . e e e e . . . . . . . e e e e . . . . .
    `, SpriteKind.Player)
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

    export enum Direction {
        //%block='Left'
        Left = 1,
        //%block='Right',
        Right = 2
    }
    //% blockId=sendHealingBolt block="Send Bolt from Sprite %s towards %d"
    //% weight=100
    //% group="Misc"
    export function sendHealingBolt(s: Sprite,d: Direction) {

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
        let side = d === Direction.Right ? -10 : 10
        healingBolt.setPosition(s.x - side, s.y)
        let vel = d === Direction.Left ? -200 : 200
        healingBolt.setVelocity(vel, 0)
    }

    //% blockId=playSmallHealing block="Play Small Healing on Sprite %s"
    //% weight=100
    //% group="Misc"
    export function playSmallHealingAnimation(s: Sprite) {
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
