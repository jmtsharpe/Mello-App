class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :subject, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
