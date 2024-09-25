import styled from "styled-components"


const MainCorpo = styled.main`
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    div{
        width: 30%;
        min-width: 250px;
        padding: 15px;
        flex-direction: column;
        align-items: center;
        border: 2px solid black;
        border-radius: 20px;
        box-shadow: 5px 5px 5px black;
        margin-bottom: 20px;
        text-align: center;

    }
    
    img{
        max-width: 100%;
    }
    
    h2,p,img{
        margin-bottom: 5px;
    }

    `

export default function Corpo(){
    const pizzas = [
        {foto:'pizza1.jpg',nome:'Napolitana', ingredientes:'Queijo,Tomate e Orégano', preco:'37'},
        {foto:'pizza2.jpg',nome:'Portuguesa', ingredientes:'Queijo,Tomate e Orégano', preco:'37'},
        {foto:'pizza3.jpg',nome:'Mussarela', ingredientes:'Queijo,Tomate e Orégano', preco:'37'},
        {foto:'pizza4.jpg',nome:'Aliche', ingredientes:'Queijo,Tomate e Orégano', preco:'37'},
        {foto:'pizza5.webp',nome:'Calabresa', ingredientes:'Queijo,Tomate e Orégano', preco:'37'},
        {foto:'pizza6.jpg',nome:'Brocólis', ingredientes:'Queijo,Tomate e Orégano', preco:'37'},
        
    ]
    
    return(
        <MainCorpo>
            {
                pizzas.map((p,i) =>(
                    <div className="" key={i}>
                        <h2>{p.nome}</h2>
                        <img src={p.foto} alt={p.nome} />
                        <p>{p.ingredientes}</p>
                        <p>{p.preco}</p>
                    </div>
                ))
            }
        </MainCorpo>
    )
}