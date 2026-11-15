# GEO · Recursos estratégicos: Petróleo y Agua

Página web educativa de Geografía sobre **Recursos estratégicos: petróleo y agua**.

## Incluye

- Las **6 preguntas solicitadas** con respuestas completas.
- Planisferio interactivo con referencias de petróleo y agua dulce.
- Comparación entre disponibilidad, renovación y usos.
- Un conflicto relacionado con el petróleo y otro relacionado con el agua.
- Problemas ambientales de la explotación petrolera y medidas responsables.
- Imágenes y fuentes externas.
- Diseño responsive para computadora y celular.
- Sitio estático, sin backend ni API propia.

## Publicación en GitHub Pages

El archivo `index.html` está en la raíz del repositorio y el workflow de `.github/workflows/pages.yml` está preparado para publicar el sitio mediante GitHub Pages.

**Importante:** este repositorio debe ser **público si la cuenta usa GitHub Free**. GitHub Pages permite repositorios privados para planes Pro/Team/Enterprise, pero no para GitHub Free. Una vez que el repositorio sea público, en **Settings → Pages → Build and deployment → Source** se debe seleccionar **GitHub Actions**. Después de eso, el workflow de Pages publicará el sitio.

URL prevista del proyecto:

`https://fbuono14-maker.github.io/geo/`

## Ejecutar localmente

Como es una web estática, también se puede abrir `index.html` directamente o ejecutar:

```bash
python -m http.server 4173
```

Luego abrir `http://localhost:4173`.

## Inspiración

La estructura visual e interactiva toma como referencia ideas de proyectos educativos y de exploración geográfica de código abierto, especialmente World Explorer y Earth Atlas. No se copiaron sus archivos ni su código.

## Fuentes

- https://www.iea.org/
- https://www.unwater.org/
- https://www.worldbank.org/en/topic/water
- https://www.epa.gov/sustainability/lean-water-toolkit-chapter-2
- https://www.eeas.europa.eu/eeas/el-nilo-y-otros-%C3%A1mbitos-geopol%C3%ADtica-del-agua_es

Las imágenes externas se cargan desde sus respectivas fuentes. Si se redistribuye el proyecto, conviene revisar las condiciones de uso de cada recurso visual.
