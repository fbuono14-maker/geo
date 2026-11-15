const map = L.map("map",{scrollWheelZoom:true}).setView([18,5],2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:6,attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
const resources=[
{lat:24.5,lng:45.5,title:"Arabia Saudita",type:"Petróleo",text:"Uno de los principales países productores y con grandes reservas de petróleo."},
{lat:31.5,lng:44,title:"Irak",type:"Petróleo",text:"Importante concentración de yacimientos en Oriente Medio."},
{lat:32,lng:53.7,title:"Irán",type:"Petróleo",text:"Gran productor y exportador de hidrocarburos."},
{lat:8,lng:-66,title:"Venezuela",type:"Petróleo",text:"Posee enormes recursos petroleros, especialmente en la Faja del Orinoco."},
{lat:56,lng:60,title:"Rusia",type:"Petróleo",text:"Amplias reservas y producción de hidrocarburos en Eurasia."},
{lat:55,lng:-110,title:"Canadá",type:"Petróleo + agua",text:"Importantes reservas petroleras y grandes reservas de agua dulce."},
{lat:-3,lng:-60,title:"Amazonia",type:"Agua dulce",text:"La cuenca amazónica concentra una enorme disponibilidad de agua superficial y ecosistemas de gran valor."},
{lat:58,lng:100,title:"Siberia",type:"Agua dulce",text:"Rusia posee grandes lagos, ríos y reservas de agua dulce."},
{lat:39,lng:-100,title:"Estados Unidos",type:"Agua dulce",text:"Cuenta con grandes sistemas fluviales, lagos y acuíferos, aunque su disponibilidad es muy desigual."},
{lat:-25,lng:134,title:"Australia",type:"Agua dulce",text:"Presenta fuertes contrastes entre regiones húmedas y zonas con estrés hídrico."},
{lat:30,lng:90,title:"Asia meridional",type:"Agua dulce",text:"El Himalaya y grandes ríos sostienen a enormes poblaciones, pero existe una presión hídrica importante."}
];
const oilIcon=L.divIcon({className:"resource-marker",html:'<span style="display:block;width:16px;height:16px;background:#e08b42;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px #0006"></span>',iconSize:[16,16],iconAnchor:[8,8]});
const waterIcon=L.divIcon({className:"resource-marker",html:'<span style="display:block;width:16px;height:16px;background:#53c4d4;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px #0006"></span>',iconSize:[16,16],iconAnchor:[8,8]});
resources.forEach(r=>{const icon=r.type.includes("Petróleo")?oilIcon:waterIcon;L.marker([r.lat,r.lng],{icon}).addTo(map).bindPopup('<div class="popup-title">'+r.title+'</div><div class="popup-type">'+r.type+'</div><div>'+r.text+'</div>');});