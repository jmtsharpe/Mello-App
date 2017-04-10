json.extract!( user, :username, :id )

if show_boards
	json.boards do
		json.array!(user.boards) do |board|
			son.partial!('api/boards/board', board: board, show_cards: false)
		end
	end
end
