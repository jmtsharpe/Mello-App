json.extract!( user, :subject, :user_id, :id )

if show_boards
  json.boards do
    json.array!(user.boards) do |board|
      json.partial!('api/boards/board', board: board)
    end
  end
end
