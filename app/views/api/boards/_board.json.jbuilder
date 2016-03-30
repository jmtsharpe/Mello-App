json.extract!( board, :subject, :user_id, :id )

# if show_cards
#   json.cards do
#     json.array!(board.cards) do |card|
#       json.partial! 'cards/card'
#     end
#   end
# end
