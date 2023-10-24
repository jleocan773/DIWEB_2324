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