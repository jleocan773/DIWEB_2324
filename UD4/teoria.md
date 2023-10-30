Niveles de Especificidad

"*" Todo el Documento

"h1" (Nombre del elemento) Aplica a todos los elementos de ese tipo

"." Aplica a la clase especificada después (.content)

"#" Aplica a los elementos con ese id #noticias

"inline" Con el "style" dentro del elemento

h1, p , h4{
    Este estilo se aplica a todos esos elementos
}


🔥 div p {
    Este estilo se aplica los <p> dentro de <div>
} 

🔴 div>p {
    Este estilo se aplica los <p> dentro de <div>
} 


¿Sobre que elementos se aplicarían los estilos?


HTML
    Head
        Title
    Body
        Header
            H1,H2,H3,H4
    Main
        DIV
            P🔥 🔴
        DIV
            SPAN
                P🔥
            SPAN
                P🔥
    Footer
        P



Posicionamiento:
    position: absolute;
    position: relative;
    position: static; (por defecto)

    También podemos usar right,left,top,bottom para posicionar un elemento. Por ejemplo, left 0 indica que hay 0 píxeles a la izquierda, left 0 top 0 estaría en la esquina superior izquierda, right 0 bottom 0 estaría en la esquina inferior derecha.

    position relative hace que se mueva desde la posición en la que estaba sin eliminar ese espacio anterior. 
    position absolute hace que se mueva desde la posición en la que estaba eliminando ese espacio anterior. 