class Board < ActiveRecord::Base

	validates :subject, :user_id, presence: true

	belongs_to (
		:user,
		class_name: "User",
		foreign_key: :user_id,
		primary_key: :id
	)

	has_many (
		:cards,
		class_name: "Card",
		foreign_key: :board_id,
		primary_key: :id
	)
end
