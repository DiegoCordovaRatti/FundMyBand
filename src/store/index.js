import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    signedIn: false,
    usersData: null,
    currentUserData: null,
    currentUserID: null,
    bandas:[
      {
        title: 'CorVje',
        index: 0,
        view: 'corvje',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://pbs.twimg.com/profile_banners/3126603132/1567571070/1500x500',
        bannerSrc: 'https://rocklegacy.cl/wp-content/uploads/2021/06/unnamed1.jpg',
        text: 'Somos una banda de Chile, intentamos subirnos el animo con nuestras canciones ojalá podamos con el tuyo.',
        description: 'Todo comenzó en 2015, cuando CORVJE estrenó su primer EP, Alzar el Vuelo, desde ese punto el trabajo de la banda chilena no se ha detenido por nada, trabajos como alzar el vuelo permitieron a la banda abrir shows para bandas como The Wonder Years , Chunk! No, Captain Chunk! y Our Last Night. En el 2017 estrenan Sima, y Cima las dos partes de un álbum doble que le darían nuevas fronteras a CORVJE, permitiéndoles salir de Chile, como Perú y una gira en México para finalizar el 2019 teloneando a Real Friends. Hoy en día la banda cuenta con múltiples, shows a lo largo de Chile y fuera de este, una gran lista de videoclips y se encuentra trabajando su próximo trabajo.',
        spotifyUrl:"https://open.spotify.com/embed/album/2nkcvyFsY8IseZyUAZZIil?utm_source=generator&theme=0",
        bandMembers:[
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/70951428_10157468980234242_6998512049051402240_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEyUxjc0gVxGVmnM_KOiq-MjJ2-HuUjxteMnb4e5SPG10aATpWD6JtSMux1f4mlUuY&_nc_ohc=VP2Y2U-vnzMAX8TBNYC&_nc_ht=scontent-scl2-1.xx&oh=00_AT8xHBzUZehlYTQLoF74pKtLpO6IFq8pHFnnDDL_5BAcgg&oe=627807BC',
            name: 'Pepe Von Marttens',
            role: 'Guittarra y voz',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/svonmarttens',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/pepevonm/',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/14657521_924642154332374_4682126381483902772_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEiCYkhsWYanenA4H1oCBNfMD1SxxwySCIwPVLHHDJIIiijO1pjoT-oJyoswLPCWsc&_nc_ohc=H6yL0PKm_VMAX-3tPAm&_nc_ht=scontent-scl2-1.xx&oh=00_AT9VhbzfZAmCTtFk4qgiCBr34byL-zGo2ks2rKITuN4DqA&oe=6276A203',
            name: 'Tito Villarroel',
            role: 'Batería',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/AlbertoVillarroel.V',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/titovillarroel_',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/25550154_10213108938132380_7097568117492778462_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH79-dcU-UVefiuY32WIm095FnfXsYI9JTkWd9exgj0lCwTiS6cR7YA9uNmTGIPWX8&_nc_ohc=evHFmXkLHXkAX_VCHLL&_nc_ht=scontent-scl2-1.xx&oh=00_AT-wrOtOlUGwjrjQLt8NYKiJy8DC5TazkszoRLStZO4tuQ&oe=6277F7F5',
            name: 'Felipe Lorca Bocchieri',
            role: 'Bajo y voz',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/felipe.lorcabocchieri',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/felipelorcabcch/',
                color: 'purple',
              },
            ]
          },
        ],
      },
      {
        title: 'Peor es Nada',
        index: 1,
        view: 'peor_es_nada',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://scontent-scl2-1.xx.fbcdn.net/v/t31.18172-8/15800033_10154893306144583_6095294185487889541_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFdMTOR9QR2UWMLYl9r85yIDtpRNZC33hUO2lE1kLfeFYrE5HZRPqBv3W9dlSfugGs&_nc_ohc=aSpL84_J5UAAX9E6k1A&_nc_ht=scontent-scl2-1.xx&oh=00_AT-2PaIBfJBej7r6Ds8BdWEMA-3j572BYINy0pt-Cf-2iA&oe=62724046',
        bannerSrc: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/122090749_183815776639098_336435718893168364_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH5EMb94RE-XUXk2ejGXVZP7KRTqSqRisTspFOpKpGKxHQpjhWPKf5pqj9uSjtIM_g&_nc_ohc=RFJjul4VZNAAX8JGmBi&_nc_ht=scontent-scl2-1.xx&oh=00_AT_NrKhyAlRIaqMaOZNX19X1sNLtIFUeknOvoBjRK0eJsg&oe=627757D4',
        text: 'Banda chilena mítica y mística. Escúchanos en Spotify.',
        description: 'PEN ha abierto shows para bandas como MxPx, The Ataris, Paramore, entre otras y se destaca al liderar el movimiento independiente de los 2000s y por ser unas de las bandas que ha mantenido vigente el punk melódico en Sudamerica hasta el día de hoy. En 2011 la banda libera el "FRASES CELEBRES", un salto a la exploración melódica/pop y marca un cambio en el estilo de la banda, incluyendo el ingreso de Benjamín Fernandez como Bajista. En 2012 la banda decide dar una pausa a PEOR ES NADA y se radica en México. En 2014 la banda regresa a Chile después de terminar el trabajo con otros proyectos musicales en México y deciden retomar Peor es Nada. Este regreso es marcado con un disco en honor a los estilos que marcaron los inicios de la banda, llamado "Cerdos Intergalácticos", lanzado el año 2015.',
        spotifyUrl:"https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0uwcgg?utm_source=generator&theme=0",
        bandMembers:[
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/267265273_437947597892580_6326862844510232699_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHhdPBGfn13xa9XEb2xlV29GWJ2nDuksJ8ZYnacO6Swn-S2r4HfpRMgq3GpvJI5Egg&_nc_ohc=pUDTiur_qW8AX8IVJfE&_nc_ht=scontent-scl2-1.xx&oh=00_AT8y-nCaXcIer1wyrg0E_4wj0j65oUbFSM9rsO9Ak30bOA&oe=62570829',
            name: 'Juan Andrés Cabrera',
            role: 'Voz y guitarra',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/juanandroide',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/juanandrescl/',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/267477697_437947594559247_6535299271459415705_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEJu2zzt3GYLWnY65mwJFqr6FC5SUQyFwHoULlJRDIXAbM-7czt9Il2K19nrTNf0hk&_nc_ohc=r-Egkw32CjUAX9_EeUm&_nc_ht=scontent-scl2-1.xx&oh=00_AT-sZOQHfdYN-olBhxwDhIHUluEjB601kgmib-qCekwVmg&oe=62579814',
            name: 'Felipe Amigo',
            role: 'Guitarra',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/profile.php?id=641257608',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/d1g1t4l.b0y/',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/265979503_437947587892581_4366877693794313295_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEaJ8_8B81pXVRF3JBv9y7QbNlHRDXSY5ds2UdENdJjl4F7NBck2ru7uN897mJFj50&_nc_ohc=rEXjtTsUXdYAX9obuuD&tn=jeNHjZ8h0jEjFOzI&_nc_ht=scontent-scl2-1.xx&oh=00_AT8fy5uwiKX5U1gb_PXoYGI6WgF_4M59IxcN6VZQV8-I2g&oe=6256F103',
            name: 'Sebastián Solar',
            role: 'Batería',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/Seba.Solar',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/elsebasolar/',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/267589997_437947591225914_4551313098341181886_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEFyHm-_Z-oQnQKNWrqZ-fpUOyWmD5OKH1Q7JaYPk4ofVLoY1T-uch5345iRQNy0H4&_nc_ohc=9xBv8yOhLRIAX9REBI4&_nc_oc=AQkyeXTI5GuEeqOf4CLOSuhacVfYzjZClVn7HIb0lbzzpNRNTVq0LGzF6YPc6HYWy0gvLx_nJLXXKGxU4soGFUrk&tn=jeNHjZ8h0jEjFOzI&_nc_ht=scontent-scl2-1.xx&oh=00_AT8buJdDu3e9c2uP2X2PHXo9chKIc_qqciNMONKEfgCjpQ&oe=6256E2D5',
            name: 'Matías Zamorano',
            role: 'Bajo',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'https://www.facebook.com/matias.zamorano.58',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/matiaszc/',
                color: 'purple',
              },
            ]
          },
        ],
      },
      {
        title: 'Sin Instrumento Alguno',
        index: 2,
        view: 'sin_instrumento_alguno',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/94568073_10158229501303428_1300078281147547648_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHOWt0KLvauebNB0gJ_lqvSYl6p_J8z_rZiXqn8nzP-tlVuhOUn0UBKwVhY2BH7eZg&_nc_ohc=fRicI1fOOWQAX9s2zWm&_nc_ht=scontent-scl2-1.xx&oh=00_AT99qSS8z92w5hmPKmb4gqI1AwCCL6m03LCXXpGBhVzhEA&oe=6272B991',
        bannerSrc: 'https://i.ytimg.com/vi/bgdTv8pvtCM/maxresdefault.jpg',
        text: 'Sin Instrumento Alguno (S.I.A. para los amig@s). Banda con cinco discos',
        description: 'Banda Chilena. Cinco discos editados. Nuevo disco "Lados B" disponible el 16 de julio.',
        spotifyUrl:"https://open.spotify.com/embed/album/5E0TzwDbKufKOWjZFOFgIX?utm_source=generator&theme=0",
        bandMembers:[
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/1931188_45077928427_9958_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGnuekHvzsuzvg-BTJTRPtAkWAueyu4xbiRYC57K7jFuKh8gXxGq6ZA5NbBH3S7WtA&_nc_ohc=DM55VdsF6MMAX-RFRJ5&tn=jeNHjZ8h0jEjFOzI&_nc_ht=scontent-scl2-1.xx&oh=00_AT8jJZktLdaVWbzEPYXMfPmRtq5EiHRZCpI85u6auup94w&oe=627787EA',
            name: 'Roberto Pop Balmaceda',
            role: 'Voz',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/1931188_45077923427_9733_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHl22YD2TZx_Ylb7Rxe6_NmLLZ2uyOk7o0stna7I6Tujdas0LF7pqCQ8-TWnhlDgPw&_nc_ohc=iR6uWORLQ_oAX8EUl7L&_nc_ht=scontent-scl2-1.xx&oh=00_AT9W5vsORdhcOrh71GEhpc5eFNqj0K4eWMas_gUDLgOUrQ&oe=6276C879',
            name: 'Eduardo Lalos Salazar',
            role: 'Guitarra',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/1931188_45077918427_9523_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHaNFuvnO_XPLIG6oimfIi00e_gDbxiPLbR7-ANvGI8trDvDvI1PWj28NpqwM8Fwt0&_nc_ohc=MkzUEBQyWisAX-PuBND&tn=jeNHjZ8h0jEjFOzI&_nc_ht=scontent-scl2-1.xx&oh=00_AT_V7xW63k1Q8BrUZlQQLsWPbR09ZZmIs7dk1PY9UHB-rw&oe=62795B6D',
            name: 'Dubal Larraín',
            role: 'Bajo y coros',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/1931188_45077913427_9327_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeH3mc8WLYu6iwWrsb-oy-sNYhnQ8VVD4StiGdDxVUPhK6SIAhtIn-FohKnDEIf7P0o&_nc_ohc=xfZ0yU_q95gAX_TqWs-&_nc_ht=scontent-scl2-1.xx&oh=00_AT_Ay_joUk_3T0a6zfmcf_bvkB7pVuZ5NIBjXAU_wlEJgA&oe=6276BD8C',
            name: 'Daniel Dani Astudillo',
            role: 'Batería, trompeta y coros',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
        ],
      },
      {
        title: 'Niños Del Cerro',
        index: 3,
        view: 'niños-del-cerro',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://radio.uchile.cl/wp-content/uploads/2020/03/ndc.jpg',
        bannerSrc: 'https://www.cultura.gob.cl/wp-content/uploads/2018/08/ninos-del-cerro-verano-fotos-x-milabelen-5.jpg',
        text: 'En 2016, Niños del Cerro recibieron el reconocimiento como Artista Revelación en la ceremonia de los Premios Pulsar',
        description: 'Considerados puntas de lanza de la nueva generación que vino a devolver el protagonismo a las guitarras dentro de la música chilena, Niños del Cerro se convirtió rápidamente en un nombre reconocible dentro de la activa escena independiente de su país.',
        spotifyUrl:'https://open.spotify.com/embed/album/5RCDf0SXVDDFh05ENL68JU?utm_source=generator&theme=0',
        bandMembers:[
          {
            photo: 'https://indiehoy.com/wp-content/uploads/2019/10/simon-campusano.jpg',
            name: 'Simón Campusano',
            role: 'guitarra y voz',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/elsim4o/',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Ignacio Castillo',
            role: 'guitarra',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'José Mazurett',
            role: 'batería',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Felipe Villarubia',
            role: 'bajo',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Diego Antiman',
            role: 'teclados',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
        ],
      },
      {
        title: 'Ágata Prisma',
        index: 4,
        view: 'agata-prisma',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://www.inmortal.cl/site/wp-content/uploads/2022/02/unnamed7-1.jpg',
        bannerSrc: 'https://1.bp.blogspot.com/-bdf09frcih4/YaV2ZRRjERI/AAAAAAAAHxc/-s-qkCycoD4Ryt2sLp_KVC_J3IxtE73LACNcBGAsYHQ/s1824/agata-prisma-olvidarte-es-un-arte.webp',
        text: 'Ágata Prisma is the musical project of Daniela Guzmán Bertini, a Chilean artist',
        description: 'In Ágata Prisma, Daniela Guzmán investigates various genres, through the intuitive sound of musical instruments and lyrics ranging from cats to tarot. Among her influences are trip hop, electronic, electropop, dream pop, indie, bossa nova and funk.',
        spotifyUrl:'https://open.spotify.com/embed/album/3XWcjhCcNd4zVeKCL6MwNm?utm_source=generator&theme=0',
        bandMembers:[
          {
            photo: 'https://d1fdloi71mui9q.cloudfront.net/FXWJvuhuSpGPnnOyNPRB_3059Tsyod2PMgraD',
            name: 'Daniela Guzmán Bertini',
            role: 'Voz',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
        ],
      },
      {
        title: 'Yorka',
        index: 5,
        view: 'yorka',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://www.latercera.com/resizer/kTASBtaiT-BARPuImro4nDePzo0=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/37W56EU54NBONA3QTPRUU7HVPM.jpeg',
        bannerSrc: 'https://www.yorka.cl/wp-content/uploads/2020/03/Yorkanov18.jpg',
        text: 'Yorka es un dúo de pop chileno conformado por las hermanas Yorka y Daniela Pastenes, quiénes han logrado un espacio en la escena independiente chilena con tres discos editados',
        description: 'Un pop orgánico basado en el formato banda que destaca por guitarras y la mezcla de voces que hacen de sus canciones un pop meloso y sincero. Compartiendo escenario con Francisca Valenzuela, Alex Anwandter, Camila Moreno, Anita Tijoux, Pedropiedra, entre otros.',
        spotifyUrl:'https://open.spotify.com/embed/album/2aVf2kvguncX8TGNEIIwxB?utm_source=generator&theme=0',
        bandMembers:[
          {
            photo: '',
            name: 'Yorka Pastenes',
            role: 'Composición, guitarra y voz ',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Daniela Pastenes',
            role: 'Percusiones, ukelele y voz',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Pablo Jara',
            role: 'Guitarra',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Pancho Ugarte',
            role: 'Bajo',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Matías Petersen',
            role: 'batería ',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
        ],
      },
      {
        title: 'Nicole Bunout',
        index: 6,
        view: 'nicole-bunout',
        likedBand: false,
        dialog: false,
        valid: true,
        checkbox: false,
        imgSrc: 'https://gam.cl/media/photologue/photos/_MG_9948.jpg.1200x900_q85.jpg',
        bannerSrc: 'https://coolmusicchile.cl/wp-content/uploads/2019/04/Nicole-Bunout1.jpg',
        text: 'Nicole Bunout es una de la voces más finas de la escena musical chilena. ',
        description: 'Su mezcla de exquisita técnica, dulzura y poesía, generan una alquimia que hacen sentir al jazz y la música popular como un solo elemento en el que las fronteras se derriten ante el bálsamo de su voz. Nicole es un cántaro que se rebalsa, es un derrame de emociones en el que difícilmente se logra salir intacto. Ha realizado múltiples colaboraciones con diversos artistas, tanto en el mundo del jazz como en la música popular. Entre ellos se encuentran: Isabel Parra, Nano Stern, Orquesta del Viento, Daniel Lencina (cantante y trompetista), Christian Gálvez (bajista), Mauricio Rodríguez (guitarrista de La Marraqueta), Federico Dannemann (ex guitarrista de Pedro Aznar y La Rue Morgue), Banda Cultrera, Espinoza & Compañía, entre otros.',
        spotifyUrl:'https://open.spotify.com/embed/album/76XYjBKZrBuAj50Vyxpiur?utm_source=generator&theme=0',
        bandMembers:[
          {
            photo: 'https://gam.cl/media/photologue/photos/foto_nicole.JPG.1200x900_q85.jpg',
            name: 'Nicole Bunout ',
            role: 'Voz Guitarra',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Fernando Rain ',
            role: '',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'https://www.instagram.com/nicolebunout',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Sebastián González ',
            role: '',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
          {
            photo: '',
            name: 'Ramiro Durán',
            role: '',
            socialMedia:[
              {
                icon:'mdi-facebook',
                link:'#',
                color: 'blue',
              },
              {
                icon:'mdi-instagram',
                link:'#',
                color: 'purple',
              },
            ]
          },
        ],
      },
    ]
  },
  mutations: {
    MODIFY_BAND(state, payload){
      let originalBand = state.bandas
      originalBand.title = payload.title
      originalBand.imgSrc = payload.imgSrc
      originalBand.bannerSrc = payload.bannerSrc
      originalBand.text = payload.text
      originalBand.description = payload.description
      originalBand.spotifyUrl = payload.spotifyUrl
    },
    SIGNED_IN(state, payload){
      state.signedIn = payload.signedIn
      state.currentUserID = payload.currentUserID
      state.currentUserData = payload.currentUserData
      state.usersData = payload.usersData
    },
    SIGN_OUT(state, payload){
      state.signedIn = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
