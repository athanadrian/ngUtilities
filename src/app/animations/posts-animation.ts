import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';


export let bounchOutLeftAnimation = animation(
    animate('0.5s ease-in', keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 10,
            transform: 'translateX(-100%)'
        })
    ]))
)

export let slide = trigger('slide', [

    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),
    //use ease-in function for leaving
    transition(':leave', [
        //or
        //animate('0.5s ease-in', style({ transform: 'translateX(-100%' }))
        //or
        //animate('0.5s cubic-bezier(.06,.67,.41,.44)', style({ transform: 'translateX(-100%' }))
        useAnimation(bounchOutLeftAnimation)
    ])
]);


export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fadeOutAnimation = animation([
    transition(':leave', [
        animate(2000)
    ])
])

export let fade = trigger('fade', [

    //state('void', style({ opacity: 0 })),

    //or with two transitions
    // transition('void => *', [
    //   animate(2000)
    // ]),

    // transition('* => void', [
    //   animate(1000)
    // ])

    //or
    // transition('void => *, * => void', [
    //   animate(2000)
    // ])

    //or bidirectional
    // transition('void <=> *', [
    //   animate(2000)
    // ])

    //or with alias
    // transition(':enter, :leave', [
    //     animate(2000)
    // ])
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ])
]);