import { useState,useEffect } from "react"

export function useItem(initialState){
  const [items, setItems] = useState(function () {
		const item = JSON.parse(localStorage.getItem('list'));
		return item?item:initialState;
	});

  useEffect(
		function () {
			localStorage.setItem('list', JSON.stringify(items));
		},
		[items]
	);
  return [items,setItems];
}