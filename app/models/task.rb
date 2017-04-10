class Task < ActiveRecord::Base

	validates :subject, :card_id, presence: true

	belongs_to (
		:card,
		class_name: "Card",
		foreign_key: :card_id,
		primary_key: :id
	)

end
