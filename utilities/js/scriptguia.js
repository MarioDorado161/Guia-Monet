const searchInput = document.getElementById("searchInput");
const docList = document.getElementById("docList");
const sidebar = document.getElementById("sidebar");
const navItems = document.querySelectorAll(".nav-item");



// Estado actual
let currentSection = "general";
let docData = allDocData[currentSection];

// Sidebar dinámico
function createSidebar(data) {
  sidebar.innerHTML = '';
  data.forEach(section => {
    const category = document.createElement("div");
    category.className = "category";
    category.textContent = section.title;

    const ul = document.createElement("ul");
    section.items.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = item.name;
      a.onclick = (e) => {
        e.preventDefault();          // Evita que el link recargue la página
        loadGuidePage(item.file);   // Carga el archivo HTML dinámicamente
      };
      li.appendChild(a);
      ul.appendChild(li);
    });

    category.onclick = () => ul.classList.toggle("visible");

    sidebar.appendChild(category);
    sidebar.appendChild(ul);
  });
}

// Mostrar contenido dinámico
function renderContent(category, title) {
  docList.innerHTML = '';
  const article = document.createElement("div");
  article.className = "article";
  article.innerHTML = `<h2>${title}</h2><p>Contenido de "${title}" en la categoría "${category}".</p>`;
  docList.appendChild(article);
}

// Filtrar en TODAS las secciones
function filterDocs(query) {
  const lowerQuery = query.toLowerCase();

  // Si no hay query, vuelve a la sección actual
  if (query === '') {
    docData = allDocData[currentSection];
    createSidebar(docData);

    return;
  }

  // Recorre TODO el contenido
  const filtered = Object.values(allDocData)
    .flat()
    .map(section => ({
      title: section.title,
      items: section.items.filter(item =>
        item.name.toLowerCase().includes(lowerQuery)
      ),
    }))
    .filter(section => section.items.length > 0);

  // Mostrar sidebar solo con resultados
  createSidebar(filtered);

  // Mostrar resultados
  docList.innerHTML = '';

  filtered.forEach(section => {
    section.items.forEach(item => {
      const article = document.createElement("div");
      article.className = "article";
      article.style.cursor = "pointer";
      article.innerHTML = `<h2>${item.name}</h2><p>Contenido de "${item.name}" en la categoría "${section.title}".</p>`;
    article.onclick = () => {
      switchTab(item.section);
      loadGuidePage(item.file);  // carga la página HTML del tema clicado
    };
      docList.appendChild(article);
    });
  });
}



// Cambiar de sección
function switchTab(tabName) {
  currentSection = tabName;
  docData = allDocData[currentSection];
  createSidebar(docData);

  navItems.forEach(item => item.classList.remove("active"));
  document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add("active");
}

// Eventos
searchInput.addEventListener("input", e => {
  filterDocs(e.target.value);
});

// Inicializar
createSidebar(docData);
docList.innerHTML = `


<div class="banner" style="margin-top: -20px; position: relative;">
  <button class="close-btn" aria-label="Cerrar">&times;</button>
  <div class="banner-text">
    <h1>Descubre todas las novedades</h1>
    <p>Explora guías, configuraciones y tutoriales paso a paso.</p>
    <a href="#" class="signup-button" style="font-weight:700">Sign up now</a>
  </div>
</div>



<div class="iframe-container" style="width: 100%; height: auto; position: relative;">
  <iframe
    id="myIframe"
    src="sources/section1/1.html"
    style="width: 100%; border: 0; display: block; overflow: hidden;"
    scrolling="no"
  ></iframe>
</div>





 












`;

 // CERRAR POPUP
  document.querySelector('.close-btn').addEventListener('click', function() {
    const banner = this.closest('.banner');
    if (banner) {
      banner.style.display = 'none';
    }
  });


 // CARGAR LA DECLARACION EN LA SECCION CONTENT
document.getElementById('loadDeclaracionBtn')?.addEventListener('click', function (e) {
  e.preventDefault();

  fetch('sources/declaracion/declaracion.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar la declaración');
      return response.text();
    })
    .then(html => {
      // Vaciar y reemplazar el contenido principal
      docList.innerHTML = html;

      // Si hay scripts dentro del HTML cargado, ejecutarlos
      const scripts = docList.querySelectorAll('script');
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.text = oldScript.textContent;
        }
        document.body.appendChild(newScript);
        oldScript.remove();
      });

      // Opcional: destacar el botón o cambiar la sección actual
      navItems.forEach(item => item.classList.remove("active"));
    })
    .catch(err => {
      console.error(err);
      docList.innerHTML = `<div class="error">Error al cargar la declaración.</div>`;
    });
});





  // IFRAME RESIZER, ADAPRTA EL CONTENIDO AL ANCHO Y ALTO DE LA PAGINA
  const iframe = document.getElementById('myIframe');

  function resizeIframe() {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      // Obtener el alto total del contenido dentro del iframe
      const contentHeight = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
      // Obtener el ancho total del contenido dentro del iframe
      const contentWidth = iframeDoc.documentElement.scrollWidth || iframeDoc.body.scrollWidth;

      // Ajustar dimensiones del iframe según contenido
      iframe.style.height = contentHeight + 'px';
      iframe.style.width = '100%';  // Siempre 100% para adaptarse al contenedor
    } catch (error) {
      console.warn('No se puede acceder al contenido del iframe (dominio cruzado).');
      // Si no puedes acceder al contenido, asigna una altura fija razonable
      iframe.style.height = '600px';
      iframe.style.width = '100%';
    }
  }

  iframe.addEventListener('load', resizeIframe);
  window.addEventListener('resize', resizeIframe);
// FIN IFRAME RESIZER, ADAPRTA EL CONTENIDO AL ANCHO Y ALTO DE LA PAGINA





 // REDIRECCIONAMIENTO A LAS GUIAS POR NOMBRE DE ARCHIVO 
function loadGuidePage(filename) {
  docList.innerHTML = `

    <style>
    
.layout {
  height: 100vh; /* toda la pantalla */
  display: flex;
}

.sidebar {
  width: auto; /* ejemplo */
}

.content {
  flex: 1;  /* que tome todo el resto */
  display: flex;
  flex-direction: column;
}

#docList {
  flex: 1;
  display: flex;
  flex-direction: column;
}


    
    </style>

    <div class="iframe-container" style="height: 100%; display: flex;">
      <iframe id="myIframe" src="sources/guias/${filename}.html" style="flex: 1; border: 0;" ></iframe>
    </div>
  `;
}