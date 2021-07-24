const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors:{
            rm:{
                yellow:{
                    DEFAULT:'#FAFD7CFF',
                    pale:'#FAFD7C99'
                },
                brown:{
                    DEFAULT:'#82491EFF',
                    pale:'#82491E99'
                },
                navy:{
                    DEFAULT:'#24325FFF',
                    pale:'#24325F99'
                },
                bluesky:{
                    DEFAULT:'#B7E4F9FF',
                    pale:'#B7E4F999'
                },
                red:{
                    DEFAULT:'#FB6467FF',
                    pale:'#FB646799'
                },
                green:{
                    DEFAULT:'#526E2DFF',
                    pale:'#526E2D99'
                },
                pink:{
                    DEFAULT:'#E762D7FF',
                    pale:'#E762D799'
                },
                orange:{
                    DEFAULT:'#E89242FF',
                    pale:'#E8924299'
                },
                darkyellow:{
                    DEFAULT:'#FAE48BFF',
                    pale:'#FAE48B99'
                },
                tosca:{
                    DEFAULT:'#A6EEE6FF',
                    pale:'#A6EEE699'
                },
                mud:{
                    DEFAULT:'#917C5DFF',
                    pale:'#917C5D99'
                },
                blue:{
                    DEFAULT:'#69C8ECFF',
                    pale:'#69C8EC99'
                }
            },
            
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}