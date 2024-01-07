/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        color1:'#585858',
        color2:'#393939',
      },
      backgroundImage: {
       'back':"linear-gradient(to top left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0)),url(https://i.ibb.co/QdfdhYN/bg.jpg)",
       'down':"url(https://i.ibb.co/7nxW4MN/down.jpg)",
       'deg':"linear-gradient(to top , rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0)),url(https://i.ibb.co/7nxW4MN/down.jpg)",
       'insta':"url(https://i.ibb.co/pRKBNs9/insta.png)",
       'degins':"linear-gradient(to top , rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0)),url(https://i.ibb.co/pRKBNs9/insta.png)",

      },
    },
  },
  plugins: [],
}
