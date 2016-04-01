json.extract!( card, :subject, :board_id, :id )

  json.tasks do
    json.array!(card.tasks) do |task|
      json.partial!('api/tasks/task', task: task)
    end
	end
