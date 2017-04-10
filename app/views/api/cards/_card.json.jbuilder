json.extract!( card, :subject, :board_id, :id, :position )

json.tasks do
	json.array!(card.tasks) do |task|
		json.partial!('api/tasks/task', task: task)
	end
end
