export default function CardProd(props){
    return<>
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.titulo}</h5>
                    <p class="card-text">    Descricao{props.descricao}.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </>
}