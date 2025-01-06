document.addEventListener("DOMContentLoaded", function() {
    const animationDuration = 1000;
    const holdDuration = 1000;
    const fadeOutDuration = 1000; 

    setTimeout(function() {
        const intro = document.getElementById('intro');
        intro.style.opacity = 0;

        setTimeout(function() {
            intro.style.display = 'none';
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            setTimeout(() => mainContent.classList.add('show'), 10);
        }, fadeOutDuration);
    }, animationDuration + holdDuration);
});

// -------------------------------------------------------------------------------------------

function showYouTubeModal(videoId, contentId) {
    const modal = document.getElementById('youtube-modal');
    const iframe = document.getElementById('modal-iframe');
    const modalBody = document.getElementById('youtube-modal-body');

    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    
    // Inserta contenido personalizado basado en el ID
    const content = getContentById(contentId);
    modalBody.innerHTML = content;

    modal.style.display = 'flex';
}

function showCustomModal(contentId) {
    const modal = document.getElementById('custom-modal');
    const modalBody = document.getElementById('custom-modal-body');

    // Inserta el contenido basado en el identificador
    const content = getContentById(contentId);
    modalBody.innerHTML = content;

    // Muestra el modal
    modal.style.display = 'flex';
}

// Función para obtener el contenido personalizado
function getContentById(contentId) {
    switch (contentId) {
        case 'dpa-content':
            return `
                <div class="moddpa">
                    <div class="tdpa">Deteccion de Problemas de Ansiedad</div>
                    <div class="titulo">Herramientas</div>
                    <li class="mitem" style="color: #94a1cd;">Figma</li>
                    <li class="mitem" style="color: #94cdab;">Android Studio</li>
                    <li class="mitem" style="color: #94a1cd;">Canvas</li>
                    <div class="descriptube">En este proyecto colaborativo, diseñé el logotipo en Canvas y las vistas en Figma. Un miembro del equipo programó en Android Studio, y los demas miembros se encargaron de la documentación. El video muestra el diseño en Figma.
                    </div>
                </div>
            `;
        case 'tlakoyalistli-content':
            return `
            <div class="modtlako">
                     <div class="ttlako">Tlakoyalistli</div>
                    <div class="titulo">Herramientas</div>
                    <li class="mitem" style="color: #94a1cd;">Unity</li>
                    <li class="mitem" style="color: #94cdab;">Krita</li>
                    <li class="mitem" style="color: #94a1cd;">Piskel</li>
                    <div class="descriptube">Tlakoyalistli es mi primer videojuego, inspirado en Hollow Knight. Desarrollé dos niveles utilizando Krita para crear los controles, sprites y los fondos, tambien Piskel para animar a los enemigos y al personaje principal. Todo el juego fue realizado en Unity.
                    </div>
            </div>
            `;
            case 'edooca-content':
                return `
                <div class="modedoo">
                    <div class="tedoo">EDooCA</div>
                    <div class="titulo">Herramientas</div>
                    <li class="mitem" style="color: #94a1cd;">Unity</li>
                    <li class="mitem" style="color: #94cdab;">Aseprite</li>
                    <div class="descriptube">EDooCA es un proyecto colaborativo en desarrollo, enfocado al apoyo para la enseñanza del Paradigma Orientado a Objetos. Mi contribución principal ha sido el diseño de todas las interfaces visuales, utilizando Aseprite, mientras que el desarrollo se está realizando en Unity junto con una compañera.
                    </div>
                </div>
            `;
        case 'lpy-content':
            return `
                <div>
                <div class="lpy" style=" cursor: default;">
                    <img src="icopy.png" class="mipy">
                        <div class="tpy">Python</div>
                        <div class="progress-bar">
                        <div class="progress" style="width: 85%;"></div>
                        </div>
                        <span>80%</span>
                        </div>
                        <div class="titucono">Experiencia en Desarrollo</div>
                        <li class="mitem" style="color: #94a1cd;">Procesamiento de Lenguaje Natural (NLTK)</li>
                        <li class="mitem" style="color: #94cdab;">Desarrollo web (Django)</li>
                        <li class="mitem" style="color: #94a1cd;">Data Science (Pandas, NumPy, Matplotlib)</li>
                        <li class="mitem" style="color: #94cdab;">Web Scraping (BeautifulSoup)</li>
                        </div>
                        `;
                        case 'lweb-content':
            return `
                <div>
                <div class="lweb" style=" cursor: default;">
                    <img src="icoHCJ.png" class="miHCJ">
                        <div class="tHCJ">HMTL, CSS, JavaScript</div>
                        <div class="progress-bar">
                        <div class="progress" style="width: 70%;"></div>
                        </div>
                        <span>70%</span>
                        </div>
                        <div class="titucono">Experiencia en Desarrollo</div>
                        <li class="mitem" style="color: #94a1cd;">Desarrollo Frontend (nativo)</li>
                        <li class="mitem" style="color: #94cdab;">Aplicaciones de escritorio con Electrón (Node.js)</li>
                        </div>
                        `;
                        case 'lc-content':
            return `
            <div>
            <div class="lc" style=" cursor: default;">
                <img src="icoc.png"class="mic">
                    <div class="tC">C# (Unity)</div>
                    <div class="progress-bar">
                    <div class="progress" style="width: 70%;"></div>
                    </div>
                    <span>70%</span>
                    </div>
                    <div class="titucono">Experiencia en Desarrollo</div>
                    <li class="mitem" style="color: #94a1cd;">Desarrollo de juegos de plataformas en 2D</li>
                    <li class="mitem" style="color: #94cdab;">Implementación de luces y normal maps para 2D</li>
                    <li class="mitem" style="color: #94a1cd;">Programación de físicas y colisiones</li>
                    <li class="mitem" style="color: #94cdab;">Diseño y programación de interfaces de usuario (UI)</li>
                    <li class="mitem" style="color: #94a1cd;">Creación y manejo de animaciones</li>
                    <li class="mitem" style="color: #94cdab;">Desarrollo de juegos en 3D (nivel básico)</li>
                    </div>
                    `;
                    case 'ljava-content':
            return `
            <div>
            <div class="ljava" style=" cursor: default;">
                <img src="icojava.png" class="mijava">
                    <div class="tJav">Java</div>
                    <div class="progress-bar">
                    <div class="progress" style="width: 80%;"></div>
                    </div>
                    <span>80%</span>
                    </div>
                    <div class="titucono">Experiencia en Desarrollo</div>
                    <li class="mitem" style="color: #94a1cd;">Programación Orientada a Objetos</li>
                    <li class="mitem" style="color: #94cdab;">Desarrollo de aplicaciones de escritorio</li>
                    <li class="mitem" style="color: #94a1cd;">Desarrollo móvil (Android SDK, Kotlin)</li>
                    </div>
                    `;
                    case 'const-content':
                        return `
                     <div>
                    <div class="cursos">
                    <div class="titucono">Cursos</div>
                    </div>
                    <li class="mitem" style="color: #94a1cd;">Accesibilidad básica, programando sistemas inclusivos 2021</li>        
                    <li class="mitem" style="color: #94cdab;">Desarrollo Full Stack 2022</li>
                    </div>
                `;
        default:
            return `<p>Contenido no disponible.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const youtubeModal = document.getElementById('youtube-modal');
    if (youtubeModal) {
        youtubeModal.addEventListener('click', function(event) {
            if (event.target === youtubeModal) {
                youtubeModal.style.display = 'none';
                const iframe = document.getElementById('modal-iframe');
                iframe.src = ''; // Detener el video
            }
        });
    }

    const customModal = document.getElementById('custom-modal');
    if (customModal) {
        customModal.addEventListener('click', function(event) {
            if (event.target === customModal) {
                customModal.style.display = 'none';
            }
        });
    }
});

// ---------------------------------------------------------------------------------
const elemento = document.getElementById('desplazar');

elemento.addEventListener('click', function () {
    this.classList.toggle('mover');

    this.addEventListener('transitionend', () => {
        this.remove();
    }, { once: true });
});

document.addEventListener('keydown', function () {
    elemento.classList.toggle('mover');

    elemento.addEventListener('transitionend', () => {
        elemento.remove();
    }, { once: true });
});
//---------------------------------------------------------------------------------
