
function CartItem({ item, updateQuantity }) {
  const { imageURL, name, price, quantity } = item;
  return (
    <div className="item">
      <img className="item__image" src={imageURL} alt={`Imagen ${name}`} />

      <div className="item__content">
        <p className="item__name">{name}</p>
        <p className="item__quantity">Cantidad:</p>
        <select
            className={`item__select-qty`}
            value={quantity}
            onChange={e => updateQuantity({
              quantity: Number(e.target.value),
              id: item.id
            })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <p className="item__price">${price} MXN</p>
        <p className="item__subtotal">Subtotal: <span className="item__subtotal-span">${price * quantity} MXN</span></p>
      </div>
    </div>
  )
}

export default CartItem;