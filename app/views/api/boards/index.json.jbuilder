json.array!(@boards) do |board|
	json.partial!('board', board: board, show_cards: false)
end
