# App Cifrado César

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

## Objetivo del producto

Satisfacer la necesidad del usuario mediante un producto web atractivo visualmente
y facil de utilizar para crear una experiencia amigable que materialice el deseo 
de comunicarse con privacidad y rapidéz.

## Definición del producto

Este producto web está implementado en JavaScript y HTML5, con algunos estilos de 
CSS y también con ayuda del framewoork Bootstrap para hacerlo reponsivo.

Consiste de 4 archivos:
1. index.htlm: Es mi archivo de marcado de texto donde se define la parte de estructura de mi página web.
2. index.js: Archivo que me ayuda a hacer la interacción de mi página web.
3. cipher.js: Achivo que almacena el codigo funcional encargado de hacer el cifrado y decifrado del texto.
4. style.css: Archivo que carga todos los estilos de mi pagina web.

### Fase 1

En la documentacion del proyecto se menciona que se realice un producto imaginando 
que _"Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando 
una fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto 
con amigos y familiares."_
Por supuesto que refiriendonos mayormente a un público joven, en _onda_, y al que le 
gusta organizar fiestas sorpresa, nos centramos en un cierto rango de edad que oscila 
entre los 14 - 25 años aproximadamente. Es natural que a los usuarios jóvenes debemos 
ofrecerles un producto novedoso que llame su atención; con colores llamativos y divertidos 
que no parezcan sacados de la época de los 80's; un producto que satisfaga su necesidad 
de una forma rápida y con una interfáz facil de utilizar, ya que recordemos que estamos 
en la época donde si una pagina no es funcional simplemente el usuario aprieta el boton 
"atrás" del navegador, ingresa en el buscador algunas palabras clave y ya tiene miles de 
resultados más en cola que esperan ser visitados, asi que no podemos darnos el lujo de 
que el usuario se aburra en nuestro sitio porque se le dificulta utilizarlo o simplemente 
_no sabe como utilizarlo_ y prefiere buscar otras opciones.

### Fase 2

Precisamente por todo lo anterior, en el proceso de **UX & UI** me he centrado en 
ofrecer un producto muy fácil de utilizar antes que todo lo demas; con colores bonitos 
pero a la vez frescos y divertidos para los usuarios adolescentes-jovenes; sin menús 
desplegables ni apartados donde tengan que manipular demasiado, ya que recordemos que 
a su edad una de las cosas mas importantes para ellos es comunicarse con sus amigos de 
forma rapida; sin botones de acciones adicionales o información irelevante, ya que aparte 
de que no les interesa, puede hacer el sitio mas sobrecargado con cosas innecesarias.
La interfáz es clara, asi que deberían poder utilizarla sin ningun problema, los botones 
y las cajas son lo suficientemente visibles y con informacion básica necesaria que les 
permite intuir facilmente para que sirve cada elemento de la aplicación.

## Implementación del producto

