import '../style/ItemListContainer.css'

function ItemListComtainer({ greeting }){
    return (
        <div className='item-list-container'>
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListComtainer;