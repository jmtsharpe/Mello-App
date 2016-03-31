json.array!(@cards) do |card|
  json.partial!('card', card: card)
end
