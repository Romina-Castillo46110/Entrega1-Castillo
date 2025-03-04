import '../style/ItemListContainer.css'

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className='item-list-container'>
            <h2>{greeting}</h2>
        </div>
    )
}
