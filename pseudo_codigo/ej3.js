// ==========================================
// ESPERAR A QUE CARGUE LA PÁGINA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {


    // ==========================================
    // ELEMENTOS
    // ==========================================

    const selectorIdioma =
        document.getElementById("idioma");

    const botonTema =
        document.getElementById("botonTema");

    const modoClaro =
        document.querySelector(
            'input[value="claro"]'
        );

    const modoOscuro =
        document.querySelector(
            'input[value="oscuro"]'
        );


    // ==========================================
    // TRADUCCIONES
    // ==========================================

    const idiomas = {

        // ======================================
        // ESPAÑOL
        // ======================================

        es: {

            inicio: "Inicio",
            perfil: "Perfil",
            preferencias: "Preferencias",
            contacto: "Contacto",

            idiomas: "Idiomas 🌐",

            etiqueta: "CSS INTERACTIVO",

            aprende: "Aprende",

            pseudo: "con pseudo-clases",

            descripcionInicio:
                "En esta página puedes practicar diferentes pseudo-clases de CSS sin utilizar JavaScript.",

            comenzar:
                "Comenzar práctica",

            miPerfil:
                "Mi perfil",

            estudiante:
                "Estudiante de desarrollo de software.",

            verGithub:
                "Ver GitHub",

            tituloPreferencias:
                "Preferencias",

            descripcionPreferencias:
                "Selecciona las opciones que prefieras.",

            notificaciones:
                "Notificaciones",

            correo:
                "Correo electrónico",

            descripcionCorreo:
                "Recibir información por correo.",

            alertas:
                "Notificaciones",

            descripcionAlertas:
                "Recibir alertas de la aplicación.",

            promociones:
                "Promociones",

            descripcionPromociones:
                "Recibir ofertas y novedades.",

            modoPantalla:
                "Modo de pantalla",

            modoClaro:
                "Modo claro",

            descripcionClaro:
                "Interfaz clara y luminosa.",

            modoOscuro:
                "Modo oscuro",

            descripcionOscuro:
                "Interfaz oscura.",

            activarOscuro:
                "🌙 Activar modo oscuro",

            activarClaro:
                "☀️ Activar modo claro",

            contactoTitulo:
                "Contacto",

            contactoDescripcion:
                "¿Quieres conocer más sobre desarrollo web?",

            correoLink:
                "Correo",

            volver:
                "Volver al inicio"

        },


        // ======================================
        // INGLÉS
        // ======================================

        en: {

            inicio: "Home",
            perfil: "Profile",
            preferencias: "Preferences",
            contacto: "Contact",

            idiomas: "Languages 🌐",

            etiqueta: "INTERACTIVE CSS",

            aprende: "Learn",

            pseudo: "with pseudo-classes",

            descripcionInicio:
                "On this page you can practice different CSS pseudo-classes without using JavaScript.",

            comenzar:
                "Start practice",

            miPerfil:
                "My profile",

            estudiante:
                "Software development student.",

            verGithub:
                "View GitHub",

            tituloPreferencias:
                "Preferences",

            descripcionPreferencias:
                "Select the options you prefer.",

            notificaciones:
                "Notifications",

            correo:
                "Email",

            descripcionCorreo:
                "Receive information by email.",

            alertas:
                "Notifications",

            descripcionAlertas:
                "Receive application alerts.",

            promociones:
                "Promotions",

            descripcionPromociones:
                "Receive offers and news.",

            modoPantalla:
                "Display mode",

            modoClaro:
                "Light mode",

            descripcionClaro:
                "Bright and light interface.",

            modoOscuro:
                "Dark mode",

            descripcionOscuro:
                "Dark interface.",

            activarOscuro:
                "🌙 Activate dark mode",

            activarClaro:
                "☀️ Activate light mode",

            contactoTitulo:
                "Contact",

            contactoDescripcion:
                "Would you like to learn more about web development?",

            correoLink:
                "Email",

            volver:
                "Back to home"

        },


        // ======================================
        // FRANCÉS
        // ======================================

        fr: {

            inicio: "Accueil",
            perfil: "Profil",
            preferencias: "Préférences",
            contacto: "Contact",

            idiomas: "Langues 🌐",

            etiqueta: "CSS INTERACTIF",

            aprende: "Apprenez",

            pseudo: "avec les pseudo-classes",

            descripcionInicio:
                "Sur cette page, vous pouvez pratiquer différentes pseudo-classes CSS sans utiliser JavaScript.",

            comenzar:
                "Commencer la pratique",

            miPerfil:
                "Mon profil",

            estudiante:
                "Étudiant en développement logiciel.",

            verGithub:
                "Voir GitHub",

            tituloPreferencias:
                "Préférences",

            descripcionPreferencias:
                "Sélectionnez les options que vous préférez.",

            notificaciones:
                "Notifications",

            correo:
                "E-mail",

            descripcionCorreo:
                "Recevoir des informations par e-mail.",

            alertas:
                "Notifications",

            descripcionAlertas:
                "Recevoir des alertes de l'application.",

            promociones:
                "Promotions",

            descripcionPromociones:
                "Recevoir des offres et des nouveautés.",

            modoPantalla:
                "Mode d'affichage",

            modoClaro:
                "Mode clair",

            descripcionClaro:
                "Interface claire et lumineuse.",

            modoOscuro:
                "Mode sombre",

            descripcionOscuro:
                "Interface sombre.",

            activarOscuro:
                "🌙 Activer le mode sombre",

            activarClaro:
                "☀️ Activer le mode clair",

            contactoTitulo:
                "Contact",

            contactoDescripcion:
                "Voulez-vous en savoir plus sur le développement web ?",

            correoLink:
                "E-mail",

            volver:
                "Retour à l'accueil"

        },


        // ======================================
        // ÁRABE
        // ======================================

        ar: {

            inicio: "الرئيسية",

            perfil: "الملف الشخصي",

            preferencias: "التفضيلات",

            contacto: "اتصل بنا",

            idiomas: "اللغات 🌐",

            etiqueta: "CSS تفاعلي",

            aprende: "تعلم",

            pseudo: "مع الفئات الزائفة",

            descripcionInicio:
                "في هذه الصفحة يمكنك ممارسة فئات CSS الزائفة المختلفة بدون استخدام JavaScript.",

            comenzar:
                "بدء التدريب",

            miPerfil:
                "ملفي الشخصي",

            estudiante:
                "طالب في تطوير البرمجيات.",

            verGithub:
                "عرض GitHub",

            tituloPreferencias:
                "التفضيلات",

            descripcionPreferencias:
                "حدد الخيارات التي تفضلها.",

            notificaciones:
                "الإشعارات",

            correo:
                "البريد الإلكتروني",

            descripcionCorreo:
                "تلقي المعلومات عبر البريد الإلكتروني.",

            alertas:
                "الإشعارات",

            descripcionAlertas:
                "تلقي تنبيهات التطبيق.",

            promociones:
                "العروض",

            descripcionPromociones:
                "تلقي العروض والأخبار.",

            modoPantalla:
                "وضع الشاشة",

            modoClaro:
                "الوضع الفاتح",

            descripcionClaro:
                "واجهة مشرقة وواضحة.",

            modoOscuro:
                "الوضع الداكن",

            descripcionOscuro:
                "واجهة داكنة.",

            activarOscuro:
                "🌙 تفعيل الوضع الداكن",

            activarClaro:
                "☀️ تفعيل الوضع الفاتح",

            contactoTitulo:
                "اتصل بنا",

            contactoDescripcion:
                "هل تريد معرفة المزيد عن تطوير الويب؟",

            correoLink:
                "البريد الإلكتروني",

            volver:
                "العودة إلى الرئيسية"

        }

    };


    // ==========================================
    // FUNCIÓN PARA CAMBIAR IDIOMA
    // ==========================================

    function cambiarIdioma(idioma) {

        const traducciones = idiomas[idioma];

        // Buscar todos los elementos
        // que tengan data-i18n

        const elementos =
            document.querySelectorAll("[data-i18n]");


        elementos.forEach(elemento => {

            const clave =
                elemento.getAttribute("data-i18n");


            if (traducciones[clave]) {

                elemento.textContent =
                    traducciones[clave];

            }

        });


        // Cambiar dirección para árabe

        if (idioma === "ar") {

            document.documentElement.dir = "rtl";

        } else {

            document.documentElement.dir = "ltr";

        }


        // Actualizar botón dependiendo
        // del modo actual

        actualizarBotonTema(idioma);

    }


    // ==========================================
    // ACTUALIZAR TEXTO DEL BOTÓN
    // ==========================================

    function actualizarBotonTema(idioma) {

        if (
            document.body.classList.contains(
                "modo-oscuro"
            )
        ) {

            botonTema.textContent =
                idiomas[idioma].activarClaro;

        } else {

            botonTema.textContent =
                idiomas[idioma].activarOscuro;

        }

    }


    // ==========================================
    // CAMBIAR IDIOMA
    // ==========================================

    selectorIdioma.addEventListener(
        "change",
        () => {

            cambiarIdioma(
                selectorIdioma.value
            );

        }
    );


    // ==========================================
    // BOTÓN MODO OSCURO / CLARO
    // ==========================================

    botonTema.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "modo-oscuro"
            );


            // Sincronizar radio buttons

            if (
                document.body.classList.contains(
                    "modo-oscuro"
                )
            ) {

                modoOscuro.checked = true;

            } else {

                modoClaro.checked = true;

            }


            // Cambiar texto del botón
            // manteniendo el idioma actual

            actualizarBotonTema(
                selectorIdioma.value
            );

        }
    );


    // ==========================================
    // RADIO MODO CLARO
    // ==========================================

    modoClaro.addEventListener(
        "change",
        () => {

            if (modoClaro.checked) {

                document.body.classList.remove(
                    "modo-oscuro"
                );

                actualizarBotonTema(
                    selectorIdioma.value
                );

            }

        }
    );


    // ==========================================
    // RADIO MODO OSCURO
    // ==========================================

    modoOscuro.addEventListener(
        "change",
        () => {

            if (modoOscuro.checked) {

                document.body.classList.add(
                    "modo-oscuro"
                );

                actualizarBotonTema(
                    selectorIdioma.value
                );

            }

        }
    );


    // ==========================================
    // INICIAR
    // ==========================================

    cambiarIdioma("es");

});