Vue.config.devtools = true;
dayjs.extend(window.dayjs_plugin_localizedFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);

    const vueApp = new Vue({
        el: "#app",
        data: {
            listaChat: [
                {
                  nome: "Michele",
                  avatar: "avatar_1",
                  visibile: true,
                  messaggi: [
                    {
                      data: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "sent",
                    },
                    {
                      data: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sent",
                    },
                    {
                      data: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received",
                    },
                  ],
                },
                {
                  nome: "Fabio",
                  avatar: "avatar_2",
                  visibile: true,
                  messaggi: [
                    {
                      data: "20/03/2020 16:30:00",
                      text: "Ciao come stai?",
                      status: "sent",
                    },
                    {
                      data: "20/03/2020 16:30:55",
                      text: "Bene grazie! Stasera ci vediamo?",
                      status: "received",
                    },
                    {
                      data: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sent",
                    },
                  ],
                },
          
                {
                  nome: "Samuele",
                  avatar: "avatar_3",
                  visibile: true,
                  messaggi: [
                    {
                      data: "28/03/2020 10:10:40",
                      text: "La Marianna va in campagna",
                      status: "received",
                    },
                    {
                      data: "28/03/2020 10:20:10",
                      text: "Sicuro di non aver sbagliato chat?",
                      status: "sent",
                    },
                    {
                      data: "28/03/2020 16:15:22",
                      text: "Ah scusa!",
                      status: "received",
                    },
                  ],
                },
                {
                  nome: "Luisa",
                  avatar: "avatar_4",
                  visibile: true,
                  messaggi: [
                    {
                      data: "10/01/2020 15:30:55",
                      text: "Lo sai che ha aperto una nuova pizzeria?",
                      status: "sent",
                    },
                    {
                      data: "10/01/2020 15:50:00",
                      text: "Si, ma preferirei andare al cinema",
                      status: "received",
                    },
                  ],
                },
              ],
              chatAttive: {},
              nuoviMessaggi: "",
              filtro: "",
            },
            methods: {
                nuovoImgPath(avatar) {
                    return `../img/${avatar}.jpg`;
                },
                ultimoMessaggio(messaggi) {
                    if (messaggi.length === 0) {
                    return "";
                    }
            
                    const messaggio = messaggi[messaggi.length - 1].text;
            
                    return messaggio;
                },
            
                chatClick(chatDaAttivare) {
                    this.chatAttive = chatDaAttivare;
                },
            
                
                chatFiltrate() {
                    if (!this.filtro) {
                        return this.listaChat;
                    }
                    
                    return this.listaChat.filter((contact) => {
                        return contact.nome.toLowerCase().includes(this.filtro.toLowerCase().trim());
                    });
                },
                
                aggiungiMessaggio(testoMessaggio, stato) {
                    this.chatAttive.messaggi.push({
                        text: testoMessaggio,
                        data: dayjs().from(dayjs()),
                        status: stato
                    });
                },
                
                submitClick() {
                    this.aggiungiMessaggio(this.nuoviMessaggi, "sent");
            
                    this.nuoviMessaggi = "";
            
                    setTimeout(() => {
                    this.aggiungiMessaggio("ok", "received");
                    }, 1000);
                },

                created() {
                  this.chatAttive = this.listaChat[0];
                }
            }

    })