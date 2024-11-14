/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {            
                "btn-bg": '#febf00',             
                "btn-color": '#0A1425',             
                "black": '#181818',             
                "white-gray": '#F7F8F9',             
                "reds": '#BD1F17',             
                "about-btn-color": '#333333',             
                "about-btn-bg-color": '#B52B1D',             
                "food-item-bg-color": '#FBF7F2',             
            },   
            container: {
                center: true 
            },
            fontFamily: {
                "roboto-light": ['Roboto Light'],
                "roboto-regular": ['Roboto Regular'],
                "roboto-medium": ['Roboto Medium'],
                "roboto-bold": ['Roboto Bold'],
                "inter-light": ['Inter Light'],
                "inter-regular": ['Inter Regular'],
                "inter-medium": ['Inter Medium'],
                "inter-bold": ['Inter Bold'],
                "raleway-regular": ['Raleway Regular'],
                "raleway-light": ['Raleway Light'],
                "raleway-medium": ['Raleway Medium'],
                "raleway-bold": ['Raleway Bold'],
                "raleway-extrabold": ['Raleway ExtraBold'],
                "bebas-regular": ['Bebas Regular'],
                "montserrat-regular": ['Montserrat Regular'],
            },
            fontSize:{
                8: "8px",
                15: "15px",
                21: "21px",
                30: "30px",
                40: "40px",
                44: "44px",
                46:  "46px",
                56: "56px",
                62: "62px",
                120: "120px",
            },
            spacing:{
                120:"120px",             
                350:"350px",             
                414:"414px",             
            },
            width:{
                10:'10%',
                75:'75%',
                15:'15%',
                35:'35%',
                39:'39%',
                40:'45%',
                60:'60%',
                65:'65%',
            },
            maxWidth:{
                container:"1320px",
                300: "300px",
                330: "330px",
                624: "624px",
                545: "545px",
                560: "560px",
                960: "850px",
                "23%":"23%",
                "48%":"48%",
            },
            minWidth:{
                 480: "480px",
                 300: "300px",
                 450: "450px",
                 600: "600px",
            },
            backgroundImage: {
                'banner': "var(--banner-image)",
                'book': "var(--book-image)",
            },
        },
    },
    plugins: [],
}
 