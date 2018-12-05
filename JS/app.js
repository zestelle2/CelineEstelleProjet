var allSection = new Vue ({
    el:'#app',
    data: {
        legende:false,
        pure: false,
        priceVersion: 0,
        priceTotal: 0,
        priceTotalDisplay: 0,
        message:"",

        /* Section Couleur */
        priceColor: 0,
        black: false,
        white: false,
        blue: false,
        pictureBlackPure : ["./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg"
                            ],
        pictureBluePure : ["../AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg"
                            ],
        pictureWhitePure: ["../AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
                            "./AlpineCars_app-images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg"
                            ],

        pictureBlackLegende :["./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg"
                            ],
        pictureBlueLegende :["./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg"
                            ],
        pictureWhiteLegende: ["./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",        
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
                            "./AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg"
                        ],
        pictureCarouselColor: ["../AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",        
                            ".././AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
                            ".././AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
                            ".././AlpineCars_app-images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg"
                            ],
        
        /* choix des jantes */
        priceRims: 0,
        standartRims : false,
        seracRims:false,
        legendeRims: false,
        seeRimsPicture : ["./AlpineCars_app-images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg",
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg",
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg",

                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg",
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg",
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg",
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg",
                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg",

                        "./AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                    ],
    },
    methods: {
        /* Choix de version */
        buttonVersionLegende: function() {
           
            this.pure =false;
            this.legende = true;
            this.priceVersion= 58500;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                
        },
        buttonVersionPure: function() {
            this.legende = false;
            this.pure = true;
            this.priceVersion= 54700;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            
        },
        choiceColorBlack: function (){
            this.black = true;
            this.white = false;
            this.blue = false;
            this.priceColor= 840;

            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 

            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            if(this.legende) {
                this.pictureCarouselColor= this.pictureBlackLegende;
            }
            else{
                this.pictureCarouselColor= this.pictureBlackPure;
            }
            this.pictureCarouselColor;
        },
        choiceColorBlue: function (){
            /* choix des couleur */
            
            this.black = false;
            this.white = false;
            this.blue = true;

            /* le Prix */
            this.priceColor= 1800;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            /* selon la version */
            if(this.legende) {
                this.pictureCarouselColor= this.pictureBlueLegende;
            }
            else{
                this.pictureCarouselColor= this.pictureBluePure;
            }
            this.pictureCarouselColor;
        },
        choiceColorWhite: function (){
            this.black = false;
            this.white = true;
            this.blue = false;
          
            /* le Prix */
            this.priceRims = 1000;
            this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 
            let val = (this.priceTotal/1).toFixed().replace('" "', ',')
            this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            if(this.legende) {
                this.pictureCarouselColor= this.pictureWhiteLegende;
            }else{
                this.pictureCarouselColor= this.pictureWhitePure;
            }
            this.pictureCarouselColor;
        },
        choiceRimsSerac: function () {
            this.message = "SERAC";
            this.standartRims = false;
            this.seracRims =true;
            this.legendeRims = false;

            if(this.seeRimsPicture.length == 10) 
            {
                let seeRimsPictureDisplay  = this.seeRimsPicture.splice(9, 1);
            }

             /* le Prix */
             this.priceRims = 1000;
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 
             let val = (this.priceTotal/1).toFixed().replace('" "', ',')
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             /* selon la couleur */
                if( this.black){
                    
                    let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[6]);
                }
                    
                else if (this.blue) {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[0]);
                }
                else if (this.white ){
                    let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[3]);
                }
                else {
                    let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[3]);
                }
              
            
            },
        choiceRimsLegende: function () {
            this.message = "LEGENDE";
            this.standartRims = false;
            this.seracRims =false;
            this.legendeRims = true;

            if(this.seeRimsPicture.length == 10) 
            {
                let seeRimsPictureDisplay  = this.seeRimsPicture.splice(9, 1);
            }

             /* le Prix */
             this.priceRims = 0;
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 
             let val = (this.priceTotal/1).toFixed().replace('" "', ',')
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             /* selon la couleur */
             if( this.black){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[7]);
            }
                
            else if (this.blue) {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[1]);
            }
            else if (this.white ){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[4]);
            }
            else {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[4]);
            }
        },
        choiceRimsStandard: function () {
            this.message = "STANDARD";
            this.standartRims = true;
            this.seracRims =false;
            this.legendeRims = false;

            if(this.seeRimsPicture.length == 10) 
            {
                let seeRimsPictureDisplay  = this.seeRimsPicture.splice(9, 1);
            }

             /* le Prix */
             this.priceRims = 0;
             this.priceTotal = this.priceColor + this.priceVersion + this.priceRims; 
             let val = (this.priceTotal/1).toFixed().replace('" "', ',')
             this.priceTotalDisplay= val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

             /* selon la couleur */
             if( this.black){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[8]);
            }
                
            else if (this.blue) {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[2]);
            }
            else if (this.white ){
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[5]);
            }
            else {
                let seeRimsPictureDisplay = this.seeRimsPicture.push(this.seeRimsPicture[5]);
            }

            /* TO DO : LE CHOIX  DE JANTE LEGENDE SEULEMENT SI ON A */
        },
        
    },

})