function InventoryItem({ name, type, quantity, price })
{
	return (
		<div>
			<h2>
				{
					<li>
						{`${name} ${type}`} 
					</li>
				}
			</h2>
			{
			<>
					{ quantity  < 5 && (
						<Message> ⚠️ Low stock {quantity} Remained.</Message>
					)}
					{
						quantity * price > 1000 &&
						(<Message>💰 HIGH VALUE, Extra Caution ⚠️</Message>
					)}
			</>
				/* <!-- TODO: Render the low stock alert based on the quantity of the item. -->
			
			<!-- TODO: Render the high value alert based on the total value of the item. --> */
			
			}
		</div>
	);
}
