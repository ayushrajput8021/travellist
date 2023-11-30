import Stats from './Stats';
import PackingList from './PackingList';
import Form from './Form';
import Logo from './Logo';
import { useItem } from '../hooks/useItem';

export default function App() {
	// const [items, setItems] = useState([]);
	const [items,setItems]=useItem([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClearList() {
		const confirmed = window.confirm(
			'Are you sure you want to delete all item ?'
		);
		if (confirmed) setItems([]);
	}

	
	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}