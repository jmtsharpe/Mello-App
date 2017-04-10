class CreateCards < ActiveRecord::Migration
	def change
		create_table :cards do |t|
			t.string :subject, null: false
			t.integer :board_id, null: false

			t.timestamps null: false
		end
	end
end