El producto ya implementado consiste de:
1. Un area de texto que contiene la introducción básica para que el usuario identifique 
rapidamente para que sirve la página, y otra area de instrucciones para que sepa como jugar.
2. Una caja de texto donde el usuario ingresa su texto a codificar o decodifiar.
3. Un selector que consta de números del 1 al 99 para que el usuario seleccione su número 
favorito (este número es la cantidad de posiciones que el texto se va a desplazar en el 
alfabeto, y dependerá de la acción que realize el usuario: 
 - codificar: el texto se moverá n posiciones hacia la derecha en el alfabeto.
 - decodificar: el texto se moverá n posiciones hacia la izquierda en el alfabeto. 
4. Botones de acción:
- Codificar: Localizado del lado izquierdo, consta de una función que almacena el texto 
ingresado en la caja, luego almacena el número de posiciones seleccionado, y finalmente 
ejecuta la acción de desplazar hacia la derecha letra por letra en el alfabeto el número 
de posiciones que se ha seleccionado.
- Decodificar: Localizado del lado derecho, consta de una función que almacena el texto 
ingresado en la caja, luego almacena el número de posiciones seleccionado, y finalmente 
ejecuta la acción de desplazar hacia la izquierda letra por letra en el alfabeto el número 
de posiciones que se ha seleccionado.
5. Una etiqueta de texto donde se desplegará el texto ya trabajado con la función que 
previamente seleccionó el usuario. 

**NOTAS:**
En el selector de número, decidí que fuera un _select_, ya que este tiene predefinido 
un valor de uno, y asi en caso de que el usuario se le olvidara ingresar un número no 
tronará el programa; cosa que si me ocurría con una caja de texto donde el usuario ingresaba 
manualmente un número, pero cuando por cualquier razón olvidaba ingresarlo y seleccionaba 
la opción de codificar/decodificar el texto... el programa simplemente no ejecutaba nada 
porque no se habia previamente ingresado un offset, asi que ahí ya tenía yo un problema :( .
En mi ultima etiqueta donde se deplega el texto, no es posible que el usuario escriba 
texto, esta etiqueta simplemente desplega resultados.

## Preguntas

* ¿quiénes son los principales usuarios de producto? 
Adolescentes-jóvenes
* ¿cuáles son los objetivos de estos usuarios en relación con el producto?
Pienso que su principal objetivo con respecto al producto es que les ofrezca una forma de
comunicación efectiva que les ayude a mantener la privacidad de su información para asi
poder comunicarse solamente con quien ellos decidan.
* ¿cómo crees que el producto que estás creando les está resolviendo sus problemas?
Ayudandoles a cifrar y decifrar mensajes con una clave de desplazamiento que ellos mismos
decidan y manteniendo la seguridad y privacidad de sus conversaciones.

## Extras. Testeo con mi familia

Yo personalmente me di cuenta que desde la definición del producto, que éste estaba indicado
para personas principalmente jóvenes, así que una vez que tuve la maquetación terminada
decidí implementarla inmediatamente, pero una vez que terminé de darle los estilos, decidí
probar el programa ya terminado con dos de mis hermanas, mi novio y mi mamá.
Los resultados fueron los siguientes:

Julieta Mejía, hermana, 11 años.
A ella le encantó, independientemente de la interfáz gráfica, no le importó si tenía
instrucciones porque ni siquiera las leyó, inmediatamente ella ingresó unas cuantas palabras
en la caja de texto y seleccionó un número que tampoco le importó porque solamente lo eligió
al azar, y cuando la aplicación le mostro su resultado obviamente eran palabras y letras
ilegibles que ella no estaba segura si realmente eran el resultado de su mensaje cifrado,
asi que copió el texto y lo pegó en la caja de texto, y ahora utilizó la opción de "decifrar"
y al arrojarle el resultado se emocionó mucho y me dijo "¡si sirve! ¡pasamela a mi celular!" :D
y sacó su celular para que le pasara la "aplicación" hasta que le dije que no se podía :( 

Ariana Mejía, hermana, 21 años.
Ella si observó mas los colores y me dijo "¡órale, esta chida!" :P
Despues de cifrar su nombre y despues decifrarlo me dijo que "estaría mas chido si se pudiera 
poner en el whatsApp :'D " jaja tal vez despues eso se pueda implementar como ella dice..
Pero despues me dio algunas observaciones en cuanto a los colores, que los que había yo
puesto estaban "medio feos" y ya despues tuve que buscar en internet mezclas de colores bonitas.

Dalila Gomez, mamá, 43 años.
Cuando le expliqué con manzanitas que hacía la aplicación no lo podía creer, y se imaginó 
que para hacer todo el proceso "ha de estar bien dificil" y despues de ponerse a jugar con
mis hermanas cifrando y decifrando palabras a ver si ellas "adivinaban que decía" como por 
aproximadamente 2 horas, ya le pregunté que qué le modificaría, añadiría o quitaría y me
dijo que nada, que "así esta bien".
Pero lo que noté con ella fue que en la segunda vez que intentó codificar, como es muy
despistada se le olvidaba ingresar el numero, solamente escribia el texto y le apretaba en
"codificar" y pues la aplicación no hacía nada, por eso fué que despues modifiqué el codigo
para poner un select y que tuviera predefinido un uno por defecto para que independientemente
de que se le olvidara seleccionar un número, aun así hiciera la codificación/decodificación.

A. Alejandro Enciso, novio, 28 años.
A él si le pareció funcional pero lo que primero me preguntó fue "¿Como le hiciste?" y ya
despues de explicarle me dió algunas recomendaciones en cuanto al tamaño de las cajas y los
botones para que se vieran "mas bonitos", como que estuvieran sombreados, un poquito mas 
grandes, y las cajas con efecto en 3D, y después de que me dijo eso empezé a buscar efectos
en internet hasta que encontré el que me recomendó. Y aparte de que le gustó me dijo que
"estaría bien que fuera una aplicación para ya asi no estar entrando al navegador y buscar
la pagina donde se va a alojar" y tambien para que asi ya cifrara todos sus mensajes y 
cuando yo agarrara su celular no leyera sus conversaciones :O tal vez despues le tome la palabra.

-Nancy Mejía Gómez
