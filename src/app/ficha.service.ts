import { Injectable } from '@angular/core';

@Injectable()
export class FichaService {
  
  private ficha_tecnica:Ficha[] = [
   
    { 
      id:1,
      nombre:'Abamix Impermeable', 
      descrip:' Es una mezcla Adhesiva Cementicia, compuesta por Cemento Portland Gris y áridos granulométricamente controlados.',
      preparacion:'Verifique que el sustrato se encuentre firme, seco y libre de grasas, aceites o todo compuesto que pueda perjudicar su adhesividad. - Verificar la planeidad del soporte, la desviación debe ser menor a 5 mm, controlada con regla metílica de 2 m de largo. - Coloque 1 (una) parte de agua limpia en (4) cuatro partes de Adhesivo IMPERBAX verificando que no se formen grumos. - La mezcla puede ser preparada de forma mecánica con batidor eléctrico o en forma manual con cuchara de albañilería hasta obtener una mezcla homogénea. - Sobre soportes muy absorbentes, humedecer antes de aplicar el adhesivo esto le permite mejorar el tiempo abierto y el tiempo de corrección. - Una vez humedecido el sustrato sin charcos ni brillo acuoso, aplique una capa fina del adhesivo con la parte plana de la llana y posteriormente coloque el adhesivo con la parte dentada de la llana correspondiente. - Extender el adhesivo sobre soporte en forma moderada, en paños de 1m2. - Ajustar las piezas suavemente con golpe de puño o taco de madera.',
      aplicacion:'',
      proceso:'Extender malla de fibra de vidrio de (90 grs.) sobre todo el soporte y adherirla con membrana cementícia, la cual debe tener la consistencia apropiada para poder ser expandida fácilmente con llana lisa.',
      durabilidad:'90 minutos a 20 °C',
      tiempo_secado:'60 min. por mano.',
      presentacion:'Bolsa de 10 Kg.',
      rendimiento:'',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'',
      color:'',
      consumo:'',
      vida:'',
      recomendacion:''
    },
    { 
      id:2,
      nombre:'Abamix Premium', 
      descrip:' Es una mezcla Adhesiva Cementícia de mediana y baja absorción, compuesta por Cemento Portland Gris y áridos granulométricamente controlados;  especialmente desarrollada para pegado de piezas: Granito natural, porcelanatos, compactos y cerámica convencional.',
      preparacion:'- Verifique que el sustrato se encuentre firme, seco y libre de grasas, aceites o todo compuesto que pueda perjudicar su adhesividad. - Verifique la planeidad del soporte, la desviación debe ser menor a 5 mm, controlada con regla metálica de 2m de largo. - Coloque 1 (una) parte del agua limpia en 4 (cuatro) partes del adhesivo, verificando que no se formen grumos. - La mezcla puede ser preparada de forma mecánica con batidor eléctrico o en forma manual con cuchara de albañilería hasta obtener una mezcla homogénea. - Extender el adhesivo sobre soporte en forma moderada, en paños de 1m2. - Ajustar la pieza suavemente con golpe de puño o taco de madera. ',
      aplicacion:'',
      proceso:'',
      durabilidad:'',
      tiempo_secado:'',
      presentacion:'Bolsa 30kg.',
      rendimiento:'-Piezas de 20 cm x 20 cm con llana peine de 8mm x 8 mm Rinde 4/5 Kg m2. -Piezas de 30 cm x 30 cm con llana de 10mm x 10mm Rinde 5/6 Kg m2. -Piezas mayores 30 cm x 30 cm con llana de 12mm x 12 mm Rinde 6/7 Kg m2. ',
      tiempo_abierto:'20 minutos a 20º C',
      tiempo_correccion:'60 minutos',
      trabajabilidad:'',
      color:'',
      consumo:'',
      vida:'',
      recomendacion:''
    },
    { 
      id:3,
      nombre:'Membrana Cementícia', 
      descrip:'Es una membrana cementícia flexible mono-componente que permite sellar de manera simple, estructuras de hormigón y mamposterías. Apto para impermeabilizar soportes porosos con daños superficiales, grietas, fisuras moderadas y revestimientos aislantes. Puede ser utilizado en ambientes internos y externos. ',
      preparacion:'Como mortero para llenado Coloque en un balde de albañil, dos litros y medio (2,5 L) de agua. Posteriormente, agregue los 10 kg. de membrana cementícia al agua en forma pausada, e ir mezclando de forma enérgica utilizando la cuchara de albañil, verificando que no se formen grumos. Como membrana cementícia: Coloque en un balde de 20 L., seis litros y medio (6,5 L) de agua. Posteriormente, agregue los 10 kg de membrana cementícia al agua en forma pausada e ir mezclando de forma mecánica, utilizando taladro y mezclador, verificando que no se formen grumos. ',
      aplicacion:'',
      proceso:'Extender malla de fibra de vidrio de (90 grs) sobre todo el soporte y adherirla con membrana cementícia, la cual debe tener la consistencia apropiada para poder ser expandida fácilmente con llana lisa.',
      durabilidad:'90 minutos a 20 °C',
      tiempo_secado:'60 min. por mano.',
      presentacion:'Bolsa de 10 Kg.',
      rendimiento:'',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'',
      color:'',
      consumo:'',
      vida:'',
      recomendacion:''
    },
    { 
      id:4,
      nombre:'Abaplak Multifunción', 
      descrip:' Ablapak multifunción en polvo es un material bi-funcional de secado rápido para ser utilizado en obra. Con sólo agregar agua, puede ser utilizado como pasta de agarre o masilla para tratamiento de juntas. ',
      preparacion:'Utilizar recipiente limpio, agregar 1 parte agua para 2 partes del producto en polvo; agregar el polvo en forma de lluvia, y dejar reposar 3 minutos. Una vez hidratado el polvo, mezclar en forma manual o mecánica, logrando una pasta homogénea y firme para evitar el corrimiento de la mezcla, colocándola sobre una superficie vertical.',
      aplicacion:'',
      proceso:'',
      durabilidad:'60/90 minutos.',
      tiempo_secado:'3 horas.',
      presentacion:'',
      rendimiento:'',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'',
      color:'',
      consumo:'',
      vida:'',
      recomendacion:''

    },
    { 
      id:5,
      nombre:'Revoque fino al Yeso', 
      descrip:' Revoque fino base yeso para interiores con terminación lisa para ser aplicado de manera manual, logrando terminaciones espejadas, uniformes y con gran resistencia mecánica. El revoque fino al yeso tiene mayor rendimiento que los revoques convencionales a la cal y dispone de muy buen tiempo de fragüe, lo que permite mayor tiempo de trabajabilidad, y realizar un mejor acabado de la superficie o malla y base niveladora de revestimiento final. Este producto, además, tiene la ventaja de reemplazar al revoque fino a la cal convencional, logrando mayor rapidez de ejecución y economía de obra.',
      preparacion:'El material deberá ser aplicado sobre soportes secos libres de polvo, gratitud o suciedad que pudieran perjudicar en su adhesión por absorción: Primer Paso: Preparar la superficie con la primera mano, con una capa muy fina utilizando llana para sellar y emparejar todas las imperfecciones y oquedades existentes en el revoque grueso. Segundo Paso: una vez lista la primera mano, proceder a emparejar con capa fina corrigiendo todas las imperfecciones. Tercer paso: En este paso se debe lograr la terminación deseada, utilizando el revoque al yeso de consistencia fluida, utilizando la llana con movimientos ascendentes y circulares. ', 
      aplicacion:'',
      proceso:'',
      durabilidad:'',
      tiempo_secado:'',
      presentacion:'',
      rendimiento:'Por bolsa: 20 kg: 10 m2',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'60/90 min.',
      color:'Blanco',
      consumo:'',
      vida:'',
      recomendacion:''
    },
    { 
      id:6,
      nombre:'Stuko', 
      descrip:'Es una argamasa elaborada con "Cal aérea Hidratada“, cemento portland, arenas silíceas clasificadas y aditivos de proceso tipo polímeros, retenedores de agua y agentes hidrófobos; los cuales otorgan al producto mejoradas propiedades técnicas y óptimas condiciones de trabajabilidad. Su balanceada dosificación hace de este material un producto totalmente uniforme con excelentes características físico mecánicas y químicas. Su composición hace del producto un material versátil con gran poder de adherencia a diferentes tipos de soporte, con bajo coeficiente de absorción de agua y con buenas propiedades de curado inicial y final. ',
      preparacion:'Las mezclas deberán ser preparadas con agua limpia, pudiéndose mezclar en forma mecánica o manual hasta obtener una mezcla homogénea y sin grumos, ajustando la cantidad de agua según el criterio de los aplicadores. Una vez lista la mezcla, se recomienda dejar reposar 15 minutos para permitir una mejor hidratación.',
      aplicacion:'',
      proceso:'',
      durabilidad:'',
      tiempo_secado:'',
      presentacion:'Bolsa 30kg.',
      rendimiento:'Este factor siempre dependerá de las condiciones de terminación del revoque grueso o soporte de aplicación. Si la superficie es muy irregular, el rendimiento por m2 del material será menor debido a que requerirá un espesor mayor para lograr el efecto deseado',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'',
      color:'',
      consumo:'De 4 a 5kg/m2',
      vida:'Seis (6) meses a partir de la fecha de empaque.',
      recomendacion:''
    },
    { 
      id:7,
      nombre:'Pastina impermeable', 
      descrip:'Es una Pastina ideal para el tomado de juntas de revestimientos de cerámica convencional, mosaicos cementícios bi-capa y mono-capas, son morteros con cualidades de trabajabilidad normal debido a que los aditivos utilizados en su fabricación otorgan al producto, óptima fluidez e hidrorepelencia.',
      preparacion:'Utilice 1 parte de agua limpia y 3 partes de pastina, incorpore de manera suave el polvo al agua, mezcle enérgicamente, o utilice un batidor eléctrico, hasta obtener una pasta homogénea. Extender sobre las juntas con espátula o llana de caucho con movimientos diagona¬les y presionando la pastina sobre la junta. Finalice el trabajo de limpieza, con una esponja húmeda, verificando antes que la pastina se encuentre dura en la junta de aplicación. ',
      aplicacion:'',
      proceso:'',
      durabilidad:'',
      tiempo_secado:'',
      presentacion:'Paquetes de 5 bolsas de 1 kg.',
      rendimiento:'Las pastinas utilizadas en revestimientos de cerámica convencional tienen un rendi¬miento de aproximadamente ± 0,45 kg/m2 dependiendo el espesor de las piezas. Pero en piezas de gran espesor, tipo mosaicos cementícios, puede llegar a rendimien¬tos de ± 1 kg/m2. ',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'',
      color:'',
      consumo:'',
      vida:'Seis (6) meses a partir de la fecha de empaque.',
      recomendacion:'Limpiar bien antes del tomado de junta, no aplicar en condiciones de humedad y frío o temperaturas meno¬res de 50º o mayores a 30°; no aplicar los días de heladas ni los días de fuertes vientos, ya que puede pro¬vocar una acelerada deshidratación del mortero provocando carbonatación y debilitamiento de las pastinas. Estas deberán estar perfectamente niveladas con el piso para prevenir que queden por debajo del nivel de la superficie del piso. De esta forma podemos evitar acumulamiento de tierra y suciedad en los canales. Conservar en un lugar seco, libre de contacto con la humedad. '
    },
    { 
      id:8,
      nombre:'Abacoat', 
      descrip:' Mortero cementício compuesto por agregados minerales seleccionados, aditivado con polímero. Utilizado generalmente como revoque en sistemas de construcción en seco y aislaciones térmicas; especialmente diseñado para sistemas EIFS, de muy buena adherencia e hidro repelencia. Apto para ser aplicado sobre paneles de poliestireno expandido, placas de yeso, bloques de hormigón celular en autoclave (HCCA), hormigón etc. Utilizado en sistemas de aislación térmica para adherir o fijar placas de poliestireno a soportes, o malla y base niveladora de revestimiento final. ',
      preparacion:'Utilizar recipiente limpio, agregar 1 parte agua para 4 partes del producto en polvo, agregar el polvo en forma de lluvia, mezclar en forma mecánica, logrando una pasta homogénea y sin grumos. No utilizar material con temperaturas inferiores a 5°C, o superior a 40°C. Utilizar recipientes y herramientas limpias. Precauciones Utilizar guantes, máscara y anteojos protectores. Mantener alejado del alcance de los niños. ',
      aplicacion:'Como base niveladora de revestimiento: Aplicar con llana sobre el soporte en un espesor de 2 a 3 mm, extender una malla de fibra de vidrio y aplicar finalmente otra capa con llana metálica hasta cubrir completamente la malla de fibra de vidrio. Como Adhesivo: Estirar sobre soporte y placa utilizando la parte plana de llana N° 10. Una vez estirado el material, pasar la parte dentada para dejar ranuradas las dos superficies, posicionar la placa y presionar de forma pareja. Como base en sistema EIFS: En EPS, aplicar una mano del material gris con llana lisa en espesor de 1 a 2 mm, dejar orear para colocar malla de fibra de vidrio, aplicar finalmente otra capa con llana metálica hasta cubrir completamente la malla de fibra de vidrio. ',
      proceso:'',
      durabilidad:'',
      tiempo_secado:'48 - 72 horas',
      presentacion:'Bolsa de 25 kg.',
      rendimiento:'Como Base niveladora rinde entre 2 a 4 kg/m2, dependiendo de las manos de aplicación y de las características de la superficie a revestir. En revoques gruesos o placas el rendimiento, aproximado, es de 1 a 1,5 Kg/m2 por mano. ',
      tiempo_abierto:'',
      tiempo_correccion:'',
      trabajabilidad:'60 minutos.',
      color:'',
      consumo:'',
      vida:'12 meses en envase cerrado, libre del contacto con la humedad o expuesto al sol.',
      recomendacion:''
     }
  ]
  
  constructor() { }

  getFicha(index:string):Ficha{
    return this.ficha_tecnica[index];
  }
}

//Defining the format of the class with an Interface
 export interface Ficha{
   id:number;
   nombre:string;
   descrip:string;
   preparacion:string;
   aplicacion:string,
   proceso:string;
   durabilidad:string;
   tiempo_secado:string;
   presentacion:string;
   rendimiento:string;
   tiempo_abierto:string,
   tiempo_correccion:string,
   trabajabilidad:string,
   color:string,
   consumo:String,
   vida:String,
   recomendacion:String

 }