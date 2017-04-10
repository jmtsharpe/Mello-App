json.extract!( board, :subject, :user_id, :id )

if show_cards
	json.cards do
		json.array!(board.cards) do |card|
		json.partial!('api/cards/card', card: card)
		end
	end
end
